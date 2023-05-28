import React, { useState, useRef, useEffect, memo } from "react"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import { Typography } from "@mui/material"
import HomeLay from "@/components/layout/HomeLayout"
import { doc, getFirestore, collection, getDoc, updateDoc, Firestore } from "firebase/firestore"
import { FirestoreProvider, useFirestoreDocData, useFirestore, useFirestoreCollection, useFirebaseApp } from "reactfire"
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
  console.log(data?.docs)

  //ref
  const rateRef = useRef()

  return (
    <HomeLay>
      <RatingModal ref={rateRef} />
      <Typography variant="h4" gutterBottom>
        DevLift Real-time Rating
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
              data?.docs.map((row, index) => (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row?._document?.data?.value?.mapValue?.fields["Distributor"]["stringValue"]}
                  </TableCell>
                  <TableCell align="right">{row?._document?.data?.value?.mapValue?.fields["Release Date"]["stringValue"]}</TableCell>
                  <TableCell align="right">{row?._document?.data?.value?.mapValue?.fields["Title"]["stringValue"]}</TableCell>
                  <TableCell align="right">{row?._document?.data?.value?.mapValue?.fields["US Gross"]["integerValue"]}</TableCell>
                  <TableCell align="right">{row?._document?.data?.value?.mapValue?.fields["Worldwide Gross"]["integerValue"]}</TableCell>
                  <TableCell align="right">{Object.values(row?._document?.data?.value?.mapValue?.fields["IMDB Rating"])[0]}</TableCell>
                  <TableCell align="right">{Object.values(row?._document?.data?.value?.mapValue?.fields["IMDB Votes"])[0]}</TableCell>
                  <TableCell align="right">
                    <ThumbUpIcon
                      onClick={() =>
                        rateRef.current.handleClickOpen(
                          row.id,
                          row?._document?.data?.value?.mapValue?.fields["Title"]["stringValue"],
                          row?._document?.data?.value?.mapValue?.fields["IMDB Rating"]["doubleValue"],
                          row?._document?.data?.value?.mapValue?.fields["IMDB Votes"]["integerValue"]
                        )
                      }
                    />
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
