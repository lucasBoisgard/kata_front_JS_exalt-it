import Beers from './pages/Beers/Beers';
import Beer from './pages/Beers/Beer';
import { createBrowserRouter } from "react-router-dom";
import Cart from './pages/cart/Cart';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Beers />,
  },
  {
    path: "Beers",
    element: <Beers />
  },
  {
    path: "Cart",
    element: <Cart />
  },
  {
    path:  "Beer/:id",
    element: <Beer />
  }
]);

export default Router;