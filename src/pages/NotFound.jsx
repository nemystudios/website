import { Link } from 'react-router-dom'
export default function NotFound(){return <main className="container-nemy py-28"><h1 className="text-6xl font-black">Página no encontrada</h1><p className="mt-4 text-nemy-muted">La dirección que buscas no existe.</p><Link className="btn mt-7" to="/">Volver al inicio</Link></main>}
