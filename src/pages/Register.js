import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "../Axios";
import { useAuth } from "../context/Auth";
import { useFormik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    password_repeat: "",
  };
  const onSubmit = async (values) => {
    try {
      let { username, email, password, password_repeat } = values;
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
        password_repeat,
      });
      formik.resetForm();
      auth.login(res.data.data);
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err.response.data.mess);
    }
  };

  const validate = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "Prašome užpildyti laukelį (Slapyvardis)";
    } else if (values.username.length < 2) {
      errors.username = "Slapyvardis turi būti min. 2 simbolių!";
    } else if (values.username.length > 15) {
      errors.username = "Slapyvardis turi būti max. 15 simbolių!";
    } else if (!/^[a-zA-Z0-9 ]+$/.test(values.username)) {
      errors.username =
        "Slapyvardis turi būti sudarytas tik iš lotyniškų raidžių ir skaičių!";
    }
    if (!values.email) {
      errors.email = "Prašome užpildyti laukelį (El. paštas)";
    } else if (
      !/^[a-zA-Z0-9!#$%&'*+\-\/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#$%&'*+\-\/=?^_`{|}~]+)*@[a-zA-Z0-9\-]+(?:\.[a-zA-Z0-9][a-zA-Z0-9\-]*)+$/.test(
        values.email
      )
    ) {
      errors.email = "Neteisingas El. pašto formatas";
    }
    if (!values.password) {
      errors.password = "Prašome užpildyti laukelį (Slaptažodis)";
    } else if (values.password.length < 7) {
      errors.password = "Slaptažodis turi būti min. 7 simbolių!";
    } else if (values.password.length > 50) {
      errors.password = "Slaptažodis turi būti max. 50 simbolių!";
    } else if (!/\d/.test(values.password)) {
      errors.password = "Slaptažodis turi turėti min. 1 skaičių";
    }
    if (!values.password_repeat) {
      errors.password_repeat =
        "Prašome užpildyti laukelį (Patvirtinti naują slaptažodį)";
    } else if (values.password_repeat !== values.password) {
      errors.password_repeat = "Slaptažodžiai nesutampa";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <Navbar />
      <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
        <div className="w-40-w p-5 rounded">
          <form onSubmit={formik.handleSubmit}>
            <h3>Registracija</h3>
            <div className="mb-2">
              <label htmlFor="email">Slapyvardis</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Įveskite slapyvardį"
                className="form-control"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="form-control2">
                {formik.touched.username && formik.errors.username ? (
                  <div className="alert alert-danger" role="alert">
                    <span>{formik.errors.username} </span>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="email">El. Paštas</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Įveskite el. paštą"
                className="form-control"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="form-control2">
                {formik.touched.email && formik.errors.email ? (
                  <div className="alert alert-danger" role="alert">
                    <span>{formik.errors.email} </span>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="password">Slaptažodis</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="form-control"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="form-control2">
                {formik.touched.password && formik.errors.password ? (
                  <div className="alert alert-danger" role="alert">
                    <span>{formik.errors.password} </span>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="password">Pakartokite slaptažodį</label>
              <input
                id="password_repeat"
                name="password_repeat"
                type="password"
                placeholder="Enter password"
                className="form-control"
                value={formik.values.password_repeat}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="form-control2">
                {formik.touched.password_repeat &&
                formik.errors.password_repeat ? (
                  <div className="alert alert-danger" role="alert">
                    <span>{formik.errors.password_repeat} </span>
                  </div>
                ) : null}
              </div>
            </div>
            <p className="text-right">
              Turite paskyra? <br />
              <Link className="text-right text-dark" to="/Login">
                Prisijungti
              </Link>
            </p>
            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Užsiregistruoti
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
