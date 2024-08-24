import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-center py-6">
        <div className="flex flex-shrink-0 items-center text-white space-x-8 text-3xl">
            <a href="https://github.com/Jeixxon17" target="_blan<k"><FaGithub/></a>
            <a href="https://instagram.com" target="_blan<k"><FaInstagram /></a>
            <a href="https://linkelin.com" target="_blan<k"><FaLinkedin /></a>
        </div>
    </nav>
  )
}

export default Navbar