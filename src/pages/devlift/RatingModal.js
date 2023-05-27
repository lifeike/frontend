import React, { useState, useImperativeHandle } from "react"
import { connect } from "react-redux"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
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
  const [canSeeHiddenFields, setCanSeeHiddenFields] = useState()

  const handleClickOpen = (id, name, canSeeHiddenFields) => {
    setId(id)
    setName(name)
    setCanSeeHiddenFields(canSeeHiddenFields)
    setOpen(true)
  }
  const handleClose = () => setOpen(false)
  useImperativeHandle(ref, () => ({
    handleClickOpen,
  }))

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Edit Role"}</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
            <TextField id="outlined-basic" onChange={(event) => setName(event.target.value)} value={name} variant="outlined" />
          </Box>
          <FormGroup>
            <FormControlLabel
              sx={{ m: 1, width: "25ch" }}
              control={<Checkbox checked={canSeeHiddenFields} onChange={() => setCanSeeHiddenFields(!canSeeHiddenFields)} />}
              label="Can see hidden fields."
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button color="cancel" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={editRole} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
})

export default connect(null, actions, null, { forwardRef: true })(CreateRoleModal)
