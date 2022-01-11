const { exec } = require('child_process');
const semver = require('semver');
console.log("AFTER PREPARE")
console.log(" /. /. .. . .. .   * **")
console.log(" /. /. .. . .. .   * **")
console.log(" /. /. .. . .. .   * **")
console.log(" /. /. .. . .. .   * **")

module.exports = function($logger) {
    return new Promise(function(resolve, reject) {
        exec('cp ~/Sites/nativescript-project/kefah/apps/demo/shared/platforms/android/AndroidManifest.xml ~/Sites/nativescript-project/kefah/apps/demo/platforms/android/app/src/main/', (err, stdout, stderr) => {
    
            if(err) {
                console.log(`EROOR DURING CPOY${err}`)
                return
            }
        
            console.log("COPY OK")
            console.log(stderr)
            console.log(stdout)
        });
  });
};
