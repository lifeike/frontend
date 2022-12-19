import React, { useState } from "react"
//For example, if you want to use React-PDF with Webpack 5, instead of writing:
// import { Document, Page } from "react-pdf"
//write:
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5"

import HomeLayout from "@/components/layout/HomeLayout"

function Pdf() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <HomeLayout>
      <Document file={{ url: "https://d1.awsstatic.com/whitepapers/aws-overview.pdf" }} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </HomeLayout>
  )
}

export default Pdf
