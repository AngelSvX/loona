import { AppDispatch } from "@renderer/app/providers/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadSongToLibrary } from "../model/thunks";

function InsertSong() {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    try {
      setLoading(true);
      await dispatch(uploadSongToLibrary());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[450px] h-[650px] bg-[#09091a] text-white flex flex-col overflow-hidden pb-40">

      <div className="flex-1 flex items-center justify-center px-6">

        <div
          className="group relative w-full rounded-2xl p-px transition-all duration-300 hover:scale-[1.02]"
          style={{
            background: "linear-gradient(135deg, #a580f055, #09091a)"
          }}
        >
          <div className="relative flex flex-col items-center justify-center bg-[#09091a] rounded-2xl p-8 overflow-hidden">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 bg-[#320f79]" />

            <div className="z-10 text-4xl mb-4 text-[#a580f0]">
              ⬆
            </div>

            <h2 className="z-10 text-sm font-semibold text-[#e0ddff] pb-1">
              Subir canción
            </h2>

            <p className="z-10 text-xs text-[#8888b0] text-center pb-6">
              ¿Qué música agregarás hoy?
            </p>

            <button
              onClick={handleUpload}
              disabled={loading}
              className="z-10 mt-6 text-sm px-6 py-2 rounded-lg transition-all duration-300 disabled:opacity-50"
              style={{
                background: "#a580f0",
                color: "#09091a"
              }}
            >
              {loading ? "Importando..." : "Seleccionar archivo"}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default InsertSong;