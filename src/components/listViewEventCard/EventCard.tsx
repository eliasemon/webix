'use client';

import React, { FC } from 'react';
import { Card, CardMedia, Typography } from '@mui/material';
import { styleConfig } from '@root/styleConfig/styleConfig';
import Image from 'next/image';
import { IEvent } from '../../types/events';
import Actions from '../UI/Actions/Actions';
import EventSpecs from './EventSpecs';
import { ContentWithAction } from './styleComponents';

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
                display: 'grid',
                gridTemplateColumns: '1fr 8fr',
                columnGap: 3,
                borderRadius: 2,
            }}
            aria-label="event-card"
        >
            <CardMedia
                sx={{
                    position: 'relative',
                    height: styleConfig.responsiveHeight(220, 1),
                    width: styleConfig.responsiveHeight(220, 1),
                    background: `url(${media})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat, no-repeat',
                    backgroundPosition: 'center',
                    borderRadius: 2,
                }}
                title={title}
            >
                <Image
                    style={{ borderRadius: 2, opacity: 0 }}
                    src={`${media}`}
                    fill={true}
                    alt={title}
                />
            </CardMedia>
            <ContentWithAction
                sx={{
                    m: 0,
                    p: 0,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography gutterBottom variant="h5">
                    {title}
                </Typography>
                <EventSpecs eventSpecs={eventSpecs} />
                <Typography
                    my={1}
                    flexGrow={1}
                    fontSize={{ lg: 15, xs: 14 }}
                    variant="body1"
                    color="secondary.light"
                >
                    {summary.toString().slice(0, 640).concat('....')}
                </Typography>

                <Actions
                    isPurchased={isPurchased}
                    id={id}
                    liveJoinLink={liveJoinLink}
                />
            </ContentWithAction>
        </Card>
    );
};

export default EventCard;
