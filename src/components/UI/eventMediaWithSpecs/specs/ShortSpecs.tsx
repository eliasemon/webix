import React from 'react';

import CircleIcon from '@mui/icons-material/Circle';
import { Typography } from '@mui/material';
import { Left, Specs, Right } from './styleComponents';

const specsTypographyCommonSx = {
    color: 'secondary.light',
    py: { xs: 0, md: 1.5 },
    fontSize: 14,
    fontWeight: 300,
};
const ShortSpecs = ({ eventSpecs }) => {
    return (
        <>
            <Specs
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                }}
            >
                <Left sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2" sx={specsTypographyCommonSx}>
                        {eventSpecs?.skillsLevel}
                    </Typography>
                    <CircleIcon
                        sx={{
                            color: 'secondary.light',
                            fontSize: 8,
                            mx: 1,
                        }}
                    />
                    <Typography variant="body2" sx={specsTypographyCommonSx}>
                        {eventSpecs?.startTime}
                    </Typography>
                </Left>
                <Right>
                    <Typography
                        variant="body2"
                        sx={{ ...specsTypographyCommonSx, ml: { md: 2 } }}
                    >
                        {eventSpecs?.durations}
                    </Typography>
                </Right>
            </Specs>
        </>
    );
};

export default ShortSpecs;
