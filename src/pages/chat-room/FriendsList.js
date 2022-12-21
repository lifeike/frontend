import React, { useState, useRef, useEffect, memo, useId } from "react"
import { v4 as uuidv4 } from "uuid"
import { connect } from "react-redux"
import * as actionCreators from "@/store/actionCreators/user"
import * as actionCreatorstwo from "@/store/actionCreators/chat"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import ImageIcon from "@mui/icons-material/Image"
import WorkIcon from "@mui/icons-material/Work"
import BeachAccessIcon from "@mui/icons-material/BeachAccess"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import PhoneIcon from "@mui/icons-material/Phone"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PersonPinIcon from "@mui/icons-material/PersonPin"
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined"
import { toast } from "react-toastify"

const FriendsList = (props) => {
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue)
  }

  const [usersResult, setusersResult] = useState([])
  const [chatList, setChatList] = useState([])
  const [page, setPage] = useState()

  useEffect(() => {
    props.getUser().then((res) => setusersResult(res))
    props.getChats().then((res) => setChatList(res))
  }, [])

  const chooseChat = async (chatId) => {
    props.chooseChat(chatId)
  }

  return (
    <>
      <div className="m-2">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Feeco Li" secondary="Software Developer" />
        </ListItem>
      </div>
      <div className="m-2">
        {usersResult && (
          <Autocomplete
            id="free-solo-demo"
            onChange={async (event, newValue) => {
              let hisEmail = newValue && newValue.split(" ")[3] //email to talk to
              if (hisEmail)
                await props
                  .createChat({ userId: props.user._id, isGroupChat: false, users: [props.user.email, hisEmail], chatName: props.user._id })
                  .then((res) => toast.success("new chat created."))
              await props.getChats().then((res) => setChatList(res))
            }}
            freeSolo
            options={usersResult.map((option) => option.first_name + " " + option.last_name + " " + option._id + " " + option.email)}
            renderInput={(params) => {
              return <TextField {...params} label="search user" />
            }}
          />
        )}
      </div>

      <div className="grid place-items-center">
        <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
          <Tab icon={<PersonPinIcon />} aria-label="Direct" />
          <Tab icon={<GroupOutlinedIcon />} aria-label="Group" />
        </Tabs>
      </div>
      {value == 0 ? (
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          {chatList &&
            chatList.map((item, index) => {
              return (
                <div key={index} onClick={() => chooseChat(item._id)}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="https://robohash.org/voluptatumrepudiandaeaut.png?size=50x50&set=set1" />
                    </ListItemAvatar>
                    <ListItemText primary={item.users[1]} secondary={<React.Fragment>{" latest message.... "}</React.Fragment>} />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </div>
              )
            })}
        </List>
      ) : (
        ""
      )}
    </>
  )
}

export default connect((state) => state.user, {
  ...actionCreators,
  ...actionCreatorstwo,
})(FriendsList)
