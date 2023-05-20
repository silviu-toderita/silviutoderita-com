import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main:'#ffffff'
        },
        secondary: {
            main:'#dddddd'
        },
        text: {
            main:'#003b68'
        }
    }
}));

export default theme;