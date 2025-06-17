import React from "react";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Paper,
} from "@mui/material";

import {
  Dashboard,
  Group,
  Person,
  Assignment,
  ReceiptLong,
  Settings,
  AccessTime,
} from "@mui/icons-material";

function Sidebar() {
    return(
        <Box sx={{
        width: "240px",          
        height: "100vh",         
        backgroundColor: "#fafafa", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 2,
        borderRight: "1px solid #eee",
        position: "fixed",
      }}>
        <Box>
            <Typography variant="h6" fontWeight="bold">Project Name</Typography>
            <Typography variant="body2" color="text.secondary" marginBottom={2}>Category</Typography>

            <List>
                <ListItem button>
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" primaryTypographyProps={{ fontSize: "13px" }} />
                </ListItem>

                <ListItem button sx={{ backgroundColor: "#EEF4FF", borderRadius: 2 }}>
                    <ListItemIcon sx={{ color: "#3F51B5" }}>
                        <Group />
                    </ListItemIcon>
                    <ListItemText primary="Leads" primaryTypographyProps={{ fontSize: "13px" }} />
                </ListItem>  

                <ListItem button>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Clients" primaryTypographyProps={{ fontSize: "13px" }} />
                </ListItem>      

                <ListItem button>
                    <ListItemIcon>
                        <Assignment />
                    </ListItemIcon>
                    <ListItemText primary="Task management" primaryTypographyProps={{ fontSize: "13px" }} />
                </ListItem>

                 <ListItem button>
                    <ListItemIcon>
                        <Assignment />
                    </ListItemIcon>
                    <ListItemText primary="Invoice" primaryTypographyProps={{ fontSize: "13px" }} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings" primaryTypographyProps={{ fontSize: "13px" }} />
                </ListItem>        
            </List>
        </Box>
        <Paper
        elevation={1}
        sx={{
          backgroundColor: "#fff0f0",
          padding: 2,
          borderRadius: 2,
        }}
      >
        {/* Red Tag */}
        <Typography
          variant="caption"
          sx={{
            backgroundColor: "#ff1744",
            color: "white",
            borderRadius: "4px",
            paddingX: 1,
            paddingY: 0.5,
            display: "inline-block",
            fontSize: "0.7rem",
            marginBottom: 1,
          }}
        >
          In 10 mins
        </Typography>

        {/* Meeting Title */}
        <Typography variant="body2" fontWeight="bold">
          Internal preparation meeting
        </Typography>

        {/* Time and Icon */}
        <Box display="flex" alignItems="center" marginTop={1}>
          <AccessTime sx={{ fontSize: 16, marginRight: 0.5 }} />
          <Typography variant="caption">08:00 – 09:00 AM</Typography>
        </Box>

        {/* Avatars */}
        <Box marginTop={1} display="flex">
          {/* Dummy avatars from pravatar.cc */}
          <Avatar
            src="https://i.pravatar.cc/24?img=1"
            sx={{ width: 24, height: 24, marginRight: 0.5 }}
          />
          <Avatar
            src="https://i.pravatar.cc/24?img=2"
            sx={{ width: 24, height: 24, marginRight: 0.5 }}
          />
          <Avatar
            src="https://i.pravatar.cc/24?img=3"
            sx={{ width: 24, height: 24 }}
          />
        </Box>
      </Paper>
    </Box>

        
    );
}

export default Sidebar;