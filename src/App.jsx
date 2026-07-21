import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AppPage from './pages/AppPage'
import Manifesto from './pages/Manifesto'
import Privacy from './pages/Privacy'
import OcrPrivacy from './pages/OcrPrivacy'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
 { path:'/', element:<Layout/>, children:[
  { index:true, element:<Home/> },
  { path:'apps/:slug', element:<AppPage/> },
  { path:'manifiesto', element:<Manifesto/> },
  { path:'privacidad', element:<Privacy/> },
  { path:'privacidad/nemy-ocr', element:<OcrPrivacy/> },
  { path:'*', element:<NotFound/> },
 ]},
])
export default function App(){ return <RouterProvider router={router}/> }
