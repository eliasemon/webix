import { useState } from 'react';
import * as yup from 'yup';

// Custom hook for forgot password form
const useForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ email: '' });

    const schema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
    });

    // Handle forgot password form submission
    const handleForgotPassword = () => {
        schema
            .validate({ email }, { abortEarly: false })
            .then((validData) => {
                // Handle forgot password logic here with validData
                console.log(validData);
            })
            .catch((validationErrors) => {
                const errorMessages = { email: '' };
                validationErrors.inner.forEach((error) => {
                    errorMessages[error.path] = error.message;
                });
                setErrors(errorMessages);
            });
    };

    return {
        email,
        errors,
        setEmail,
        handleForgotPassword,
    };
};
export default useForgotPasswordForm;
