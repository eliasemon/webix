import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { styleConfig } from '@root/styleConfig/styleConfig';
import CloseIcon from '@mui/icons-material/Close';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import useSignInForm from './hooks/useSignInForm';
import useSignUpForm from './hooks/useSignUpForm';
import useForgotPasswordForm from './hooks/useForgotPasswordForm';
import { Header, Body, Modal } from './styleComponents';

const headerButtonCommonSx = {
    '&:disabled': {
        color: 'primary.main',
        fontWeight: 600,
    },
    color: 'secondary.light',
    fontSize: 25,
    borderBottom: 2,
    borderRadius: 0,
    textTransform: 'none',
    py: 2,
    px: 5,
};
const AuthModal = () => {
    const [open, setOpen] = useState(true);
    const [activeForm, setActiveForm] = useState('signin');

    // Open the modal
    // const handleOpen = () => {
    //     setOpen(true);
    // };

    // Close the modal
    const handleClose = () => {
        setOpen(false);
    };

    // Toggle between sign-in, sign-up, and forgot password forms
    const handleToggleForm = (formType) => {
        setActiveForm(formType);
    };

    // Custom hooks for sign-in, sign-up, and forgot password forms
    const signInForm = useSignInForm();
    const signUpForm = useSignUpForm();
    const forgotPasswordForm = useForgotPasswordForm();

    return (
        <>
            {open && (
                <Box
                    onClick={handleClose}
                    sx={{
                        position: 'fixed',
                        background: 'rgba(0,0,0,0.4)',
                        top: 0,
                        left: 0,
                        zIndex: 6000,
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Modal
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                            backgroundColor: 'backgroundColor.light',
                            width: styleConfig.responsiveWidth(550),
                            px: styleConfig.responsivePadding(8),
                            borderRadius: 2,
                            py: styleConfig.responsivePadding(6),
                            height: 'auto',
                            zIndex: 6005,
                            position: 'relative',
                            transition: 'height 1s ease 0s',
                        }}
                    >
                        <CloseIcon
                            sx={{
                                position: 'absolute',
                                top: 15,
                                right: 15,
                                fontSize: 30,
                                cursor: 'pointer',
                                color: 'secondary.light',
                                '&:hover': {
                                    color: 'primary.main',
                                },
                            }}
                            onClick={handleClose}
                        />
                        <Header
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mb: 4,
                            }}
                        >
                            <Button
                                onClick={() => handleToggleForm('signin')}
                                disabled={activeForm === 'signin'}
                                sx={headerButtonCommonSx}
                                variant="text"
                            >
                                Sign In
                            </Button>
                            <Button
                                sx={headerButtonCommonSx}
                                onClick={() => handleToggleForm('signup')}
                                disabled={activeForm === 'signup'}
                                variant="text"
                            >
                                Sign Up
                            </Button>
                        </Header>
                        <Body>
                            {activeForm === 'signin' && (
                                /* Sign-in form */
                                <Box
                                    sx={{
                                        transition: 'height 1s ease 0s',
                                    }}
                                >
                                    <SignInForm
                                        {...signInForm}
                                        handleToggleForm={handleToggleForm}
                                    />
                                </Box>
                            )}
                            {activeForm === 'signup' && (
                                /* Sign-up form */
                                <SignUpForm {...signUpForm} />
                            )}
                            {activeForm === 'forgotpassword' && (
                                /* Forgot password form */
                                <ForgotPasswordForm {...forgotPasswordForm} />
                            )}
                        </Body>
                    </Modal>
                </Box>
            )}
        </>
    );
};

export default AuthModal;
