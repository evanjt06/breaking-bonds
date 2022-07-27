import React, {useState, Fragment, useRef, useMemo, useCallback} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Navbar from "./Navbar";
import {ClockIcon} from "@heroicons/react/solid/esm";
import {Dialog, Transition} from "@headlessui/react";
import jwtDecode from "jwt-decode";
import {useNavigate} from "react-router";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import axios from 'axios'
import Spinner from "react-svg-spinner";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

export default function Sample() {
  const [file, setFile] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [isOpen,setOpen] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  const response1Ref = useRef()
  const response2Ref = useRef()
  const response3Ref = useRef()

  const [isTimeUp, setIsTimeUp] = useState(false)

  const [userResponse1, setUserResponse1] = useState(false)
  const [userResponse2, setUserResponse2] = useState(false)
  const [userResponse3, setUserResponse3] = useState(false)

  const [percent, setPercent] = useState("")

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  useEffect(() => {
    if (localStorage.getItem("jwt") === null) {
      return navigate("/login")
    } else {
      const token = localStorage.getItem("jwt")
      try {
        const parsed = jwtDecode(token)
      } catch (e) {
        // invalid token, so remove it
        localStorage.removeItem("jwt")

        return navigate("/login")
      }
    }
  }, [localStorage])

  useEffect(() => {

    let myTimer;

    axios.get("/auth/quiz/" + location.state.packet, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    })
      .then(res => res.data)
      .then(json => {
        const info = json.quiz

        setFile(info.PDFLink)

        const x = new Date(info.Timer).toISOString().slice(14,19).split(":")
        const xx = parseInt(x[0])
        const xxx = parseInt(x[1])

        function clock() {
          myTimer = setInterval(myClock, 1000);
          let c = xx * 60 + xxx; //Initially set to 1 hour


          function myClock() {
            --c
            let seconds = c % 60; // Seconds that cannot be written in minutes
            let minutes = (c - seconds) / 60; // Gives the seconds that COULD be given in minutes

            document.getElementById("timer").innerHTML = ((minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds))
            if (c === 0) {
              clearInterval(myTimer);

              setIsTimeUp(true)
            }
          }
        }

        clock();

      })

    return () => {
      clearInterval(myTimer);
    }
  }, [])

  async function submitResponses(number) {

    const fd = new FormData();
    fd.append("Response1", response1Ref.current.value)
    fd.append("Response2", response2Ref.current.value)
    fd.append("Response3", response3Ref.current.value)
    fd.append("ElapsedTime", "2006-01-02 15:04:05")

    const response = await axios.post("/auth/submitQuiz/" + location.state.packet, fd, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    })
    const data = await response.data
    const {percentage, response1, response2, response3} = data

    setPercent(percentage)

    setUserResponse1(response1)
    setUserResponse2(response2)
    setUserResponse3(response3)

    setOpen(true)


  }

  return (
<>
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={() => {
      setOpen(false)
    }}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-xl font-medium leading-6 text-gray-900"
              >
                You got <b>{percent}%</b>
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-lg text-gray-500 m-5">
                  Question 1) <span style={{backgroundColor: userResponse1 ? "lightgreen" : "#f94336", padding: 10, borderRadius: 10}}>{response1Ref?.current?.value} {userResponse1 ? " (Correct)" : " (Incorrect)"}</span>
                </p>
                <p className="text-lg text-gray-500 m-5">
                  Question 2) <span style={{backgroundColor: userResponse2 ? "lightgreen" : "#f94336", padding: 10, borderRadius: 10}}>{response2Ref?.current?.value} {userResponse2 ? " (Correct)" : " (Incorrect)"}</span>
                </p>
                <p className="text-lg text-gray-500 m-5">
                  Question 3) <span style={{backgroundColor: userResponse3 ? "lightgreen" : "#f94336", padding: 10, borderRadius: 10}}>{response3Ref?.current?.value} {userResponse3 ? " (Correct)" : " (Incorrect)"}</span>
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="float-right inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={() => {
                    setOpen(false)
                    window.location.href = "/"
                  }}
                >
                  Ok
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>

  <Navbar />
    <div id={"test-box-container"} className={"flex"}>


        <div id={"test-box-pdf"} className={"flex flex-col items-center"}>
            <Document
              file={{url: file}}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
              loading={<Spinner size={90} thickness={3} gap={0.5} />}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>

  <div id={"test-box"} className={"flex flex-col"} style={{flex: "25%", borderLeft: "1px solid lightgrey", height: "93vh"}}>

    {/*  sidebar questions */}

    <div className={"flex flex-col"} style={{flex: "10%", borderLeft: "1px solid lightgrey"}}>
      {/*  timer */}

      <h1 className={"m-auto mt-6"}><ClockIcon style={{margin: "auto"}} height={60} /> Timer: <b id={"timer"}></b> </h1>
      {isTimeUp === true && <h1 className={"m-auto bg-red-300 p-2 mt-2 rounded-xl"}>TIME IS UP!</h1>}
    </div>

    <div className={"flex flex-col p-6"} style={{flex: "90%", borderLeft: "1px solid lightgrey"}}>
      {/* questions  */}
      <div className={"mb-12"}>
        <label htmlFor="email" className="block mb-2 text-base font-medium">Question 1)</label>
        <input type="text"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Type answer here..." required
               ref={response1Ref}
               onChange={(e) => {
                 response1Ref.current.value = e.target.value
               }}
        />
      </div>
      <div className={"mb-12"}>
        <label htmlFor="email" className="block mb-2 text-base font-medium">Question 2)</label>
        <input type="text"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Type answer here..." required
               ref={response2Ref}
               onChange={(e) => {
                 response2Ref.current.value = e.target.value
               }}
        />
      </div>
      <div className={"mb-12"}>
        <label htmlFor="email" className="block mb-2 text-base font-medium">Question 3)</label>
        <input type="text"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Type answer here..." required
               ref={response3Ref}
               onChange={(e) => {
                 response3Ref.current.value = e.target.value
               }}
        />
      </div>
      <button
        onClick={() => {

          submitResponses()
        }}
        type="button"
        className="text-white bg-neutral-900 hover:bg-neutral-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:focus:ring-gray-700 dark:border-gray-700">
        Submit responses
      </button>
    </div>

  </div>

</div>
</>
  );
}