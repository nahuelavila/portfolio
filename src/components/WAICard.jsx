export function WAICard() {
    return(
        <div className='wai-card-container p-12 w-full h-full grid place-content-center h-screen min-h-[30rem]'>
            <article className="grid place-content-center w-64 text-center gap-6">
                <img className="wai-card-img w-full shadow-xl rounded-full" src="https://img-9gag-fun.9cache.com/photo/aXvbpZb_460s.jpg"></img>
                <div className="horizontal-line bg-white/10 h-0.5 "></div>
                <p className="wai-card-title font-roboto font-bold leading-[3rem]">Hello,</p>
                <p className="wai-card-subtitle font-roboto font-light leading-[1rem]">I am Nahuel.</p>
                <p className="wai-card-subtitle font-roboto font-light leading-[1rem]">Let me know how can I help you,</p>
                <a href="mailto:nahuel@nahuelavila.com" className="contact-me text-white border rounded-full p-1">let's chat!</a>
            </article>
        </div>
    )
}