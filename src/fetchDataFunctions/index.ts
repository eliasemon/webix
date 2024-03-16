import { generateEventsFakeData } from './dataGeneration/eventList';
import { generateHeroSectionData } from './dataGeneration/heroSection';

export const fetchDataFunctions = {
    eventsFetch: async () => {
        return Promise.resolve({
            message: 'succesfull',
            data: generateEventsFakeData(Math.floor(Math.random() * 20)),
        });
    },
    singleEventFetch: async (eventId) => {
        return Promise.resolve({
            message: 'succesfull',
            data: generateEventsFakeData(eventId)[0],
        });
    },
    heroSectionFetch: async () => {
        return Promise.resolve({
            message: 'succesfull',
            data: generateHeroSectionData(),
        });
    },
};
