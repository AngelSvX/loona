import { useNavigate } from "react-router"

function WelcomePage() {

  const navigate = useNavigate()

  return (
    <div>
        <p>Bienvenido/a!</p>
        <button onClick={() => {navigate('/biblioteca')}}>
            Continuar
        </button>
    </div>
    
  )
}

export default WelcomePage