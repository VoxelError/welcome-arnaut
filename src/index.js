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

// tabs logic

const modules = { landing, books, writing, interviews, awards, photos }
const pages = Object.keys(modules)
const default_page = "writing"

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
})

// theme switcher

const body = document.getElementById("theme")
const toggle = document.getElementById("theme-toggle")
const get_theme = () => localStorage.getItem("theme")
const set_theme = (item) => localStorage.setItem("theme", item)

get_theme() == null && set_theme("light")
const is_light = () => get_theme() == "light" ? true : false

is_light() ? body.classList.add("light") : body.classList.add("dark")
toggle.textContent = is_light() ? '☀️' : '🌙'

toggle.addEventListener('click', () => {
	body.classList.remove("light")
	body.classList.remove("dark")

	is_light() ? body.classList.add("dark") : body.classList.add("light")
	set_theme(is_light() ? "dark" : "light")

	toggle.textContent = is_light() ? '☀️' : '🌙'
})