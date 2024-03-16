import { Button, Box } from '@mui/material';
import InputBox from '../UI/inputBox/InputBox';

const ForgotPasswordForm = ({
    email,
    errors,
    setEmail,
    handleForgotPassword,
}) => {
    return (
        <Box>
            <InputBox
                id={'forgotpassword-email'}
                type={'email'}
                value={email}
                setValue={setEmail}
                errors={errors.email}
                label={'Email'}
            />
            <Button variant="contained" onClick={handleForgotPassword}>
                Reset Password
            </Button>
        </Box>
    );
};
export default ForgotPasswordForm;
