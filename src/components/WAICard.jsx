import Image from 'next/image'

export function WAICard() {
    return(
        <div className="whoami wai-card-container p-4 sm:p-8 md:p-12 w-full grid place-content-center min-h-[100vh] sm:min-h-[40rem] bg-gradient-to-b from-transparent to-black/5">
            <article className="grid place-content-center w-full max-w-xs sm:max-w-sm md:max-w-md text-center gap-4 sm:gap-6">
                <picture>
                    <Image 
                        className="wai-card-img mx-auto shadow-xl rounded-full border-[0.15rem] hover:scale-105 transition-transform duration-300" 
                        alt='profile photo' 
                        src="/me.png" 
                        width='240' 
                        height='240' 
                        quality='100'
                        priority 
                    />
                </picture>
                <div className="social-media flex gap-4 place-content-center">
                    <a href='https://www.linkedin.com/in/nahuel-avila/' target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <Image src="/linkedin.svg" alt="LinkedIn" width='28' height='28' />
                    </a>    
                    <a href='https://github.com/nahuelavila' target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <Image src="/github.svg" alt="GitHub" width='28' height='28' />
                    </a>    
                </div>
                <div className="horizontal-line bg-white/10 h-0.5"></div>
                <h1 className="wai-card-title font-roboto font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">Hi there! 👋</h1>
                <div className="space-y-2">
                    <p className="wai-card-subtitle font-roboto font-light text-base sm:text-lg md:text-xl">I&apos;m Nahuel Avila</p>
                    <p className="wai-card-subtitle font-roboto font-light text-base sm:text-lg md:text-xl">Software Developer</p>
                    <p className="wai-card-subtitle font-roboto font-light text-xs sm:text-sm md:text-base flex items-center justify-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 7.2c0 7.3-8 11.8-8 11.8z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Montevideo, Uruguay</span>
                    </p>
                    <p className="wai-card-subtitle font-roboto font-light text-xs sm:text-sm md:text-base flex items-center justify-center gap-1 select-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <span className="select-all cursor-text">nahuel@nahuelavila.com</span>
                    </p>
                    <p className="wai-card-subtitle font-roboto font-light text-xs sm:text-sm md:text-base">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Available for new opportunities
                    </p>
                </div>
                <a 
                    href="mailto:nahuel@nahuelavila.com" 
                    className="contact-me text-white border-2 rounded-full py-2 px-6 hover:bg-white hover:text-black transition-colors duration-300 inline-block mt-4 text-base sm:text-lg"
                >
                    let&apos;s chat!
                </a>
            </article>
            <div className="arrow-down-text mt-8 sm:mt-12 md:mt-16">
                <a href="#whatido" className="grid place-items-center gap-2 animate-bounce">
                    <p className="wai-card-subtitle font-roboto font-light text-base sm:text-lg md:text-xl text-gray-300">Scroll down to know more about me</p>
                    <Image src="/arrow-down.svg" alt="arrow-down" width='24' height='24' />
                </a>
            </div>
        </div>
    )
}