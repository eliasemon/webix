// import { fetchDataFunctions } from '@root/fetchDataFunctions';
import MyEventsPage from './components/MyEventsPage';

const page = async () => {
    // const eventList = await fetchDataFunctions.eventsFetch();
    // const heroSectionInfo = await fetchDataFunctions.heroSectionFetch();
    return (
        <main>
            <MyEventsPage />
        </main>
    );
};

export default page;
