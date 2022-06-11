import React, { useState, useEffect, useRef } from "react";

export default function Sidebar() {

  return (
    <div className="flex w-full" style={{height: "100vh", border: "10px solid black"}}>

      <div className={"flex flex-col"} style={{flex: "75%", border: "1px solid black"}}>

      {/*  pdf */}

      </div>

      <div className={"flex flex-col"} style={{flex: "25%", border: "1px solid black"}}>

      {/*  sidebar questions */}

      <div className={"flex"} style={{flex: "10%", border: "1px solid black"}}>
      {/*  timer */}

        <h1 className={"m-auto"}>Timer: 24:39:59</h1>

      </div>

        <div className={"flex flex-col"} style={{flex: "90%", border: "1px solid black"}}>
        {/* questions  */}
          <div className={"flex-1"}>
            1)
          </div>
          <div className={"flex-1"}>
            2)
          </div>
          <div className={"flex-1"}>
            3)
          </div>
        </div>

      </div>

    </div>
  );
}
