import React, { useEffect, useState } from 'react'
import './row.css'
import axios from "../../../utils/axios";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	const base_url = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		(async () => {
			try {
				console.log(fetchUrl);
				const request = await axios.get(
					fetchUrl
					// const request = await axios.get(
					// 	"http://localhost:4000/api/${fetchUrl}"
				);
				console.log(request);
				setMovies(request.data.results);
			} catch (error) {
				console.log("error", error);
			}
		})();
	}, [fetchUrl]);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1, // auto play video
		},
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.title || movie?.name || movie.original_name)
				.then((url) => {		

					console.log(url);
					const urlParams = new URLSearchParams(new URL(url).search);
					console.log(URLSearchParams);
					console.log(urlParams);
					console.log(urlParams.get("v"));

					setTrailerUrl(urlParams.get("v"));

					// // OR other way
					// const videoId = new URL(url).searchParams.get("v");
					// setTrailerUrl(videoId);

					
				})
				.catch((error) => console.log(error));
		}
	};


    return (
			<div className="row">
				<h3>{title}</h3>
				<div className="row__posters">
					{movies?.map((movie, index) => (
						<img
							onClick={() => handleClick(movie)}
							key={index}
							src={`${base_url}${
								isLargeRow ? movie.poster_path : movie.backdrop_path
							}`}
							alt={movie.name}
							className={`row__poster ${isLargeRow && "row__posterLarge"}`}
						/>
					))}
				</div>
				<div style={{ padding: "40" }}>
					{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
				</div>
			</div>
		);
}

export default Row