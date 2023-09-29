import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#eeeeee', // Replace with your desired primary color
    },
    secondary: {
      main: '#eeeeee', // Replace with your desired secondary color
    },
  },
});


function RetailerButtons({ label, link }) {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary"
        variant="text"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </Button>
    </ThemeProvider>
  );
}

RetailerButtons.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default RetailerButtons;
