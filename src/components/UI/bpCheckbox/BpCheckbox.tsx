import * as React from 'react';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { BpCheckedIcon, BpIcon } from './styleComponents';

// Inspired by blueprintjs
const BpCheckbox = (props: CheckboxProps) => {
    return (
        <Checkbox
            sx={{
                '&:hover': { bgcolor: 'transparent' },
            }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
        />
    );
};
export default BpCheckbox;
