import React, { useState, useRef, useEffect, memo } from "react"
import HomeLay from "@/components/layout/HomeLayout"
import { doc, getFirestore, collection, getDoc } from "firebase/firestore"
import { FirestoreProvider, useFirestoreDocData, useFirestore, useFirestoreCollection, useFirebaseApp } from "reactfire"

const DevLift = (props) => {
  // set up query
  const docRef = doc(useFirestore(), "movies", "4eO9e19BjNPaUKeSMeY3")
  // const { status, data } = useFirestoreDocData(docRef)
  // console.log(data)
  const colRef = collection(useFirestore(), "movies")
  const { status, data } = useFirestoreCollection(colRef)
  console.log(data.docs)

  // easily check the loading status
  if (status === "loading") {
    return <p>Fetching burrito flavor...</p>
  }

  return (
    <HomeLay>
      <h2>DevLift</h2>
    </HomeLay>
  )
}

export default DevLift
