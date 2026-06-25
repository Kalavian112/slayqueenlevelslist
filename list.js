/*
Flag Format
Bits 0-2 difficulty (sub-demon, easy, medium, hard, insane, extreme, challenge, impossible)
Bit 3 remake tag
Bit 4 unrated tag
*/
const levels = [
	// many levels deemed unlistworthy were removed from this version
	['Dysphoria','IceboxOG','81413188', 4],
	['SLAY MOMENT', 'RafaBirds', '118366680', 5],
	['Pride','Sakura','62444479', 2],
	['The Perfect Girl','Kapelli', '91530507', 21],
	['Transclysm','Sinneslochen','116804015', 12],
	['pride level','qjivxn', '70719847', 0],
	['priDEMONth','tricipital','91677667', 0],
	['Femboy Circles','Skeletonette, Akirameru','130633756', 29],
	['Femboy Fantasy','Sensawa','71798659', 21],
	['project girlboss','koko43','110769842', 5],
	['pride','shrympo','70476012', 1],
	['Dysphoria', 'Hychie', '70639047', 0],
	['prIde','DubbyBall', '93233103', 0],
	['Femboy Gang','xm1x', '97928486', 22],
	['EstrofemTransventure', 'Kalavian', '120486509', 17],
	['transide', 'qalli', '106758929', 40],
	['Trans Acu','solstacoded', '80142751', 29],
	['RAINBOW GIRL','LLoom','103062165', 5],
	['Catboy Demon','PPPixel', 'Unreleased', 21],
	['thespikeisoverthere','BranSilver', '58977211', 0],
	['Cute Girl Feelings','AngelEffect', '109289651', 23],
	['Gender Chamber','Kalavian', 'Unreleased', 30],
	['BUNNYGIRLAUBREY', 'Aeqing1 & Illuminati65', '95653592', 23],
	['Femboy Friday','Narkify','86414534', 21],
	['Tower of Femboy','ImLaxris', '93365782', 23],
	['Woke Circles', 'PPPixel', '88318424', 29],
];
const tiers = [
	// list tiers were simplified in this version until there's more levels
	[0, 'The Summit'],
	[7, 'Epic Tier'],
	[101, 'Legacy List'],
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
		let nameLen = levelName.length-1
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
	if(levels[level][3]>=16){
		return otherTags + '<span class="level-tag">Unrated</span>';
	}
	return otherTags;
}
