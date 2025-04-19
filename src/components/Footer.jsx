import Image from 'next/image'

export function Footer() {
    return(
        <div className="footer bg-white p-6">
            <p className="font-light sm:leading-[1rem] text-center text-gray-500 text-sm">
                made with <span className="inline-block animate-pulse transition-all duration-300">❤️</span> from <span className="relative inline-block group">
                    Uruguay
                </span>
            </p>
        </div>
    )
}