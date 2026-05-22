import { particlesInit } from "@renderer/shared/particles/ParticlesInit";
import { particlesOptions } from "@renderer/shared/particles/particlesOption";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { useNavigate } from "react-router";

function WelcomePage() {

  const navigate = useNavigate()

  return (
    <ParticlesProvider init={particlesInit}>

      <div className="relative min-h-screen overflow-hidden">

        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 -z-10"
        />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-white">

          <p className="mb-6 text-4xl font-bold">
            Bienvenido/a!
          </p>

          <div className="flex flex-col">
            <button
              className="rounded-xl bg-cyan-500 px-6 py-3 transition hover:bg-cyan-400"
              onClick={() => {
                navigate('/biblioteca');
              }}
            >
              Continuar
            </button>
          </div>

        </div>

      </div>

    </ParticlesProvider>
  )
}

export default WelcomePage