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
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import LiveTvIcon from "@mui/icons-material/LiveTv"
import DashboardIcon from "@mui/icons-material/Dashboard"
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload"
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
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <Link key={text} to="/hello">
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
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
