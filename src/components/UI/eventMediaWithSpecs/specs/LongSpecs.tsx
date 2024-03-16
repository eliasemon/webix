import React from 'react';

import CircleIcon from '@mui/icons-material/Circle';
import { Typography, Button, Link as MuiLink, Box } from '@mui/material';
import Link from 'next/link';
import { styleConfig } from '@root/styleConfig/styleConfig';
import { Left, Specs, Right } from './styleComponents';

const specsTypographyCommonSx = {
    color: 'secondary.light',
    fontSize: styleConfig.responsiveFontSizes(15),
    fontWeight: 300,
};
const buttonCommonSx = {
    boxShadow: 'none',
    fontSize: styleConfig.responsiveFontSizes(13),
    py: styleConfig.responsivePadding(0.5),
    width: styleConfig.responsiveWidth(140),
    borderRadius: 40,
};
const CircleIconCommonSx = {
    color: 'secondary.light',
    fontSize: 8,
    mx: 1,
};
const LongSpecs = ({ id, eventSpecs, isPurchased, liveJoinLink }) => {
    return (
        <>
            <Specs
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    my: styleConfig.responsiveMargin(1.5),
                    position: 'sticky',
                    top: '0px',
                    left: '0px',
                }}
            >
                <Left sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2" sx={specsTypographyCommonSx}>
                        {eventSpecs?.startTime}
                    </Typography>
                    <CircleIcon sx={CircleIconCommonSx} />
                    <Typography variant="body2" sx={specsTypographyCommonSx}>
                        {`Time Duration ${eventSpecs?.durations}`}
                    </Typography>
                    <CircleIcon sx={CircleIconCommonSx} />
                    <Typography variant="body2" sx={specsTypographyCommonSx}>
                        {`Reg Deadline: ${eventSpecs?.RegistrationDeadline}`}
                    </Typography>
                </Left>
                <Right sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Typography
                        fontSize={styleConfig.responsiveFontSizes(22)}
                        variant="subtitle1"
                    >
                        {`${eventSpecs?.price} TK`}
                    </Typography>
                    {!isPurchased ? (
                        <Link href={`/purchase/${id}`}>
                            <Button
                                sx={buttonCommonSx}
                                variant="contained"
                                size="small"
                            >
                                Register
                            </Button>
                        </Link>
                    ) : (
                        liveJoinLink && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    color="success.main"
                                >
                                    Purchased, Click to
                                </Typography>
                                <MuiLink href={liveJoinLink}>
                                    <Button
                                        sx={{
                                            ...buttonCommonSx,
                                            backgroundColor: 'success.main',
                                        }}
                                        variant="contained"
                                        size="small"
                                    >
                                        Join
                                    </Button>
                                </MuiLink>
                            </Box>
                        )
                    )}
                </Right>
                {isPurchased && !liveJoinLink && (
                    <Typography variant="body2" color="success.main">
                        Purchase successful, Live Meeting Link Will be provided
                        soon
                    </Typography>
                )}
            </Specs>
        </>
    );
};

export default LongSpecs;
