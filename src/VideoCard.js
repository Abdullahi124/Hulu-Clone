import React, { forwardRef } from 'react'
import './VideoCard.style.css'
import Truncate from 'react-text-truncate'
import { ThumbUpSharp } from '@material-ui/icons'


const VideoCard = forwardRef(({ movie }, ref) => {

    const base_url = 'https://image.tmdb.org/t/p/original/'
    return (
        <div ref={ref} className='videoCard'>

            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt='' />

            <Truncate
                line={1}
                element='p'
                truncateText='...'
                text={movie.overview}
            />


            <h2>{movie.title || movie.original_name}</h2>
            <p className='video-stat'>
                {movie.release_date}
                <ThumbUpSharp />  {movie.vote_count}</p>

        </div>
    )
});

export default VideoCard
