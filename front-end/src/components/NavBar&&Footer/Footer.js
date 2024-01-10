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
    padding: theme.spacing(6),
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderTop: "1px solid #ccc", // Border at the top of the footer
  },
  aboutUsContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
  aboutUsColumn: {
    flex: 1,
    padding: theme.spacing(2),
    textAlign: "center",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.aboutUsContainer}>
        <div className={classes.aboutUsColumn}>
          <Typography variant="h6">About Us</Typography>
          <Typography variant="body2">This site is to help you to make your appointement more easy</Typography>
        </div>
        <div className={classes.aboutUsColumn}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body2">
            <IconButton className={classes.icon}>
              <MailIcon />
            </IconButton>
           Hoshelper@gmail.com
          </Typography>
          <Typography variant="body2">
            <IconButton className={classes.icon}>
              <PhoneIcon />
            </IconButton>
            +216 21 644 554
          </Typography>
        </div>
        <div className={classes.aboutUsColumn}>
          <Typography variant="h6">Social Media</Typography>
          <IconButton className={classes.icon}>
            <InstagramIcon />
          </IconButton>
          <IconButton className={classes.icon}>
            <FacebookIcon />
          </IconButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
