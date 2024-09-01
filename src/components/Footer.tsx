import "../styles.css";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer class="footer">
			<p class="footer-text">
				&copy; {currentYear} Moviedux, All rights reserved.
			</p>
		</footer>
	);
}
