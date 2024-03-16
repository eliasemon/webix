export const dynamicSize = (base, ratio = 1) => ({
    xs: base * 0.7 * ratio,
    sm: base * 0.8 * ratio,
    md: base * 0.9 * ratio,
    lg: base * ratio,
    xl: base * 1.2 * ratio,
});
