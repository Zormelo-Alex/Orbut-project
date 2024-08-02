import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Dashboard, Login, PageNotFound } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
            <Dashboard />
        }
      />
      <Route path="/login" element={<Login />} />

      <Route path="*"  element={<PageNotFound />} />
    </Route>
  )
);

export default router;
