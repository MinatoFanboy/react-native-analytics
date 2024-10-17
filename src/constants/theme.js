import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const COLORS = {
    primary: '#9D1F31',

    card: '#F3F4F9',
    text: '#090D20',
    textPrimary: '#D18C83',
};

const FONTS = {
    h1: {
        fontFamily: 'SpaceGrotesk-Bold',
        fontSize: 24,
        lineHeight: 32,
    },
    h2: {
        fontFamily: 'SpaceGrotesk-Bold',
        fontSize: 16,
        lineHeight: 22,
    },
    h3: {
        fontFamily: 'SpaceGrotesk-Bold',
        fontSize: 12,
        lineHeight: 22,
    },
    body1: {
        fontFamily: 'SpaceGrotesk-Regular',
        fontSize: 14,
        lineHeight: 22,
    },
    body2: {
        fontFamily: 'SpaceGrotesk-Regular',
        fontSize: 12,
        lineHeight: 22,
    },
    title1: {
        fontFamily: 'SpaceGrotesk-Medium',
        fontSize: 14,
        lineHeight: 22,
    },
    title2: {
        fontFamily: 'SpaceGrotesk-Medium',
        fontSize: 12,
        lineHeight: 22,
    },
};

const SIZES = {
    height,
    width,

    base: 12,
    space: 16,
    padding: 20,
    border: 24,
};

export { COLORS, FONTS, SIZES };
