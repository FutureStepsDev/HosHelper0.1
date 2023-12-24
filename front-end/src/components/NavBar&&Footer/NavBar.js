import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Drawer from "@material-ui/core/Drawer";
import Sidebar from "./SideBar";
import { setHospitals } from "../Features/AllData";
import { setPharmacies } from "../Features/pharmacyData";
import { fetchPhamacies } from "../Features/pharmacyData";
import { fetchHospitals } from "../Features/AllData";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  useEffect(() => {
    dispatch(fetchPhamacies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchHospitals());
  }, [dispatch]);

  const hospitals = useSelector((state) => state.hospitals.data);
  const pharmacies = useSelector((state) => state.pharmacies.data);

  const filterHandler = (e) => {
    const searchTerm = e.trim().toLowerCase();
    const filteredHos = hospitals.filter((item) =>
      item.hospitalName.toLowerCase().includes(searchTerm)
    );
    const filteredPharmacy = pharmacies.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    dispatch(setHospitals(filteredHos));
    dispatch(setPharmacies(filteredPharmacy));
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#3498db" }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            className={classes.drawer}
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerContainer}>
              <Sidebar />
            </div>
          </Drawer>

          <Typography variant="h6" className={classes.title}>
            <Button
              variant="contained"
              color="#3498db"
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
                color: "#3498db",
              }}
              href="/"
            >
              HosHelper
            </Button>
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(x) => filterHandler(x.target.value)}
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="#3498db"
              href="/hospital"
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
                color: "#3498db",
              }}
            >
              Hospital{" "}
            </Button>
            <Button
              variant="contained"
              color="#3498db"
              href="/pharmacy"
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
                color: "#3498db",
              }}
            >
              pharmacy
            </Button>
            <Button
              variant="contained"
              color="#3498db"
              href="/"
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
                color: "#3498db",
              }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              color="#3498db"
              href="/"
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
                color: "#3498db",
              }}
            >
              Sign Up
            </Button>
          </div>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
