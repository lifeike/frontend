import React, { useState, useRef, useEffect, memo } from "react"
import HomeLay from "@/components/layout/HomeLayout"
import { doc, getFirestore } from "firebase/firestore"
import { FirestoreProvider, useFirestoreDocData, useFirestore, useFirestoreCollection, useFirebaseApp } from "reactfire"

const DevLift = (props) => {
  // set up query
  const burritoRef = doc(useFirestore(), "movies", "4eO9e19BjNPaUKeSMeY3")
  const { status, data } = useFirestoreDocData(burritoRef)
  console.log(data)

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
