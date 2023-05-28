import React, { useRef } from "react"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import { Typography } from "@mui/material"
import HomeLay from "@/components/layout/HomeLayout"
import { collection } from "firebase/firestore"
import { useFirestore, useFirestoreCollection } from "reactfire"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import RatingModal from "./RatingModal"

const DevLift = (props) => {
  // set up query
  const colRef = collection(useFirestore(), "movies")
  const { status, data } = useFirestoreCollection(colRef)

  //ref
  const rateRef = useRef()

  return (
    <HomeLay>
      <RatingModal ref={rateRef} />
      <Typography variant="h4" gutterBottom>
        DevLift Real-time Leaderboard
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Distributor</TableCell>
              <TableCell align="right">Release Date</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">US Gross</TableCell>
              <TableCell align="right">Worldwide Gross</TableCell>
              <TableCell align="right">IMDB Rating</TableCell>
              <TableCell align="right">IMDB Votes</TableCell>
              <TableCell align="right">Rate Here</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.docs &&
              data?.docs
                .sort(
                  //sort by average rating
                  (a, b) =>
                    Object.values(b?._document?.data?.value?.mapValue?.fields["IMDB Rating"])[0] /
                      Object.values(b?._document?.data?.value?.mapValue?.fields["IMDB Votes"])[0] -
                    Object.values(a?._document?.data?.value?.mapValue?.fields["IMDB Rating"])[0] /
                      Object.values(a?._document?.data?.value?.mapValue?.fields["IMDB Votes"])[0]
                )
                .map((row) => (
                  <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row?._document?.data?.value?.mapValue?.fields["Distributor"]["stringValue"]}
                    </TableCell>
                    <TableCell align="right">{row?._document?.data?.value?.mapValue?.fields["Release Date"]["stringValue"]}</TableCell>
                    <TableCell align="right">{row?._document?.data?.value?.mapValue?.fields["Title"]["stringValue"]}</TableCell>
                    <TableCell align="right">{row?._document?.data?.value?.mapValue?.fields["US Gross"]["integerValue"]}</TableCell>
                    <TableCell align="right">{row?._document?.data?.value?.mapValue?.fields["Worldwide Gross"]["integerValue"]}</TableCell>
                    <TableCell align="right">
                      {(
                        Object.values(row?._document?.data?.value?.mapValue?.fields["IMDB Rating"])[0] /
                        Object.values(row?._document?.data?.value?.mapValue?.fields["IMDB Votes"])[0]
                      ).toFixed(1)}
                    </TableCell>
                    <TableCell align="right">{Object.values(row?._document?.data?.value?.mapValue?.fields["IMDB Votes"])[0]}</TableCell>
                    <TableCell align="right">
                      <ThumbUpIcon onClick={() => rateRef.current.handleClickOpen(row)} />
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </HomeLay>
  )
}

export default DevLift
