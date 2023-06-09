// import { contextBridge, ipcRenderer } from 'electron';
// import os from 'os';
// import path from 'path';


// contextBridge.exposeInMainWorld('os', {
// 	homedir: () => os.homedir()
// });

// contextBridge.exposeInMainWorld('path', {
// 	join: (...args) => path.join(...args)
// });

// contextBridge.exposeInMainWorld('ipcRenderer', {
// 	send: (channel, data) => ipcRenderer.send(channel, data),
// 	on: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args))
// });