export const COLORS = {
    // base colors
    primary: '#F1800D',
    secondary: "rgba(38, 50, 56, 0.7)",

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
    mantis: "#69C779",
    transparent: "transparent"
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 8,

    // font sizes
    h1: 18,
    h2: 16,
    h3: 14,
    h4: 12,
    body1: 18,
    body2: 16,
    body3: 14,
    body4: 12
};

export const FONTS = {
    h1: { fontFamily: 'Montserrat-Bold', fontSize: SIZES.h1, lineHeight: 28 },
    h2: { fontFamily: 'Montserrat-Bold', fontSize: SIZES.h2, lineHeight: 22 },
    h3: { fontFamily: 'Montserrat-Bold', fontSize: SIZES.h3, lineHeight: 18 },
    h4: { fontFamily: 'Montserrat-Bold', fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.body1, lineHeight: 28 },
    body2: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.body2, lineHeight: 22 },
    body3: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.body3, lineHeight: 18 },
    body4: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.body4, lineHeight: 16 }
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;