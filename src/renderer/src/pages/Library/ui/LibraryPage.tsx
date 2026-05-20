import SongList from "@renderer/features/loona/songs/ui/SongList";
import { useNavigate } from "react-router";

function LibraryPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[650px] w-[450px] flex-col overflow-hidden bg-[#09091a]">

      <div className="border-b border-[#151627]">

        <div className="flex items-center gap-4 px-6 py-5">

          <button
            onClick={() => navigate(-1)}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-[#a580f0]
              transition-all
              duration-300
              hover:bg-[#482e9f]
            "
          >
            ◀
          </button>

          <div>
            <h1 className="text-lg font-semibold text-[#e0ddff]">
              Mi Biblioteca
            </h1>

            <p className="mt-1 text-xs text-[#707090]">
              Estas son mis canciones disponibles
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