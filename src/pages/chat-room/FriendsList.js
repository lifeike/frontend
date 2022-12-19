import React, { useState, useRef, useEffect, memo } from "react"
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

const FriendsList = (props) => {
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue)
  }

  const [usersResult, setusersResult] = useState([])

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
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={usersResult.map((option) => option.title)}
          renderInput={(params) => {
            console.log(params.inputProps.value)
            return <TextField {...params} label="search user" />
          }}
        />
      </div>

      <div className="grid place-items-center">
        <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
          <Tab icon={<PersonPinIcon />} aria-label="Direct" />
          <Tab icon={<GroupOutlinedIcon />} aria-label="Group" />
        </Tabs>
      </div>
      {value == 0 ? (
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://robohash.org/voluptatumrepudiandaeaut.png?size=50x50&set=set1" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://robohash.org/numquamvoluptatemagnam.png?size=50x50&set=set1" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://robohash.org/reprehenderitplaceatqui.png?size=50x50&set=set1" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      ) : (
        ""
      )}
    </>
  )
}

export default FriendsList
