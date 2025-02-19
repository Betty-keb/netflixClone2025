const API_KEY = import.meta.env.VITE_API_KEY;

const request = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOrginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRatedMovies: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default request;
// https://api.themoviedb.org/3/trending/all/week?api_key=5470e25368c70684025d352558b09a1d&language=en-US
// https://api.themoviedb.org/3/discover/tv?api_key=5470e25368c70684025d352558b09a1d&language=en-US
