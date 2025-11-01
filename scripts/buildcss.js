const less = require('less');
const fs = require('fs');

const mkdirp = require('mkdirp-classic')
const outfolder = 'assets'
mkdirp.sync(outfolder);

// TODO: DO I REALLY NEED ALL THE STYLES SUCH AS 'Blank', 'Journal' and 'DMG' ?
const styles = ['5ePHB', 'Blank', 'Journal'];

async function buildStyle(el) {
	const combinedLess = `
		@import "_vendor/github.com/naturalcrit/homebrewery/shared/naturalcrit/styles/reset.less";
		@import "_vendor/github.com/naturalcrit/homebrewery/themes/V3/${el}/style.less";
	`;

	try {
		const output = await less.render(combinedLess,
		{ compress: true,
			paths: ['_vendor/github.com/naturalcrit/homebrewery']
		});

		fs.writeFileSync(`./${outfolder}/hb_${el}.css`, output.css);
		console.log(`./${outfolder}/hb_${el}.css created!`);
	} catch (err) {
		console.error(`❌ Build failed: for ${el}`, err);
		process.exit(1);
	}
}
async function main() {
	await Promise.all(styles.map(buildStyle))
	console.log('✅ CSS Build complete!');
}

main()