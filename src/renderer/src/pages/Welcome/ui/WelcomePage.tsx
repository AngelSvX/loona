import { particlesInit } from "@renderer/shared/particles/particlesInit";
import { particlesOptions } from "@renderer/shared/particles/particlesOption";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { useNavigate } from "react-router";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <ParticlesProvider init={particlesInit}>
      <div className="relative h-[650px] w-[450px] overflow-hidden bg-[#09091a]">

        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />

        <div
          className="
            absolute
            inset-0
            z-1
            bg-linear-to-b
            from-[#09091a]/40
            via-[#09091a]/60
            to-[#09091a]
          "
        />

        <div
          className="
            absolute
            top-1/2
            left-1/2
            z-1
            h-[200px]
            w-[320px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#7c3aed]
            opacity-20
            blur-[120px]
          "
        />

        <div
          className="
            relative
            z-10
            flex
            h-screen
            flex-col
            items-center
            justify-center
            px-18
            text-center
          "
        >

          <div
            className="
              mb-8
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-[28px]
              border
              border-[#a580f030]
              bg-[#10111c]/80
              shadow-[0_0_50px_rgba(165,128,240,0.18)]
              backdrop-blur-xl
            "
          >
            <span className="text-5xl text-[#a580f0]">
              ♫
            </span>
          </div>

          <h1
            className="
              pt-2
              pb-5
              text-4xl
              font-bold
              tracking-tight
              text-[#f3f0ff]
            "
          >
            Loona
          </h1>

          <div className="mt-12 flex w-full flex-col gap-4">

            <button
              onClick={() => navigate("/biblioteca")}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#a580f040]
                bg-[#a580f0]
                px-6
                py-3
                text-sm
                font-semibold
                text-[#09091a]
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_0_35px_rgba(165,128,240,0.35)]
                active:scale-[0.98]
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  bg-linear-to-r
                  from-[#c084fc]
                  to-[#9333ea]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <span className="relative z-10">
                Ingresar
              </span>
            </button>

          </div>

          <div
            className="
              absolute
              bottom-5
              text-[13px]
              tracking-[0.25em]
              text-[#30305a]
            "
          >
            SYNTHWAVE EXPERIENCE
          </div>

        </div>
      </div>
    </ParticlesProvider>
  );
}

export default WelcomePage;