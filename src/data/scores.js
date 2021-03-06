var	Scores = require('../classes/Scores');

Scores.add({ minValue: 0 },
{
	id: 'education',
	label: 'Education',
	icon: 'assets/education.png',
	value: 10,
	maxValue: 40,
	text: "<img src='assets/education.png' height='200' /><br />A good education service takes snot-nosed brats and turns them into the skilled workforce of tomorrow!",
}, {
	id: 'health',
	label: 'Health',
	icon: 'assets/health.png',
	value: 10,
	maxValue: 40,
	text: "<img src='assets/health.png' height='200' /><br />Whether it's getting hit by a train while taking a selfie, or getting suspicious objects stuck someplace awkward, its the job of the health service to get you back on your feet!",
}, {
	id: 'security',
	label: 'Security',
	icon: 'assets/security.png',
	maxValue: 20,
	value: 10,
	text: "<img src='assets/security.png' height='200' /><br />Bobbies on the beat keep you safe from the thugs and thieves of the world and armed forces keep us secure against attack. Meanwhile the dilligent spooks help to protect you from <span style='color: #000; background-color: #000'>REDACTED</span>.",
}, {
	id: 'treasury',
	label: 'The Treasury',
	icon: 'assets/treasury.png',
	value: 5,
	maxValue: 10,
	text: "<img src='assets/treasury.png' height='200' /><br />The purse-strings of power; the treasury's job is to ensure politicians don't get to buy all the cool stuff they really, really want right now!",
}, {
	id: 'people',
	label: 'The People, Mostly',
	icon: 'assets/people.png',
	value: 20,
	maxValue: 50,
	text: "<img src='assets/people.png' height='200' /><br />Previously the unwashed masses, it turns out they actually scrub up rather nicely. Also they're the workers that make the whole world turn.",
}, {
	id: 'affluent',
	label: 'Well Off, Thanks',
	icon: 'assets/affluent.png',
	value: 20,
	maxValue: 50,
	text: "<img src='assets/affluent.png' height='200' /><br />People with money who'd rather you kept your hands off of it. These are the toffs, nobs, and socialites who don't want for anything, but want more anyway.",
}, {
	id: 'oligarchs',
	label: 'Oligarchs',
	icon: 'assets/oligarchs.png',
	value: 15,
	maxValue: 30,
	text: "<img src='assets/oligarchs.png' height='200' /><br />The ultra-rich oligarchs whose primary purpose in life is to take their mounds of cash, and make more mounds of cash, and to hell with the jealous little people!",
}, {
	id: 'press',
	label: 'The Daily Smear',
	icon: 'assets/press.png',
	value: 5,
	maxValue: 15,
	text: "<img src='assets/press.png' height='200' /><br />Banned by all sensible news outlets, the Daily Smear is a propaganda rag unafraid of besmirching the good name of anyone who pisses off its billionaire tax-exile owner, Prudence Burdoch.",
});
