import React from 'react';
import { TextField, Box, Typography } from '@mui/material';

interface InputBoxProps {
    id: string;
    value: string;
    setValue?: (value: string) => void;
    errors?: string;
    label: string;
    multiline?: boolean;
    rows?: number;
    type?: string;
    inputProps?: any;
}

const InputBox: React.FC<InputBoxProps> = ({
    id,
    value,
    setValue,
    errors,
    type,
    label,
    multiline = false,
    rows = 4,
    inputProps,
}) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', my: 1.5, gap: 1 }}>
            <label htmlFor={id}>
                <Typography variant="body1">{label}</Typography>
            </label>
            <style>
                {`#${id}::-webkit-calendar-picker-indicator {
                        opacity: 1;
                        width: 30px;
                        height: 30px;
                        filter: invert(100%);
                        cursor: pointer;
                    }
                    #${id}::-webkit-calendar-picker-indicator:hover {
                        opacity: 0.6;
                }
                `}
            </style>
            <TextField
                sx={{
                    backgroundColor: 'backgroundColor.main',
                    border: 0,
                    borderRadius: 2,
                    outline: 0,
                }}
                type={type}
                multiline={multiline}
                maxRows={rows}
                id={id}
                value={value}
                onChange={(e) => setValue && setValue(e.target.value)}
                error={Boolean(errors)}
                helperText={errors}
                {...inputProps}
            />
        </Box>
    );
};

export default InputBox;
