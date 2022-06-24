import Navbar from "./Navbar";
import React, {useState} from "react";
import {BeakerIcon} from "@heroicons/react/solid/esm";
import {useEffect} from "react";
import {useNavigate} from "react-router";
import jwtDecode from "jwt-decode"
import axios from 'axios'

function colorBackgroundChanger(x) {
  if (x === "0.0%") {
    return "bg-red-400"
  }
  if (x === "33.3%") {
    return "bg-yellow-400"
  }
  if (x === "66.7%") {
    return "bg-yellow-400"
  }
  if (x === "100.0%") {
    return "bg-green-400"
  }
  return ""
}

function textChanger(x) {
  if (x === "0.0%") {
    return "Learning | " + x
  }
  if (x === "33.3%") {
    return "Learning | " + x
  }
  if (x === "66.7%") {
    return "Passing | " + x
  }
  if (x === "100.0%") {
    return "Excelling | " + x
  }
  return "Not started"
}

export default function Units() {

  const navigate = useNavigate();

  const [arr,setArr] = useState([])

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
    axios.get("/auth/scores", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    })
      .then(v => v.data)
      .then(({results}) => {
        console.log(results)

        for (let i = 0; i < results.length; i++) {
          if (results[i] !== "Not started") {
            results[i] += "%"
          }
        }
        setArr(results)
      })
  }, [])

  return (
      <>

        <Navbar />
        {/*copy albert io style*/}

        <div className={"text-center"} id={"banner"}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#273036" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,245.3C640,235,800,181,960,170.7C1120,160,1280,192,1360,208L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
          <div
            className={"flex flex-col items-center justify-center absolute w-full text-white font-semibold text-3xl"}
            style={{top: "15%"}}
          >
            <BeakerIcon width={40} height={40} />

            <span className={"mt-4"}>
            Chemistry Practice Quizzes
              </span>
          </div>
        </div>

        <div id={"banner-ext"} className={"flex flex-col w-full md:w-7/12 m-auto h-screen"}>

            <div className={"w-full flex flex-col rounded-lg mb-20"} style={{border: "1px solid lightgrey"}}>

                  <div className={"flex md:p-10 p-4"}>
                    <div className="flex -space-x-1 overflow-hidden mr-10">
                      <img className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
                           src="https://collegeboard.clickhelp.co/resources/Storage/pre-ap-coordinator-manual-2021-22/Pre-AP%20Chemistry.png"
                           alt="" />
                    </div>
                    <div className={"flex flex-col flex-1"}>
                      <div className={"text-lg font-bold mb-4"}>
                        Unit 1
                      </div>
                      <div style={{color: "gray"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                    </div>
                  </div>

              <div className={"flex flex-col"}>
                <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                onClick={() => {
                  navigate("/test", {state: {packet: 1}})
                }}
                >
                  <span className={"font-bold mr"}> 1 | Excepteur sint
                    <span
                    className="bg-green-100 text-green-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Easy</span>
                  </span>
                  <span className={"font-bold pl-3 pr-3 " + colorBackgroundChanger(arr[0]) + " rounded-xl"}> {textChanger(arr[0])}  </span>
                </div>
                <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                     onClick={() => {
                       navigate("/test", {state: {packet: 2}})
                     }}
                >
                  <span className={"font-bold"}>  1 | Excepteur sint
                  <span
                    className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Medium</span>
                  </span>
                  <span className={"font-bold pl-3 pr-3 " + colorBackgroundChanger(arr[1]) + " rounded-xl"}>   {textChanger(arr[1])} </span>
                </div>
                <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                     onClick={() => {
                       navigate("/test", {state: {packet: 3}})
                     }}
                >
                  <span className={"font-bold"}>  1 | Excepteur sint
                  <span
                    className="bg-red-100 text-red-800 text-xs font-semibold mr-2  ml-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Difficult</span>

                  </span>
                  <span className={"font-bold pl-3 pr-3 " + colorBackgroundChanger(arr[2]) + " rounded-xl"}>  {textChanger(arr[2])}  </span>
                </div>
              </div>


            </div>




          <div className={"w-full flex flex-col rounded-lg mb-20"} style={{border: "1px solid lightgrey"}}>

            <div className={"flex md:p-10 p-4"}>
              <div className="flex -space-x-1 overflow-hidden mr-10">
                <img className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
                     src="https://collegeboard.clickhelp.co/resources/Storage/pre-ap-coordinator-manual-2021-22/Pre-AP%20Chemistry.png"
                     alt="" />
              </div>
              <div className={"flex flex-col flex-1"}>
                <div className={"text-lg font-bold mb-4"}>
                  Unit 2
                </div>
                <div style={{color: "gray"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>

            <div className={"flex flex-col"}>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                   onClick={() => {
                     navigate("/test", {state: {packet: 4}})
                   }}
              >
                  <span className={"font-bold mr"}> 1 | Excepteur sint
                    <span
                      className="bg-green-100 text-green-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Easy</span>
                  </span>
                <span className={"font-bold pl-3 pr-3 " + colorBackgroundChanger(arr[3]) + " rounded-xl"}>  {textChanger(arr[3])}  </span>
              </div>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                   onClick={() => {
                     navigate("/test", {state: {packet: 5}})
                   }}
              >
                  <span className={"font-bold"}>  1 | Excepteur sint
                  <span
                    className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Medium</span>
                  </span>
                <span className={"font-bold pl-3 pr-3 " + colorBackgroundChanger(arr[4]) + " rounded-xl"}>  {textChanger(arr[4])} </span>
              </div>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                   onClick={() => {
                     navigate("/test", {state: {packet: 6}})
                   }}
              >
                  <span className={"font-bold"}>  1 | Excepteur sint
                  <span
                    className="bg-red-100 text-red-800 text-xs font-semibold mr-2  ml-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Difficult</span>

                  </span>
                <span className={"font-bold pl-3 pr-3 " + colorBackgroundChanger(arr[5]) + " rounded-xl"}>  {textChanger(arr[5])} </span>
              </div>
            </div>


          </div>



          <div className={"w-full flex flex-col rounded-lg mb-20"} style={{border: "1px solid lightgrey"}}>

            <div className={"flex md:p-10 p-4"}>
              <div className="flex -space-x-1 overflow-hidden mr-10">
                <img className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
                     src="https://collegeboard.clickhelp.co/resources/Storage/pre-ap-coordinator-manual-2021-22/Pre-AP%20Chemistry.png"
                     alt="" />
              </div>
              <div className={"flex flex-col flex-1"}>
                <div className={"text-lg font-bold mb-4"}>
                  Unit 3
                </div>
                <div style={{color: "gray"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>

            <div className={"flex flex-col"}>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                   onClick={() => {
                     navigate("/test", {state: {packet: 7}})
                   }}
              >
                  <span className={"font-bold mr"}> 1 | Excepteur sint
                    <span
                      className="bg-green-100 text-green-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Easy</span>
                  </span>
                <span className={"font-bold pl-3 pr-3 " + colorBackgroundChanger(arr[6]) + " rounded-xl"}>  {textChanger(arr[6])} </span>
              </div>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                   onClick={() => {
                     navigate("/test", {state: {packet: 8}})
                   }}
              >
                  <span className={"font-bold"}>  1 | Excepteur sint
                  <span
                    className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Medium</span>
                  </span>
                <span className={"font-bold pl-3 pr-3 " + colorBackgroundChanger(arr[7]) + " rounded-xl"}>   {textChanger(arr[7])}  </span>
              </div>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                   onClick={() => {
                     navigate("/test", {state: {packet: 9}})
                   }}
              >
                  <span className={"font-bold"}>  1 | Excepteur sint
                  <span
                    className="bg-red-100 text-red-800 text-xs font-semibold mr-2  ml-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Difficult</span>

                  </span>
                <span className={"font-bold pl-3 pr-3 " + colorBackgroundChanger(arr[8]) + " rounded-xl"}>   {textChanger(arr[8])} </span>
              </div>
            </div>


          </div>



          <div className={"w-full flex flex-col rounded-lg mb-20"} style={{border: "1px solid lightgrey"}}>

            <div className={"flex md:p-10 p-4"}>
              <div className="flex -space-x-1 overflow-hidden mr-10">
                <img className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
                     src="https://collegeboard.clickhelp.co/resources/Storage/pre-ap-coordinator-manual-2021-22/Pre-AP%20Chemistry.png"
                     alt="" />
              </div>
              <div className={"flex flex-col flex-1"}>
                <div className={"text-lg font-bold mb-4"}>
                  Unit 4
                </div>
                <div style={{color: "gray"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>

            <div className={"flex flex-col"}>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                   onClick={() => {
                     navigate("/test", {state: {packet: 10}})
                   }}
              >
                  <span className={"font-bold mr"}> 1 | Excepteur sint
                    <span
                      className="bg-green-100 text-green-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Easy</span>
                  </span>
                <span className={"font-bold pl-3 pr-3 " + colorBackgroundChanger(arr[9]) + " rounded-xl"}>  {textChanger(arr[9])}  </span>
              </div>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                   onClick={() => {
                     navigate("/test", {state: {packet: 11}})
                   }}
              >
                  <span className={"font-bold"}>  1 | Excepteur sint
                  <span
                    className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Medium</span>
                  </span>
                <span className={"font-bold pl-3 pr-3 " + colorBackgroundChanger(arr[10]) + " rounded-xl"}>  {textChanger(arr[10])} </span>
              </div>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                   onClick={() => {
                     navigate("/test", {state: {packet: 12}})
                   }}
              >
                  <span className={"font-bold"}>  1 | Excepteur sint
                  <span
                    className="bg-red-100 text-red-800 text-xs font-semibold mr-2  ml-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Difficult</span>

                  </span>
                <span className={"font-bold pl-3 pr-3 " + colorBackgroundChanger(arr[11]) + " rounded-xl"}>  {textChanger(arr[11])}  </span>
              </div>
            </div>


          </div>



          <div className={"w-full flex flex-col rounded-lg mb-20"} style={{border: "1px solid lightgrey"}}>

            <div className={"flex md:p-10 p-4"}>
              <div className="flex -space-x-1 overflow-hidden mr-10">
                <img className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
                     src="https://collegeboard.clickhelp.co/resources/Storage/pre-ap-coordinator-manual-2021-22/Pre-AP%20Chemistry.png"
                     alt="" />
              </div>
              <div className={"flex flex-col flex-1"}>
                <div className={"text-lg font-bold mb-4"}>
                  Unit 5
                </div>
                <div style={{color: "gray"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>

            <div className={"flex flex-col"}>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                   onClick={() => {
                     navigate("/test", {state: {packet: 13}})
                   }}
              >
                  <span className={"font-bold mr"}> 1 | Excepteur sint
                    <span
                      className="bg-green-100 text-green-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Easy</span>
                  </span>
                <span className={"font-bold pl-3 pr-3 " + colorBackgroundChanger(arr[12]) + " rounded-xl"}>   {textChanger(arr[12])}  </span>
              </div>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                   onClick={() => {
                     navigate("/test", {state: {packet: 14}})
                   }}
              >
                  <span className={"font-bold"}>  1 | Excepteur sint
                  <span
                    className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Medium</span>
                  </span>
                <span className={"font-bold pl-3 pr-3 " + colorBackgroundChanger(arr[13]) + " rounded-xl"}> {textChanger(arr[13])}  </span>
              </div>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                   onClick={() => {
                     navigate("/test", {state: {packet: 15}})
                   }}
              >
                  <span className={"font-bold"}>  1 | Excepteur sint
                  <span
                    className="bg-red-100 text-red-800 text-xs font-semibold mr-2  ml-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Difficult</span>

                  </span>
                <span className={"font-bold pl-3 pr-3 " + colorBackgroundChanger(arr[14]) + " rounded-xl"}>   {textChanger(arr[14])}  </span>
              </div>
            </div>

          </div>

          <div style={{border: "1px solid white"}} />

        </div>

        </>
  )

}