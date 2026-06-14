import i18next from "i18next"
const { t } = i18next

export default () => /* html */`
	<div id="peer">
		<div class="sh">Research Papers in Peer-Reviewed Journals</div>
		<div class="arts">
			<div class="ar-row">
				<div class="ay">1994</div>
				<div>
					<div class="at"><a href="https://academic.oup.com/jis/article-abstract/5/2/242/748430"
							target="_blank">Islam and Muslims in Bosnia 1878–1918: Two Hijras and Two
							Fatwās</a><span class="pill">EN</span></div>
					<div class="ap">Journal of Islamic Studies, Vol. 5, No. 2, pp. 242–253 · Oxford University
						Press</div>
					<div class="note">DOI: 10.1093/jis/5.2.242 · Cited 11+ times</div>
				</div>
			</div>
			<div class="ar-row">
				<div class="ay">1990</div>
				<div>
					<div class="at">A Contribution to the Bibliography of Yugoslav Oriental Studies 1966–1990
						(Arabic Studies in Albanian Language in Yugoslavia)</div>
					<div class="ap">Prilozi za orijentalnu filologiju · Sarajevo</div>
				</div>
			</div>
			<div class="ar-row">
				<div class="ay">1981</div>
				<div>
					<div class="at">Oriental Studies and Publications of the Institute of Albanology</div>
					<div class="ap">Studime Orientale · Pristina</div>
				</div>
			</div>
		</div>
		<div class="placeholder-banner">
			<div class="pb-icon">🔬</div>
			<p><strong>Additional peer-reviewed papers to be added.</strong> Papers published in Arabic-language
				academic journals are being catalogued.</p>
		</div>
	</div>

`