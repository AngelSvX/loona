import { AppDispatch, RootState } from '@renderer/app/providers/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSongsToLibrary } from '../model/thunks'
import SongCard from '@renderer/entities/song/ui/SongCard'

function SongList() {

  // const [songs, setSongs] = useState<{fileName: string, path: string}[]>([])

  const { songs } = useSelector((state: RootState) => state.song)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getSongsToLibrary())
    console.log(songs)
  }, [])
  return (
    <div>
        {
            songs.map((s) => {
                return(
                    <SongCard key={s.id} song={s} />
                )
            })
        }
    </div>
  )
}

export default SongList