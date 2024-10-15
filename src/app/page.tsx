export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className="flex-center w-full h-[35vh] bg-orange-400">
        <p>Algo Chamativo</p>
      </div>
      
      <div className="container mx-auto my-4">
        <div className="grid grid-cols-4 gap-4 h-[35vh]">
          <div className="flex-center bg-indigo-500">A</div>
          <div className="flex-center bg-purple-500">B</div>
          <div className="flex-center bg-blue-500">C</div>
          <div className="flex-center bg-emerald-500">D</div>
        </div>
      </div>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 flex flex-col gap-4">
            
            {/* ITEM 1*/}
            <div className=" flex gap-4 bg-yellow-500 rounded-md">
              <div>
                <img src="/images/games.png" alt="Image description" className="w-auto h-52"/>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Algum título</h2>
                <p className="flex-grow">Alguma descrição</p>
                <button>Ler mais</button>
              </div>
            </div>

            {/* ITEM 2*/}
            <div className=" flex gap-4 bg-green-500 rounded-md">
              <div>
                <img src="/images/games.png" alt="Image description" className="w-auto h-52"/>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Algum título</h2>
                <p className="flex-grow">Alguma descrição</p>
                <button>Ler mais</button>
              </div>
            </div>

            {/* ITEM 3*/}
            <div className=" flex gap-4 bg-pink-500 rounded-md">
              <div>
                <img src="/images/games.png" alt="Image description" className="w-auto h-52"/>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Algum título</h2>
                <p className="flex-grow">Alguma descrição</p>
                <button>Ler mais</button>
              </div>
            </div>

            {/* ITEM 4*/}
            <div className=" flex gap-4 bg-rose-500 rounded-md">
              <div>
                <img src="/images/games.png" alt="Image description" className="w-auto h-52"/>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Algum título</h2>
                <p className="flex-grow">Alguma descrição</p>
                <button>Ler mais</button>
              </div>
            </div>
          </div>

          <div className="col-span-4 bg-cyan-500">

          </div>
        </div>
      </div>
    </main>
  );
}
