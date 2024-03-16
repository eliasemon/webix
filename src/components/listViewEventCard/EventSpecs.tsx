import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { Typography } from '@mui/material';
import { Specs } from './styleComponents';

const CircleIconCommonSx = {
    color: 'secondary.light',
    fontSize: 8,
    mx: 1,
};
const specsTypographyCommonSx = {
    color: 'primary.main',
    fontSize: 15,
    fontWeight: 300,
};
const EventSpecs = ({ eventSpecs }) => {
    return (
        <Specs sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={specsTypographyCommonSx}>
                {eventSpecs?.skillsLevel}
            </Typography>
            <CircleIcon sx={CircleIconCommonSx} />
            <Typography variant="body2" sx={specsTypographyCommonSx}>
                {`${eventSpecs?.startTime}`}
            </Typography>
            <CircleIcon sx={CircleIconCommonSx} />
            <Typography variant="body2" sx={specsTypographyCommonSx}>
                {`${eventSpecs?.durations}`}
            </Typography>
        </Specs>
    );
};

export default EventSpecs;
