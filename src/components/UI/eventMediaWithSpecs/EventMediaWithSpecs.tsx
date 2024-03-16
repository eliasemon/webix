import React, { FC } from 'react';
import Image from 'next/image';
import { CardMedia } from '@mui/material';
import { styleConfig } from '@root/styleConfig/styleConfig';
import ShortSpecs from './specs/ShortSpecs';
import LongSpecs from './specs/LongSpecs';

export interface EventMediaWithSpecsProps {
    id?: string;
    eventSpecs?: object;
    title?: string;
    media?: string;
    liveJoinLink?: string;
    isDetailed?: boolean;
    isPurchased?: boolean;
    sizeRatio?: number;
}
const EventMediaWithSpecs: FC<EventMediaWithSpecsProps> = ({
    id,
    eventSpecs,
    title,
    media,
    isPurchased,
    isDetailed,
    liveJoinLink,
    sizeRatio = 1,
}) => {
    return (
        <>
            <CardMedia
                sx={{
                    position: 'relative',
                    height: styleConfig.responsiveHeight(302, sizeRatio),
                    background: `url(${media})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat, no-repeat',
                    backgroundPosition: 'left , right',
                    borderRadius: 5,
                }}
                title={title}
            >
                <Image
                    style={{ borderRadius: 5, opacity: 0 }}
                    src={`${media}`}
                    fill={true}
                    alt={title}
                />
            </CardMedia>
            {isDetailed ? (
                <LongSpecs
                    id={id}
                    eventSpecs={eventSpecs}
                    liveJoinLink={liveJoinLink}
                    isPurchased={isPurchased}
                />
            ) : (
                <ShortSpecs eventSpecs={eventSpecs} />
            )}
        </>
    );
};

export default EventMediaWithSpecs;
