import { Box, Button, Container, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React from 'react'
import BasicInfo from './BasicInfo';
import CompanyInfo from './CompanyInfo';
import ProductPortfolio from './ProductPortfolio';

const steps = ['Basic Info', 'Campany info', 'Product Portfolio'];

export const Register = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());


    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    console.log({ activeStep });

    return (
        <div>
            <Container maxWidth="lg">
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};

                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>

                    {
                        activeStep === 0 && (
                            <BasicInfo />
                        )
                    }
                    {
                        activeStep === 1 && (
                            <CompanyInfo />
                        )
                    }
                    {
                        activeStep === 2 && (
                            <ProductPortfolio />
                        )
                    }


                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>

                        </React.Fragment>
                    ) : (
                        <React.Fragment>

                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>


                                <Button onClick={handleNext} variant="contained">
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Continue'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Box>
            </Container>

        </div>
    )
}
