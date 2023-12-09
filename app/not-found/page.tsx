export default function GetSmarter() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center">
      <div className="absolute w-1/3 h-1/2 top-8 left-10 bg-[url('/TopLeftNotFound.png')] bg-cover bg-no-repeat"></div>
      <div className="absolute w-1/2 h-3/4 bottom-6 right-10 bg-[url('/BottomRightNotFound.png')] bg-cover bg-no-repeat bg-right-bottom"></div>
      <div className="absolute">
        <p className="text-[300px] text-white font-black -z-50">ATRIOC</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 relative">
        <p className="text-black text-8xl font-black">got lost?</p>
        <a
          href="/"
          className="flex bg-primary-base px-16 py-5 text-white rounded-full"
        >
          BACK HOME
        </a>
      </div>
    </main>
  );
}
