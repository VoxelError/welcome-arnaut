import "./styles/_index.scss"

import i18next from 'i18next'
import en_json from "./locales/en.json"
import ar_json from "./locales/ar.json"
import sq_json from "./locales/sq.json"

import awards from "./pages/awards.js"
import books from "./pages/books.js"
import interviews from "./pages/interviews.js"
import landing from "./pages/landing.js"
import writing from "./pages/writing.js"
import photos from "./pages/photos.js"

await i18next.init({
	lng: 'en',
	fallbackLng: 'en',
	resources: {
		en: { translation: en_json },
		ar: { translation: ar_json },
		sq: { translation: sq_json },
	}
})

const modules = { landing, books, writing, interviews, awards, photos }
const pages = Object.keys(modules)
const default_page = "landing"

document.getElementById("content").innerHTML = modules[default_page]()

const tab = (event) => {
	const id = event.target.id
	const tabs = document.querySelectorAll('.page')
	tabs.forEach(t => t.classList.remove('on'))
	document.getElementById(id).classList.add('on')
	document.getElementById("content").innerHTML = modules[id]()
	window.scrollTo({ top: 0, behavior: 'smooth' })
}

pages.forEach(page => {
	const t = document.getElementById(page)
	t.id == default_page && t.classList.add('on')
	t.addEventListener('click', tab)
	console.log(document.getElementById(page).id)
})