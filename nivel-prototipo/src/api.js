import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./componentes/Sesion/Constants";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000"; // URL de respaldo
const api = axios.create({
  baseURL: apiUrl,
});

/* const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
}); */

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);
      if (refreshToken) {
        try {
          const response = await axios.post(`${api.defaults.baseURL}/api/token/refresh/`, { refresh: refreshToken });
          localStorage.setItem(ACCESS_TOKEN, response.data.access);
          api.defaults.headers.common["Authorization"] = `Bearer ${response.data.access}`;
          return api(originalRequest);
        } catch (err) {
          console.error("Error actualizando el token:", err);
          window.location.href = "/logout"; // Redirigir al logout si falla
        }
      } else {
        window.location.href = "/logout";
      }
    }
    return Promise.reject(error);
  }
);

export const obtenerNiveles = async () => {
  try {
    const response = await api.get('/api/niveles/');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los niveles:', error);
    return [];
  }
};

//Etapas
export const obtenerEtapasPorNivel = async (id_nivel) => {
  try {
    const response = await api.get('/api/etapas/', {
      params: { id_nivel },
    });
    return response.data;
  } catch (error) {
    console.error(`Error al obtener las etapas para el nivel ${id_nivel}:`, error);
    return [];
  }
};

export const obtenerTerminosPareados = async (uso = "experimento") => {
  try {
    const response = await api.get(`/api/terminos_pareados/`, { params: { uso } });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los términos pareados:", error);
    return [];
  }
};

export const obtenerProblemaProbabilidad = async () => {
  try {
      const response = await axios.get(`http://127.0.0.1:8000/api/problema-probabilidad/`);
      return response.data;
  } catch (error) {
      console.error("Error al obtener el problema de probabilidad:", error);
      throw error;
  }
};


export const obtenerEtapasCompletadasPorUsuario = async (id_nivel) => {
  try {
    const response = await api.get('/api/avance_estudiantes/completados/', {
      params: { id_nivel },
    });
    return response.data;
  } catch (error) {
    console.error(`Error al obtener las etapas completadas para el nivel ${id_nivel}:`, error);
    return [];
  }
};


export const obtenerDocentes = async () => {
  try {
    const response = await api.get("/api/docentes/docentes/");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los docentes:", error);
    return [];
  }
};

export const solicitarCurso = async (data) => {
  try {
    const response = await api.post("/api/docente_estudiante/solicitar_curso/", data);
    return response.data;
  } catch (error) {
    console.error("Error al solicitar curso del docente:", error);
  }
};

export const obtenerSolicitudesPendientes = async () => {
  try {
    const response = await api.get("/api/docente_estudiante/pendientes/");
    return response.data;
  } catch (error) {
    console.error("Error al obtener solicitudes pendientes:", error);
    return [];
  }
};


export const confirmarCurso = async (id, aceptar = true) => {
  try {
    const accion = aceptar ? "aceptar" : "rechazar";
    const response = await api.post(`/api/docente_estudiante/${id}/confirmar/`, { accion });
    return response.data;
  } catch (error) {
    console.error("Error al confirmar/rechazar la solicitud:", error);
    throw error;
  }
};

export const obtenerDocenteAsignado = async () => {
  try {
    const response = await api.get("/api/docente_estudiante/asignado/");
    return response.data;
  } catch (error) {
    console.error("Error al obtener el docente asignado:", error);
    return null;
  }
};

// Obtener lista de estudiantes
export const obtenerEstudiantes = async () => {
  try {
    const response = await api.get("/api/estadisticas_estudiante/estudiantes/");
    return response.data;
  } catch (error) {
    console.error("Error al obtener estudiantes:", error);
    return [];
  }
};


export const obtenerAvancesCurso = async (cursoId) => {
  try {
    const response = await api.get("/api/avance_estudiantes/curso/avances/", {
      params: { curso_id: cursoId }
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener avances del curso:", error);
    return [];
  }
};

// Obtener avances de un estudiante específico
export const obtenerAvancesEstudiante = async (estudianteId) => {
  try {
    const response = await api.get("/api/estadisticas_estudiante/avances/", {
      params: { estudiante_id: estudianteId }
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener avances del estudiante:", error);
    return [];
  }
};

// Obtener cursos del docente
export const obtenerCursos = async () => {
  try {
    const response = await api.get("/api/estadisticas_estudiante/cursos/");
    return response.data;
  } catch (error) {
    console.error("Error al obtener cursos:", error);
    return [];
  }
};

// Obtener estudiantes por curso
export const obtenerEstudiantesPorCurso = async (cursoId) => {
  try {
    const response = await api.get("/api/estadisticas_estudiante/estudiantes/", {
      params: { curso_id: cursoId },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener estudiantes:", error);
    return [];
  }
};



export default api;