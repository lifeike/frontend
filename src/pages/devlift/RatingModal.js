import React, { useState, useImperativeHandle } from "react"
import { Typography } from "@mui/material"
import Rating from "@mui/material/Rating"
import Button from "@mui/material/Button"
import { toast } from "react-hot-toast"
import { doc, updateDoc } from "firebase/firestore"
import { useFirestore } from "reactfire"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"

const CreateRoleModal = React.forwardRef(function AlertDialog(props, ref) {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = useState("")
  const [rating, setRating] = useState()
  const [votes, setVotes] = useState()

  const fireStore = useFirestore()
  const [docRef, setDocRef] = useState(null)

  const handleClickOpen = (row) => {
    setDocRef(doc(fireStore, "movies", row.id))
    setName(row?._document?.data?.value?.mapValue?.fields["Title"]["stringValue"])
    setRating(Object.values(row?._document?.data?.value?.mapValue?.fields["IMDB Rating"])[0])
    setVotes(Object.values(row?._document?.data?.value?.mapValue?.fields["IMDB Votes"])[0])
    setOpen(true)
  }

  const handleClose = () => setOpen(false)
  useImperativeHandle(ref, () => ({
    handleClickOpen,
  }))

  const [value, setValue] = React.useState(0)
  const rate = async () => {
    updateDoc(docRef, {
      "IMDB Rating": parseFloat(rating) + parseFloat(value ? value : 0),
      "IMDB Votes": parseInt(votes) + 1,
    })
      .then((response) => {
        toast.success("Thanks for voting.")
      })
      .catch((error) => {
        console.log(error.message)
      })
    setValue(0)
    handleClose()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{name}</DialogTitle>
        <DialogContent>
          <Rating value={value} onChange={(event, newValue) => setValue(newValue)} name="half-rating" max={10} precision={0.5} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={rate} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
})

export default CreateRoleModal
