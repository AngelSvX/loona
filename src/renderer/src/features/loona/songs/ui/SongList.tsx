import { AppDispatch, RootState } from "@renderer/app/providers/store";
import SongCard from "@renderer/entities/song/ui/SongCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularButton from "../../../../shared/FloatButton";
import { getSongsToLibrary } from "../model/thunks";

function SongList() {
  const { songs } = useSelector((state: RootState) => state.song);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getSongsToLibrary());
  }, []);

  return (
    <div className="flex h-[650px] w-[450px] flex-col bg-[#09091a]">

      <div
        className="
          flex
          flex-col
          gap-4
          overflow-y-auto
          px-4
          py-4
        "
      >

        {songs.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-sm text-[#404060]">
              No hay canciones aún
            </p>
          </div>
        ) : (
          songs.map((s) => (
            <SongCard key={s.id} song={s} />
          ))
        )}

      </div>

      <div className="relative flex justify-end pt-30 pr-8">
        <CircularButton routeTo="cargar" />
      </div>

    </div>
  );
}

export default SongList;