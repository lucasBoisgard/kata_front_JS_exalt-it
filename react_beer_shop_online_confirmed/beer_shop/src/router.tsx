import Beers from './pages/Beers/Beers';
import Beer from './pages/Beers/Beer';
import { createBrowserRouter } from "react-router-dom";
import Main from './pages/Main';
import Card from './pages/card/Card';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/Beers",
    element: <Beers />
  },
  {
    path: "/Card",
    element: <Card />
  }
]);

export default Router;