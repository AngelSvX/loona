import { Song } from "../model/types"

function SongCard({ song }: { song: Song }) {

  console.log(song.image)

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div
        className="group relative w-full rounded-2xl p-px transition-all duration-300 hover:scale-[1.01]"
        style={{
          background: `linear-gradient(135deg, ${song.color}55, #09091a)`
        }}
      >
        <div className="relative flex items-center gap-4 bg-[#09091a] rounded-2xl p-3 overflow-hidden">

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"
            style={{ background: song.color }}
          />

          <div className="relative w-28 h-28 shrink-0">
            <img
              src={song.image}
              alt={song.name}
              className="w-full h-full object-cover rounded-xl"
            />

            <span className="absolute bottom-1 right-1 text-[10px] px-2 py-[2px] rounded bg-black/70 text-white">
              {song.duration}
            </span>
          </div>

          <div className="flex flex-col justify-center flex-1 min-w-0 z-10">

            <h3 className="text-base font-semibold text-[#e0ddff] truncate">
              {song.name}
            </h3>

            <p className="text-sm text-[#8888b0] truncate">
              {song.author}
            </p>

            <div className="flex items-center justify-between mt-2">
              <span
                className="text-xs px-2 py-1 rounded-full"
                style={{
                  background: `${song.color}33`,
                  color: song.color
                }}
              >
                {song.genre}
              </span>

              <button
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm px-4 py-1 rounded-lg text-white"
                style={{
                  background: song.color,
                }}
              >
                ▶ Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SongCard