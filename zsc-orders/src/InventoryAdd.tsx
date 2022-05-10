import React from 'react';
import { Box, Grid, TextField, Toolbar } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AlignHorizontalCenter } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const materialSources = [
    {
        value: 'Print',
        label: 'Print',
    },
    {
        value: 'Stock',
        label: 'Stock',
    },
];

const options = [
    { label: 'Stock', value: 'Stock' },
    { label: 'Print', value: 'Print' },
];



export const InventoryAdd = () => {


    return (<Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }
        }>
        <Toolbar />
        <div>
            <h1>Add New Inventory Item</h1>
        </div>
        <Card sx={{ width: 800 }} variant="outlined"><Inventorycard /></Card>
    </Box >
    )

}


const Inventorycard = () => {

    const [sku, setSku] = React.useState("");
    const [source, setSource] = React.useState("");

    const handleSkuChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSku(e.target.value as string);
    }

    const handleSourceChange = (e: SelectChangeEvent) => {
        setSource(e.target.value as string);
    }

    return (<React.Fragment>
        <CardContent sx={{ width: 700, }}>
            {/* <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                Add New Inventory Item
            </Typography> */}
            <Grid container spacing={2}>
                <Grid container item xs={12}>
                    <Grid item xs={2}>
                        SKU
                    </Grid>
                    <Grid item xs={10}>
                        {/* <TextField sx={{ width: 250, }} */}
                        <TextField
                            required
                            id="sku-required"
                            label="Required"
                            variant="outlined"
                            size="small"
                            value={sku}
                            onChange={handleSkuChange}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={2}  >
                        Material Source
                    </Grid>
                    <Grid item xs={10}>
                        {/* <TextField
                            required
                            id="material-source-required"
                            label="Required"
                            variant="outlined"
                            // size="small"
                            fullWidth
                        /> */}
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Source</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={source}
                                label="Source"
                                onChange={handleSourceChange}
                            >
                                <MenuItem value={'Stock'}>Stock</MenuItem>
                                <MenuItem value={'Print'}>Print</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={2}>
                        Title
                    </Grid>
                    <Grid item xs={10}>
                        <TextField sx={{ width: 650 }}
                            required
                            id="title-required"
                            label="Required"
                            variant="outlined"
                            size="small"
                        />

                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={2}>
                        Description
                    </Grid>
                    <Grid item xs={10}>
                        <TextField sx={{ width: 650 }}
                            id="description-optional"
                            label="Optional"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                </Grid>
            </Grid>
            {/* <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
        </CardContent>
        <CardActions>
            <Button size="small">Save</Button>
        </CardActions>
    </React.Fragment>)
};


