import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

export function Router() 
{
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />}/>
        </Route>
    </Routes>
  );
}