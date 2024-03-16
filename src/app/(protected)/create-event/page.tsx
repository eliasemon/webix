// import { fetchDataFunctions } from '@root/fetchDataFunctions';
import EventCreation from './components/EventCreation';

const page = async () => {
    // const eventList = await fetchDataFunctions.eventsFetch();
    // const heroSectionInfo = await fetchDataFunctions.heroSectionFetch();
    return (
        <main>
            <EventCreation />
        </main>
    );
};

export default page;
