import articles from "./writing_articles"
import conference from "./writing_conference"
import peer from "./writing_peer"

// const types = ["articles", "conference", "peer"]

window.articles = () => document.getElementById("content").innerHTML = articles()
window.conference = () => document.getElementById("content").innerHTML = conference()
window.peer = () => document.getElementById("content").innerHTML = peer()

const writing = () => /* html */`
	<div class="panel">
		<div class="sec-title">Articles & Essays</div>
		<button class="more" onclick="articles()">See More -></button>

		<div class="sec-title">Peer-Reviewed Papers</div>
		<button class="more" onclick="conference()">See More -></button>

		<div class="sec-title">Conference Papers</div>
		<button class="more" onclick="peer()">See More -></button>
	</div>
`

window.writing = () => document.getElementById("content").innerHTML = writing()
export default writing