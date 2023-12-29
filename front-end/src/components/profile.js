import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from "@material-ui/core";
import {
  Email,
  Phone,
  Edit,
  Facebook,
  Twitter,
  Instagram,
} from "@material-ui/icons";
import "./Profile.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const PersonalProfile = () => {
  const sotreddata=localStorage.getItem('user')
  const user = JSON.parse(sotreddata);
  return (
    <div className="profilContainer ">
      <section className="vh-100">
        <Container className="py-5 h-100">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="h-100"
          >
            {/* Partie Gauche */}
            <Grid item md={4}>
              <Card
                className="mb-3"
                style={{
                  width: "300px",
                  height: "700px",
                  borderRadius: ".5rem",
                  borderTopLeftRadius: ".5rem",
                  borderBottomLeftRadius: ".5rem",
                }}
              >
                <Grid container>
                  <div
                    className="gradient-custom text-center text-white"
                    style={{
                      width: "300px",
                      height: "700px",
                    }}
                  >
                    <Avatar
                      src={profil.image}
                      alt="Avatar"
                      className="my-5"
                      style={{
                        width: "200px",
                        height: "200px",
                        marginLeft: "50px",
                      }}
                    />
                    <Typography variant="h5" style={{ marginTop: "70px" }}>
                      {profil.UserName}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ marginTop: "70px" }}
                    >
                      {profil.role}
                    </Typography>
                    <IconButton style={{ marginTop: "70px" }}>
                      <button onClick={() => navigate("/UpdateProfil")}>
                        <Edit />
                      </button>
                    </IconButton>
                  </div>
                </Grid>
              </Card>
            </Grid>

            {/* Partie Droite */}
            <Grid item md={8}>
              <Card style={{ borderRadius: ".5rem" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{ fontSize: "1.5rem", marginBottom: "1rem" }}
                  >
                    Information
                  </Typography>
                  <hr className="mt-0 mb-4" />

                  <div style={{ marginTop: "2rem" }}>
                    <Typography variant="body2" style={{ lineHeight: "1.8" }}>
                      <strong style={{ color: "#1da1f2" }}>Email:</strong>{" "}
                      {profil.email}
                    </Typography>
                  </div>

                  {profil.role === "Pharmacy" && (
                    <div style={{ marginTop: "1rem" }}>
                      <Typography variant="body2" style={{ lineHeight: "1.8" }}>
                        <strong style={{ color: "#1da1f2" }}>Adresse:</strong>{" "}
                        {profil.email}
                      </Typography>
                    </div>
                  )}

                  <div style={{ marginTop: "1rem" }}>
                    <Typography variant="body2" style={{ lineHeight: "1.8" }}>
                      <strong style={{ color: "#1da1f2" }}>Phone:</strong> 123
                      456 789
                    </Typography>
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <Typography variant="body2" style={{ lineHeight: "1.8" }}>
                      <strong style={{ color: "#1da1f2" }}>Autre Email:</strong>{" "}
                      info@example.com
                    </Typography>
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <Typography variant="body2" style={{ lineHeight: "1.8" }}>
                      <strong style={{ color: "#1da1f2" }}>Autre Phone:</strong>{" "}
                      123 456 789
                    </Typography>
                  </div>

                  <div
                    className="d-flex justify-content-start"
                    style={{ marginTop: "2rem" }}
                  >
                    <IconButton href="#!" style={{ color: "#1877f2" }}>
                      <Facebook fontSize="large" />
                    </IconButton>
                    <IconButton href="#!" style={{ color: "#1da1f2" }}>
                      <Twitter fontSize="large" />
                    </IconButton>
                    <IconButton href="#!" style={{ color: "#e4405f" }}>
                      <Instagram fontSize="large" />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default PersonalProfile;
