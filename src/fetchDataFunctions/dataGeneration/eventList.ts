import { faker } from '@faker-js/faker';

const invitedAsLift = ['Guest', 'Speaker', 'Host', 'Co-Host'];
export const guestInfoListGenerator = (number) => {
    const data = [];
    for (let i = 0; i <= number; i += 1) {
        data.push({
            id: faker.number.int(),
            fullName: faker.person.fullName(),
            avatar: faker.image.avatar(),
            designation: faker.person.jobTitle(),
            company: faker.company.name(),
            invitedAs: invitedAsLift[Math.floor(Math.random() * 4)],
        });
    }
    const returnData = {
        list: data,
        message: `We cordially invite you to attend "Front-End Development Unleashed: The Ultimate Guide," a prestigious event dedicated to the exploration and advancement of front-end development. This unparalleled gathering will provide a unique opportunity to acquire knowledge from the industry's most brilliant and esteemed programming experts who will grace the occasion as our distinguished guest speakers`,
    };
    return returnData;
};
export const generateEventsFakeData = (number) => {
    const data = [];
    for (let i = 0; i <= number; i += 1) {
        data.push({
            id: faker.number.int(),
            title:
                faker.commerce.productName() +
                faker.commerce.productName() +
                faker.commerce.productName(),
            media: `/cardImages/${Math.floor(Math.random() * 10)}.png`,
            summary: faker.definitions.commerce.product_description,
            eventSpecs: {
                skillsLevel: 'Intermediate  Level',
                startTime: '6th December 2023- 05.00PM',
                durations: '5 Hour',
                RegistrationDeadline: '7th June 2022',
                price: faker.number.int(20000),
            },
            isPurchased: faker.datatype.boolean(),
            liveJoinLink: faker.datatype.boolean()
                ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                : '',
            organizerInfo: {
                id: faker.number.int(),
                title: faker.company.buzzNoun(),
            },
            guestInfoList: guestInfoListGenerator(
                Math.floor(Math.random() * 20),
            ),
            registrationGuideline: `We cordially invite you to attend "Front-End Development Unleashed: The Ultimate Guide," a prestigious event dedicated to the exploration and advancement of front-end development. This unparalleled gathering will provide a unique opportunity to acquire knowledge from the industry's most brilliant and esteemed programming experts who will grace the occasion as our distinguished guest speakers`,
        });
    }
    return [...data];
};
