import SongList from "@renderer/features/loona/songs/ui/SongList"
import { useNavigate } from "react-router"

function LibraryPage() {

    const navigate = useNavigate()

  return (
    <div className="h-screen overflow-y-auto">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)}>
              Regresar
          </button>
          <p className="">Aquí tus canciones</p>
        </div>
        <SongList/>
    </div>
  )
}

export default LibraryPage