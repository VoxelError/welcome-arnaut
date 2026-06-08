import "../styles.scss"
import i18next from 'i18next'
import en_json from "./locales/en.json"
import ar_json from "./locales/ar.json"
import sq_json from "./locales/sq.json"

import about from "./pages/about.js"
import articles from "./pages/articles.js"
import authored from "./pages/authored.js"
import awards from "./pages/awards.js"
import conf from "./pages/conf.js"
import interviews from "./pages/interviews.js"
import peer from "./pages/peer.js"
import photos from "./pages/photos.js"
import translated from "./pages/translated.js"

await i18next.init({
	lng: 'en',
	fallbackLng: 'en',
	resources: {
		en: { translation: en_json },
		ar: { translation: ar_json },
		sq: { translation: sq_json },
	}
})

const tabs = [
	"about",
	"authored",
	"translated",
	"articles",
	"peer",
	"conf",
	"interviews",
	"awards",
	"photos"
].map((t, i) =>
	/* html */`
		<button
			class="tab ${i == 0 && 'on'}"
			onclick="tab('en','${t}')"
		>
			${i18next.t(`nav.${t}`)}
		</button>
	`
).join('')

document.getElementById('navv').innerHTML = /* html */`<div class="tab-grid">${tabs}</div>`

const render_content = () => {
	document.getElementById('about').innerHTML = about()
	document.getElementById('articles').innerHTML = articles()
	document.getElementById('authored').innerHTML = authored()
	document.getElementById('awards').innerHTML = awards()
	document.getElementById('conf').innerHTML = conf()
	document.getElementById('interviews').innerHTML = interviews()
	document.getElementById('peer').innerHTML = peer()
	document.getElementById('photos').innerHTML = photos()
	document.getElementById('translated').innerHTML = translated()
}
render_content()

const swap = async (lang) => {
	await i18next.changeLanguage(lang)
	render_content()
}

const sw = (lang) => {
	document.querySelectorAll('.lb').forEach(b => b.classList.remove('on'))
	document.querySelector(`.lb[onclick="sw('${lang}')"]`).classList.add('on')
	document.querySelectorAll('.panel').forEach(p => p.classList.remove('on'))
	document.getElementById(`p-${lang}`).classList.add('on')
	document.documentElement.lang = lang
	// document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
	window.scrollTo({ top: 0, behavior: 'smooth' })
}

const tab = (lang, section) => {
	const panel = document.getElementById(`p-${lang}`)
	panel.querySelectorAll('.tab').forEach(t => t.classList.remove('on'))
	panel.querySelectorAll('.tab-content').forEach(c => c.classList.remove('on'))
	panel.querySelectorAll('.tab').forEach(t => {
		if (t.getAttribute('onclick') === `tab('${lang}','${section}')`) {
			t.classList.add('on')
		}
	})
	document.getElementById(`${lang}-${section}`)?.classList.add('on')
	window.scrollTo({ top: 0, behavior: 'smooth' })
}

window.swap = swap
window.sw = sw
window.tab = tab