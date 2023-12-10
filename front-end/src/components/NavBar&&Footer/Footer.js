import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    marginTop: "auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  aboutUsContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  aboutUsColumn: {
    flex: 1,
    padding: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <footer
        className={classes.footer}
        style={{ backgroundColor: "rgb(248, 241, 241)", padding: "0" }}
      >
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="div"
        >
          <div className={classes.aboutUsContainer}>
            <div className={classes.aboutUsColumn}>
              <h5>About Us</h5>
              <p>About</p>
            </div>
            <div className={classes.aboutUsColumn}>
              <h5>contact Us</h5>
              <p>num : +216 71 11 11 11 </p>
            </div>
            <div className={classes.aboutUsColumn}>
              <h5>contact Us</h5>
              <p>num : +216 71 11 11 11 </p>
            </div>
          </div>
        </Typography>
      </footer>
    </div>
  );
};

export default Footer;
