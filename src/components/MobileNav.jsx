import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import SocialLinks from "./SocialLinks";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";



export default function MainNavigation() {
  /*
  react useState hook to save the current open/close state of the drawer,
  normally variables dissapear afte the function was executed
  */
  const [open, setState] = useState(false);

  /*
  function that is being called every time the drawer should open or close,
  the keys tab and shift are excluded so the user can focus between
  the elements with the keys
  */
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="lg" disableGutters="true">
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontWeight: 500,
              fontFamily: "Cinzel Decorative, serif",
            }}
          >
            Beronika Keres
          </Typography>

          <Box
            component="div"
            sx={{
              display: {
                xs: "none",
                lg: "block",
              },
            }}
          >
            <SocialLinks />
          </Box>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                lg: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: "#793438",
              }}
            >
              {/* 
                  when clicking the icon it calls the function toggleDrawer 
                  and closes the drawer by setting the variable open to false
                  */}
              <IconButton sx={{ mb: 2, color: "white" }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton
                  component={Link}
                  to="/"
                  onClick={toggleDrawer(false)}
                  sx={{ color: "white" }}
                >
                  <ListItemIcon>
                    <HomeIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Crimson Text, sans",
                      fontSize: "1.2rem",
                    }}
                  >
                    HOME
                  </Typography>
                </ListItemButton>
                <ListItemButton
                  component={Link}
                  to="/CrackedCoffins"
                  onClick={toggleDrawer(false)}
                  sx={{ color: "white" }}
                >
                  <ListItemIcon>
                    <AutoStoriesIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Crimson Text, sans",
                      fontSize: "1.2rem",
                    }}
                  >
                    THE CRACKED COFFINS SERIES
                  </Typography>
                </ListItemButton>
                <ListItemButton
                  component={Link}
                  to="/Bio"
                  onClick={toggleDrawer(false)}
                  sx={{ color: "white" }}
                >
                  <ListItemIcon>
                    <FavoriteIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Crimson Text, sans",
                      fontSize: "1.2rem",
                    }}
                  >
                    ABOUT THE AUTHOR
                  </Typography>
                </ListItemButton>
                <ListItemButton
                  component={Link}
                  to="/Contact"
                  onClick={toggleDrawer(false)}
                  sx={{ color: "white" }}
                >
                  <ListItemIcon>
                    <EmailIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Crimson Text, sans",
                      fontSize: "1.2rem",
                    }}
                  >
                    CONTACT
                  </Typography>
                </ListItemButton>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                }}
              >
                <Typography
                  variant="body1"
                  color="white"
                  textAlign={"center"}
                  sx={{ fontFamily: "Crimson Text, sans", fontSize: "1.2rem" }}
                >
                  Follow Me On Social Media!
                </Typography>
                <SocialLinks />
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
