import React from 'react'
import { MdOutlineImageNotSupported } from "react-icons/md";

export const Artist = ({data}) => {
    const {profile, visuals, uri} = data;

  return (
    <div className='artist-container'>
        <a href={uri} target='_blank' rel="noreferrer">
          {visuals.avatarImage != null 
          ? <img src={visuals?.avatarImage.sources[0].url} alt={profile.name}/> 
          : <MdOutlineImageNotSupported color='#212121' size='90%'/>}
        </a> 
        <h2>{profile?.name}</h2>
    </div>
  )
}
