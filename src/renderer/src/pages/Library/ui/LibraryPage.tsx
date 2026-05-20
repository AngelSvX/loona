import SongList from "@renderer/features/loona/songs/ui/SongList";
import { useNavigate } from "react-router";

function LibraryPage() {
  const navigate = useNavigate();

  return (
    <div className="w-[450px] h-[650px] bg-[#09091a] flex flex-col overflow-hidden">

      <div className="border-b border-[#151627]">

        <div className="flex items-center gap-4 px-6 py-5">

          <button
            onClick={() => navigate(-1)}
            className="
              w-9
              h-9
              rounded-full
              flex
              items-center
              justify-center
              text-[#a580f0]
              hover:bg-[#482e9f]
              transition-all
              duration-300
            "
          >
            ◀
          </button>

          <div>
            <h1 className="text-[#e0ddff] text-lg font-semibold">
              Mi Biblioteca
            </h1>

            <p className="text-[#707090] text-xs mt-1">
              Estas son tus canciones disponibles
            </p>
          </div>

        </div>

      </div>

      <div className="flex-1 overflow-hidden">
        <SongList />
      </div>

    </div>
  );
}

export default LibraryPage;