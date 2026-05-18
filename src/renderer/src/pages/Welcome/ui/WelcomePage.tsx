import { AppDispatch } from "@renderer/app/providers/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { uploadSongToLibrary } from "@renderer/features/loona/songs/model/thunks";

function WelcomePage() {

  const navigate = useNavigate()

  const dispatch = useDispatch<AppDispatch>();

  // const { songError, songLoading, songs } = useSelector((state: RootState) => state.song);

  return (
    <div>
        <p>Bienvenido/a!</p>
        <div className="flex flex-col">
          <button onClick={() => {navigate('/biblioteca')}}>
              Continuar
          </button>
          <button onClick={() => dispatch(uploadSongToLibrary())}>
            Importar canción
          </button>
        </div>
    </div>
    
  )
}

export default WelcomePage