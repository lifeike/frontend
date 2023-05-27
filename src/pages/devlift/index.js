import React, { useState, useRef, useEffect, memo } from "react"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import HomeLay from "@/components/layout/HomeLayout"
import { doc, getFirestore, collection, getDoc, Firestore } from "firebase/firestore"
import { FirestoreProvider, useFirestoreDocData, useFirestore, useFirestoreCollection, useFirebaseApp } from "reactfire"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

const DevLift = (props) => {
  const fireStore = useFirestore()
  // set up query
  const docRef = doc(fireStore, "movies", "4eO9e19BjNPaUKeSMeY3")
  // const { status, data } = useFirestoreDocData(docRef)
  // console.log(data)
  const colRef = collection(fireStore, "movies")
  const { status, data } = useFirestoreCollection(colRef)
  console.log(data?.docs)

  return (
    <HomeLay>
      <h2>DevLift</h2>
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
                  <TableCell align="right">{row?._document?.data?.value?.mapValue?.fields["IMDB Rating"]["doubleValue"]}</TableCell>
                  <TableCell align="right">{row?._document?.data?.value?.mapValue?.fields["IMDB Votes"]["integerValue"]}</TableCell>
                  <TableCell align="right">
                    <ThumbUpIcon />
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
