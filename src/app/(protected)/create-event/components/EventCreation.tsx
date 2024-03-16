'use client';

import { Box, Button, Container, CardMedia, Typography } from '@mui/material';

import InputBox from '@root/components/UI/inputBox/InputBox';
import { styleConfig } from '@root/styleConfig/styleConfig';

import ImageUploader from '@root/components/UI/imageUploader/ImageUploader';
import useAutoCompleteSelectionWithApiCall from '@root/hooks/useAutoCompleteSelectionWithApiCall';
import { Main, EventMedia, Action, EventSpecs } from './styleComponents';
import useEventCreationForm from '../hooks/useEventCreationForm';
import GuestSelection from './GuestSelection';

const EventCreation = () => {
    const {
        register,
        handleSubmit,
        errors,
        eventMedia,
        onSubmit,
        onCancel,
        watch,
    } = useEventCreationForm();
    const autoCompleteSelection = useAutoCompleteSelectionWithApiCall();

    return (
        <Box>
            <Container>
                <Main
                    sx={{ my: 5 }}
                    component="form"
                    onSubmit={handleSubmit((eventData) =>
                        onSubmit(
                            eventData,
                            autoCompleteSelection.selectedOptions,
                        ),
                    )}
                >
                    <Box>
                        <Typography variant="h3">Event Creation</Typography>
                        <InputBox
                            id="title"
                            value={watch('title')}
                            errors={errors.title?.message}
                            label="Title"
                            type="text"
                            inputProps={register('title')}
                        />
                        <InputBox
                            id="description"
                            value={watch('description')}
                            errors={errors.description?.message}
                            label="Description"
                            type="text"
                            inputProps={register('description')}
                            multiline={true}
                            rows={6}
                        />
                        <EventSpecs
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { md: '1fr 1fr' },
                                columnGap: 10,
                            }}
                        >
                            <InputBox
                                id="registrationStart"
                                value={watch('eventSpecs.registrationStart')}
                                type="datetime-local"
                                label="Registration Start"
                                inputProps={register(
                                    'eventSpecs.registrationStart',
                                )}
                            />
                            <InputBox
                                id="registrationDeadLine"
                                value={watch('eventSpecs.registrationDeadLine')}
                                type="datetime-local"
                                label="Registration Dead Line"
                                inputProps={register(
                                    'eventSpecs.registrationDeadLine',
                                )}
                            />
                            <InputBox
                                id="eventStartTime"
                                value={watch('eventSpecs.eventStartTime')}
                                type="datetime-local"
                                label="Event Start Time"
                                inputProps={register(
                                    'eventSpecs.eventStartTime',
                                )}
                            />
                            <InputBox
                                id="duration"
                                value={watch('eventSpecs.duration')}
                                type="number"
                                label="Duration In Hour"
                                inputProps={register('eventSpecs.duration')}
                            />
                            <InputBox
                                id="skillsLevel"
                                value={watch('eventSpecs.skillsLevel')}
                                type="text"
                                label="Skills Level"
                                inputProps={register('eventSpecs.skillsLevel')}
                            />
                            <InputBox
                                id="maxParticipants"
                                value={watch('eventSpecs.maxParticipants')}
                                type="Number"
                                label="Max Participants"
                                inputProps={register(
                                    'eventSpecs.maxParticipants',
                                )}
                            />
                            <InputBox
                                id="price"
                                value={watch('eventSpecs.price')}
                                type="Number"
                                label="Event Price In TK"
                                inputProps={register('eventSpecs.price')}
                            />
                        </EventSpecs>
                        <GuestSelection {...autoCompleteSelection} />
                    </Box>
                    <EventMedia my={4}>
                        {eventMedia && (
                            <CardMedia
                                sx={{
                                    mb: 2,
                                    height: styleConfig.responsiveHeight(302),
                                    width: styleConfig.responsiveWidth(402),
                                    background: `url(${
                                        eventMedia &&
                                        URL.createObjectURL(eventMedia)
                                    })`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat, no-repeat',
                                    backgroundPosition: 'left , right',
                                    borderRadius: 5,
                                }}
                            />
                        )}
                        <ImageUploader
                            inputProps={register('eventMedia', {
                                onChange: (e) => e.target.files[0],
                            })}
                            title={'Upload New Picture'}
                        />
                    </EventMedia>
                    <Action sx={{ display: 'flex', gap: 3 }} mt={2}>
                        <Button variant="contained" type="submit">
                            Save Changes
                        </Button>
                        <Button variant="outlined" onClick={onCancel}>
                            Cancel
                        </Button>
                    </Action>
                </Main>
            </Container>
        </Box>
    );
};

export default EventCreation;
