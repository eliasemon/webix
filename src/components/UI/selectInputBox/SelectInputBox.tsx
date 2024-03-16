/* eslint-disable @typescript-eslint/no-shadow */
import { Box, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';

const SelectInputBox = ({ id, value, errors, label, items, selectProps }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                my: 1.5,
                gap: 1,
            }}
        >
            <label htmlFor={id}>
                <Typography variant="body1">{label}</Typography>
            </label>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'backgroundColor.main',
                    borderRadius: 2,
                }}
            >
                <Select
                    name={id}
                    id={id}
                    value={value}
                    error={Boolean(errors)}
                    {...selectProps}
                >
                    {items &&
                        items.map((value) => (
                            <MenuItem key={value} value={value.toLowerCase()}>
                                {value}
                            </MenuItem>
                        ))}
                </Select>
                {errors && (
                    <Typography ml={1.5} color="error" variant="caption">
                        {errors}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default SelectInputBox;
