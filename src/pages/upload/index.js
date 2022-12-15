import React, { useState, useRef, useEffect, memo } from "react"
import { useDropzone } from "react-dropzone"
import HomeLayout from "@/components/layout/HomeLayout"

export default function Upload(props) {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      acceptedFiles = [...acceptedFiles, ...files] //allow to upload one by one
      setFiles(acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })))
    },
  })

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [])

  const handleSubmit = async () => {
    console.log(files)
  }

  return (
    <HomeLayout>
      <a href="https://react-dropzone.js.org" target="_blank">
        <strong>documentation link:&nbsp; &nbsp;&nbsp;&nbsp;</strong>
        https://react-dropzone.js.org/
      </a>
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p className="my-2  w-1/2 border border-dashed border-black rounded-md p-2">Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside>
          {files &&
            files.map((file) => (
              <div className="inline-flex rounded-md border  mb-2 mr-2 w-20 h-20 p-1 " key={file.name}>
                <div className="flex min-w-0 overflow-hidden">
                  <img
                    src={file.preview}
                    // Revoke data uri after image is loaded
                    onLoad={() => {
                      URL.revokeObjectURL(file.preview)
                    }}
                  />
                </div>
              </div>
            ))}
        </aside>
      </section>
      <button onClick={handleSubmit}>submit</button>
    </HomeLayout>
  )
}
