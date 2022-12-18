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

      <div class="flex items-center border-t p-2">
        <div>
          <button class="inline-flex hover:bg-indigo-50 rounded-full p-2" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
        <div class="w-full mx-2 py-2 ">
          <input class="w-full py-2 rounded-full border border-gray-200" type="text" value="" placeholder="  Aa" autofocus />
        </div>
        <div>
          <button class="inline-flex hover:bg-indigo-50 rounded-full p-2" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default ChatArea