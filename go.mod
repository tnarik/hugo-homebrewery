module github.com/tnarik/hugo-homebrewery

go 1.23.1

// should require a specific version as below BUT doing so means additional NPM patching to use updated `marked` depencency
// require github.com/naturalcrit/homebrewery v3.16.0+incompatible // indirect
require github.com/naturalcrit/homebrewery v3.16.1-0.20250418115027-3f77e3255004+incompatible // indirect
