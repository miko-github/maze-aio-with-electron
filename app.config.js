module.exports = {
	view: `index.html`,
	pug: `index.pug`,
	option: {
		width: 350,
		height: 370,
		maxWidth: null,
		maxHeight: null,
		minWidth: 310,
		minHeight: 320,
		maximizable: false,
		resizable: true,
		alwaysOnTop: true,
		autoHideMenuBar: true,
		// contextIsolation: false,
		webPreferences: {
			nodeIntegration: true,
			// contextIsolation: true,
		},
	},
};