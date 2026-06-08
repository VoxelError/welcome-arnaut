import i18next from "i18next"
const { t } = i18next

export default () => /* html */`
	<div id="en-awards" class="tab-content">
		<div class="sh">Awards &amp; Recognition</div>
		<div class="awards-list">
			<div class="award-card">
				<div style="text-align:center"><span class="award-icon">🏅</span>
					<div class="award-year">2012<small>Award</small></div>
				</div>
				<div class="award-body">
					<h3>Medal of Merit — Republic of Kosovo</h3>
					<p>Awarded by the President of Kosovo in recognition of exceptional contributions to the
						promotion of Albanian history, culture, and literature across the Arab world and the
						broader Middle East. One of Kosovo's highest civilian honours.</p>
				</div>
			</div>
			<div class="award-card">
				<div style="text-align:center"><span class="award-icon">🏛️</span>
					<div class="award-year">2005<small>Membership</small></div>
				</div>
				<div class="award-body">
					<h3>Corresponding Member — Syrian Arab Academy of Sciences, Damascus</h3>
					<p>Elected as corresponding member of the Arab Academy of Sciences (founded 1919), one of
						the oldest and most prestigious Arabic-language scientific institutions, in recognition
						of his scholarship on Arab–Balkan literary and historical relations.</p>
				</div>
			</div>
			<div class="award-card">
				<div style="text-align:center"><span class="award-icon">🎓</span>
					<div class="award-year">2005<small>Membership</small></div>
				</div>
				<div class="award-body">
					<h3>External Member — Academy of Sciences and Arts of Kosovo (ASHAK)</h3>
					<p>Elected external member of ASHAK, the highest scientific and cultural institution of
						Kosovo, acknowledging his lifelong scholarly contribution to Albanian studies and the
						connection between Albanian and Arab intellectual traditions.</p>
				</div>
			</div>
			<div class="award-card">
				<div style="text-align:center"><span class="award-icon">📚</span>
					<div class="award-year">2018<small>Appointment</small></div>
				</div>
				<div class="award-body">
					<h3>Director — Institute of Oriental Studies, Pristina</h3>
					<p>Elected by the Assembly of the Institute of Oriental Studies in Pristina as its director
						— a recognition of his decades of pioneering research bridging Balkan and Arab scholarly
						traditions.</p>
				</div>
			</div>
		</div>
		<div class="sh2" style="margin-top:2rem">Academic &amp; Editorial Memberships</div>
		<div class="membership-grid">
			<div class="mem-card">
				<h4>Editorial Board — Prilozi za orijentalnu filologiju</h4>
				<p>Sarajevo · Peer-reviewed journal of Oriental philology</p>
			</div>
			<div class="mem-card">
				<h4>Editorial Board — Studime Orientale</h4>
				<p>Pristina · Journal of Oriental Studies</p>
			</div>
			<div class="mem-card">
				<h4>Senate Member — Al al-Bayt University</h4>
				<p>Mafraq, Jordan</p>
			</div>
			<div class="mem-card">
				<h4>Council of Deans — Al al-Bayt University</h4>
				<p>Mafraq, Jordan</p>
			</div>
			<div class="mem-card">
				<h4>Member — Association of Orientalists of Kosovo</h4>
				<p>Pristina</p>
			</div>
			<div class="mem-card">
				<h4>Member — Association for Research and Studies, League of Writers of Syria</h4>
				<p>Damascus</p>
			</div>
		</div>
		<div class="placeholder-banner">
			<div class="pb-icon">🏆</div>
			<p><strong>Additional awards and honours to be added.</strong> Please contact us with any awards or
				recognitions not listed here.</p>
		</div>
	</div>
`