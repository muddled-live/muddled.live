import AuthButton from "./components/AuthButton";
import GetSmarterButton from "./components/GetSmarterButton";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-row items-center justify-center bg-[url('/LandingBackground.png')] bg-center bg-cover bg-no-repeat max-sm:bg-right max-sm:flex-col">
            <div className="relative w-1/2 flex flex-col justify-center items-center self-stretch max-sm:hidden">
                <div className="absolute top-0 right-0 flex w-full justify-start items-center gap-20 p-8">
                    <div className="w-[50px] h-[50px] bg-primary-base" />
                    <div className="flex justify-center items-center border-b-4 px-2 border-primary-base">
                        <a className="text-black text-base font-bold">Home</a>
                    </div>
                    <GetSmarterButton />
                </div>
                <div className="flex flex-col items-start">
                    <p className="text-primary-base leading-trim text-cap text-[20px] leading-[.75] font-black">
                        WELCOME TO
                    </p>
                    <p className="text-black leading-trim text-cap text-[96px] leading-[.75] font-black">
                        muddled.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-start backdrop-blur-xl rounded-lg p-3 mx-4 sm:hidden">
                <p className="text-black leading-trim text-cap text-[30px] leading-[1] font-black">
                    Welcome to Muddled!
                </p>
                <p className="text-white leading-trim text-cap text-[20px] leading-[1] font-black mt-4">
                    Unfortunately, this website is not supported for mobile, and you are advised to find a computer or a device with a larger screen.
                </p>
            </div>
            <div className="relative w-1/2 flex justify-end items-start self-stretch p-8 max-sm:hidden">
                <AuthButton />
            </div>
            <div className="absolute w-5/12 h-3/4 bottom-8 right-8 bg-[url('/BottomRightLanding.png')] bg-cover bg-no-repeat bg-right-bottom max-sm:hidden"></div>
            <div className="absolute w-5/12 h-1/2 bottom-8 left-8 bg-[url('/BottomLeftLanding.png')] bg-cover bg-no-repeat bg-bottom max-sm:hidden"></div>
        </main>
    );
}
