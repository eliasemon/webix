'use client';

import { Box, Button, Avatar, Container } from '@mui/material';

import InputBox from '@root/components/UI/inputBox/InputBox';
import SelectInputBox from '@root/components/UI/selectInputBox/SelectInputBox';
import { styleConfig } from '@root/styleConfig/styleConfig';

import ImageUploader from '@root/components/UI/imageUploader/ImageUploader';
import { Main, ProfilePic, Action } from './styleComponents';
import useProfileForm from '../hooks/useProfileFrom';

const ProfilePage = () => {
    const {
        register,
        handleSubmit,
        errors,
        avatar,
        onSubmit,
        onCancel,
        watch,
    } = useProfileForm();

    return (
        <Box>
            <Container>
                <Main
                    sx={{ my: 5 }}
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <ProfilePic
                        sx={{
                            mb: 6,
                            display: 'flex',
                            gap: 3,
                            alignItems: 'center',
                        }}
                    >
                        <Avatar
                            sx={{
                                height: styleConfig.responsiveHeight(126),
                                width: styleConfig.responsiveWidth(126),
                            }}
                            src={avatar && URL.createObjectURL(avatar)}
                            alt="Profile Picture"
                        />
                        <ImageUploader
                            inputProps={register('avatar', {
                                onChange: (e) => e.target.files[0],
                            })}
                            title={'Upload New Picture'}
                        />
                    </ProfilePic>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { md: '1fr 1fr' },
                            columnGap: 10,
                        }}
                    >
                        <InputBox
                            id="name"
                            value={watch('name')}
                            errors={errors.name?.message}
                            label="Name"
                            type="text"
                            inputProps={register('name')}
                        />
                        <InputBox
                            id="email"
                            value={watch('email')}
                            errors={errors.email?.message}
                            type="email"
                            label="Email"
                            inputProps={register('email')}
                        />
                        <InputBox
                            id="phone"
                            value={watch('phone')}
                            errors={errors.phone?.message}
                            label="Phone Number"
                            type="phone"
                            inputProps={register('phone')}
                        />
                        <SelectInputBox
                            id="gender"
                            label="Gender"
                            value={watch('gender')}
                            errors={errors.gender?.message}
                            items={['Male', 'Female', 'Others']}
                            selectProps={register('gender')}
                        />
                        <InputBox
                            id="bio"
                            value={watch('bio')}
                            errors={errors.bio?.message}
                            label="Bio"
                            type="text"
                            inputProps={register('bio')}
                            multiline={true}
                            rows={5}
                        />
                        <InputBox
                            id="address"
                            value={watch('address')}
                            errors={errors.address?.message}
                            label="Address"
                            type="text"
                            inputProps={register('address')}
                        />
                    </Box>
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

export default ProfilePage;
