import Loading from "./components/Loading"
import RouteTable from "./routes"
import { Toaster } from "react-hot-toast"
import { doc, getFirestore } from "firebase/firestore"
import { FirestoreProvider, useFirestoreDocData, useFirestore, useFirebaseApp } from "reactfire"

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp())

  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <Toaster />
      <Loading />
      <RouteTable />
    </FirestoreProvider>
  )
}

export default App
