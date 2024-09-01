import { For, createSignal } from "solid-js";
import { type Movie, moviesSignal } from "../App";
import MovieCard from "./MovieCard";

const [movies] = moviesSignal;
const [searchTerm, setSearchTerm] = createSignal("");
const [genre, setGenre] = createSignal("All Genres");
const [rating, setRating] = createSignal("All");

const matchesSearchTerm = (movie: Movie, searchTerm: string) =>
	movie.title.toLowerCase().includes(searchTerm.toLowerCase());

const matchesGenre = (movie: Movie, genre: string) =>
	genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();

const matchesRating = (movie: Movie, rating: string) => {
	switch (rating) {
		case "All":
			return true;
		case "Good":
			return Number.parseFloat(movie.rating) >= 8;
		case "Ok":
			return (
				Number.parseFloat(movie.rating) >= 5 &&
				Number.parseFloat(movie.rating) < 8
			);
		case "Bad":
			return Number.parseFloat(movie.rating) < 5;
		default:
			return false;
	}
};

const filteredMovies = () =>
	movies()?.filter(
		(movie) =>
			matchesSearchTerm(movie, searchTerm()) &&
			matchesGenre(movie, genre()) &&
			matchesRating(movie, rating()),
	);

export default function MoviesGrid() {
	return (
		<>
			<input
				type="text"
				class="search-input"
				placeholder="Search movies . . ."
				value={searchTerm()}
				onInput={(e) => setSearchTerm(e.target.value)}
			/>

			<div class="filter-bar">
				<div class="filter-slot">
					<label>Genre</label>
					<select
						class="filter-dropdown"
						onChange={(e) => setGenre(e.target.value)}
					>
						<option>All Genres</option>
						<option>Action</option>
						<option>Drama</option>
						<option>Fantasy</option>
						<option>Horror</option>
					</select>
				</div>

				<div class="filter-slot">
					<label>Rating</label>
					<select
						class="filter-dropdown"
						onChange={(e) => setRating(e.target.value)}
					>
						<option>All</option>
						<option>Good</option>
						<option>Ok</option>
						<option>Bad</option>
					</select>
				</div>
			</div>

			<div class="movies-grid">
				<For each={filteredMovies()}>
					{(movie) => <MovieCard movie={movie} />}
				</For>
			</div>
		</>
	);
}
