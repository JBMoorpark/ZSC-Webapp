import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";
export const Home = () => {

    return (<><Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
        <Toolbar />

        <h1>Welcome to the ZSC Order Fullfillment Center...</h1>
        <Typography paragraph>This team receives and processes orders for printed materials, 
            signs and stickers that are delivered directly to insured, agent, and Zenith employee.
              This site focuses on tracking the inventory and order processing.

        </Typography>
        <Typography paragraph>
            <p>About the Links on the Left Navigation.</p>
<ol>
        <li>The "Inventory" link is that master set of SKUs and quantities on hand</li>

        <li>The "All Orders" link is the view of all orders, filled and unfilled</li>

        <li>The "Error Reporting" link is the view of the errors identified during the import of the Zenith Solution Center Orders.</li>
</ol>
    </Typography>
    </Box></>)
}