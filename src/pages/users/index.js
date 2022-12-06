import UserList from "./UserList"
import AddUser from "./AddUser"
import UpdateUser from "./UpdateUser"
import HomeLay from "../../components/Layout/HomeLayout"

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
