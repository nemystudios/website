import { CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { apps } from '../data/apps'

export default function AppPage(){
 const { slug } = useParams(); const app = apps.find(a=>a.slug===slug)
 if(!app) return <main className="container-nemy py-28"><h1 className="text-5xl font-black">Aplicación no encontrada</h1><Link className="btn mt-6" to="/">Volver al inicio</Link></main>
 return <main className="container-nemy py-20 md:py-28">
  <section className="grid items-center gap-14 lg:grid-cols-[.82fr_1.18fr]">
    <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-[#112b46] to-[#171743] p-7 shadow-nemy"><img className="w-full rounded-[1.7rem]" src={app.icon} alt={app.name}/></div>
    <div><span className="inline-flex rounded-full border px-3 py-2 text-xs font-extrabold uppercase tracking-widest" style={{color:app.statusColor,borderColor:`${app.statusColor}55`,background:`${app.statusColor}12`}}>{app.status}</span><h1 className="mt-5 text-6xl font-black tracking-[-.055em] md:text-8xl">{app.name}</h1><p className="mt-5 text-lg text-nemy-muted">{app.long}</p><div className="mt-7 flex flex-wrap gap-3"><span className="btn">{app.category}</span><Link className="btn" to="/#aplicaciones">Volver a aplicaciones</Link></div></div>
  </section>
  <section className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{app.features.map(f=><article key={f} className="card flex items-start gap-3 p-6"><CheckCircle2 className="mt-1 shrink-0 text-nemy-green"/><p className="font-semibold">{f}</p></article>)}</section>
 </main>
}
