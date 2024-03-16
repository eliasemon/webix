'use client';

import {
    Avatar,
    Container,
    List,
    ListItem,
    Typography,
    Pagination,
    Box,
    Button,
} from '@mui/material';
import { styleConfig } from '@root/styleConfig/styleConfig';
import ListViewEventCard from '@root/components/listViewEventCard/EventCard';
import GridViewEventCard from '@root/components/girdViewEventCard/EventCard';
import useWindowSize from '@root/hooks/useWindowSize';
import ExpandableText from '@root/components/UI/expandableText/ExpandableText';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { ProfileInfo, Info, EventList } from './styleComponents';
import useEventDataFetch from '../hooks/useEventDataFetch';

const profileData = {
    fullName: 'Jhone Smithy',
    bio: `Welcome to my whimsical world! I'm Luna, a curious spirit who thrives on exploring both physical and imaginary realms. Trekking through untrodden paths, diving into captivating books, and unleashing creativity on canvas, I embrace the wonders of life. Journeying through diverse landscapes, I connect with cultures and uncover hidden gems. Books are my loyal companions, transporting me to enchanting realms of knowledge. As a creative enthusiast, I experiment with various mediums, bringing imagination to life. Join me on this extraordinary expedition called life, celebrating the unknown, embracing creativity, and cherishing connections made along the way.`,
    avatar: 'a',
};
const MyEventsPage = () => {
    const { width } = useWindowSize();
    const events = useEventDataFetch();
    return (
        <>
            <Container>
                <ProfileInfo
                    sx={{
                        mt: 5,
                        mb: 15,
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'flex-start',
                        gap: 3,
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        sx={{
                            fontSize: styleConfig.responsiveFontSizes(170),
                            width: {
                                ...styleConfig.ui.avatarSizes(200),
                                xs: styleConfig.ui.avatarSizes(260).xs,
                            },
                            height: {
                                ...styleConfig.ui.avatarSizes(200),
                                xs: styleConfig.ui.avatarSizes(260).xs,
                            },
                        }}
                        src={`${profileData.avatar}`}
                        alt={profileData.fullName}
                    />
                    <Info>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Typography my={1.5} variant="h5">
                                {profileData.fullName}
                            </Typography>
                            <Button
                                sx={{ mr: styleConfig.responsiveMargin(2.5) }}
                                title="Edit Profile"
                            >
                                <BorderColorIcon
                                    sx={{
                                        color: 'primary.main',
                                        cursor: 'pointer',
                                        width: styleConfig.responsiveWidth(30),
                                        height: styleConfig.responsiveHeight(
                                            30,
                                        ),
                                    }}
                                />
                            </Button>
                        </Box>

                        {width < 900 && profileData.bio.length > 250 ? (
                            <ExpandableText text={profileData.bio} />
                        ) : (
                            <Typography variant="body1">
                                {profileData.bio}
                            </Typography>
                        )}
                    </Info>
                </ProfileInfo>
                <EventList sx={{ my: 5 }}>
                    {/* heading start */}
                    <Typography my={1} variant="h4">
                        A Magical Journey through the Events
                    </Typography>
                    {/* heading end */}
                    <List>
                        {events &&
                            events.map((event) => (
                                <ListItem
                                    aria-label="event-card"
                                    sx={{ p: 0, m: 0, my: 4 }}
                                    key={event.id}
                                >
                                    {width >= 900 ? (
                                        <ListViewEventCard event={event} />
                                    ) : (
                                        <GridViewEventCard event={event} />
                                    )}
                                </ListItem>
                            ))}
                    </List>
                </EventList>
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
                    <Pagination
                        sx={{ justifyContent: 'center' }}
                        count={10}
                        color="primary"
                    />
                </Box>
            </Container>
        </>
    );
};

export default MyEventsPage;
