import Image from 'next/image'

export function WAICard() {
    return(
        <div className="whoami wai-card-container p-12 w-full grid place-content-center h-screen sm:min-h-[40rem] min-h-[35rem]">
            <article className="grid place-content-center w-64 text-center gap-6">
                <picture>
                    <Image className="wai-card-img shadow-xl rounded-full border-[0.15rem]" alt='profile photo' src="/me.png" width='240' height='240' quality='100' />
                </picture>
                <div className="linkedin-ref grid place-content-center">
                    <a className="grid place-content-center" href='https://www.linkedin.com/in/nahuel-avila/'><Image src="/linkedin.svg" alt="LinkedIn" width='24' height='24' /></a>    
                </div>
                <div className="horizontal-line bg-white/10 h-0.5"></div>
                <h1 className="wai-card-title font-roboto font-bold leading-[3rem]">Hello,</h1>
                <p className="wai-card-subtitle font-roboto font-light leading-[1rem]">I am Nahuel.</p>
                <p className="wai-card-subtitle font-roboto font-light leading-[1rem]">Let me know how can I help you,</p>
                <a href="mailto:nahuel@nahuelavila.com" className="contact-me text-white border rounded-full p-1 hover:bg-white hover:text-black">let&apos;s chat!</a>
            </article>
        </div>
    )
}