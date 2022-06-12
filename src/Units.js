import Navbar from "./Navbar";
import React from "react";
import {BeakerIcon} from "@heroicons/react/solid/esm";
import {useNavigate} from "react-router";

export default function Units() {

  const navigate = useNavigate();

  return (
      <>

        <Navbar />
        {/*copy albert io style*/}

        <div className={"text-center"}>
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

        <div className={"flex flex-col w-7/12 m-auto h-screen"}>

            <div className={"w-full flex flex-col rounded-lg mb-20"} style={{border: "1px solid lightgrey"}}>

                  <div className={"flex p-10"}>
                    <div className="flex -space-x-1 overflow-hidden mr-10">
                      <img className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
                           src="https://collegeboard.clickhelp.co/resources/Storage/pre-ap-coordinator-manual-2021-22/Pre-AP%20Chemistry.png"
                           alt="" />
                    </div>
                    <div className={"flex flex-col flex-1"}>
                      <div className={"text-lg font-bold mb-4"}>
                        The Global Tapestry
                      </div>
                      <div style={{color: "gray"}}>
                        Spanning the period 200-1450, this theme covers the creation, development, and decline of states across the world. Learn how power was configured and consolidated across the world, from the imperial bureaucracy of the Chinese dynasties to the intellectual innovations of the Muslim world to the diverse city-states of the Americas.
                      </div>
                    </div>
                  </div>

              <div className={"flex flex-col"}>
                <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}
                onClick={() => {
                  navigate("/test")
                }}
                >
                  <span className={"font-bold mr"}>  2.1 | The Silk Roads
                    <span
                    className="bg-green-100 text-green-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Easy</span>
                  </span>
                  <span className={"font-bold"}>  Not started  </span>
                </div>
                <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}>
                  <span className={"font-bold"}>  2.1 | The Silk Roads
                  <span
                    className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Medium</span>
                  </span>
                  <span className={"font-bold"}>  Not started  </span>
                </div>
                <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}>
                  <span className={"font-bold"}>  2.1 | The Silk Roads
                  <span
                    className="bg-red-100 text-red-800 text-xs font-semibold mr-2  ml-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Difficult</span>

                  </span>
                  <span className={"font-bold"}>  Not started  </span>
                </div>
              </div>
            </div>

          <div className={"w-full flex flex-col rounded-lg mb-20"} style={{border: "1px solid lightgrey"}}>

            <div className={"flex p-10"}>
              <div className="flex -space-x-1 overflow-hidden mr-10">
                <img className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
                     src="https://collegeboard.clickhelp.co/resources/Storage/pre-ap-coordinator-manual-2021-22/Pre-AP%20Chemistry.png"
                     alt="" />
              </div>
              <div className={"flex flex-col flex-1"}>
                <div className={"text-lg font-bold mb-4"}>
                  The Global Tapestry
                </div>
                <div style={{color: "gray"}}>
                  Spanning the period 200-1450, this theme covers the creation, development, and decline of states across the world. Learn how power was configured and consolidated across the world, from the imperial bureaucracy of the Chinese dynasties to the intellectual innovations of the Muslim world to the diverse city-states of the Americas.
                </div>
              </div>
            </div>

            <div className={"flex flex-col"}>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}>
                  <span className={"font-bold mr"}>  2.1 | The Silk Roads
                    <span
                      className="bg-green-100 text-green-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Easy</span>
                  </span>
                <span className={"font-bold"}>  Not started  </span>
              </div>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}>
                  <span className={"font-bold"}>  2.1 | The Silk Roads
                  <span
                    className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Medium</span>
                  </span>
                <span className={"font-bold"}>  Not started  </span>
              </div>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}>
                  <span className={"font-bold"}>  2.1 | The Silk Roads
                  <span
                    className="bg-red-100 text-red-800 text-xs font-semibold mr-2  ml-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Difficult</span>

                  </span>
                <span className={"font-bold"}>  Not started  </span>
              </div>
            </div>
          </div>


          <div className={"w-full flex flex-col rounded-lg mb-20"} style={{border: "1px solid lightgrey"}}>

            <div className={"flex p-10"}>
              <div className="flex -space-x-1 overflow-hidden mr-10">
                <img className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
                     src="https://collegeboard.clickhelp.co/resources/Storage/pre-ap-coordinator-manual-2021-22/Pre-AP%20Chemistry.png"
                     alt="" />
              </div>
              <div className={"flex flex-col flex-1"}>
                <div className={"text-lg font-bold mb-4"}>
                  The Global Tapestry
                </div>
                <div style={{color: "gray"}}>
                  Spanning the period 200-1450, this theme covers the creation, development, and decline of states across the world. Learn how power was configured and consolidated across the world, from the imperial bureaucracy of the Chinese dynasties to the intellectual innovations of the Muslim world to the diverse city-states of the Americas.
                </div>
              </div>
            </div>

            <div className={"flex flex-col"}>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}>
                  <span className={"font-bold mr"}>  2.1 | The Silk Roads
                    <span
                      className="bg-green-100 text-green-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Easy</span>
                  </span>
                <span className={"font-bold"}>  Not started  </span>
              </div>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}>
                  <span className={"font-bold"}>  2.1 | The Silk Roads
                  <span
                    className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Medium</span>
                  </span>
                <span className={"font-bold"}>  Not started  </span>
              </div>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}>
                  <span className={"font-bold"}>  2.1 | The Silk Roads
                  <span
                    className="bg-red-100 text-red-800 text-xs font-semibold mr-2  ml-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Difficult</span>

                  </span>
                <span className={"font-bold"}>  Not started  </span>
              </div>
            </div>
          </div>


          <div className={"w-full flex flex-col rounded-lg mb-20"} style={{border: "1px solid lightgrey"}}>

            <div className={"flex p-10"}>
              <div className="flex -space-x-1 overflow-hidden mr-10">
                <img className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
                     src="https://collegeboard.clickhelp.co/resources/Storage/pre-ap-coordinator-manual-2021-22/Pre-AP%20Chemistry.png"
                     alt="" />
              </div>
              <div className={"flex flex-col flex-1"}>
                <div className={"text-lg font-bold mb-4"}>
                  The Global Tapestry
                </div>
                <div style={{color: "gray"}}>
                  Spanning the period 200-1450, this theme covers the creation, development, and decline of states across the world. Learn how power was configured and consolidated across the world, from the imperial bureaucracy of the Chinese dynasties to the intellectual innovations of the Muslim world to the diverse city-states of the Americas.
                </div>
              </div>
            </div>

            <div className={"flex flex-col"}>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}>
                  <span className={"font-bold mr"}>  2.1 | The Silk Roads
                    <span
                      className="bg-green-100 text-green-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Easy</span>
                  </span>
                <span className={"font-bold"}>  Not started  </span>
              </div>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}>
                  <span className={"font-bold"}>  2.1 | The Silk Roads
                  <span
                    className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Medium</span>
                  </span>
                <span className={"font-bold"}>  Not started  </span>
              </div>
              <div className={"w-full flex justify-between rounded-lg  p-6 hover:cursor-pointer hover:bg-slate-100"} style={{borderTop: "1px solid lightgrey"}}>
                  <span className={"font-bold"}>  2.1 | The Silk Roads
                  <span
                    className="bg-red-100 text-red-800 text-xs font-semibold mr-2  ml-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Difficult</span>

                  </span>
                <span className={"font-bold"}>  Not started  </span>
              </div>
            </div>
          </div>


        </div>

        </>
  )

}