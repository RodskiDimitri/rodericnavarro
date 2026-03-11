import { ViteReactSSG } from 'vite-react-ssg'
import './index.css'
import AppLayout from './App.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import ErrorBoundary from './components/ErrorBoundary'

export const routes = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'resume', element: <Resume /> },
      { path: 'clients', element: <Clients /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Home /> }
    ]
  }
];

export const createRoot = ViteReactSSG(
  { 
    routes,
    basename: import.meta.env.BASE_URL 
  },
  () => {
    // Optional context or router modifications
  }
)
