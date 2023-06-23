import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useAuth } from "../context/Auth";
import axios from "../Axios";

export default function Login() {
  const navigate = useNavigate();
  const auth = useAuth();

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = async (values) => {
    try {
      let { username, password } = values;
      const res = await axios.post("/auth/login", {
        username,
        password,
      });
      formik.resetForm();
      auth.login(res.data.data);
      navigate("/", { replace: true });
    } catch (err) {
      alert(err.response.data.mess);
    }
  };

  const validate = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "Prašome užpildyti laukelį (Slapyvardis)";
    }
    if (!values.email) {
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.text(values.email)
    ) {
      errors.email = "Neteisingas El. pašto formatas";
    }
    if (!values.password) {
      errors.password = "Prašome užpildyti laukelį (Slaptažodis)";
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
            <h3>Prisijungti</h3>
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

            <p className="text-right">
              <Link className="text-right text-dark" to="/Register">
                Registracija
              </Link>
            </p>
            <div className="d-grid">
              <button className="btn btn-success" type="submit">
                Prisijungti
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
