import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import { categoryRoutes } from "./pages/category/routes";
import { homeRoutes } from "./pages/home/routes";
import { bookRoutes } from "./pages/book/routes";
import { loginRoutes, registerRoutes } from "./pages/auth/routes";
import { useSelector } from "react-redux";
function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/register" element={<Navigate to="/" />} />
          {homeRoutes}
          {categoryRoutes}
          {bookRoutes}
        </>
      ) : (
        <>
          {loginRoutes}
          {registerRoutes}
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}

export default App;
