import { app, BrowserWindow} from 'electron';
import path from 'path';

let mainWindow: BrowserWindow | null = null;
const isMac = process.platform === 'darwin';
const isDev = process.env.NODE_ENV !== 'production';

const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: isDev ? 1000 : 500,
		height: 600,
		webPreferences: {
			contextIsolation: true,
			nodeIntegration: true,
			preload: path.join(__dirname, 'preload.js')
		}
	});

	mainWindow.loadURL('http://localhost:5173');

	// mainWindow.on('closed', () => {
	//	 mainWindow.destroy();
	// });

	// Open devtools if in dev env
	if (isDev) {
		mainWindow.webContents.openDevTools({
			mode: 'detach'
		});
	}
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});

	// Remove mainWindow from memory on close
	mainWindow?.on('close', () => {
		mainWindow = null
	});
});

app.on('window-all-closed', () => {
	if(!isMac) {
		app.quit();
	}
});