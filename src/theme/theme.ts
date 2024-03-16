/* eslint-disable @typescript-eslint/no-shadow */
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { darkPalette, lightPalette } from './colorPalette';

declare module '@mui/material/styles' {
    interface Palette {
        backgroundColor?: Palette['primary'];
    }

    interface PaletteOptions {
        backgroundColor?: PaletteOptions['primary'];
    }
}

export const theme = (mode = 'dark') => {
    const colorPalette = mode === 'dark' ? darkPalette : lightPalette;
    return responsiveFontSizes(
        createTheme({
            palette:
                mode === 'dark'
                    ? { mode: 'dark', ...colorPalette }
                    : colorPalette,
            components: {
                MuiAvatar: {
                    styleOverrides: {
                        root: {
                            backgroundColor: colorPalette.primary.main,
                            color: colorPalette.primary.contrastText,
                        },
                    },
                },
                MuiContainer: {
                    defaultProps: {
                        maxWidth: 'xl',
                    },
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                            textTransform: 'capitalize',
                        },
                    },
                },
            },
            typography: (theme) => ({
                h4: {
                    color: theme.secondary.main,
                    fontWeight: 600,
                    fontSize: 35,
                },
                h5: {
                    color: theme.secondary.main,
                    fontWeight: 600,
                },
                h6: {
                    color: theme.secondary.main,
                    fontWeight: 600,
                },
                caption: {
                    color: theme.secondary.main,
                    fontWeight: 600,
                    fontSize: 18,
                },
                body1: {
                    color: theme.secondary.light,
                },
            }),
        }),
    );
};
