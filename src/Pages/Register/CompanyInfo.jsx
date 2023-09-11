import React from 'react'
import { Box, Container, Grid, TextField } from '@mui/material'

const CompanyInfo = () => {
    return (
        <Container maxWidth="lg">
            <div className='form-body'>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className="inner-box">
                            <h2 className='title'>
                                Tell me more about yourself
                            </h2>

                            <div className="input-holder">
                                <TextField
                                    id="filled-textarea"
                                    label="Brief Company profile"
                                    placeholder="Deiscription"
                                    multiline
                                    rows={4}
                                    fullWidth
                                />
                            </div>
                            <div className="input-holder">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Facebook page URL"
                                    placeholder='http://'
                                    fullWidth
                                />
                            </div>
                            <div className="input-holder">
                                <TextField
                                    id="filled-textarea"
                                    label="Vission/Mission"
                                    placeholder="Deiscription"
                                    multiline
                                    rows={4}
                                    fullWidth
                                />
                            </div>

                        </div>
                        <div className="inner-box">
                            <h2 className='title'>
                                Management Team Details
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
                                <TextField
                                    id="filled-textarea"
                                    label="profile Sumarry"
                                    placeholder="Deiscription"
                                    multiline
                                    rows={4}
                                    fullWidth
                                />
                            </div>
                            <div className="input-holder">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Profile URL"
                                    placeholder='http://'
                                    fullWidth
                                />
                            </div>


                        </div>

                    </Grid>
                    <Grid item xs={6}>

                    </Grid>

                </Grid>



            </div>
        </Container>
    )
}

export default CompanyInfo