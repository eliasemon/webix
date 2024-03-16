'use client';

import { Container, Typography } from '@mui/material';
import HeroSection from '@root/components/heroSection/HeroSection';
import React from 'react';
import { styleConfig } from '@root/styleConfig/styleConfig';
import EventCard from '@root/components/girdViewEventCard/EventCard';
import { CardContainer, Heading, Main } from './styleComponents';

const HomePage = ({ eventList, heroSectionInfo }) => {
    return (
        <>
            <Container>
                <HeroSection {...heroSectionInfo} />
                <Main sx={{ my: styleConfig.responsiveMargin(5) }}>
                    <Heading mb={styleConfig.responsiveMargin(6)}>
                        <Typography
                            my={styleConfig.responsiveMargin(1)}
                            variant="h4"
                        >
                            Upcoming Events
                        </Typography>
                        <Typography color={'secondary.light'} variant="body1">
                            We are thrilled to invite you to our upcoming
                            webinar hosted on our cutting-edge platform. This is
                            an exclusive opportunity for you to expand your
                            knowledge, network with industry experts, and gain
                            valuable insights into the latest trends and
                            developments in your field.
                        </Typography>
                    </Heading>

                    <CardContainer
                        sx={{
                            display: 'grid',
                            margin: { xs: '0 auto', md: '0' },
                            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                            columnGap: { xs: 2, sm: 3, lg: 4 },
                            rowGap: { xs: 2, sm: 3, lg: 4 },
                            mb: styleConfig.responsiveMargin(15),
                        }}
                    >
                        {eventList.map((event) => (
                            <EventCard key={event.title} event={event} />
                        ))}
                    </CardContainer>
                </Main>
            </Container>
        </>
    );
};

export default HomePage;
