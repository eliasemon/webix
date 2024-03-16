'use client';

import React, { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

import { styleConfig } from '@root/styleConfig/styleConfig';
import { Specs } from './styleComponents';
import { IEvent } from '../../types/events';
import EventMediaWithSpecs from '../UI/eventMediaWithSpecs/EventMediaWithSpecs';
import Actions from '../UI/Actions/Actions';

const specsTypographyCommonSx = {
    color: 'secondary.light',
    fontSize: 14,
    fontWeight: 300,
};

export interface EventCardProps {
    event: IEvent;
}
const EventCard: FC<EventCardProps> = ({ event }) => {
    const { id, title, media, summary, eventSpecs, liveJoinLink, isPurchased } =
        event;
    return (
        <Card
            sx={{
                backgroundColor: 'backgroundColor.light',
                p: styleConfig.responsivePadding(3),
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 5,
            }}
            aria-label="event-card"
        >
            <EventMediaWithSpecs
                media={media}
                eventSpecs={eventSpecs}
                title={title}
            />
            <CardContent sx={{ flexGrow: 1, p: 0, my: 2 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography
                    fontSize={{ md: 15, xs: 10 }}
                    variant="body1"
                    color="secondary.light"
                >
                    {summary.toString().slice(0, 240).concat('....')}
                </Typography>
                {isPurchased && liveJoinLink ? (
                    <Specs
                        sx={{
                            my: 1.5,
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                ...specsTypographyCommonSx,
                                color: 'success.main',
                            }}
                        >
                            {`Join to the webinar at: ${eventSpecs.startTime}`}
                        </Typography>
                    </Specs>
                ) : (
                    <Specs
                        sx={{
                            my: 1.4,
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={specsTypographyCommonSx}
                        >
                            {`Reg Deadline: ${eventSpecs.RegistrationDeadline}`}
                        </Typography>
                    </Specs>
                )}
            </CardContent>

            <Actions
                isPurchased={isPurchased}
                id={id}
                liveJoinLink={liveJoinLink}
            />
        </Card>
    );
};

export default EventCard;
