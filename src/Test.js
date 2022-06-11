import React, { useState, Fragment } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Navbar from "./Navbar";
import {ClockIcon} from "@heroicons/react/solid/esm";
import {Dialog, Transition} from "@headlessui/react";
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

export default function Sample() {
  const [file, setFile] = useState('./sample.pdf');
  const [numPages, setNumPages] = useState(null);
  const [isOpen,setOpen] = useState(false)

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
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
                className="text-lg font-medium leading-6 text-gray-900"
              >
                You got <b>66%</b>
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent
                  you an email with all of the details of your order.
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="float-right inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={() => {
                    setOpen(false)
                  }}
                >
                  Got it, thanks!
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>

  <Navbar />
<div className={"flex"}>


  <div className={"flex flex-col items-center"} style={{flex: "75%", height: "90vh", overflow: "scroll"}}>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page className={"w-full"} key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>

  <div className={"flex flex-col"} style={{flex: "25%", borderLeft: "1px solid lightgrey", height: "93vh"}}>

    {/*  sidebar questions */}

    <div className={"flex"} style={{flex: "10%", borderLeft: "1px solid lightgrey"}}>
      {/*  timer */}

      <h1 className={"m-auto mt-6"}><ClockIcon style={{margin: "auto"}} height={60} /> Timer: <b>24h 10m 5s</b></h1>

    </div>

    <div className={"flex flex-col p-6"} style={{flex: "90%", borderLeft: "1px solid lightgrey"}}>
      {/* questions  */}
      <div className={"flex-1"}>
        <label htmlFor="email" className="block mb-2 text-base font-medium">Question 1)</label>
        <input type="text"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Type answer here..." required />
      </div>
      <div className={"flex-1"}>
        <label htmlFor="email" className="block mb-2 text-base font-medium">Question 2)</label>
        <input type="text"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Type answer here..." required />
      </div>
      <div className={"flex-1"}>
        <label htmlFor="email" className="block mb-2 text-base font-medium">Question 3)</label>
        <input type="text"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Type answer here..." required />
      </div>
      <button
        onClick={() => {
          setOpen(true)
        }}
        type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        Submit responses
      </button>
    </div>

  </div>

</div>
</>
  );
}