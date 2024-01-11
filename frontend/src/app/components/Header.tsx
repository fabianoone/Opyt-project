import Image from "next/image"
export default function Header() {
    return (
        <>
            <header className="w-screen flex md:flex-row flex-col items-center">
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <Image
                    className="gr-logo mx-auto"
                    src="/images/logo.svg"
                    alt="Opyt Logo"
                    width={116}
                    height={58}
                    priority
                />
                </div>
                <div className="w-full md:w-2/3 flex md:flex-row justify-center gap-4 md:gap-10 p-4 lg:p-0">
                    <button className="bg-gr-orange py-2 lg:px-11 px-5 w-1/2 rounded text-center text-white uppercase font-bold md:text-lg">
                        Assine agora!
                    </button>
                    <button className="bg-gr-green py-2 lg:px-11 px-5 w-1/2 rounded text-center text-white uppercase font-bold md:text-lg">
                        Chama no Zap!
                    </button>
                </div>
            </header>
        </>
    )
}