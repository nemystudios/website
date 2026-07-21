const beliefs = [
 'Creemos que la tecnología debe ayudar, no complicar.',
 'Creemos que una interfaz sencilla es una muestra de respeto por el tiempo de las personas.',
 'Creemos que la confianza se gana con honestidad, no con promesas exageradas.',
 'Creemos que cada detalle comunica quiénes somos.',
 'Creemos que una buena aplicación desaparece para que el usuario pueda concentrarse en su objetivo.',
 'Creemos que diseño e ingeniería deben trabajar juntos.',
 'Creemos que escuchar a los usuarios es tan importante como escribir código.',
 'Creemos que publicar una aplicación es el comienzo de una relación, no el final de un proyecto.',
 'Creemos que la calidad depende del cuidado con que se toman las decisiones.',
 'Y creemos que una empresa puede crecer sin dejar de ser humana.',
]
export default function Manifesto(){return <main className="container-nemy py-20 md:py-28"><article className="card p-7 md:p-14"><span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-xs font-extrabold uppercase tracking-widest text-blue-200">El alma de Nemy</span><h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">Nuestro manifiesto</h1><div className="mt-10 space-y-7 text-xl leading-relaxed text-slate-300">{beliefs.map(b=><p key={b}>{b}</p>)}</div><h2 className="mt-14 text-3xl font-black">Nuestra promesa</h2><p className="mt-4 text-lg text-nemy-muted">Nunca publicaremos una aplicación solo por publicarla. Cada producto deberá resolver un problema real, respetar a sus usuarios y hacer más fuerte a Nemy Studios.</p></article></main>}
