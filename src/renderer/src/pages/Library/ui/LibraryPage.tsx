import { useNavigate } from "react-router"

function LibraryPage() {

    const navigate = useNavigate()

  return (
    <div>
        <p>Aquí tus canciones</p>
        <button onClick={() => navigate(-1)}>
            Regresar
        </button>
    </div>
  )
}

export default LibraryPage