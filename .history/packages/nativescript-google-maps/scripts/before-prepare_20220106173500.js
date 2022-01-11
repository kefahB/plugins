const { exec } = require('child_process');
const semver = require('semver');

exec('cp -r ./platforms/android/res/values ../../../apps/demo/platforms/anroid/app/src/main/res/values', (err, stdout, stderr) => {
    console.log("COPY AndroidManifest.xml >> app/App_Resources/Android/AndroidManifest.xml")


});