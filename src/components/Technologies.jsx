import { DiPostgresql } from "react-icons/di"
import { FaPhp } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"

const icons = [
  {
   "icons": <RiReactjsLine/>,
   "style": "text-7xl text-cyan-800"
  },
  {
    "icons": <FaPhp/>,
    "style": "text-7xl"
   },
   {
    "icons": <DiPostgresql/>,
    "style": "text-7xl text-blue-400"
   }
]

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-3xl">Tecnologias & Lenguajes</h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
            {
              icons.map((icon, i) => (
                <>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                  <div key={i} className={icon.style}>{icon.icons}</div>
                </div>
                </>
              ))
            }
        </div>
    </div>
  )
}

export default Technologies