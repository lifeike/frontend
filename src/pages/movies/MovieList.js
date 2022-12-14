import React, { useState, useRef, useEffect, memo } from "react"
import { useNavigate } from "react-router-dom"
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
import Typography from "@mui/material/Typography"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import { toast } from "react-toastify"

const MovieList = (props) => {
  const navigate = useNavigate()
  const [selectedUser, setSelectedUser] = useState()
  //load movies
  useEffect(() => {
    props.getMovie({ items_per_page: 10, page_number: 1 })
  }, [])

  //delete movie
  const handleDelete = async (id) => {
    await props.deleteMovie({ id }).then((res) => toast.success(res.message))
    await props.getMovie({ items_per_page: 10, page_number: 1 })
  }

  //pagination
  const [page, setPage] = React.useState(1)
  const handleChange = async (event, value) => {
    await props.getMovie({ items_per_page: 10, page_number: value })
    setPage(value)
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
              <TableCell align="center">Source</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.movieTable.movieList &&
              props.movieTable.movieList.map((row, index) => (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="center">{row.Title}</TableCell>
                  <TableCell align="center">{row["Creative Type"]}</TableCell>
                  <TableCell align="center">{row.Director}</TableCell>
                  <TableCell align="center">{row["IMDB Votes"]}</TableCell>
                  <TableCell align="center">{row["Release Date"]}</TableCell>
                  <TableCell align="center">{row.source}</TableCell>
                  <TableCell align="left">
                    <button onClick={() => navigate(`/edit-movie/${row._id}`)}>
                      <EditIcon />
                    </button>
                    &nbsp; &nbsp; &nbsp;
                    <button onClick={() => handleDelete(row._id)}>
                      <DeleteIcon />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <br></br>
      <div className="grid place-items-center">
        <Stack spacing={2}>
          <Pagination count={props.movieTable.totalPages && Math.round(+props.movieTable.totalPages)} page={page} onChange={handleChange} />
        </Stack>
      </div>
    </div>
  )
}

// export default Test
export default connect((state) => state.movie, actionCreators)(MovieList)
