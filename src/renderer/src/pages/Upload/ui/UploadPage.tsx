import InsertSong from "@renderer/features/loona/songs/ui/InsertSong"
import { useNavigate } from "react-router"

function UploadPage() {

    const navigate = useNavigate()

  return (
    <div className="bg-[#09091a]">
        <div className="flex items-center">
            <div className="ps-8 pr-6 py-5">
                <button onClick={() => navigate(-1)} className="w-8 h-8 hover:bg-[#482e9f] duration-500 ease-in-out rounded-full">
                    ◀
                </button>
            </div>
            <div className="py-5 border-b border-[#1a1b30]">
                <h1 className="text-lg font-semibold text-[#e0ddff]">
                Importar canción
                </h1>
                <p className="text-xs text-[#8888b0] mt-1">
                Agrega música a tu biblioteca local
                </p>
            </div>
        </div>
        <div>
            <InsertSong/>
        </div>
    </div>
  )
}

export default UploadPage