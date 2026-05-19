import { useNavigate } from "react-router";

function WelcomePage() {

  const navigate = useNavigate()

  return (
    <div>
        <p>Bienvenido/a!</p>
        <div className="flex flex-col">
          <button onClick={() => {navigate('/biblioteca')}}>
              Continuar
          </button>
        </div>
    </div>
    
  )
}

export default WelcomePage