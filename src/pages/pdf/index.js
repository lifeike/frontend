import React, { useState } from "react"
import { Document, Page } from "react-pdf"
import HomeLayout from "@/components/layout/HomeLayout"

function Pdf() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <HomeLayout>
      <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </HomeLayout>
  )
}

export default Pdf
