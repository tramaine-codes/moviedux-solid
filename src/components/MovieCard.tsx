import { Match, Switch } from "solid-js";
import type { Movie } from "../App";
import { watchlistSignal } from "./Watchlist";

interface MovieCardProps {
	readonly movie: Movie;
}

const ratingClass = (rating: string) => {
	if (Number.parseFloat(rating) >= 8) {
		return "rating-good";
	}

	if (Number.parseFloat(rating) >= 5) {
		return "rating-ok";
	}

	return "rating-bad";
};

const [watchlist, setWatchlist] = watchlistSignal;

const toggleWatchlist = ({ id: movieId }: Movie) => {
	setWatchlist((prev) =>
		prev.includes(movieId)
			? prev.filter((id) => id !== movieId)
			: [...prev, movieId],
	);
};

export default function MovieCard({ movie }: MovieCardProps) {
	const isWatchlisted = () => watchlist().includes(movie.id);

	return (
		<div class="movie-card">
			<img src={`images/${movie.image}`} alt={movie.title} />
			<div class="movie-card-info">
				<h3 class="movie-card-title">{movie.title}</h3>

				<div>
					<span class="movie-card-genre">{movie.genre}</span>
					<span class={`movie-card-rating ${ratingClass(movie.rating)}`}>
						{movie.rating}
					</span>
				</div>

				<label class="switch">
					<input
						type="checkbox"
						checked={isWatchlisted()}
						onChange={() => toggleWatchlist(movie)}
					/>

					<span class="slider">
						<span class="slider-label">
							<Switch fallback="Add to Watchlist">
								<Match when={isWatchlisted()}>In Watchlist</Match>
							</Switch>
						</span>
					</span>
				</label>
			</div>
		</div>
	);
}
