/*
Flag Format
Bits 0-2 difficulty (sub-demon, easy, medium, hard, insane, extreme, challenge, impossible)
Bit 3 remake tag
Bit 4 unrated tag
Bit 5 platformer tag
Bit 6 trans tag
*/
const levels = [
	['Dysphoria','IceboxOG','81413188', 36],
	['SLAY MOMENT', 'RafaBirds', '118366680', 5],
	['Pride','Sakura','62444479', 34],
	['The Perfect Girl','Kapelli', '91530507', 21],
	['Storming Summit','Nimbus','76653933', 37],
	['be trans throw hands','BridgetTheCroco','106206647', 48],
	['Transclysm','Sinneslochen','116804015', 60],
	['pride level','qjivxn', '70719847', 32],
	['priDEMONth','tricipital','91677667', 32],
	['Femboy Circles','Skeletonette, Akirameru','130633756', 29],
	['Femboy Fantasy','Sensawa','71798659', 21],
	['GIRLTRON 3000','BridgetTheCroco', '79037527', 0],
	['project girlboss','koko43','110769842', 5],
	['pride','shrympo','70476012', 33],
	['Cat Girl', 'Choplox', '108526412', 0],
	['girl perspective','rinad2023', '114499467', 0],
	['EstrofemTransventure', 'Kalavian', '120486509', 49],
	['Femboy Gang','xm1x', '97928486', 22],
	['meow','MrGm211', '82092116', 5],
	['slay total', 'rafabirds', '113003780', 0],
	['Dysphoria', 'Hychie', '70639047', 32],
	['Femboy Vortex', 'Ziriksi', '65392774', 48],
	['Glue girl','twigxcabaret, gayskeleton', '91576832', 34],
	['meow hard','meowdead*', '111862459', 5],
	['prIde','DubbyBall', '93233103', 32],
	['Cat Planet','IcEDCave', '84766628', 5],
	['Unique Girl','Omar2010', '67514929', 3],
	['Cute Girl Feelings','AngelEffect', '109289651', 23],
	['femboy challenge', 'DrCuber', '66121919', 54],
	['transide', 'qalli', '106758929', 104],
	['Trans Acu','solstacoded', '80142751', 61],
	['ESTROGENOCIDE','DemonGirlfriend, Skyyee', '112596651', 47],
	['Gender Chamber','Kalavian', 'Unreleased', 62],
	['RAINBOW GIRL','LLoom','103062165', 5],
	['Catboy Demon','PPPixel', 'Unreleased', 21],
	['5 seconds trans', 'charlttte', '76162005', 54],
	['KOTEKclubHOUSE','Skyyee', '112596651', 39],
	['thespikeisoverthere','BranSilver', '58977211', 32],
	['Femboy Friday','Narkify','86414534', 21],
	['BUNNYGIRLAUBREY', 'Aeqing1 & Illuminati65', '95653592', 23],
	['Silent Meow World II','Tucosifo','124759567', 20],
	['Transgendergeist','Tucosifo','144439258', 60],
	['Tower of Femboy','ImLaxris', '93365782', 23],
	['Woke Circles', 'PPPixel', '88318424', 61],
];
const tiers = [
	[0, 'The Summit'],
	[7, 'Epic Tier'],
	[18, 'Chill Tier'],
	[32, 'Extended Tier'],
	[50, 'Legacy List'],
	[1000, ''] // gotta have this otherwise it'll break
];
const difficultyLevels = ['Non-Demon Level', 'Easy Demon', 'Medium Demon', 'Hard Demon', 'Insane Demon', 'Extreme Demon', 'Challenge', 'Impossible'];
// list generation
const levelsContainer = document.getElementById('list-levels');
let currentTier = 0;

window.onload = buildList

function buildList(){
	let htmlString = '';
	for(let i=0;i<levels.length;i++){
		// add tier
		if(i==tiers[currentTier][0]){
			htmlString+=`<h2 class="slayqueen-tier" id="tier-bg${currentTier}">${tiers[currentTier][1]}</h2>`;
			currentTier++;
		}
		// get level name
		let levelName = levels[i][2];
		let nameLen = levelName.length-1;
		if(levelName[nameLen]=='*'){
			levelName = levelName.substring(0, nameLen) + ' and more'
		}
		// add level box
		const currentLevel = `<div class="level-container"><span class="level-title">#${i+1} - ${levels[i][0]}</span><span class="level-info">${levels[i][1].replace('*',' and more')} | ${levels[i][2]}</span><div class="level-tags"><span class="level-tag">${difficultyLevels[levels[i][3]&7]}</span>${getOtherTags(i)}</div></div>`;
		htmlString+=currentLevel;
	}
	levelsContainer.innerHTML = htmlString;
}

function getOtherTags(level){
	let otherTags = '';
	if(levels[level][3]&8){
		otherTags += '<span class="level-tag">Remake</span>';
	}
	if(levels[level][3]&16){
		otherTags += '<span class="level-tag">Unrated</span>';
	}
	if(levels[level][3]&32){
		otherTags += '<span class="level-tag">Trans :3</span>';
	}
	if(levels[level][3]>=64){
		return otherTags + '<span class="level-tag">Platformer</span>';
	}
	return otherTags;
}
