import * as React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SelectedGuestOption = ({
    option,
    props = {},
    deleteAction = undefined,
}) => {
    return (
        <Box py={1} {...props} display="flex" gap={1} alignItems="center">
            <Avatar src={option.avatar} alt={option.name} />
            <Typography variant="body1" marginLeft={1}>
                {option.name}
            </Typography>
            {option?.jobTitle && option?.workPlace && (
                <Typography variant="body1" marginLeft={1}>
                    {option?.jobTitle},{option?.workPlace}
                </Typography>
            )}

            {deleteAction && (
                <CloseIcon
                    sx={{
                        fontSize: 30,
                        cursor: 'pointer',
                        color: 'secondary.light',
                        '&:hover': {
                            color: 'primary.main',
                        },
                    }}
                    onClick={deleteAction}
                />
            )}
        </Box>
    );
};

export default SelectedGuestOption;
