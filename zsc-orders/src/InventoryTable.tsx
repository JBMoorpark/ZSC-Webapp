import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import axios from 'axios';

interface IInventory {
  sku: string,
  materialSource: string,
  title: string,
  materialType: string,
  description: string,
}

/* function createData(
  sku: string,
  materialSource: string,
  title: string,
  materialType: string,
  description: string,
) {
  return { sku, materialSource, title, materialType, description };
}

const rows = [
  createData('100017DVD', 'Stock', 'Supervisors Guide to Accident Prevention English', 'Videos', 'Supervisors Guide to Accident Prevention English'),
  createData('100018DVD', 'Stock', 'Supervisors Guide to Accident Prevention English', 'Videos', 'Supervisors Guide to Accident Prevention English'),
  createData('100019DVD', 'Stock', 'Supervisors Guide to Accident Prevention English', 'Videos', 'Supervisors Guide to Accident Prevention English'),
  createData('100020DVD', 'Stock', 'Supervisors Guide to Accident Prevention English', 'Videos', 'Supervisors Guide to Accident Prevention English'),
]; */

export default function InventoryTable() {

  const [data, setData] = React.useState<IInventory[]>([]);


  React.useEffect(() => {

    console.log("useEffect");

    const url = "https://localhost:44336/api/Inventory";

    axios.get(url).then((d) => {
      console.log("data:",d, d.data);
      setData(d.data as IInventory[]);
    })

  }, []);

  React.useEffect(() => {
    console.log("inventory data:", data);
  }, [data]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SKU</TableCell>
            <TableCell align="center">Material Source</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="center">Material Type</TableCell>
            <TableCell align="left">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.sku}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.sku}
              </TableCell>
              <TableCell align="center">{row.materialSource}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="center">{row.materialType}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
