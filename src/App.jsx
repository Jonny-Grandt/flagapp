import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

//pages
import HomePage from '../pages/HomePage';
import CountryInfo from '../pages/CountryInfo';

//layouts
import Rootlayout from '../layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path="country/:id" element={<CountryInfo />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;