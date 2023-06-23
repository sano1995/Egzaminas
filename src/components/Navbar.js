import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth";

export default function Navbar() {
  const auth = useAuth();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark  cl">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic text-white" to="/">
            Grožio
            <br />
            Pasaulis
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {auth.user && (
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Pagrindinis
                  </Link>
                </li>
              )}

              {auth.user && auth.user["role"] === "admin" && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/admin"
                  >
                    Admin
                  </Link>
                </li>
              )}

              {auth.user && (
                <li className="nav-item">
                  <Link
                    className="nav-link text-danger"
                    aria-current="page"
                    to="/logout"
                    onClick={() => auth.logout()}
                  >
                    Atsijungti
                  </Link>
                </li>
              )}

              {!auth.user && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Prisijungimas
                  </Link>
                </li>
              )}

              {!auth.user && (
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Registracija
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
