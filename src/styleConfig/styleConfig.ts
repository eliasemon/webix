import { dynamicSize } from './utils';

export const styleConfig = {
    ui: {
        avatarSizes: (base: number, ratio?: number) => dynamicSize(base, ratio),
    },
    responsivePadding: (base: number) => dynamicSize(base),
    responsiveMargin: (base: number) => dynamicSize(base),
    responsiveWidth: (base: number, ratio?: number) => dynamicSize(base, ratio),
    responsiveHeight: (base: number, ratio?: number) =>
        dynamicSize(base, ratio),
    responsiveFontSizes: (base: number, ratio?: number) =>
        dynamicSize(base, ratio),
    containerMaxWidth: 'sm',
};
