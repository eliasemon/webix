import { FC } from 'react';
import {
    Button,
    CardActions,
    Link as MuiLink,
    Typography,
} from '@mui/material';
import Link from 'next/link';

import { styleConfig } from '@root/styleConfig/styleConfig';

const buttonCommonSx = {
    boxShadow: 'none',
    fontSize: styleConfig.responsiveFontSizes(13),
    py: styleConfig.responsivePadding(1),
    width: styleConfig.responsiveWidth(140),
    borderRadius: 40,
};

export interface ActionsProps {
    id: string;
    liveJoinLink?: string;
    isPurchased?: boolean;
}
const Actions: FC<ActionsProps> = ({ id, isPurchased, liveJoinLink }) => {
    return (
        <>
            <CardActions
                sx={{
                    m: 0,
                    p: 0,
                    display: 'flex',
                    justifyContent:
                        isPurchased && !liveJoinLink
                            ? 'flex-end'
                            : 'flex-start',
                    flexDirection:
                        isPurchased && !liveJoinLink ? 'row-reverse' : 'row',
                }}
            >
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
                        <MuiLink href={liveJoinLink}>
                            <Button
                                sx={buttonCommonSx}
                                variant="contained"
                                size="small"
                            >
                                Join
                            </Button>
                        </MuiLink>
                    )
                )}
                {isPurchased && !liveJoinLink && (
                    <Typography
                        fontSize={styleConfig.responsiveFontSizes(16)}
                        variant="subtitle1"
                        color="success.main"
                    >
                        Purchase successful, Live Meeting Link Will be provided
                        soon
                    </Typography>
                )}
                <Link
                    style={{
                        marginRight: 15,
                    }}
                    href={`/events/${id}`}
                >
                    <Button
                        sx={buttonCommonSx}
                        color={'secondary'}
                        variant="outlined"
                        size="small"
                    >
                        Details
                    </Button>
                </Link>
            </CardActions>
        </>
    );
};

export default Actions;
