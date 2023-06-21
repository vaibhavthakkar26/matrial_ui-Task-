import * as React from "react";
import Box from "@mui/material/Box";
import SideBar from "../SideBar";

const drawerWidth = 240;

function Layout(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box
        component="main"
        mt={10}
        sx={{
          flexGrow: 1,
          p: 4,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
export default Layout;
