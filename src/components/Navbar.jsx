import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const Navbar = () => {
  return (
        <nav className="mb-10 m-8 flex items-center justify-center gap-4 text-5xl space-x-9">
            <a href="https://github.com/Jeixxon17" target="_blan<k"><FaGithub/></a>
            <a href="https://instagram.com" target="_blan<k"><FaInstagram /></a>
            <a href="https://linkelin.com" target="_blan<k"><FaLinkedin /></a>
        </nav>
  )
}

export default Navbar