import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home';
import { QrCode } from './pages/QrCode';
import { LinkShortner } from './pages/LinkShortner'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/qrcode", element: <QrCode /> },
  { path: "/linkshortner", element: <LinkShortner /> },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
