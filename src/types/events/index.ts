export interface IOrganizerInfo {
    id: string;
    title?: string;
    summary?: string;
    avatar?: string;
}
export interface IGuestInfo {
    id: string;
    fullName?: string;
    avatar?: string;
    designation?: string;
    company?: string;
    invitedAs?: string;
    messageRelatedToEvent?: string;
}

export interface IEventSpecs {
    skillsLevel: string; // Intermediate  Level
    startTime: string; // 6th December 2023- 05.00PM
    durations: string; // 5 Hour
    RegistrationDeadline: string; // 7th June 2022
    price?: number;
}
export interface IGuestInfoList {
    list: IGuestInfo[];
    message?: string;
}
export interface IEvent {
    id: string;
    title: string;
    media?: string;
    summary?: string;
    eventSpecs?: IEventSpecs;
    guestInfoList?: IGuestInfoList;
    organizerInfo?: IOrganizerInfo;
    registrationGuideline?: string;
    liveJoinLink?: string;
    isPurchased?: boolean;
    isLive?: boolean;
    isDraft?: boolean;
}
