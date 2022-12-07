import React, { useState, useRef, useEffect, memo } from "react"
import * as actionCreators from "../../store/actionCreators/movie"
import { connect } from "react-redux"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

const MovieList = (props) => {
  const [data, setData] = useState([])
  const [selectedUser, setSelectedUser] = useState()

  useEffect(() => {
    props.getMovieAction()
  }, [])

  const selectUser = async (user) => {
    props.selectUserAction(user)
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Director</TableCell>
              <TableCell align="center">IMDB Votes</TableCell>
              <TableCell align="center">Release Date</TableCell>
              <TableCell align="left">Source</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.movieList &&
              props.movieList.map((row, index) => (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="center">{row.Title}</TableCell>
                  <TableCell align="center">{row.last_name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.gender}</TableCell>
                  <TableCell align="center">{row.ip_address}</TableCell>
                  <TableCell align="left">
                    <button onClick={() => selectUser(row)}>
                      <EditIcon />
                    </button>
                    &nbsp; &nbsp; &nbsp;
                    <button onClick={() => selectUser(row)}>
                      <DeleteIcon />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

// export default Test
export default connect((state) => state.movie, actionCreators)(MovieList)
