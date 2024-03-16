import { fetchDataFunctions } from '@root/fetchDataFunctions';
import HomePage from './components/HomePage';

const page = async () => {
    const eventList = await fetchDataFunctions.eventsFetch();
    const heroSectionInfo = await fetchDataFunctions.heroSectionFetch();
    return (
        <main>
            <HomePage
                eventList={eventList.data}
                heroSectionInfo={heroSectionInfo.data}
            />
        </main>
    );
};

export default page;
