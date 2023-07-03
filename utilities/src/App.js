import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home';
import { QrCode } from './pages/QrCode';
import { LinkShortner } from './pages/LinkShortner'
import { RUG } from './pages/RUG';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/qrcode", element: <QrCode /> },
  { path: "/linkshortner", element: <LinkShortner /> },
  { path: "/rug", element: <RUG /> },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
