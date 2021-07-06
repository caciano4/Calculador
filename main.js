const {app, BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 323,
        height: 475,
        frame:false,
        icon: __dirname + "./assets/icon.png"
    })

  win.loadFile('index.html')
}

app.on("ready", createWindow)

app.on("window-all-closed", function (){
    if(process.platform !== 'darwin') {app.quit()
    }
})