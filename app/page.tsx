export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="absolute top-4 left-4">
        <img src="/logo.png" alt="Albatsuki Logo" className="h-16 w-16" />
      </div>

      <div className="absolute top-4 right-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
          Logohu
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 w-4/5 max-w-4xl">
        <div className="bg-red-500 text-white flex justify-center items-center h-48 rounded-lg text-2xl cursor-pointer">
          Shiko Anime
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-500 text-white flex justify-center items-center h-32 rounded-lg text-lg cursor-pointer">
            Shiko AMV
          </div>
          <div className="bg-green-500 text-white flex justify-center items-center h-32 rounded-lg text-lg cursor-pointer">
            Shiko Fakte
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-yellow-500 text-white flex justify-center items-center h-32 rounded-lg text-lg cursor-pointer">
            Kuic
          </div>
          <div className="bg-yellow-500 text-white flex justify-center items-center h-32 rounded-lg text-lg cursor-pointer">
            Misionet
          </div>
        </div>
      </div>
    </div>
  );
}
