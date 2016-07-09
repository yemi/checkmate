const electron = require('electron')
const child_process = require('child_process')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow
let server

const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 1440, height: 900 })
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  createWindow()
})

app.on('will-quit', () => {
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

