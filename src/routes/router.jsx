import MainLayout from "../layout/MainLayout";
import { HomePage } from "../pages";

export const router = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];
