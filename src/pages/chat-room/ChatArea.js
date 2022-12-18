import React, { useState, useRef, useEffect, memo } from "react"
import List from "@mui/material/List"
import Stack from "@mui/material/Stack"
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import ImageIcon from "@mui/icons-material/Image"
import WorkIcon from "@mui/icons-material/Work"
import BeachAccessIcon from "@mui/icons-material/BeachAccess"

const ChatArea = (props) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg" />
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
        </div>
        <div className="p-4">
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Stack>
        </div>
      </div>
      <div class="h-[70vh] px-2 flex flex-col border shadow-md bg-white">
        <div class="flex-1 px-4 py-4 overflow-y-auto">
          <div class="flex items-center mb-4">
            <div class="flex-none flex flex-col items-center space-y-1 mr-4">
              <img
                class="rounded-full w-10 h-10"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <a href="#" class="block text-xs hover:underline">
                John Doe
              </a>
            </div>
            <div class="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>

              <div class="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
            </div>
          </div>
          <div class="flex items-center flex-row-reverse mb-4">
            <div class="flex-none flex flex-col items-center space-y-1 ml-4">
              <img
                class="rounded-full w-10 h-10"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <a href="#" class="block text-xs hover:underline">
                Jesse
              </a>
            </div>
            <div class="flex-1 bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2 relative">
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>

              <div class="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100"></div>
            </div>
          </div>
          <div class="flex items-center mb-4">
            <div class="flex-none flex flex-col items-center space-y-1 mr-4">
              <img
                class="rounded-full w-10 h-10"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <a href="#" class="block text-xs hover:underline">
                John Doe
              </a>
            </div>
            <div class="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>

              <div class="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
            </div>
          </div>
        </div>
      </div>
      <div> Input field</div>
    </>
  )
}

export default ChatArea
