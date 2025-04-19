import Image from 'next/image'

export function SkillsSection() {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg my-6 sm:my-8 md:my-10 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 text-center relative">
                <span className="relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-gray-500 after:bottom-0 after:left-1/4 after:rounded-full pb-2">
                    My Tech Stack
                </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-black">
                    <p className="font-semibold text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4 flex items-center">
                        <span className="bg-black w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                        Programming
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                        <span className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full px-3 sm:px-4 py-2 transition-colors duration-300 border border-gray-200">
                            <Image className="hover:animate-spin" alt="python" width='28' height='28' src="/python.svg" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">Python</span>
                        </span>
                        <span className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full px-3 sm:px-4 py-2 transition-colors duration-300 border border-gray-200">
                            <Image alt="javascript" width='28' height='28' src="/js.svg" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">JavaScript</span>
                        </span>
                        <span className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full px-3 sm:px-4 py-2 transition-colors duration-300 border border-gray-200">
                            <Image alt="java" width='28' height='28' src="/java.png" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">Java</span>
                        </span>
                        <span className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full px-3 sm:px-4 py-2 transition-colors duration-300 border border-gray-200">
                            <Image alt="nodejs" width='28' height='28' src="/nodejs.svg" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">Node.js</span>
                        </span>
                        <span className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full px-3 sm:px-4 py-2 transition-colors duration-300 border border-gray-200">
                            <Image alt="dotnet" width='28' height='28' src="/dotnet.png" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">.NET</span>
                        </span>
                    </div>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-black">
                    <p className="font-semibold text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4 flex items-center">
                        <span className="bg-black w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                            </svg>
                        </span>
                        Web Development
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                        <span className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full px-3 sm:px-4 py-2 transition-colors duration-300 border border-gray-200">
                            <Image alt="html" width='28' height='28' src="/html.png" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">HTML</span>
                        </span>
                        <span className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full px-3 sm:px-4 py-2 transition-colors duration-300 border border-gray-200">
                            <Image alt="css" width='28' height='28' src="/css.png" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">CSS</span>
                        </span>
                        <span className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full px-3 sm:px-4 py-2 transition-colors duration-300 border border-gray-200">
                            <Image alt="react" width='28' height='28' src="/react.svg" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">React</span>
                        </span>
                        <span className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full px-3 sm:px-4 py-2 transition-colors duration-300 border border-gray-200">
                            <Image alt="nextjs" width='28' height='28' src="/next.png" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">Next.js</span>
                        </span>
                        <span className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full px-3 sm:px-4 py-2 transition-colors duration-300 border border-gray-200">
                            <Image alt="genexus" width='28' height='28' src="/gx.png" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">GeneXus</span>
                        </span>
                    </div>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-black">
                    <p className="font-semibold text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4 flex items-center">
                        <span className="bg-black w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                            </svg>
                        </span>
                        Tools
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                        <span className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full px-3 sm:px-4 py-2 transition-colors duration-300 border border-gray-200">
                            <Image alt="cypress" width='28' height='28' src="/cypress.svg" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">Cypress</span>
                        </span>
                        <span className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full px-3 sm:px-4 py-2 transition-colors duration-300 border border-gray-200">
                            <Image alt="playwright" width='28' height='28' src="/playwright.svg" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">Playwright</span>
                        </span>
                        <span className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full px-3 sm:px-4 py-2 transition-colors duration-300 border border-gray-200">
                            <Image alt="git" width='28' height='28' src="/git.png" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">Git</span>
                        </span>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-black">
                    <p className="font-semibold text-xl text-gray-800 mb-4 flex items-center">
                        <span className="bg-black w-8 h-8 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                            </svg>
                        </span>
                        Databases
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-2 transition-colors duration-300 border border-gray-200">
                            <Image alt="mysql" width='36' height='36' src="/mysql.png" />
                            <span className="text-sm font-medium text-gray-700 hidden md:inline">MySQL</span>
                        </span>
                        <span className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-2 transition-colors duration-300 border border-gray-200">
                            <Image alt="mongodb" width='12' height='12' src="/mongodb.png" />
                            <span className="text-sm font-medium text-gray-700 hidden md:inline">MongoDB</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
} 