import "../styles.scss"

const sw = (lang) => {
	document.querySelectorAll('.lb').forEach(b => b.classList.remove('on'))
	document.querySelector('.lb[onclick="sw(\'' + lang + '\')"]').classList.add('on')
	document.querySelectorAll('.panel').forEach(p => p.classList.remove('on'))
	document.getElementById('p-' + lang).classList.add('on')
	document.documentElement.lang = lang
	// document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
	window.scrollTo({ top: 0, behavior: 'smooth' })
}

const tab = (lang, section) => {
	const panel = document.getElementById('p-' + lang)
	panel.querySelectorAll('.tab').forEach(t => t.classList.remove('on'))
	panel.querySelectorAll('.tab-content').forEach(c => c.classList.remove('on'))
	panel.querySelectorAll('.tab').forEach(t => {
		if (t.getAttribute('onclick') === "tab('" + lang + "','" + section + "')") t.classList.add('on')
	})

	const el = document.getElementById(lang + '-' + section)
	if (el) el.classList.add('on')

	const lb = document.querySelector('.lang-bar')
	window.scrollTo({ top: lb ? lb.offsetHeight + 2 : 0, behavior: 'smooth' })
}

window.sw = sw
window.tab = tab