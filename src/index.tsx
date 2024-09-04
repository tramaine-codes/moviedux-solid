/* @refresh reload */
import { Route, Router } from "@solidjs/router";
import { render } from "solid-js/web";
import App from "./App";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import "./index.css";

render(
  () => (
    <Router root={App}>
      <Route path="/" component={MoviesGrid} />
      <Route path="/watchlist" component={Watchlist} />
    </Router>
  ),
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  document.getElementById("root")!,
);
