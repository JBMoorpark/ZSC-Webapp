import React, { useEffect } from 'react';
import { Box, Grid, TextField, Toolbar } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { AlignHorizontalCenter } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormHelperText } from '@mui/material';
import axios from 'axios';

// const materialSources = [
//     {
//         value: 'Print',
//         label: 'Print',
//     },
//     {
//         value: 'Stock',
//         label: 'Stock',
//     },
// ];

// const options = [
//     { label: 'Stock', value: 'Stock' },
//     { label: 'Print', value: 'Print' },
// ];



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
    const [materialTypeList] = React.useState<string[]>([
        "Videos",
        "Other",
        "Posters"
    ]);

    const [message, setMessage] = React.useState("");
    const [skuValidation, setSkuValidation] = React.useState<any>({
        isError: true,
        message: "Validation Error"
    });

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
        setDescription(e.target.value as string);
    }

    const onSubmit = () => {
        const isValid = sku !== "" && source !== "" && title !== "" && materialType !== "";
        if (isValid) {
            const url = "https://localhost:44336/api/Inventory";
            const payload = {
                sku: sku,
                materialSource: source,
                title: title,
                materialType: materialType,
                description: description
            }
            axios.post(url, payload).then((d) => {
                console.log("data:", d, d.data);
                setMessage("Form submitted successfully");
            }).catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    setMessage(error.response.data.message);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                // Need to add logic to process status (i.e. 400 error)

            })




        } else {
            setMessage("Please fill required fields.")
        }

    }

    const validateSKU = () => {
        console.log('Message', 'OnBlur');
        if (sku !== "") {
            const url = "https://localhost:44336/api/Inventory/" + sku;
            axios.get(url).then((response) => {
                console.log('Response', response);
                setSkuValidation({ isError: !response.data, message: (!response.data ? "Cannot enter duplicate SKU!" : "") });
            })
        }
    }

    useEffect(() => {
        setSkuValidation({ isError: (sku === ""), message: ((sku === "") ? "SKU required" : "") });
    }, [sku]);

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
                            error={skuValidation.isError}
                            helperText={skuValidation.message}
                            required
                            id="sku-required"
                            label="required"
                            variant="outlined"
                            size="small"
                            value={sku}
                            onChange={handleSkuChange}
                            onBlur={validateSKU}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={2}  >
                        Source
                    </Grid>
                    <Grid item xs={10}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">required</InputLabel>
                            <Select
                                error={source === "required"}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                size="small"
                                value={source}
                                label="required"
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
                        Material Type
                    </Grid>
                    <Grid item xs={10}>
                        <FormControl fullWidth>
                            <InputLabel id="material-type-input-label">required</InputLabel>
                            <Select
                                error={materialType === "please select a Material Type"}
                                labelId="material-type-select-label"
                                id="material-type-select"
                                size="small"
                                value={materialType}
                                label="required"
                                onChange={handleMaterialTypeChange}
                            >
                                {materialTypeList.map((mType) =>
                                    <MenuItem value={mType}>{mType}</MenuItem>
                                )}
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
                                <MenuItem value={'Brochures'}>Brochures</MenuItem>
                                <MenuItem value={'Policy Envelopes'}>Policy Envelopes</MenuItem>
                                <MenuItem value={'Zenith Paper'}>Zenith Paper</MenuItem>
                                <MenuItem value={'Covers'}>Covers</MenuItem>
                            </Select>
                            {materialType === "" && <FormHelperText id="my-helper-text">Select one option from dropdown.</FormHelperText>}
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
                            label="required"
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
                            label=""
                            variant="outlined"
                            size="small"
                            onChange={handleDescriptionChange}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
        <CardActions>
            <Grid container spacing="1">
                <Grid item xs={12} >
                    <Button size="small" onClick={onSubmit}>Save</Button>
                </Grid>
                <Grid item xs >
                    <h3>{message}</h3>
                </Grid>
            </Grid>
        </CardActions>
    </React.Fragment>)
};


