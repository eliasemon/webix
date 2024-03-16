import * as React from 'react';
import { Box, Autocomplete, Typography, TextField } from '@mui/material';
import SelectedGuestOption from './SelectedGuestOption';

const GuestSelection = ({
    inputValue,
    selectedOptions,
    options,
    handleInputChange,
    handleOptionRemove,
    handleOptionAdd,
}) => {
    return (
        <Box my={2}>
            <Typography color={'secondary.light'} variant="h5">
                Guest Selection
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {Object.keys(selectedOptions).map((key) => (
                    <Box
                        key={key}
                        sx={{
                            border: 1,
                            borderColor: 'secondary.thin',
                            borderRadius: 4,
                            px: 1,
                            my: 2,
                        }}
                    >
                        <SelectedGuestOption
                            deleteAction={() => handleOptionRemove(key)}
                            option={selectedOptions[key]}
                        />
                    </Box>
                ))}
            </Box>
            <Autocomplete
                inputValue={inputValue}
                options={options}
                onChange={handleOptionAdd}
                onInputChange={handleInputChange}
                getOptionLabel={(option: any) => option?.name}
                renderOption={(props, option) => (
                    <SelectedGuestOption
                        key={option?.id}
                        props={props}
                        option={option}
                    />
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search"
                        margin="normal"
                        variant="outlined"
                    />
                )}
            />
        </Box>
    );
};

export default GuestSelection;
