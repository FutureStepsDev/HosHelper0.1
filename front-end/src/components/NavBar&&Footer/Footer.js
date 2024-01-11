import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "rgb(255, 255, 255)",
    padding: theme.spacing(3),
    marginTop: "120px",
    borderTop: "1px solid #ccc",
    height: "60px",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  aboutUsColumn: {
    textAlign: "center",
  },
  contactUs: {
    minWidth: "200px",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={`${classes.aboutUsColumn} ${classes.contactUs}`}>
        <Typography variant="h7">© Copyright 2024 Hoshelper Tous droits réservés</Typography>
      </div>
      <div className={`${classes.aboutUsColumn} ${classes.contactUs}`}>
        <Typography variant="body2">Contact Us</Typography>
        <Typography variant="h7">
          <IconButton className={classes.icon}>
            <MailIcon />
          </IconButton>
          Hoshelper@gmail.com
        </Typography>
        <Typography variant="h7">
          <IconButton className={classes.icon}>
            <PhoneIcon />
          </IconButton>
          +216 21 644 554
        </Typography>
      </div>
      <div className={classes.aboutUsColumn}>
        <Typography variant="body2">Social Media</Typography>
        <IconButton className={classes.icon}>
          <InstagramIcon />
        </IconButton>
        <IconButton className={classes.icon}>
          <FacebookIcon />
        </IconButton>
      </div>
    </footer>
  );
};

export default Footer;
