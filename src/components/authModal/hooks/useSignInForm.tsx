import { useState } from 'react';
import * as yup from 'yup';

// Custom hook for sign-in form
const useSignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const schema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    // Handle sign-in form submission
    const handleSignIn = () => {
        schema
            .validate({ email, password }, { abortEarly: false })
            .then((validData) => {
                // Handle sign-in logic here with validData
                console.log(validData);
            })
            .catch((validationErrors) => {
                const errorMessages = { email: '', password: '' };
                validationErrors.inner.forEach((error) => {
                    errorMessages[error.path] = error.message;
                });
                setErrors(errorMessages);
            });
    };

    return {
        email,
        password,
        errors,
        setEmail,
        setPassword,
        handleSignIn,
    };
};

export default useSignInForm;
