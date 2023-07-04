import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Landing } from './pages/Landing';

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
