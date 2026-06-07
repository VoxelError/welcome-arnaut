import "../styles.scss"
import i18next from 'i18next'
import en from "./en.js"
import ar from "./ar.js"
import sq from "./sq.js"
import en_json from "./locales/en.json"
import ar_json from "./locales/ar.json"
import sq_json from "./locales/sq.json"

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
document.getElementById('english').innerHTML = en
document.getElementById('arabic').innerHTML = ar
document.getElementById('albanian').innerHTML = sq

document.getElementById('english')

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

window.sw = sw
window.tab = tab