const browserify = require('browserify');
const mkdirp = require('mkdirp-classic')
const path = require('path')
const fs = require('fs')

b = browserify('_vendor/github.com/naturalcrit/homebrewery/shared/naturalcrit/markdown.js', {standalone: 'hb_markdown'}).bundle()

outfile = 'assets/hb_markdown.js'
mkdirp.sync(path.dirname(outfile));
tmpfile = outfile + ".tmp-browserify-" + Math.random().toFixed(20).slice(2)


b.on('error', console.error);
b.on('end',
    () => {
        if (tmpfile && outfile) fs.rename(tmpfile, outfile, function (err) {
            if (err) errorExit(err);
        });
    }
);
b.pipe(fs.createWriteStream(tmpfile));
