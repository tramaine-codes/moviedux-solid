import { For, Match, Switch, createSignal } from "solid-js";
import { moviesSignal } from "../App";
import MovieCard from "./MovieCard";

export const watchlistSignal = createSignal<number[]>([]);

const [watchlist] = watchlistSignal;
const [movies] = moviesSignal;

export default function Watchlist() {
  return (
    <div>
      <h1 class="title">Your Watchlist</h1>

      <div class="watchlist">
        <Switch>
          <Match when={movies()}>
            <For each={watchlist()}>
              {(id) => {
                // biome-ignore lint/style/noNonNullAssertion: <explanation>
                const movie = movies()!.find((movie) => movie.id === id)!;
                return <MovieCard movie={movie} />;
              }}
            </For>
          </Match>
        </Switch>
      </div>
    </div>
  );
}
