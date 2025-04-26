const less = require('less');
const fs = require('fs');

const mkdirp = require('mkdirp-classic')
const outfolder = 'assets'
mkdirp.sync(outfolder);

// TODO: DO I NEED ALL THE STYLES SUCH AS 'Blank', 'Journal' and 'DMG' ?
styles = ['5ePHB', 'Blank', 'Journal'];

styles.forEach(el => {
	less.render(fs.readFileSync(`_vendor/github.com/naturalcrit/homebrewery/themes/V3/${el}/style.less`, 'utf8'),
    { compress: true,
        paths: ['_vendor/github.com/naturalcrit/homebrewery']
    })
	.then( output => {
		fs.writeFileSync(`./${outfolder}/hb_${el}.css`, output.css);
		console.log(`./${outfolder}/hb_${el}.css created!`);
	}, err => {
		console.error('❌ Build failed:', err);
		process.exit(1);
	});
});
console.log('✅ CSS Build complete!');
