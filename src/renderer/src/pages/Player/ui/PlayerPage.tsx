import { useNavigate } from "react-router";

export default function PlayerPage() {

  const navigate = useNavigate()

  return (
    <div className="relative flex h-[650px] w-[450px] flex-col overflow-hidden bg-[#09091a] text-[#f3f0ff]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-80px] h-[260px] w-[260px] rounded-full bg-[#7c3aed]/20 blur-[120px]" />
        <div className="absolute right-[-100px] bottom-[-120px] h-[260px] w-[260px] rounded-full bg-[#9333ea]/20 blur-[120px]" />
      </div>

      <div className="relative z-10 flex items-center justify-between border-b border-[#17182b] px-6 py-5 backdrop-blur-xl">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#a580f0] transition-all duration-300 hover:bg-[#482e9f]"
          onClick={() => { navigate(-1) }}
        >
          ◀
        </button>

        <div className="text-center">
          <p className="text-[11px] tracking-[0.3em] text-[#6d6d95] uppercase">
            Now Playing
          </p>

          <h1 className="mt-1 text-sm font-semibold text-[#f3f0ff]">
            Loona Player
          </h1>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#a580f0] transition-all duration-300 hover:bg-[#482e9f]"
        >
          ♡
        </button>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 py-8">
        <div
          className="
            relative
            flex
            h-[290px]
            w-[290px]
            items-center
            justify-center
            rounded-[42px]
            border
            border-[#a580f020]
            bg-[#111222]/80
            shadow-[0_0_80px_rgba(124,58,237,0.25)]
            backdrop-blur-2xl
          "
        >
          <div className="absolute inset-0 rounded-[42px] bg-linear-to-br from-[#c084fc]/10 to-[#7c3aed]/5" />

          <div className="relative flex h-[220px] w-[220px] items-center justify-center rounded-full border border-[#ffffff10] bg-[#0d0e1a] shadow-[0_0_50px_rgba(165,128,240,0.18)]">
            <div className="h-[170px] w-[170px] rounded-full border border-[#ffffff08] bg-linear-to-br from-[#a855f7] to-[#6d28d9]" />

            <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-[#09091a] shadow-[0_0_30px_rgba(165,128,240,0.35)]">
              <div className="h-3 w-3 rounded-full bg-[#a580f0]" />
            </div>
          </div>
        </div>

        <div className="mt-10 w-full text-center">
          <h2 className="truncate text-2xl font-bold tracking-tight text-[#f5f2ff]">
            Let You Down
          </h2>

          <p className="mt-2 text-sm text-[#7f7fa8]">
            NF
          </p>
        </div>

        <div className="mt-10 w-full">
          <div className="flex items-center justify-between text-[11px] text-[#707090]">
            <span>1:24</span>
            <span>3:58</span>
          </div>

          <div className="mt-3 h-[6px] w-full overflow-hidden rounded-full bg-[#1b1c30]">
            <div className="h-full w-[38%] rounded-full bg-linear-to-r from-[#c084fc] to-[#7c3aed] shadow-[0_0_20px_rgba(165,128,240,0.5)]" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 pt-5">
          <button
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-[#ffffff08]
              bg-[#111222]/90
              text-xl
              text-[#c4b5fd]
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#1b1d33]
            "
          >
            ⏮
          </button>

          <button
            className="
              flex
              h-[60px]
              w-[60px]
              items-center
              justify-center
              rounded-full
              bg-linear-to-br
              from-[#c084fc]
              to-[#7c3aed]
              text-3xl
              text-[#09091a]
              shadow-[0_0_40px_rgba(165,128,240,0.45)]
              transition-all
              duration-300
              hover:scale-105
            "
          >
            ▶︎
          </button>

          <button
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-[#ffffff08]
              bg-[#111222]/90
              text-xl
              text-[#c4b5fd]
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#1b1d33]
            "
          >
            ⏭
          </button>
        </div>
      </div>

      <div className="relative z-10 border-t border-[#17182b] px-6 py-5 backdrop-blur-xl">
        <div className="flex items-center justify-between rounded-2xl border border-[#ffffff08] bg-[#10111c]/70 px-4 py-3">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#66668e] uppercase">
              Queue
            </p>

            <p className="mt-1 text-sm font-medium text-[#d7d1ff]">
              18 canciones disponibles
            </p>
          </div>

          <button
            className="
              rounded-xl
              border
              border-[#a580f030]
              bg-[#151628]
              px-4
              py-2
              text-xs
              font-semibold
              text-[#b69cff]
              transition-all
              duration-300
              hover:bg-[#20233f]
            "
          >
            Ver lista
          </button>
        </div>
      </div>
    </div>
  );
}
