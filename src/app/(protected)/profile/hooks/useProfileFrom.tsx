import {
    name,
    email,
    phone,
    gender,
    address,
    bio,
} from '@root/utils/globalValidationSchemaObject';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema: any = Yup.object().shape({
    name,
    email,
    phone,
    gender,
    address,
    bio,
});

interface ProfileFormValues {
    name?: string;
    email?: string;
    phone?: string;
    gender?: string;
    bio?: string;
    address?: string;
    avatar?: string;
}

const useProfileForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<ProfileFormValues>({
        resolver: yupResolver(validationSchema),
    });
    const [avatar, setAvatar] = useState(undefined);

    const onSubmit = (data: ProfileFormValues) => {
        console.log(data);
    };
    const onCancel = () => {
        reset();
    };
    const avatarFile = watch('avatar') && watch('avatar')[0];
    useEffect(() => {
        setAvatar(avatarFile);
    }, [avatarFile]);
    return {
        register,
        handleSubmit,
        errors,
        avatar,
        onSubmit,
        onCancel,
        watch,
    };
};

export default useProfileForm;
