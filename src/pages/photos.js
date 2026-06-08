import i18next from "i18next"
const { t } = i18next

export default () => /* html */`
	<div id="en-photos" class="tab-content">
		<div class="sh">Photo Album</div>
		<div class="gallery">
			<div class="gallery-item">
				<div class="gi-icon">🖼️</div>
				<div class="gi-label">Author portrait — Damascus, c. 1980s</div>
			</div>
			<div class="gallery-item">
				<div class="gi-icon">📚</div>
				<div class="gi-label">Book launch — Pristina, 2021</div>
			</div>
			<div class="gallery-item">
				<div class="gi-icon">🎓</div>
				<div class="gi-label">At the University of Pristina, c. 1985</div>
			</div>
			<div class="gallery-item">
				<div class="gi-icon">🖼️</div>
				<div class="gi-label">With scholars at the League of Writers, Damascus, 1987</div>
			</div>
			<div class="gallery-item">
				<div class="gi-icon">🏛️</div>
				<div class="gi-label">At Al al-Bayt University, Jordan</div>
			</div>
			<div class="gallery-item">
				<div class="gi-icon">📜</div>
				<div class="gi-label">Medal of Merit ceremony — Pristina, 2012</div>
			</div>
			<div class="gallery-item">
				<div class="gi-icon">🌍</div>
				<div class="gi-label">International Seminar on Albanian Language — Pristina</div>
			</div>
			<div class="gallery-item">
				<div class="gi-icon">📖</div>
				<div class="gi-label">Cairo International Book Fair, 2025</div>
			</div>
		</div>
		<p class="gallery-note">To add real photos: replace each placeholder with an &lt;img&gt; tag pointing to
			your uploaded image file. Recommended: 800×600px or larger, JPG or WebP format.</p>
	</div>
`