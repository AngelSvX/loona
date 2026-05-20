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
    <div className="flex h-[650px] w-[450px] flex-col overflow-hidden bg-[#09091a] pb-40 text-white">

      <div className="flex flex-1 items-center justify-center px-6">

        <div
          className="group relative w-full rounded-2xl p-px transition-all duration-300 hover:scale-[1.02]"
          style={{
            background: "linear-gradient(135deg, #a580f055, #09091a)"
          }}
        >
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#09091a] p-8">

            <div className="absolute inset-0 bg-[#320f79] opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />

            <div className="z-10 mb-4 text-4xl text-[#a580f0]">
              ⬆
            </div>

            <h2 className="z-10 pb-1 text-sm font-semibold text-[#e0ddff]">
              Subir canción
            </h2>

            <p className="z-10 pb-6 text-center text-xs text-[#8888b0]">
              ¿Qué música agregaremos hoy?
            </p>

            <button
              onClick={handleUpload}
              disabled={loading}
              className="z-10 mt-6 rounded-lg px-6 py-2 text-sm transition-all duration-300 disabled:opacity-50"
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