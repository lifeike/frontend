import React, { useState, useImperativeHandle } from "react"
import FormGroup from "@mui/material/FormGroup"
import { Typography } from "@mui/material"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Rating from "@mui/material/Rating"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { toast } from "react-hot-toast"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

const CreateRoleModal = React.forwardRef(function AlertDialog(props, ref) {
  const [open, setOpen] = React.useState(false)
  const [id, setId] = useState()
  const [name, setName] = useState("")

  const handleClickOpen = (id, movieTitle) => {
    setId(id)
    setName(movieTitle)
    setOpen(true)
  }
  const handleClose = () => setOpen(false)
  useImperativeHandle(ref, () => ({
    handleClickOpen,
  }))
  const [value, setValue] = React.useState(2)
  const rate = async () => {
    //
    handleClose()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Rate Movie"}</DialogTitle>
        <DialogContent>
          <div className="  flex gap-4">
            <Typography variant="button" display="block" gutterBottom>
              {name}
            </Typography>
            <div>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </div>
          </div>
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
