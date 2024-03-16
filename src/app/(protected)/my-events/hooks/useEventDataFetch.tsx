import { fetchDataFunctions } from '@root/fetchDataFunctions';
import { useState, useEffect } from 'react';

const useEventDataFetch = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetchDataFunctions.eventsFetch().then((list) => {
            setEvents(list.data);
        });
    }, []);
    return events;
};

export default useEventDataFetch;
