import Image from 'next/image'
import { SkillsSection } from './SkillsSection'

export function WIDCard() {
    return(
        <div id="whatido" className="whatido wid-card-container p-4 sm:p-8 md:p-12 grid place-content-center bg-[#ffffff]">
            <h1 className="grid place-items-center wid-card-title font-bold text-2xl sm:text-3xl md:text-[3.8rem] leading-[2rem] sm:leading-[2.5rem] md:leading-[3rem] text-gray-800">What about me?</h1>
            <div className="horizontal-line bg-black/10 h-0.5 my-4 sm:my-5"></div>
            <article className="grid grid-cols-1 place-items-center text-center gap-6 md:gap-8 max-w-3xl mx-auto">
                <div className="w-full max-w-[250px] sm:max-w-[300px] mb-4 sm:mb-6">
                    <Image 
                        className='w-full h-auto transition-transform duration-300' 
                        alt="coding illustration" 
                        width='300' 
                        height='300' 
                        src='/computer.svg'
                        priority 
                    />
                </div>
                <div className="wid-skills text-justify space-y-3 sm:space-y-4">
                    <p className="wid-card-subtitle font-light text-base sm:text-lg leading-relaxed text-gray-700">
                        Based in Montevideo, Uruguay, I&apos;m a passionate <span className='italic'>Software Developer</span> with a focus on creating innovative and efficient solutions, having also a strong knowledge of software and testing methodologies.
                    </p>
                    <p className="wid-card-subtitle font-light text-base sm:text-lg leading-relaxed text-gray-700">
                        In my role, I focus on developing scalable and efficient solutions that meet the needs of the business and the users.
                    </p>
                    <p className="wid-card-subtitle font-light text-base sm:text-lg leading-relaxed text-gray-700">
                        Currently I work as a <span className='italic'>Software Quality Assurance Engineer</span>, but I&apos;m always looking for new challenges and opportunities to grow.
                    </p>
                    <SkillsSection />
                    <p className="wid-card-subtitle font-light text-base sm:text-lg leading-relaxed text-gray-700">
                        Beyond work, I&apos;m an avid tech enthusiast who enjoys experimenting with new technologies, streaming content, and continuously expanding my knowledge in the ever-evolving tech landscape.
                    </p>
                    <p className="wid-card-subtitle font-medium text-base sm:text-lg leading-relaxed text-gray-800">
                        I believe in creating quality-driven solutions that make a difference. Whether it&apos;s ensuring software reliability or building innovative features, I&apos;m always ready for new challenges!
                    </p>
                </div>
            </article>
        </div>
    )
}