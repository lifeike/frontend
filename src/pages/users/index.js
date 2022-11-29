import UserList from "./UserList"
import AddUser from "./AddUser"
import UpdateUser from "./UpdateUser"
import HomeLay from "../../components/Layout/Home"

function Users() {
  return (
    <HomeLay>
      <AddUser />
      <UpdateUser />
      <UserList />
    </HomeLay>
  )
}

export default Users
