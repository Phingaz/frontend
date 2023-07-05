import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Landing, startServer } from './pages/Landing';

const router = createBrowserRouter([
  { path: "/", element: <Landing />, loader: startServer },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
