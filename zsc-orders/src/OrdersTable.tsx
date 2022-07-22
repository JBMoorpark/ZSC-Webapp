import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';


interface IOrders {
  orderNumber: string,
  dateOrdered: string,
  dateShipped: string,
  orgId: string,
  permissionType: string,
  shiptoCompany: string,
  arrItems: any[]
}

// function createData(
//   customerOrderNo: string,
//   dateOrdered: string,
//   dateShipped: string,
//   orgId: string,
//   permissionType: string,
//   shiptoCompany: string
// ) {
//   return { customerOrderNo, dateOrdered, dateShipped, orgId, permissionType, shiptoCompany };
// }

// const rows = [
//   createData('S00006335', '4/19/2022', '', 'ZENITH', 'Zenith Tier 1','Eastern Wire Products' ),
//   createData('S00006334', '4/19/2022', '4/19/2022',  'ZENITH', 'Zenith Tier 1','Moiola Brothers' ),
//   createData('S00006333', '4/19/2022',  '', 'ZENITH','Zenith Tier 2', 'Romans Service LLC')
//  ];

// export default function OrdersTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>OrderNo</TableCell>
//             <TableCell align="center">Date Ordered</TableCell>
//             <TableCell align="left">Date Shipped</TableCell>
//             <TableCell align="center">Org ID</TableCell>
//             <TableCell align="left">Permission Type</TableCell>
//             <TableCell align="left">Ship-To Company</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.customerOrderNo}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.customerOrderNo}
//               </TableCell>
//               <TableCell align="center">{row.dateOrdered}</TableCell>
//               <TableCell align="left">{row.dateShipped}</TableCell>
//               <TableCell align="center">{row.orgId}</TableCell>
//               <TableCell align="left">{row.permissionType}</TableCell>
//               <TableCell align="left">{row.shiptoCompany}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );

  export default function OrdersTable() {

    const [data, setData] = React.useState<IOrders[]>([]);
  
  
    React.useEffect(() => {
  
      console.log("useEffect");
  
      const url = "https://localhost:44336/api/Orders";
  
      axios.get(url).then((d) => {
        console.log("data:",d, d.data);
		let data:IOrders[] = (d.data as IOrders[]);
		data.forEach((item:IOrders) => {
			const arrItems: any[] = [{sku: "KITMO",qtyOrdered:5,skuTitle: "Missouri - Workers' Compensation Claims Kit"},
			{sku: "KITMO 1",qtyOrdered:8,skuTitle: "Missouri - Workers' Compensation Claims Kit 123"}];
			item.arrItems = arrItems;
		});
        setData(data);
      })
  
    }, []);
  
    React.useEffect(() => {
      console.log("Orders data:", data);
    }, [data]);
  
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
			  <TableCell></TableCell>
              <TableCell>Order Number</TableCell>
              <TableCell align="center">Date Ordered</TableCell>
              <TableCell align="left">Date Shipped</TableCell>
              <TableCell align="center">Org ID</TableCell>
              <TableCell align="left">Permission Type</TableCell>
              <TableCell align="left">ShiptoCompany</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any,index: number) => (
              <RenderRow row={row} key={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

const RenderRow = (props: any) => {
	const [open,setOpen] = React.useState(false);
	const row: IOrders = (props.row as IOrders);
  if (row.arrItems && row.arrItems.length) {
  	console.log(row.arrItems);
  }
	const iconClickHandler = (event: any) => {
		setOpen(!open);
	}
	
	return (
	<>
		<TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
			<TableCell>
				{row.arrItems && row.arrItems.length && <IconButton size="small" onClick={iconClickHandler}>
						{open ? <ArrowDropDownIcon /> : <ArrowRightIcon /> }
					</IconButton>
				}
			</TableCell>
			<TableCell component="th" scope="row">
			  {row.orderNumber}
			</TableCell>
			<TableCell align="center">{row.dateOrdered}</TableCell>
			<TableCell align="left">{row.dateShipped}</TableCell>
			<TableCell align="center">{row.orgId}</TableCell>
			<TableCell align="left">{row.permissionType}</TableCell>
			<TableCell align="left">{row.shiptoCompany}</TableCell>
		</TableRow>
		<TableRow>
			<TableCell style={{paddingBottom: 0,paddingTop: 0}} colSpan={7}>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<Box margin={1}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
						  <TableHead>
							<TableRow>
							  <TableCell>SKU</TableCell>
							  <TableCell>QtyOrdered</TableCell>
							  <TableCell>SKUTitle</TableCell>
							</TableRow>
						  </TableHead>
						  <TableBody>
							{row.arrItems && row.arrItems.map((item: any,index: number) => (
							  <TableRow key={index}>
									<TableCell>{item.sku}</TableCell>
									<TableCell>{item.qtyOrdered}</TableCell>
									<TableCell>{item.skuTitle}</TableCell>
							  </TableRow>
							  
							))}
						  </TableBody>
						</Table>
						
					</Box>
				</Collapse>
			</TableCell>
		</TableRow>
	</>
	);
}
