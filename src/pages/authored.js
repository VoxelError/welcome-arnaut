import i18next from "i18next"
const { t } = i18next

const books = [
	/*html*/`
		<img class="ci"
			src="https://www.shtepiaelibrit.com/store/img/p/5/5/0/2/5502-large_default.jpg"
			onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
		/>
		<div class="cp ca" style="display:none">
			<div class="co">🌙</div>
			<div class="cln"></div>
			<div class="ct">Figura shqiptare në Lindjen e Mesme</div>
			<div class="cln"></div>
			<div class="cau">Muhamed Mufaku AlArnaut</div>
		</div>
	`,
	/*html*/`
		<img class="ci"
			src="https://www.shtepiaelibrit.com/store/img/p/1/8/8/5/1885-large_default.jpg"
			onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
		/>
		<div class="cp cb" style="display:none">
			<div class="co">✦</div>
			<div class="cln"></div>
			<div class="ct">Lidhjet letrare shqiptare–arabe</div>
			<div class="cln"></div>
			<div class="cau">Muhamed Mufaku AlArnaut</div>
		</div>
	`,
	/*html*/`
		<div class="cp cc">
			<div class="co">⚜</div>
			<div class="cln"></div>
			<div class="ct">Nga historia e shqiptarëve të Egjiptit</div>
			<div class="cln"></div>
			<div class="cau">Muhamed Mufaku AlArnaut</div>
		</div>
	`,
	/*html*/`
		<div class="cp cd">
			<div class="co">📜</div>
			<div class="cln"></div>
			<div class="ct">Albanian Culture in Arabic Script</div>
			<div class="cln"></div>
			<div class="cau">Muhamed Mufaku AlArnaut</div>
		</div>
	`,
	/*html*/`
		<div class="cp ce">
			<div class="co">☽</div>
			<div class="cln"></div>
			<div class="ct">Arab-Islamic Reflections in Albanian Literature</div>
			<div class="cln"></div>
			<div class="cau">Muhamed Mufaku AlArnaut</div>
		</div>
	`,
	/*html*/`
		<div class="cp cf">
			<div class="co">◈</div>
			<div class="cln"></div>
			<div class="ct">Shqiptarët në botën arabe</div>
			<div class="cln"></div>
			<div class="cau">Muhamed Mufaku AlArnaut</div>
		</div>
	`,
	/*html*/`
		<div class="cp cg">
			<div class="co">★</div>
			<div class="cln"></div>
			<div class="ct">Islami në Jugosllavi</div>
			<div class="cln"></div>
			<div class="cau">Muhamed Mufaku AlArnaut</div>
		</div>
	`,
	/*html*/`
		<div class="cp ch">
			<div class="co">🏛</div>
			<div class="cln"></div>
			<div class="ct">Historia e Beogradit oriental</div>
			<div class="cln"></div>
			<div class="cau">Muhamed Mufaku AlArnaut</div>
		</div>
	`,
	/*html*/`
		<div class="cp cj">
			<div class="co">⚔</div>
			<div class="cln"></div>
			<div class="ct">Kosova epiqendra e konfliktit</div>
			<div class="cln"></div>
			<div class="cau">Muhamed Mufaku AlArnaut</div>
		</div>
	`
]

const btag = [
	"History · Albanian",
	"Literary Studies",
	"History · Albanian",
	"Scholarship · Arabic",
	"Scholarship · Kuwait",
	"History",
	"History · Religion",
	"History · Urban",
	"History · Politics"
]

const btit = [
	`<a href="https://zeri.info/kultura/413783/promovohet-libri-i-muhamed-mufakut-figura-shqiptare-ne-lindjen-e-mesme/" target="_blank">Figura shqiptare në Lindjen e Mesme: shek. XVI–XX</a>`,
	`<a href="https://www.shtepiaelibrit.com/store/en/reference-books/1885-lidhjet-letrare-shqiptare-arabe-muhamed-mufaku-arnauti.html" target="_blank">Lidhjet letrare shqiptare–arabe</a>`,
	`<a href="https://www.shtepiaelibrit.com/store/en/albanian-history/5502-nga-historia-e-shqiptareve-te-egjiptit-gjate-shekujve-xv-xx-muhamed-mufaku-9789951615594.html" target="_blank">Nga historia e shqiptarëve të Egjiptit gjatë shekujve XV–XX</a>`,
	`Albanian Culture in Arabic Script`,
	`Arab-Islamic Reflections in Albanian Literature`,
	`Shqiptarët në botën arabe`,
	`Islami në Jugosllavi`,
	`Historia e Beogradit oriental`,
	`Kosova epiqendra e konfliktit shqiptaro-serb`,
]

const bdesc = [
	"Albanian Figures in the Middle East, 16th–20th centuries. 30 years of research (1989–2018)",
	"Albanian–Arabic Literary Relations. 296 pages. ISBN 978-99956-646-0-2",
	"From the History of Albanians in Egypt. 172 pp. ISBN 978-9951-615-59-4",
	"Pioneering study of Albanian cultural production written in Arabic script. ",
	"Islamic influence on Albanian literary tradition. One of the first such studies in the Arab world",
	"Albanians in the Arab World — a comprehensive survey",
	"Islam in Yugoslavia — history of Muslim communities in the Yugoslav Federation",
	"History of Oriental Belgrade — the Islamic and Ottoman heritage of the Serbian capital",
	"Kosovo as the epicentre of Albanian-Serbian conflict in the 20th century",
]

const bmeta = [
	"Logos-A · Pristina / Skopje / Tirana, 2021",
	"Albanian Centre for Oriental Studies · Tirana, 2009",
	"ASHAK · Pristina, 2016",
	"Dar al-Bashir · Amman, 1991",
	"Kuwait, c. 1990s",
	"Damascus / Pristina",
	"Pristina",
	"Pristina",
	"Pristina",
]

export default () => /* html */`
	<div id="authored">
		<div class="sh">Authored Books</div>

		<div class="book-grid">
			${books.map((book, i) => /*html*/`
				<div class="bc">
					<div class="cw">
						${book}
					</div>
					<div class="btag">${btag[i]}</div>
					<div class="btit">${btit[i]}</div>
					<div class="bdesc">${bdesc[i]}.</div>
					<div class="bmeta">${bmeta[i]}</div>
				</div>
			`).join('')}
		</div>

		<div class="sh2" style="margin-top:2rem">Further Authored Titles</div>
		<div class="tg">
			<div class="ti"><strong>Studime mbi Devshermen</strong> — Studies on the Devshirme System</div>
			<div class="ti"><strong>Ana tjetër e Ittihad ve Terekki</strong> — The Other Side of the CUP</div>
			<div class="ti"><strong>Studime në historinë kulturore të islamit në Ballkan</strong></div>
			<div class="ti"><strong>Tregime popullore rome të Kosovës</strong> — Roma Folk Tales of Kosovo</div>
			<div class="ti"><strong>Palestina shqiptare</strong> — Albanian poetry with Palestinian themes</div>
			<div class="ti"><strong>Prapa natës</strong> — Poetry of the Albanians of Syria</div>
		</div>
		<p style="margin-top:1.25rem;font-size:13px;color:var(--text3)">
			Full catalogue: <a href="https://ashak.org/anetaret/muhamed-mufaku/" target="_blank">Academy of Sciences and Arts of Kosovo (ASHAK)</a>
		</p>
	</div>
`