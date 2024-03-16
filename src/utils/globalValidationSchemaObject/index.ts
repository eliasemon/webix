import * as Yup from 'yup';

export const name = Yup.string().required('Name is required');
export const email = Yup.string()
    .email('Invalid email address')
    .required('Email is required');
export const phone = Yup.string()
    .required('Phone number is required')
    .matches(/^\d+$/, 'Phone number must contain only digits')
    .min(11, 'Phone number must be at least 11 digits')
    .max(15, 'Phone number can be at most 15 digits');
export const gender = Yup.string().required('Gender is required');
export const bio = Yup.string().max(300, 'Bio should be in 300 char');
export const address = Yup.string().max(100, 'address should be in 100 char');
