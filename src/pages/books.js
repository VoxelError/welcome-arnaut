import authored from "./books_authored"
import translated from "./books_translated"
import editorials from "./books_editorials"

// const types = ["authored", "translated", "editorials"]

window.authored = () => document.getElementById("content").innerHTML = authored()
window.translated = () => document.getElementById("content").innerHTML = translated()
window.editorials = () => document.getElementById("content").innerHTML = editorials()

const books = () => /* html */`
	<div class="panel">
		<div class="sec-title">Authored</div>
		<button class="more" onclick="authored()">See More -></button>

		<div class="sec-title">Translated</div>
		<button class="more" onclick="translated()">See More -></button>

		<div class="sec-title">Edited & Critical Editions</div>
		<button class="more" onclick="editorials()">See More -></button>
	</div>
`

window.books = () => document.getElementById("content").innerHTML = books()
export default books