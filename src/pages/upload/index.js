import React, { useState, useRef, useEffect, memo } from "react"
import { useDropzone } from "react-dropzone"
import { connect } from "react-redux"
import * as actionCreators from "@/store/actionCreators/upload"
import HomeLayout from "@/components/layout/HomeLayout"
import { toast } from "react-toastify"
import Button from "@mui/material/Button"

function Upload(props) {
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
    let formData = new FormData()
    formData.append("caption", "hello")
    formData.append("instagram", "www.feeco.com")
    formData.append("email", "lifeike@gmail.com")
    formData.append("name", "feeco")
    files.forEach((item) => {
      formData.append("uploaded-images", item)
    })
    props.uploadImage(formData).then((res) => toast.success("upload successfully."))
  }

  const [images, setImages] = useState([])
  const getAllUploadedImages = async () => {
    let imgArr = await props.getAllUploadedImages()
    setImages(imgArr)
  }

  return (
    <HomeLayout>
      <a href="https://react-dropzone.js.org" target="_blank">
        <strong>documentation link:&nbsp; &nbsp;&nbsp;&nbsp;</strong>
        https://react-dropzone.js.org/
      </a>
      <section className="container cursor-pointer">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p className="my-2  w-1/2 border border-dashed  rounded-md p-2">Drag 'n' drop some files here, or click to select files</p>
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
      <Button variant="contained" onClick={handleSubmit}>
        Submit{" "}
      </Button>

      <br></br>
      <br></br>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <br></br>
      <Button variant="contained" onClick={getAllUploadedImages}>
        Display all uploaded images
      </Button>
      {images.map((item, index) => {
        return <img key={index} className="w-40 h-40" src={item.location}></img>
      })}
    </HomeLayout>
  )
}

export default connect(null, actionCreators)(Upload)
