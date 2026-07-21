import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MotionDiv = motion.div

export default function AppCard({ app, index }) {
  return <MotionDiv initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:index*.05}}>
    <Link to={`/apps/${app.slug}`} className="card relative block h-full overflow-hidden p-6 transition hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl">
      <div className="pointer-events-none absolute -bottom-28 left-12 h-64 w-64 rounded-full blur-3xl" style={{background:app.glow}} />
      <div className="relative flex items-center gap-4"><img className="h-[76px] w-[76px] rounded-[22px] shadow-xl" src={app.icon} alt={app.name}/><div><h3 className="text-xl font-extrabold">{app.name}</h3><p className="text-sm text-nemy-muted">{app.category}</p></div></div>
      <p className="relative mt-5 min-h-20 text-nemy-muted">{app.description}</p>
      <span className="relative inline-flex items-center gap-2 text-sm font-bold" style={{color:app.statusColor}}><span className="h-2 w-2 rounded-full bg-current"/>{app.status}</span>
    </Link>
  </MotionDiv>
}
