import { motion } from 'framer-motion'
import { ArrowRight, Check, HeartHandshake, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppCard from '../components/AppCard'
import { apps } from '../data/apps'

const MotionDiv = motion.div

const fade = { initial:{opacity:0,y:28}, whileInView:{opacity:1,y:0}, viewport:{once:true,amount:.2} }

export default function Home(){
 return <main>
  <section className="py-20 md:py-28"><div className="container-nemy grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
    <MotionDiv initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-xs font-extrabold uppercase tracking-widest text-blue-200"><span className="h-2 w-2 rounded-full bg-nemy-green shadow-[0_0_15px_#23d4a2]"/>El comienzo de una familia de productos</span>
      <h1 className="mt-6 text-5xl font-black leading-[.94] tracking-[-.062em] md:text-7xl xl:text-8xl">Construimos aplicaciones que <span className="bg-gradient-to-r from-white via-cyan-300 to-violet-400 bg-clip-text text-transparent">simplifican</span> tu día a día.</h1>
      <p className="mt-6 max-w-2xl text-lg text-nemy-muted">Herramientas rápidas, intuitivas y diseñadas para ayudarte a hacer más en menos tiempo. Una sola identidad, distintas soluciones y el mismo compromiso con la calidad.</p>
      <div className="mt-8 flex flex-wrap gap-3"><Link className="btn btn-primary" to="/apps/nemy-ocr">Conocer Nemy OCR <ArrowRight size={18}/></Link><a className="btn" href="#aplicaciones">Ver aplicaciones</a></div>
      <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">{['Claridad','Privacidad','Calidad'].map(x=><span key={x} className="flex items-center gap-2"><Check size={16} className="text-nemy-green"/>{x}</span>)}</div>
    </MotionDiv>
    <MotionDiv initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.1}} className="rounded-[2.4rem] border border-blue-400/20 bg-gradient-to-br from-[#112b46] to-[#19164a] p-7 shadow-nemy"><img className="w-full rounded-[1.7rem]" src="/assets/icons/nemy-studios.png" alt="Nemy Symbol v1.0 Studios"/></MotionDiv>
  </div></section>

  <section className="py-20"><div className="container-nemy"><MotionDiv {...fade} className="max-w-3xl"><h2 className="section-title">La tecnología es mejor cuando deja de ser un obstáculo.</h2><p className="mt-4 text-lg text-nemy-muted">Diseñamos para personas. Cada elemento existe para ayudar, orientar o ahorrar tiempo.</p></MotionDiv>
    <div className="mt-11 grid gap-5 md:grid-cols-3">{[
      [Sparkles,'Simplicidad','El propósito debe entenderse desde el primer momento, sin explicaciones innecesarias.'],
      [Zap,'Calidad','La estabilidad, el rendimiento y los pequeños detalles forman parte del producto.'],
      [ShieldCheck,'Confianza','Explicamos qué utiliza cada aplicación y respetamos las decisiones de sus usuarios.'],
    ].map(([IconComponent,t,d],i)=><motion.article key={t} {...fade} transition={{delay:i*.08}} className="card p-7"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20"><IconComponent/></div><h3 className="mt-5 text-xl font-extrabold">{t}</h3><p className="mt-2 text-nemy-muted">{d}</p></motion.article>)}</div>
  </div></section>

  <section id="aplicaciones" className="py-20"><div className="container-nemy"><MotionDiv {...fade} className="max-w-3xl"><h2 className="section-title">La familia Nemy</h2><p className="mt-4 text-lg text-nemy-muted">Cada aplicación posee su propia paleta, pero todas comparten el Nemy Symbol v1.0 y una experiencia coherente.</p></MotionDiv><div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{apps.map((a,i)=><AppCard key={a.slug} app={a} index={i}/>)}</div></div></section>

  <section className="py-20"><div className="container-nemy grid items-center gap-10 rounded-[2.2rem] border border-blue-400/20 bg-gradient-to-br from-[#102b46] to-[#171743] p-7 md:p-10 lg:grid-cols-[.85fr_1.15fr]">
    <MotionDiv {...fade} className="rounded-[1.7rem] bg-black/25 p-5"><img className="rounded-[1.5rem]" src="/assets/icons/nemy-studios.png" alt="Nemy Studios"/></MotionDiv>
    <MotionDiv {...fade}><span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-xs font-extrabold uppercase tracking-widest text-blue-200">Nuestra historia</span><h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Crear con cuidado. Mejorar con paciencia.</h2><p className="mt-4 text-nemy-muted">Nemy Studios nació con una idea sencilla: construir aplicaciones que nosotros mismos estaríamos orgullosos de recomendar. No buscamos llenar teléfonos de funciones, sino resolver problemas reales con claridad, respeto y dedicación.</p><Link className="btn mt-6" to="/manifiesto">Leer el manifiesto <HeartHandshake size={18}/></Link></MotionDiv>
  </div></section>
 </main>
}
