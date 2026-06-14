import i18next from "i18next"
const { t } = i18next

export default () => /* html */`
	<div id="interviews">
		<div class="sh">Interviews</div>
		<div class="interview-list">
			<div class="interview-card">
				<div class="ic-title"><a
						href="https://telegrafi.com/en/Muhamed-Mufaku,-director-of-the-Institute-of-Oriental-Studies-in-Pristina/"
						target="_blank">Muhamed Mufaku AlArnaut, Director of the Institute of Oriental Studies
						in Pristina</a><span class="ic-badge">EN</span></div>
				<div class="ic-meta">Telegrafi · October 2018 · On his appointment as director and scholarly
					career</div>
			</div>
			<div class="interview-card">
				<div class="ic-title"><a href="https://telegrafi.com/en/shqiptaret-ne-siri-assad-po-na-vret/"
						target="_blank">Albanians in Syria: Assad is Killing Us</a><span
						class="ic-badge">EN</span></div>
				<div class="ic-meta">Telegrafi · 2012 · On the Albanian community in Syria during the civil war
				</div>
			</div>
		</div>
		<div class="placeholder-banner">
			<div class="pb-icon">🎙️</div>
			<p><strong>More interviews to be added.</strong> Video and print interviews from Kosovo, Albania,
				Jordan, and Syria are being collected.</p>
		</div>
	</div>
`