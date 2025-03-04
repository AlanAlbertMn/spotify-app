import React from 'react'

export const Album = ({data}) => {
    const {artists, coverArt, date, name, uri} = data;
  return (
    <div className='album-container'>
        <a href={uri} target='_blank' rel="noreferrer"><img src={coverArt?.sources[0]?.url} alt={name}/></a>
        <h2>{name}</h2>
        <h3>{artists?.items[0]?.profile?.name}</h3>
        <h3>{date?.year}</h3>
    </div>
  )
}
