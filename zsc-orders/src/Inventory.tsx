import { Box, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import InventoryTable from './InventoryTable';

// export const Inventory = (
//     <h1 className="greeting">
//       Hello, world!
//     </h1>
//   );

export function Inventory() {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }
      }>
         <Toolbar />
      <div>  
        <h1>Inventory</h1>
        <Link to="/Inventory-Add">Add</Link>
        <InventoryTable />
      </div>
    </Box >

  )
}