import i18next from "i18next"
const { t } = i18next

const year = [
	2024,
	2024,
	2022,
	2021,
	2009,
	1978,
]

const ap = [
	"Koha.net · September 2024",
	"Gazeta Express · Lecture at the Institute of Albanology, 2024",
	"Koha.net · March 2022",
	"Koha.net · January 2021",
	"Revista URA, No. 2 · Albanian Centre for Oriental Studies, Tirana",
	"Al-Arabi Journal · Kuwait",
]

const links = [
	`www.koha.net/en/shtojca-kulture/arnautet-e-lindjes-se-mesme`,
	`www.gazetaexpress.com/en/muhamed-mufaku-mbi-etnonimin-arnaut-ne-lindjen-e-mesme/`,
	`www.koha.net/en/shtojca-kulture/abdulatif-arnauti-ndash-zeri-i-letersise-shqipe-ne-arabisht-sinonim-i-shqiptareve-ne-siri`,
	`www.koha.net/en/kulture/abdulatif-arnauti-70-vjet-ne-sherbim-te-kultures-shqiptare`,
	`orientalizmi.wordpress.com/2012/01/12/maruf-arnauti-romancieri-i-pare-ne-letersine-siriane/`,
]

const link_text = [
	"Arnauts of the Middle East",
	"On the Arnaut Ethnonym in the Middle East",
	"Abdulatif Arnauti — The Voice of Albanian Literature in Arabic",
	"Abdulatif Arnauti — 70 Years at the Service of Albanian Culture",
	"Maruf Arnauti — The First Novelist in Syrian Literature",
	"The Religious Question in Albania",
]

const pill = ["EN", "EN", "EN", "EN", "SQ", "AR"]

export default () => /* html */`
	<div id="articles">
		<div class="sh">Articles & Essays</div>

		<div class="arts">
			${year.map((e, i) => /*html*/`
				<div class="ar-row">
					<div class="ay">${year[i]}</div>
					<div>
						<div class="at">
							<a href="https://${links[i]}" target="_blank">${link_text[i]}</a>
							<span class="pill">${pill[i]}</span>
						</div>
						<div class="ap">${ap[i]}</div>
					</div>
				</div>
			`).join('')}
		</div>

		<div class="placeholder-banner">
			<div class="pb-icon">✍️</div>
			<p>
				<strong>100+ articles documented.</strong> A full list is being compiled. Please contact us to contribute bibliographic entries.
			</p>
		</div>
	</div>
`