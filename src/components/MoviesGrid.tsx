import { For } from "solid-js";
import { moviesSignal } from "../App";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
	const [movies] = moviesSignal;

	return (
		<>
			<input
				type="text"
				class="search-input"
				placeholder="Search movies . . ."
			/>

			<div class="filter-bar">
				<div class="filter-slot">
					<label>Genre</label>
					<select class="filter-dropdown">
						<option>All Genres</option>
						<option>Action</option>
						<option>Drama</option>
						<option>Fantasy</option>
						<option>Horror</option>
					</select>
				</div>

				<div class="filter-slot">
					<label>Rating</label>
					<select class="filter-dropdown">
						<option>All</option>
						<option>Good</option>
						<option>Ok</option>
						<option>Bad</option>
					</select>
				</div>
			</div>

			<div class="movies-grid">
				<For each={movies()}>{(movie) => <MovieCard movie={movie} />}</For>
			</div>
		</>
	);
}
