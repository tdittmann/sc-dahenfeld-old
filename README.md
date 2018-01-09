# SC Dahenfeld App
Repository of the official SC Dahenfeld app, implemented using [Ionic Framework](http://ionicframework.com/).

## Features
- News section
- Calendar for upcoming matches and events
- Information for all soccer teams
- Information for gymnastics and table tennis

## Release

### Android
1. ionic cordova build android --release
2. zipalign -v -p 4 my-app-unsigned.apk my-app-unsigned-aligned.apk
3. apksigner sign --ks my-release-key.jks --out my-app-release.apk my-app-unsigned-aligned.apk

### iOS
1. ionic cordova build android --release
2. Deploy via XCode

## Official Website
http://sc-dahenfeld.de

## License
Available under the GPL v3 license. See the [LICENSE file](https://choosealicense.com/licenses/gpl-3.0/) for more information.
