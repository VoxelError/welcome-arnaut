import i18next from "i18next"
const { t } = i18next

const awards = [
	{ icon: "🏅", year: 2012, type: "Award", title: "Medal of Merit — Republic of Kosovo" },
	{ icon: "🏛️", year: 2005, type: "Membership", title: "Corresponding Member — Syrian Arab Academy of Sciences, Damascus" },
	{ icon: "🎓", year: 2005, type: "Membership", title: "External Member — Academy of Sciences and Arts of Kosovo (ASHAK)" },
	{ icon: "📚", year: 2018, type: "Appointment", title: "Director — Institute of Oriental Studies, Pristina" },
]

const body = [
	"Awarded by the President of Kosovo in recognition of exceptional contributions to the promotion of Albanian history, culture, and literature across the Arab world and the broader Middle East. One of Kosovo's highest civilian honours.",
	"Elected as corresponding member of the Arab Academy of Sciences (founded 1919), one of the oldest and most prestigious Arabic-language scientific institutions, in recognition of his scholarship on Arab–Balkan literary and historical relations.",
	"Elected external member of ASHAK, the highest scientific and cultural institution of Kosovo, acknowledging his lifelong scholarly contribution to Albanian studies and the connection between Albanian and Arab intellectual traditions.",
	"Elected by the Assembly of the Institute of Oriental Studies in Pristina as its director — a recognition of his decades of pioneering research bridging Balkan and Arab scholarly traditions.",
]

const memberships = [
	{ title: "Editorial Board — Prilozi za orijentalnu filologiju", sub: "Sarajevo · Peer-reviewed journal of Oriental philology" },
	{ title: "Editorial Board — Studime Orientale", sub: "Pristina · Journal of Oriental Studies" },
	{ title: "Senate Member — Al al-Bayt University", sub: "Mafraq, Jordan" },
	{ title: "Council of Deans — Al al-Bayt University", sub: "Mafraq, Jordan" },
	{ title: "Member — Association of Orientalists of Kosovo", sub: "Pristina" },
	{ title: "Member — Association for Research and Studies, League of Writers of Syria", sub: "Damascus" },
]

export default () => /* html */`
	<div id="awards">
		<div class="sh">Awards & Recognition</div>

		<div class="awards-list">
			${awards.map((e, i) => /*html*/`
				<div class="award-card">
					<div style="text-align:center"><span class="award-icon">${e.icon}</span>
						<div class="award-year">${e.year}<small>${e.type}</small></div>
					</div>
					<div class="award-body">
						<h3>${e.title}</h3>
						<p>${body[i]}</p>
					</div>
				</div>
			`).join('')}
		</div>

		<div class="sh2" style="margin-top:2rem">Academic & Editorial Memberships</div>

		<div class="membership-grid">
			${memberships.map((e, i) => /*html*/`
				<div class="mem-card">
					<h4>${e.title}</h4>
					<p>${e.sub}</p>
				</div>
			`).join('')}
		</div>

		<div class="placeholder-banner">
			<div class="pb-icon">🏆</div>
			<p><strong>Additional awards and honours to be added.</strong> Please contact us with any awards or recognitions not listed here.</p>
		</div>
	</div>
`