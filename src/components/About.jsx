import { ABOUT_CONTENT } from "../content/content"
import Code from "../assets/Code.jpg"

const About = () => {
  return (
    <div className="border-b border-neutral-900 py-4">
        <h1 className="my-20 text-center text-4xl">
            Sobre<span className="text-neutral-500"> Mi</span>    
        </h1>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src={Code} alt="Sobre Mi" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_CONTENT}</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About