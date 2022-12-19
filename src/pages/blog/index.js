import React, { useState, useRef, useEffect, memo } from "react"
import HomeLayout from "@/components/layout/HomeLayout"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import Button from "@mui/material/Button"

const Blog = (props) => {
  const [value, setValue] = useState("")
  const submit = async () => {
    console.log(value)
  }

  return (
    <HomeLayout>
      <h2>Edit User Blog</h2>
      <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} formats={formats} />
      <Button onClick={submit} className="my-2" variant="contained">
        Contained
      </Button>

      <h2>Display User Blog</h2>
    </HomeLayout>
  )
}

export default Blog

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image"],
    ["clean"],
  ],
}
const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image"]
