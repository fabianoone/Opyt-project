import Image from "next/image"
export default function Header() {
    return (
        <>
            <header className="w-screen flex items-center">
                <div className="w-1/3">
                <Image
                    className="gr-logo mx-auto"
                    src="/images/logo.svg"
                    alt="Opyt Logo"
                    width={116}
                    height={58}
                    priority
                />
                </div>
                <div className="w-2/3">
                    <button className="bg-gr-orange py-2 px-11 rounded text-center text-white mx-10 uppercase font-bold text-lg">
                        Assine agora!
                    </button>
                    <button className="bg-gr-green py-2 px-11 rounded text-center text-white mx-10 uppercase font-bold text-lg">
                        Chama no Zap!
                    </button>
                </div>
            </header>
        </>
    )
}