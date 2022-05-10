// import React from "react";
// export const Layout = ()=>{
//     return (<><h1>Layout</h1></>)
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Route, Routes } from "react-router-dom";
import { Inventory } from './Inventory';
import App from './App';
import { Home } from './Home';
import { Orders } from './Orders';
import { InventoryAdd } from './InventoryAdd';

const drawerWidth = 240;

export default function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>

      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            ZSC Order Fulfillment
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Inventory'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <Link to="/Inventory"><ListItemText primary={text} /></Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All Orders'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <Link to="/Orders"><ListItemText primary={text} /></Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Inventory" element={<Inventory />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="Inventory-Add" element={<InventoryAdd />} />
        </Routes>
      </Box>
    </Box>
  );
}
