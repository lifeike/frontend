import Loading from "./components/Loading"
import RouteTable from "./routes"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <Toaster />
      <Loading />
      <RouteTable />
    </>
  )
}

export default App
