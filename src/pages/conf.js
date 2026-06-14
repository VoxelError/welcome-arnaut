import i18next from "i18next"
const { t } = i18next

export default () => /* html */`
	<div id="conf">
		<div class="sh">Research Papers Presented at Scientific Conferences</div>
		<div class="arts">
			<div class="ar-row">
				<div class="ay">2024</div>
				<div>
					<div class="at">On the Arnaut Ethnonym in the Middle East</div>
					<div class="ap">International Seminar on Albanian Language, Literature and Culture ·
						Institute of Albanology, Pristina</div>
				</div>
			</div>
			<div class="ar-row">
				<div class="ay">2014</div>
				<div>
					<div class="at">Arab-Balkan Relations: Historical and Cultural Dimensions</div>
					<div class="ap">1st International Symposium on Arab-Balkan Relations · Doha, Qatar</div>
				</div>
			</div>
			<div class="ar-row">
				<div class="ay">1987</div>
				<div>
					<div class="at">Literary Activity of Albanian Writers in Syria</div>
					<div class="ap">League of Writers · Damascus, Syria</div>
					<div class="note">Documented participation alongside Bedri Hysa and Abdulatif Arnauti</div>
				</div>
			</div>
		</div>
		<div class="placeholder-banner">
			<div class="pb-icon">🎓</div>
			<p><strong>Full conference record to be added.</strong> Prof. AlArnaut participated regularly in
				international academic conferences across the Balkans and Arab world.</p>
		</div>
	</div>
`