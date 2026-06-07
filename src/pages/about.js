import i18next from "i18next"
const { t } = i18next

export default () => /* html */`
	<div id="about" class="tab-content on">
		<div class="bio-wrap">
			<div class="photo-col">
				<img class="photo"
					src="https://orientalizmi.wordpress.com/wp-content/uploads/2014/02/dr-muhamed-mufaku-arnauti-e1582465691567.jpg"
					onerror="this.style.display='none';document.getElementById('fb-all').style.display='flex'" />
				<p class="pcredit">${t("about.photo_credit")}</p>
			</div>
			<div class="bio">
				<h2>${t("about.header")}</h2>
				<p>${t("about.bio1")}</p>
				<p>${t("about.bio2")}</p>
				<div class="stats">
					<div><span class="sv">30+</span><span class="sl">${t("about.stats.books")}</span></div>
					<div><span class="sv">100+</span><span class="sl">${t("about.stats.articles")}</span></div>
					<div><span class="sv">3</span><span class="sl">${t("about.stats.doctorates")}</span></div>
					<div><span class="sv">2012</span><span class="sl">${t("about.stats.medal")}</span></div>
				</div>
			</div>
		</div>
	</div>
`