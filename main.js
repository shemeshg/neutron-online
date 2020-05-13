/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_url__);
/*
 * main.js
 * Neutron
 *
 * Created by Peter Bloxidge on 16/08/2018
 * Copyright (c) 2018 MUSIC Tribe Brands UK Ltd. All rights reserved.
 */

/* eslint-disable no-undef */





const _DEBUG = process.env.NODE_ENV === "development";
const macOS = process.platform === "darwin";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
    // Create the browser window.
    mainWindow = new __WEBPACK_IMPORTED_MODULE_0_electron__["BrowserWindow"]({
        title: "Neutron",
        height: 800,
        width: 960,
        minHeight: 480,
        minWidth: 490,
        show: false
    });

    // and load the index.html of the app.
    mainWindow.loadURL(__WEBPACK_IMPORTED_MODULE_2_url___default.a.format({
        pathname: __WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true
    }));

    // Open the DevTool
    if (_DEBUG) {
        mainWindow.webContents.openDevTools()
    }

    // Emitted when the window is closed.
    mainWindow.on("closed", () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    });

    // Defer showing the main window until the initial rendering is done.
    mainWindow.once("ready-to-show", mainWindow.show);
}

function createMenu () {
    // Set application menu items from template
    const template = [
        ...(macOS ? [
            {
                label: __WEBPACK_IMPORTED_MODULE_0_electron__["app"].getName(),
                submenu: [
                    { role: "about" },
                    { type: "separator" },
                    { role: "hide" },
                    { role: "hideothers" },
                    { role: "unhide" },
                    { type: "separator" },
                    { role: "quit" }
                ]
            }
        ] : [])
    ];
    // Don't create menu at all if template is empty
    if (template.length) {
        const menu = __WEBPACK_IMPORTED_MODULE_0_electron__["Menu"].buildFromTemplate(template);
        __WEBPACK_IMPORTED_MODULE_0_electron__["Menu"].setApplicationMenu(menu);
    }
}

// Prevent multiple instances of the app.
const isSecondaryInstance = __WEBPACK_IMPORTED_MODULE_0_electron__["app"].makeSingleInstance((argv, workingDirectory) => {
    if (mainWindow) {
        // When attempting to open a second instance, restore and focus the existing window.
        if (mainWindow.isMinimized()) {
            mainWindow.restore();
        }
        mainWindow.focus();
    }
});

if (isSecondaryInstance) {
    __WEBPACK_IMPORTED_MODULE_0_electron__["app"].quit();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
__WEBPACK_IMPORTED_MODULE_0_electron__["app"].on("ready", function() {
    createMenu();
    createWindow();
});

// Quit when all windows are closed.
__WEBPACK_IMPORTED_MODULE_0_electron__["app"].on("window-all-closed", () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (!macOS) {
        __WEBPACK_IMPORTED_MODULE_0_electron__["app"].quit()
    }
});

__WEBPACK_IMPORTED_MODULE_0_electron__["app"].on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })
/******/ ]);