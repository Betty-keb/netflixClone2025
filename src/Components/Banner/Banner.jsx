import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from "../../utils/axios";
import req from "../../utils/requests";
function Banner() {
const [movie, setMovie] = useState([]);
useEffect(() => {
	(async () => {
		try {
			const request = await axios.get(req.fetchNetflixOrginals);
			console.log(request);
			setMovie(
				request?.data.results[
					Math.floor(Math.random() * request.data.results.length)
				]
			);
		} catch (err) {
			console.log("eror", err);
		}
	})();
}, []);
function truncate(str, n) {
	return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}


  return (
		<div
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie.orginal_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>
			<div className="banner__fadeBottom" />
		</div>
	);
}

export default Banner
