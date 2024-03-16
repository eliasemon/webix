// import {
//     name,
//     email,
//     phone,
//     gender,
//     address,
//     bio,
// } from '@root/utils/globalValidationSchemaObject';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import * as Yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

// const validationSchema: any = Yup.object().shape({
//     name,
//     email,
//     phone,
//     gender,
//     address,
//     bio,
// });

interface EventCreationFormValues {
    title?: string;
    description?: string;
    eventMedia?: string;
    eventSpecs: any;
}

const useEventCreationForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<EventCreationFormValues>();
    const [eventMedia, setEventMedia] = useState(undefined);

    const onSubmit = (eventData: EventCreationFormValues, eventGuest) => {
        console.log(eventData, eventGuest);
    };
    const onCancel = () => {
        reset();
    };
    const eventMediaFile = watch('eventMedia') && watch('eventMedia')[0];
    useEffect(() => {
        setEventMedia(eventMediaFile);
    }, [eventMediaFile]);
    return {
        register,
        handleSubmit,
        errors,
        eventMedia,
        onSubmit,
        onCancel,
        watch,
    };
};

export default useEventCreationForm;
