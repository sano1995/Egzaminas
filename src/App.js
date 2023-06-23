import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useAuth } from "./context/Auth";
import {
  AuthProvider,
  RequireAuth,
  RequireAdmin,
  AuthorizedRedirect,
} from "./context/Auth";
import Register from "./pages/Register";
import { Navigate } from "react-router-dom";
import Admin from "./pages/Admin";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />

            <Route
              exact
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/login"
              element={
                <AuthorizedRedirect>
                  <Login />
                </AuthorizedRedirect>
              }
            />
            <Route path="/Register" element={<Register />} />
            <Route
              path="/Admin"
              element={
                <RequireAdmin>
                  <Admin />
                </RequireAdmin>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
