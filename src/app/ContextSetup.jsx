'use client';

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { theme } from '@root/theme/theme';

const ContextSetup = ({ children }) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme('dark')}>
                    {children}
                    <CssBaseline />
                </ThemeProvider>
            </StyledEngineProvider>
        </>
    );
};

export default ContextSetup;
