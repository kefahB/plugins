const { exec } = require('child_process');
const semver = require('semver');
console.log("BEFOR PREPARE")
console.log(" /. /. .. . .. .   * **")
console.log(" /. /. .. . .. .   * **")
console.log(" /. /. .. . .. .   * **")
console.log(" /. /. .. . .. .   * **")
exec('cp -r ~/Sites/nativescript-project/kefah/apps/demo/shared/platforms/android/res/values ~/Sites/nativescript-project/kefah/apps/demo/platforms/anroid/app/src/main/res/values', (err, stdout, stderr) => {
    
    if(err) {
        console.log(`EROOR DURING CPOY${err}`)
        return
    }

    console.log(stderr)
    console.log(stdout)
});