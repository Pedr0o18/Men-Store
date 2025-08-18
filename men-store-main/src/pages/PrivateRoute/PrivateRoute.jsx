// PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { user } = useAuthValue();

  // Se não tiver usuário logado, redireciona pro login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Se tiver logado, renderiza a rota normalmente
  return children;
};
