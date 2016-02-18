
var Download = require('download');
 
function createElectronApp() {    
    console.log('cloning electron sample...')
    new Download(
        {
            mode: '755',
            extract: true,
            strip: 1
        })
        .get('https://github.com/app-frame/app-frame-electron-template/archive/master.zip')
        .dest('.')
        .run(function(err, files) {
            if (err) {
                console.log('error on downloading sample from github.');
                console.log('Please check your connection to https://github.com/app-frame/app-frame-electron-template');
            }
            else
                console.log('download successful');
        });
}

module.exports.createElectronApp = createElectronApp;