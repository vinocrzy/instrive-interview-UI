import React from 'react'
import { Box, Container, Grid, TextField } from '@mui/material'

const ProductPortfolio = () => {
    return (
        <Container maxWidth="lg">
            <div className='form-body'>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className="inner-box">
                            <h2 className='title'>
                                Show your product portfolio
                            </h2>

                            <div className="input-holder">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Product Name"
                                    placeholder='Name'
                                    fullWidth
                                />
                            </div>

                            <div className="input-holder">
                                <TextField
                                    id="filled-textarea"
                                    label="Product Discription"
                                    placeholder="Discription"
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


                        </div>


                    </Grid>
                    <Grid item xs={6}>

                    </Grid>

                </Grid>



            </div>
        </Container>
    )
}

export default ProductPortfolio