// import { fetchDataFunctions } from '@root/fetchDataFunctions';
import ProfilePage from './components/ProfilePage';

const page = async () => {
    // const eventList = await fetchDataFunctions.eventsFetch();
    // const heroSectionInfo = await fetchDataFunctions.heroSectionFetch();
    return (
        <main>
            <ProfilePage />
        </main>
    );
};

export default page;
