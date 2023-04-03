import React from "react";
import Landing from "./pages/Landing";
import LoginPg from "./pages/LoginPg";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import BudgetsPg from "./pages/BudgetsPg";
import EBudgets from "./Hoc/Budgets/EBudgets";
import AddBudgets from "./Hoc/Budgets/AddBudgets";
import RecordPg from "./pages/RecordPg";
import SavingsPg from "./pages/SavingsPg";
import Glossary from "./pages/Glossary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/login",
      element: <LoginPg />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/eprofile",
      element: <EditProfile />,
    },
    {
      path: "/glossary",
      element: <Glossary />,
    },
    {
      path: "/budget",
      element: <BudgetsPg />,
    },
    {
      path: "/eBudget",
      element: <EBudgets />,
    },
    {
      path: "/sBudget",
      element: <AddBudgets />
    },
    {
      path: "/records",
      element: <RecordPg/>
    },
    {
      path: "/savings",
      element: <SavingsPg />
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
