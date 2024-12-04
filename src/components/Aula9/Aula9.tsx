import { HiMagnifyingGlass, HiMicrophone } from "react-icons/hi2";

export const Aula9 = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-800">
      <div className="text-center w-screen">
        <h1 className="text-white">Recriando o Buscar do Google</h1>
        <div className="flex justify-center items-center mt-5">
          <div className="relative flex items-center w-6/12">
            <HiMagnifyingGlass className="absolute left-3 text-gray-500 cursor-pointer" />
            <input
              type="text"
              placeholder="Buscar"
              className="w-full pl-10 pr-10 py-2 bg-white text-sm font-medium text-slate-700 rounded-full focus:outline-none placeholder-gray-500"
            />
            <HiMicrophone className="absolute right-3 text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
