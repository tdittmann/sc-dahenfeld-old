# SC Dahenfeld App
Repository of the official SC Dahenfeld app, implemented using [Ionic Framework](http://ionicframework.com/).

## Features
- News section
- Calendar for upcoming matches and events
- Information for all soccer teams
- Information for gymnastics and table tennis
- ... and many more

## Release

### Android
**Without Google Play App Signing**
1. ionic cordova build android --release --prod
2. zipalign -v -p 4 my-app-unsigned.apk my-app-unsigned-aligned.apk
3. apksigner sign --ks my-release-key.jks --out my-app-release.apk my-app-unsigned-aligned.apk

**With Google Play App Signing**
1. ionic cordova build android --release --prod
2. apksigner sign --ks my-release-key.jks --out my-app-release.apk my-app-unsigned-aligned.apk


### iOS
1. ionic cordova build ios --release
2. Release via XCode

## Official Website
http://sc-dahenfeld.de
