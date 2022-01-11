const { exec } = require('child_process');
const semver = require('semver');
console.log("BEFOR PREPARE")
console.log(" /. /. .. . .. .   * **")
console.log(" /. /. .. . .. .   * **")
console.log(" /. /. .. . .. .   * **")
console.log(" /. /. .. . .. .   * **")
exec('cp ~/Sites/nativescript-project/kefah/apps/demo/shared/platforms/android/res/values/nativescript_google_maps_api.xml ~/Sites/nativescript-project/kefah/apps/demo/platforms/android/app/src/main/res/values', (err, stdout, stderr) => {
    
    if(err) {
        console.log(`EROOR DURING CPOY${err}`)
        return
    }

    console.log("COPY OK")
    console.log(stderr)
    console.log(stdout)
});

exec('cp ~/Sites/nativescript-project/kefah/apps/demo/shared/platforms/android/AndroidManifest.xml ~/Sites/nativescript-project/kefah/apps/demo/platforms/android/app/src/main/', (err, stdout, stderr) => {
    
    if(err) {
        console.log(`EROOR DURING CPOY${err}`)
        return
    }

    console.log("COPY OK")
    console.log(stderr)
    console.log(stdout)
});