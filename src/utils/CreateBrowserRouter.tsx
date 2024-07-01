import App from "App";
import Register from "components/Register";
import ResetPassword from "components/ResetPassword";
import Login from "components/login";

import { LABEL_CONSTANT } from "constants/label.constant";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const labelConstant = LABEL_CONSTANT;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="*" element={<Navigate to="login" />} />
        <Route path="login" element={<Login />} />
        <Route path="resetPassword" element={<ResetPassword />} />
        <Route path="register" element={<Register />} />
        
      </Route>
    </>
  )
);

export default router;
