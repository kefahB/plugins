const { exec } = require('child_process');
const semver = require('semver');
console.log("AFTER PREPARE")
console.log(" /. /. .. . .. .   * **")
console.log(" /. /. .. . .. .   * **")
console.log(" /. /. .. . .. .   * **")
console.log(" /. /. .. . .. .   * **")
console.log(" /. /. .. . .. .   * **")
exec('cp -r ../../../packages/nativescript-google-maps/platforms/android/res/values ../../../apps/demo/platforms/anroid/app/src/main/res/values', (err, stdout, stderr) => {
    
    if(err) {
        console.log(`EROOR DURING CPOY${err}`)
        return
    }

    console.log(stdout)
});