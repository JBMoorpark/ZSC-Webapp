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
import { FormHelperText } from '@mui/material';

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
    const [title, setTitle] = React.useState("");
    const [materialType, setMaterialType] = React.useState("");
    const [description, setDescription] = React.useState("");

    const [message, setMessage] = React.useState("");

    const handleSkuChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSku(e.target.value as string);
    }

    const handleSourceChange = (e: SelectChangeEvent) => {
        setSource(e.target.value as string);
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value as string);
    }

    const handleMaterialTypeChange = (e: SelectChangeEvent) => {
        setMaterialType(e.target.value as string);
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value as string);
    }

    const onSubmit = () => {
        const isValid = sku !== "" && source !== "" && title !== "" && materialType !== "";
        if (isValid) {
            setMessage("Form submitted successfully");

        } else {
            setMessage("Please fill required fields.")
        }

    }


    return (<React.Fragment>
        <CardContent sx={{ width: 700, }}>
            {/* <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                Add New Inventory Item
            </Typography> */}
            <Grid container spacing={1}>
                <Grid container item xs={12}>
                    <Grid item xs={2}>
                        SKU
                    </Grid>
                    <Grid item xs={10}>
                        {/* <TextField sx={{ width: 250, }} */}
                        <TextField
                            error={sku === ""}
                            helperText={sku === "" ? "SKU is required" : ""}
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
                        Source
                    </Grid>
                    <Grid item xs={10}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Source</InputLabel>
                            <Select
                                error={source === ""}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                size="small"
                                value={source}
                                label="Source"
                                onChange={handleSourceChange}
                            >
                                <MenuItem value={'Stock'}>Stock</MenuItem>
                                <MenuItem value={'Print'}>Print</MenuItem>
                            </Select>
                            {source === "" && <FormHelperText id="my-helper-text">Select one option from dropdown.</FormHelperText>}
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={2}  >
                        Source
                    </Grid>
                    <Grid item xs={10}>
                        {/* <TextField
                            required
                            id="material-type-required"
                            label="Required"
                            variant="outlined"
                            // size="small"
                            fullWidth
                        /> */}
                        <FormControl fullWidth>
                            <InputLabel id="material-type-input-label">Mat. Type</InputLabel>
                            <Select
                                error={ materialType === ""}
                                labelId="material-type-select-label"
                                id="material-type-select"
                                size="small"
                                value={materialType}
                                label="Mat. Type"
                                onChange={handleMaterialTypeChange}
                            >
                                <MenuItem value={'Videos'}>Videos</MenuItem>
                                <MenuItem value={'Paycheck Stuffers'}>Paycheck Stuffers</MenuItem>
                                <MenuItem value={'Posting Notices'}>Posting Notices</MenuItem>
                                <MenuItem value={'Claim Kits'}>Claim Kits</MenuItem>
                                <MenuItem value={'Posters'}>Posters</MenuItem>
                                <MenuItem value={'Stickers'}>Stickers</MenuItem>
                                <MenuItem value={'Other'}>Other</MenuItem>
                                <MenuItem value={'Folders'}>Folders</MenuItem>
                                <MenuItem value={'Binders'}>Binders</MenuItem>
                                <MenuItem value={'Flyers'}>Flyers</MenuItem>
                                <MenuItem value={'Videos'}>Brochures</MenuItem>
                                <MenuItem value={'Policy Envelopes'}>Policy Envelopes</MenuItem>
                                <MenuItem value={'Zenith Paper'}>Zenith Paper</MenuItem>
                                <MenuItem value={'Covers'}>Covers</MenuItem>
                            </Select>
                            {source === "" && <FormHelperText id="my-helper-text">Select one option from dropdown.</FormHelperText>}
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={2}>
                        Title
                    </Grid>
                    <Grid item xs={10}>
                        <TextField sx={{ width: 650 }}
                            error={title === ""}
                            helperText={title === "" ? "Must enter title" : ""}
                            required
                            id="title-required"
                            value={title}
                            label="Required"
                            variant="outlined"
                            size="small"
                            onChange={handleTitleChange}
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
                            value={description}
                            label="Optional"
                            variant="outlined"
                            size="small"
                            onChange={handleDescriptionChange}
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
            <Grid container spacing="1">
                <Grid item xs={12} >
                    <Button size="small" onClick={onSubmit}>Save</Button>
                </Grid>
                <Grid item xs >
                    <h1>{message}</h1>
                </Grid>
            </Grid>
        </CardActions>
    </React.Fragment>)
};


