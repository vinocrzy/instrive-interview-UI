import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

import logo from "../../assets/imgs/logo.jpg";

const BasicInfo = () => {

    const [setBasicInfo, setSetBasicInfo] = useState({})

    // console.log({ logo });
    return (
        <Container maxWidth="lg">
            <div className='form-body'>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className="inner-box">
                            <h2 className='title'>
                                Basic Company information
                            </h2>

                            <div className="input-holder">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Company name"
                                    placeholder='name'
                                    fullWidth
                                    name={""}
                                />
                            </div>
                            <div className="input-holder">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Head office Address"
                                    placeholder='Streat name and house number'
                                    fullWidth
                                />
                            </div>
                            <div className="input-holder">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Country"

                                    >
                                        <MenuItem value={'IN'}>India</MenuItem>
                                        <MenuItem value={'USA'}>USA</MenuItem>
                                        <MenuItem value={'UK'}>UK</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="input-holder">
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Postal Code"
                                            placeholder='Postal Code'
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="City"
                                            placeholder='City'
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="input-holder">
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Country Code"
                                            placeholder='Code'
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Contact Number"
                                            placeholder='Contact Number'
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="input-holder">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Website URL"
                                    placeholder='http://'
                                    fullWidth
                                />
                            </div>

                        </div>
                        <div className="inner-box">
                            <h2 className='title'>
                                Key contact person
                            </h2>

                            <div className="input-holder">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Name"
                                    placeholder='name'
                                    fullWidth
                                />
                            </div>
                            <div className="input-holder">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Designation"
                                    placeholder='Designation'
                                    fullWidth
                                />
                            </div>


                            <div className="input-holder">
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Country Code"
                                            placeholder='Code'
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Contact Number"
                                            placeholder='Contact Number'
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="input-holder">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email"
                                    placeholder='Email'
                                    fullWidth
                                    type='email'
                                />
                            </div>

                        </div>


                    </Grid>
                    <Grid item xs={6}>
                        <picture>
                            <img src={logo} alt="logo" />
                        </picture>
                    </Grid>

                </Grid>



            </div>
        </Container>

    )
}

export default BasicInfo