import { createMuiTheme } from "@material-ui/core/styles";

const RubiwinTheme = createMuiTheme({
    typography: {
        fontFamily: "Montserrat, Arial, sans-serif",
    },
    palette: {
        primary:  {
            // light: will be calculated from palette.primary.main,
            main: '#00c3ff',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary:  {
            // light: will be calculated from palette.primary.main,
            main: '#40598B',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        }
    },
});

export default RubiwinTheme;
