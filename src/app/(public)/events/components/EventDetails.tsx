'use client';

import EventMediaWithSpecs from '@root/components/UI/eventMediaWithSpecs/EventMediaWithSpecs';
import React, { FC } from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import { styleConfig } from '@root/styleConfig/styleConfig';
import { IEvent } from '@root/types/events';
import GuestShortInfo from '@root/components/UI/guestShortInfo/GuestShortInfo';
import RegistrationGuidelineModule from '@root/components/UI/registrationGuidelineModule/RegistrationGuidelineModule';
import { Main } from './styleComponents';

const commonTypoSx = {
    my: 1.5,
};

export interface EventDetailsProps {
    event: IEvent;
}

const EventDetails: FC<EventDetailsProps> = ({ event }) => {
    const EventMediaWithSpecsProps = {
        ...event,
        isDetailed: true,
        sizeRatio: 1.4,
    };
    return (
        <>
            <Container>
                <Main mb={styleConfig.responsiveMargin(15)}>
                    {/* event media start  */}
                    <Box my={styleConfig.responsiveMargin(3)}>
                        <EventMediaWithSpecs {...EventMediaWithSpecsProps} />
                    </Box>
                    {/* event media end  */}
                    {/* Event Heading & summary start */}
                    <Box my={styleConfig.responsiveMargin(7)}>
                        <Typography sx={commonTypoSx} variant="h4">
                            {event.title}
                        </Typography>
                        <Typography color="secondary.light" variant="body1">
                            {event.summary}
                        </Typography>
                    </Box>
                    {/* Event Heading & summary end */}
                    {/* speakers and guest start  */}
                    <Box my={styleConfig.responsiveMargin(10)}>
                        <Typography sx={commonTypoSx} variant="h4">
                            Speakers And Guest
                        </Typography>
                        <Typography color="secondary.light" variant="body1">
                            {event.guestInfoList.message}
                        </Typography>
                        <Grid
                            mt={styleConfig.responsiveMargin(7)}
                            container
                            spacing={3}
                        >
                            {event.guestInfoList.list.map((guest) => (
                                <Grid
                                    key={guest.id}
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={3}
                                    item
                                >
                                    <GuestShortInfo info={guest} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    {/* speakers and guest End  */}
                    {/* Registration Guideline start  */}
                    <Box>
                        <Typography sx={commonTypoSx} variant="h4">
                            Registration Guideline
                        </Typography>
                        <Typography color="secondary.light" variant="body1">
                            {event.registrationGuideline}
                        </Typography>
                        <Box my={{ lg: 15 }}>
                            <RegistrationGuidelineModule />
                        </Box>
                    </Box>
                    {/* Registration Guideline end  */}
                </Main>
            </Container>
        </>
    );
};

export default EventDetails;
