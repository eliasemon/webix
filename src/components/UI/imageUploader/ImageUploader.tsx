import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const ImageUploader = ({ title, inputProps }) => {
    return (
        <Box>
            <input
                aria-label={title}
                style={{ display: 'none' }}
                id="file-input"
                type="file"
                accept="image/*"
                {...inputProps}
            />
            <label htmlFor="file-input">
                <Button
                    sx={{
                        py: 1,
                        px: 2,
                        mb: 1.5,
                        fontSize: 14,
                        fontWeight: 500,
                    }}
                    variant="contained"
                    component="span"
                >
                    {title}
                </Button>
            </label>
            <Typography
                variant="body2"
                sx={{
                    color: 'secondary.light',
                    opacity: 0.6,
                }}
            >
                (PNG/JPG/JPEG/BMP, Max. 3MB)
            </Typography>
        </Box>
    );
};

export default ImageUploader;
