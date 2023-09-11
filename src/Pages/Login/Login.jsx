import { Box, Button, Container, Tab, Tabs, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const Login = () => {

    return (
        <div className='full-height-div'>
            <div className='centered-div'>
                <Container maxWidth="sm">
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs aria-label="basic tabs example">
                            <Tab label="Login" />

                        </Tabs>
                    </Box>
                    <div>
                        <Box sx={{ p: 3 }}>
                            <TextField id="standard-basic" label="Username" variant="standard" fullWidth />
                            <TextField id="standard-basic" label="Password" variant="standard" type='password' fullWidth />

                        </Box>
                        <div>
                            <Link to={`/register`}>Register</Link>
                        </div>
                        <br />
                        <Button variant="contained">Login</Button>
                    </div>
                </Container>


            </div>
        </div>

    )
}

export default Login