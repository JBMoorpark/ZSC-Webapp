import { Box, Toolbar } from '@mui/material';
import React from 'react';
import OrdersTable from './OrdersTable';

export const Orders = () => {

    return (<Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }
        }>
        <Toolbar />
        <div>
            <h1>Orders</h1>
        </div>   
        <OrdersTable />
    </Box >)

}
