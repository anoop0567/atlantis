import { StyleSheet, Platform } from 'react-native';

import { COLORS, SIZES, FONTS } from '../constants';

const styles = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    primaryButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 28,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: SIZES.radius * 2,
        paddingHorizontal: 20,
        paddingVertical: 4,
    },
    primaryButtonText: {
        color: COLORS.primary,
        ...FONTS.body4
    }
})

export default styles;