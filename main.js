window.addEventListener("DOMContentLoaded", () => {
	const html = document.querySelector("html");
	const card = document.querySelector("[data-card ]");

	if (html) {
		html.style.transition = "opacity .1s ease-in-out";
		html.style.opacity = "1";
	}
	if (card) {
		setTimeout(() => {
			card.classList.add("animate-in");
		}, 1000);
	}
});
