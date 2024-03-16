import { Avatar, Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import { IGuestInfo } from '@root/types/events';
import { styleConfig } from '@root/styleConfig/styleConfig';

export interface GestShortInfoProps {
    info: IGuestInfo;
    sizeRatio?: number;
}

const GuestShortInfo: FC<GestShortInfoProps> = ({ info, sizeRatio = 1 }) => {
    const { avatar, fullName, designation, invitedAs, company } = info;
    const { avatarSizes: avatarSizesStyle } = styleConfig.ui;
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    border: 5,
                    borderColor: 'primary.main',
                    borderRadius: '50%',
                    position: 'relative',
                }}
            >
                <Avatar
                    sx={{
                        width: {
                            ...avatarSizesStyle(220, sizeRatio),
                            xs: avatarSizesStyle(340, sizeRatio).xs,
                        },
                        height: {
                            ...avatarSizesStyle(220, sizeRatio),
                            xs: avatarSizesStyle(340, sizeRatio).xs,
                        },
                    }}
                    src={`${avatar}`}
                    alt={fullName}
                />
                <Box
                    sx={{
                        backgroundColor: 'primary.main',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 10,
                        borderRadius: 40,
                        position: 'absolute',
                        height: styleConfig.responsiveHeight(40),
                        width: styleConfig.responsiveWidth(130),
                        bottom: styleConfig.responsiveHeight(-5),
                        left: '50%',
                        transform: 'translate(-50%)',
                    }}
                >
                    <Typography variant="caption">{invitedAs}</Typography>
                </Box>
            </Box>

            <>
                <Typography color={'primary.main'} variant="h6" mt={1.5}>
                    {fullName}
                </Typography>
                {designation && (
                    <Typography color={'secondary.light'} variant="body1">
                        {designation}
                    </Typography>
                )}
                {company && (
                    <Typography color={'secondary.light'} variant="body2">
                        {company}
                    </Typography>
                )}
            </>
        </Box>
    );
};

export default GuestShortInfo;
