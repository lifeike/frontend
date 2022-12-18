import { Link } from "react-router-dom"
import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import AppBar from "./AppBar"
import CssBaseline from "@mui/material/CssBaseline"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import LiveTvIcon from "@mui/icons-material/LiveTv"
import DashboardIcon from "@mui/icons-material/Dashboard"
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload"
import GoogleIcon from "@mui/icons-material/Google"
import ChatIcon from "@mui/icons-material/Chat"
import RssFeedIcon from "@mui/icons-material/RssFeed"
import MapIcon from "@mui/icons-material/Map"
import MissedVideoCallIcon from "@mui/icons-material/MissedVideoCall"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"
import Badge from "@mui/material/Badge"

const drawerWidth = 240

export default function ClippedDrawer({ children }) {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex" }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
          }}>
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <Link to="/dashboard">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Dashboard "} />
                    <Badge badgeContent={4} color="primary"></Badge>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/movies">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <LiveTvIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Movies (table)"} />
                    <Badge badgeContent={2} color="primary"></Badge>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/upload">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DriveFolderUploadIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Images (upload)"} />
                    <Badge badgeContent={12} color="primary"></Badge>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/google-map-autocomplete">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <GoogleIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Registration (google map autocomplete)"} />
                    <Badge badgeContent={0} color="primary"></Badge>
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <Link to="/chat-room">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ChatIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Chat Room"} />
                    <Badge badgeContent={0} color="primary"></Badge>
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <Link to="/blog">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <RssFeedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"blog(text editor)"} />
                    <Badge badgeContent={0} color="primary"></Badge>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/map">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MapIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Map(geo)"} />
                    <Badge badgeContent={0} color="primary"></Badge>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/video">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MissedVideoCallIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Video(streaming)"} />
                    <Badge badgeContent={0} color="primary"></Badge>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/pdf">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <PictureAsPdfIcon />
                    </ListItemIcon>
                    <ListItemText primary={"PDF(viewer)"} />
                    <Badge badgeContent={0} color="primary"></Badge>
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </>
  )
}
