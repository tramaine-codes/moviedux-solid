import { A } from "@solidjs/router";
import { type JSX, createResource } from "solid-js";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles.css";

export interface Movie {
  readonly id: number;
  readonly title: string;
  readonly image: string;
  readonly genre: string;
  readonly rating: string;
}

export const moviesSignal = createResource(async () => {
  const response = await fetch("movies.json");
  return (await response.json()) as Movie[];
});

export default function App(props: { children?: JSX.Element }) {
  return (
    <div class="App">
      <div class="container">
        <Header />
        <nav>
          <ul>
            <li>
              <A href="/">Home</A>
            </li>
            <li>
              <A href="/watchlist">Watchlist</A>
            </li>
          </ul>
        </nav>

        {props.children}
      </div>

      <Footer />
    </div>
  );
}
