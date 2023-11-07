import * as React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles"; // Import theme-related components

const drawerWidth = 240;

const theme = createTheme({
  // Define a theme with 'fontWeightBold'
  typography: {
    fontWeightBold: 700, // Adjust the value as needed
  },
});

function Sidebarr(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = () => {
    navigate("/Registrationn");
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <img
          style={{ width: "50px", height: "50px", marginLeft: "60px" }}
          src="https://static.vecteezy.com/system/resources/previews/000/497/070/original/male-student-icon-design-vector.jpg"
          alt=""
        />
      </List>
      <Divider />
      <List>
        <img
          style={{ width: "50px", height: "50px", marginLeft: "60px" }}
          src="https://cdn3.iconfinder.com/data/icons/line/36/folder_add-256.png"
          alt=""
          onClick={handleClick}
        />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: "100%",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "#2196F3",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "50px", width: "50px", marginRight: "20px" }}
                src=''
                alt=""
              />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, textShadow: "2px 2px 5px red" }}
              >
                Sri Satya Sai University Of Technology And Medical Sciences
                (SSSUTMS)
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            marginLeft: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar />
          <Typography paragraph>{/* Your content goes here */}</Typography>
          <Typography paragraph>{/* More content goes here */}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

Sidebarr.propTypes = {
  window: PropTypes.func,
};

export default Sidebarr;