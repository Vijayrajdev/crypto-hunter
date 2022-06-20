import {
  AppBar,
  Container,
  createTheme,
  Toolbar,
  Typography,
  ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  paragraph: {
    color: "white",
    fontFamily: "Montserrat",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const history = useHistory();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container className={classes.container}>
            <Toolbar>
              <Typography
                onClick={() => history.push("/")}
                className={classes.title}
                variant="h6"
              >
                Crypto Analyser
              </Typography>
              <Typography className={classes.paragraph} variant="p">
                
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Footer;
