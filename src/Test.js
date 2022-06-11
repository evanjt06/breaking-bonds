import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
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

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
<div className={"flex"}>

    <div className={"flex justify-center"} style={{flex: "75%"}}>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page className={"w-full"} key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>

  <div className={"flex"} style={{flex: "25%", borderLeft: "2px solid lightgrey"}}>
  </div>

</div>
  );
}