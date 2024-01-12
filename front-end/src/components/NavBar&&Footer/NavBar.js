import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHospitals } from "../Features/AllData";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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
import { setUser } from "../Features/User";
import { setPharmacies } from "../Features/pharmacyData";
import { fetchPhamacies } from "../Features/pharmacyData";
import { fetchHospitals } from "../Features/AllData";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%',
    height:'100%',
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
  const log = useSelector((state) => state.user.log);
  console.log(log);
  const navigate = useNavigate();
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
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="black"
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
            <button class="btnHos" onClick={() => navigate("/")}>
              HOSHELPER
            </button>
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{ color: "black" }} />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              style={{ color: "black" }}
              inputProps={{ "aria-label": "search" }}
              onChange={(x) => filterHandler(x.target.value)}
            />
          </div>
          <div>
            <button class="cta" onClick={() => navigate("/hospital")}>
              <span>HOSPITALS</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10"></svg>
            </button>

            <button class="cta" onClick={() => navigate("/pharmacy")}>
              <span>PHARMACY</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10"></svg>
            </button>
            {!log && (
              <button class="cta" onClick={() => navigate("/login")}>
                <span>SIGN IN</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10"></svg>
              </button>
            )}
            {!log && (
              <button class="cta" onClick={() => navigate("/signup")}>
                <span>SIGN UP</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10"></svg>
              </button>
            )}
          </div>

          {log && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="black"
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
                <MenuItem component={Link} to="/profile" onClick={handleClose}>
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    dispatch(setUser(false));

                    navigate("/");
                  }}
                >
                  Log out
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
