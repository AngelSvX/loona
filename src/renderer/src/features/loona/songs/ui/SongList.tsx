import SongCard from '@renderer/entities/song/ui/SongCard'
import songs from '../../../../shared/mock/songs.json'

function SongList() {
  return (
    <div>
        {
            songs.songs.map((s) => {
                return(
                    <SongCard key={s.id} song={s} />
                )
            })
        }
    </div>
  )
}

export default SongList