import { Box, Typography } from '@mui/material';
import React from 'react';

const Circle = () => (
    <Box
        sx={{
            width: { xs: 30, sm: 50 },
            height: { xs: 30, sm: 50 },
            marginTop: { xs: 0, lg: -3.3 },
            marginLeft: { xs: -1.5, sm: -3.3, lg: 0 },
            borderRadius: '50%',
            backgroundColor: 'primary.main',
            zIndex: 2,
        }}
    ></Box>
);
const headingtypoSx = {
    color: 'secondary.light',
};
const bodyTypoSx = { color: 'secondary.light' };
const registrationGuidelineModule = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                justifyContent: 'center',
                alignItems: { lg: 'center' },
                ml: 3.3,
                mt: { lg: 3.3 },
                boxSizing: 'border-box',
            }}
        >
            {/* top  */}
            <Box
                sx={{
                    // border: ,
                    borderColor: 'red',
                    height: { xs: 150, lg: 200 },
                    display: 'flex',
                    flexDirection: { xs: 'row', lg: 'column' },
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                <Circle />
                <Box
                    sx={{
                        width: '50%',
                        height: '50%',
                        borderTop: { xs: 0, lg: 1 },
                        borderLeft: { xs: 1, lg: 0 },
                        borderColor: 'red',
                        position: 'absolute',
                        bottom: { xs: 0, lg: 50 },
                        top: { lg: 0 },
                        right: { lg: 0 },

                        zIndex: 1,
                    }}
                ></Box>

                <Box p={2} textAlign={{ xs: 'left', lg: 'center' }}>
                    <Typography sx={headingtypoSx} variant="caption">
                        Apply for Registration
                    </Typography>
                    <Typography sx={bodyTypoSx} variant="body1">
                        We cordially invite you to attend "Front-End Development
                    </Typography>
                </Box>
            </Box>
            {/* 2nd  */}
            <Box
                sx={{
                    borderColor: 'red',
                    height: { xs: 150, lg: 200 },
                    display: 'flex',
                    flexDirection: { xs: 'row', lg: 'column' },
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                <Circle />
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderTop: { xs: 0, lg: 1 },
                        borderLeft: { xs: 1, lg: 0 },
                        borderColor: 'red',
                        position: 'absolute',
                        zIndex: 1,
                    }}
                ></Box>
                <Box p={2} textAlign={{ xs: 'left', lg: 'center' }}>
                    <Typography sx={headingtypoSx} variant="caption">
                        Apply for Registration
                    </Typography>
                    <Typography sx={bodyTypoSx} variant="body1">
                        We cordially invite you to attend "Front-End Development
                    </Typography>
                </Box>
            </Box>
            {/* 3rd  */}
            <Box
                sx={{
                    borderColor: 'red',
                    height: { xs: 150, lg: 200 },
                    display: 'flex',
                    flexDirection: { xs: 'row', lg: 'column' },
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                <Circle />
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderTop: { xs: 0, lg: 1 },
                        borderLeft: { xs: 1, lg: 0 },
                        borderColor: 'red',
                        position: 'absolute',
                        zIndex: 1,
                    }}
                ></Box>
                <Box p={2} textAlign={{ xs: 'left', lg: 'center' }}>
                    <Typography sx={headingtypoSx} variant="caption">
                        Apply for Registration
                    </Typography>
                    <Typography sx={bodyTypoSx} variant="body1">
                        We cordially invite you to attend "Front-End Development
                    </Typography>
                </Box>
            </Box>
            {/* last  */}
            <Box
                sx={{
                    // border: ,
                    borderColor: 'red',
                    height: { xs: 150, lg: 200 },
                    display: 'flex',
                    flexDirection: { xs: 'row', lg: 'column' },
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        width: '50%',
                        height: '50%',
                        borderTop: { xs: 0, lg: 1 },
                        borderLeft: { xs: 1, lg: 0 },
                        borderColor: 'red',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                ></Box>
                <Circle />
                <Box p={2} textAlign={{ xs: 'left', lg: 'center' }}>
                    <Typography sx={headingtypoSx} variant="caption">
                        Apply for Registration
                    </Typography>
                    <Typography sx={bodyTypoSx} variant="body2">
                        We cordially invite you to attend "Front-End Development
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default registrationGuidelineModule;
