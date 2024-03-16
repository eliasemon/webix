import { Button, Box, Typography } from '@mui/material';
import InputBox from '../UI/inputBox/InputBox';
import BpCheckbox from '../UI/bpCheckbox/BpCheckbox';

const SignUpForm = ({
    fullName,
    email,
    phone,
    password,
    errors,
    setFullName,
    setEmail,
    setPhone,
    setPassword,
    handleSignUp,
}) => {
    return (
        <Box>
            <InputBox
                id={'signup-fullname'}
                value={fullName}
                setValue={setFullName}
                errors={errors.fullName}
                type={'text'}
                label={'Full Name'}
            />
            <InputBox
                id={'signup-email'}
                value={email}
                setValue={setEmail}
                errors={errors.email}
                type={'email'}
                label={'Email'}
            />
            <InputBox
                id={'signup-phone'}
                value={phone}
                setValue={setPhone}
                errors={errors.phone}
                type={'text'}
                label={'Number'}
            />
            <InputBox
                id={'signup-password'}
                value={password}
                setValue={setPassword}
                errors={errors.password}
                type={'password'}
                label={'Password'}
            />
            {/* signUp conditions */}
            <Typography fontSize={14} my={3} variant="body1">
                <BpCheckbox checked sx={{ m: 0, p: 0, mr: 1.5 }} />
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our <big>privacy policy</big>.
            </Typography>
            <Button
                sx={{ py: 1.5, width: '100%' }}
                variant="contained"
                onClick={handleSignUp}
            >
                Sign Up
            </Button>
        </Box>
    );
};
export default SignUpForm;
