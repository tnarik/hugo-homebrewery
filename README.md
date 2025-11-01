# hugo-homebrewery

This is a [Hugo](https://gohugo.io/) Module that repackages some of [The Homebrewery](https://homebrewery.naturalcrit.com/)
assets.

The goal is to allow usage of Homebrewery assets (look and feel) within Hugo sites, so that a Markdown+ file created via [The Homebrewery](https://homebrewery.naturalcrit.com/) or compatible tooling can be published without effort. This doesn't including in-site editing capabilities.

It is still work in progress, particularly to reduce pollution from Legacy themes and assets or editing related functionality, ensure only valid licensed assets are made available via the module, minimise the imported size and foster reusability across different Hugo sites.

[2025-04-26] I spent most of the last 7 days updating this package because I revisited the blog (to edit the adventure text) and realised that, by not updating or checking the dependencies, I was missing on some features such as:

* ensuring dark mode didn't mess the text (default color is white, but pages are clear coloured and it was not visible). This was updated in the theme-props repo
* additional markdown features such as super/sub-script, which I find useful to indicate the paragraph or section in gamebook style adventures, or other notes.

Due to updated dependencies of the original homebrewery package, and the fact that browserify didn't get a real update since 2018, I switched to esbuild and faced some issues/had fun playing around with the different ways in which code is exported/imported, and how it should be bundled now. had shims for a while, but ended up learning a bit about esbuild and how to require the correct kind of files (because the 'browser' entrypoints for lots of 'marked-*' extensions do not have proper ESM default exports). In any case, ESM seems like the way to go. And, after cleaning lots of code from my spike, I am ready to commit this now.

## how to update/rebuild

for previous versions I needed an updated version of `marked` which I was patching into the build.
today (2025-11-01) I am trying a rebuild with newer versions, as it seems the upstream homebrewery repo is upgraded.

to do so, I executed:

```
hgo mod get -u
npm run build
```

this both brings in the newer module versions and generate the assets. then I just did some clean up and testing, to make sure it really works and the newer version of homebrewery fixes the need for marked patches (it does!).
