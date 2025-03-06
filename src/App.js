import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Album } from './components/Album';
import { Artist } from './components/Artist';
import { FaSpotify } from 'react-icons/fa';

export const App = () => {
	const [albums, setAlbums] = useState([]);
	const [artists, setArtists] = useState([]);
	const input = useRef();
	const search = e => {
		e.preventDefault();
		const url = `https://spotify23.p.rapidapi.com/search/?q=${input.current.value}`;
		axios
			.get(url, {
				headers: {
					'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
					'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
				},
			})
			.then(response => {
				setAlbums(response.data.albums.items);
				setArtists(response.data.artists.items);
			});
	}

	return (
		<form onSubmit={search}>
			<div className='container'>
				<div className='flex center' style={{ gap: 15 }}>
					<FaSpotify size={80} color='#1DB954' />
					<h1 id='title'>Spotify Service</h1>
				</div>
				<div id='div-busqueda'>
					<input
						id='busqueda'
						placeholder='Enter an album or an artist here...'
						formAction='submit'
						ref={input}
						autoComplete="off"
					/>
				</div>
				{console.log(albums)}
				{albums.length>0 && (
					<>
						<h1 className='title'>Albums</h1>
						<div className='albums'>
							{albums && albums.map(el => <Album data={el.data} />)}
						</div>
						<hr className='separator' />
						<h1 className='title'>Artists</h1>
						<div className='albums'>
							{artists && artists.map(el => <Artist data={el.data} />)}
						</div>
					</>
				)}
			</div>
		</form>
	);
};

export default App;