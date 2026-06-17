import "../styles.scss"
import i18next from 'i18next'
import en_json from "./locales/en.json"
import ar_json from "./locales/ar.json"
import sq_json from "./locales/sq.json"

import about from './pages/about.js'
import articles from './pages/articles.js'
import authored from './pages/authored.js'
import awards from './pages/awards.js'
import conf from './pages/conf.js'
import interviews from './pages/interviews.js'
import peer from './pages/peer.js'
import photos from './pages/photos.js'
import translated from './pages/translated.js'

await i18next.init({
	lng: 'en',
	fallbackLng: 'en',
	resources: {
		en: { translation: en_json },
		ar: { translation: ar_json },
		sq: { translation: sq_json },
	}
})

const modules = { about, articles, authored, awards, conf, interviews, peer, photos, translated }
const pages = Object.keys(modules)

document.getElementById("content").innerHTML = modules["about"]()
document.getElementById('tab-grid').innerHTML = pages.map((t, i) =>
	/* html */`
		<button
			id="${t}"
			class="tab ${i == 0 && 'on'}"
			onclick="tab('${t}')"
		>
			<!-- ${i18next.t(`nav.${t}`)} -->
			${t}
		</button>
	`
).join('')

const swap = async (lang) => await i18next.changeLanguage(lang)

const tab = (section) => {
	document.querySelectorAll(".tab").forEach(t => t.classList.remove('on'))
	document.getElementById(section).classList.add('on')
	document.getElementById("content").innerHTML = modules[section]()
	window.scrollTo({ top: 0, behavior: 'smooth' })
	i18next.changeLanguage("en")
}

window.swap = swap
window.tab = tab