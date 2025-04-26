import esbuild from 'esbuild';
const outfile = 'assets/hb_markdown.js';

esbuild.build({
    entryPoints: [
        '_vendor/github.com/naturalcrit/homebrewery/shared/naturalcrit/markdown.js'
    ],
    bundle: true,
    platform: 'neutral',
    mainFields: ['module', 'main', 'browser'],
    format: 'esm',
    outfile: outfile,
    minify: false, // will be minified by hugo
    target: ['es6'],
    sourcemap: false, // true: Helpful for debugging
  }).then(() => {
    console.log(`./${outfile} created!`);
    console.log('✅ JS Build complete!');
  }).catch((err) => {
    console.error('❌ Build failed:', err);
    process.exit(1);
  });