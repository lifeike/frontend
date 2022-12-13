import Loading from "./components/Loading"
import RouteTable from "./routes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <ToastContainer />
      <Loading />
      <RouteTable />
    </>
  )
}

export default App
