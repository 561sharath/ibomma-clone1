import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./store/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WacthPage from "./components/WacthPage";
import SearchByName from "./components/SearchByName";

function App() {

  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Body />,
      
    },
    {
      path:'/wacthpage/:id',
      element:<WacthPage />
    },
    {
      path:'/searchPage/:name',
      element:<SearchByName />
    }
  ])
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
