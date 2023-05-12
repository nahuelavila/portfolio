import Image from 'next/image'

export function WIDCard() {
    return(
        <div className="whatido wid-card-container p-6 sm:p-12 grid place-content-center">
            <article className="grid place-items-center text-center gap-6">
                <div className="horizontal-line bg-white/10 h-0.5 "></div>
                <p className="wid-card-title font-bold text-[3rem] leading-[2.5rem] sm:text-[3.8rem] sm:leading-[3rem]">What can I offer you?</p>
                <Image className='grid place-items-center' width='256' height='256' src='/computer.svg' />
                <div className="wid-skills">
                    <p className="wid-card-subtitle font-light sm:leading-[1rem]">
                        I&apos;m skilled on a variety of technologies such as
                        <Image className="inline ml-1.5 hover:animate-spin" alt="python" width='22' height='22' src="/python.svg" />
                        <Image className="inline ml-1.5" alt="javascript" width='22' height='22' src="/js.svg" />
                        <Image className="inline ml-1.5" alt="nodejs" width='22' height='22' src="/nodejs.svg" />
                    </p>
                </div>
            </article>
        </div>
    )
}