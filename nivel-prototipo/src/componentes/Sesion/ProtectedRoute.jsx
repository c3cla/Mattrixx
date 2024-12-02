import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "./Constants";
import { useState, useEffect } from "react";

function ProtectedRoute({ children, allowedRoles }) {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    auth().catch(() => setIsAuthorized(false));
  }, []);

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post("/api/token/refresh/", {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.error(error);
      setIsAuthorized(false);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const tokenExpiration = decoded.exp;
      const now = Date.now() / 1000;

      if (tokenExpiration < now) {
        await refreshToken();
      } else {
        // Verificar el rol del usuario con los roles permitidos
        const userRole = decoded.role;

        if (allowedRoles && allowedRoles.includes(userRole)) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      }
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      setIsAuthorized(false);
    }
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  if (isAuthorized === false) {
    return <Navigate to="/login" />;
  }

  return isAuthorized ? children : <Navigate to="/" />;
}

export default ProtectedRoute;