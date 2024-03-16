import { fetchDataFunctions } from '@root/fetchDataFunctions';
import EventDetails from '../components/EventDetails';

const page = async () => {
    const event = await fetchDataFunctions.singleEventFetch(1);
    return (
        <main>
            <EventDetails event={event.data} />
        </main>
    );
};

export default page;
