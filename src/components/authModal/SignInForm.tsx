import { Button, Box, Typography } from '@mui/material';
import InputBox from '../UI/inputBox/InputBox';
import { Action } from './styleComponents';

const SignInForm = ({
    email,
    password,
    errors,
    setEmail,
    setPassword,
    handleSignIn,
    handleToggleForm,
}) => {
    return (
        <Box>
            <InputBox
                id={'signin-email'}
                value={email}
                setValue={setEmail}
                errors={errors.email}
                type={'email'}
                label={'Email'}
            />
            <InputBox
                id={'signin-password'}
                value={password}
                setValue={setPassword}
                errors={errors.password}
                type={'password'}
                label={'Password'}
            />
            <Typography
                onClick={() => handleToggleForm('forgotpassword')}
                sx={{
                    display: 'inline',
                    cursor: 'pointer',
                    float: 'right',
                    '&:hover': { color: 'primary.main' },
                }}
                fontSize={14}
                variant="body1"
            >
                Forgotten password?
            </Typography>
            <Action sx={{ mt: 7 }}>
                <Button
                    sx={{ py: 1.5, width: '100%', mb: 1.5 }}
                    variant="contained"
                    onClick={handleSignIn}
                >
                    Sign In
                </Button>
                <Typography
                    fontSize={14}
                    my={1}
                    textAlign={'center'}
                    variant="body1"
                >
                    Don't have an account?
                </Typography>
                <Button
                    sx={{ py: 1.5, width: '100%', color: 'secondary.main' }}
                    variant="outlined"
                    onClick={() => handleToggleForm('signup')}
                >
                    Sign Up
                </Button>
            </Action>
        </Box>
    );
};
export default SignInForm;
