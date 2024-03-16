import { useState } from 'react';
import * as yup from 'yup';

// Custom hook for sign-up form
const useSignUpForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
    });

    const schema = yup.object().shape({
        fullName: yup.string().required('Full Name is required'),
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
        phone: yup
            .string()
            .required('Phone number is required')
            .matches(/^\d+$/, 'Phone number must contain only digits')
            .min(11, 'Phone number must be at least 11 digits')
            .max(15, 'Phone number can be at most 15 digits'),
        password: yup
            .string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    // Handle sign-up form submission
    const handleSignUp = () => {
        schema
            .validate(
                { fullName, email, phone, password },
                { abortEarly: false },
            )
            .then((validData) => {
                // Handle sign-up logic here with validData
                console.log(validData);
            })
            .catch((validationErrors) => {
                const errorMessages = {
                    fullName: '',
                    email: '',
                    phone: '',
                    password: '',
                };
                validationErrors.inner.forEach((error) => {
                    errorMessages[error.path] = error.message;
                });
                setErrors(errorMessages);
            });
    };

    return {
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
    };
};

export default useSignUpForm;
