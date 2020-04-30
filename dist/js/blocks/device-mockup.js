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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/blocks/device-mockup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/blocks/device-mockup.js":
/*!*******************************************!*\
  !*** ./assets/js/blocks/device-mockup.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





var icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])('svg', {
  viewBox: '0 0 448 512'
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])('path', {
  d: 'M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm176-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12v312z'
}));
var deviceOpts = [{
  value: 'iPhone5',
  label: 'iPhone 5'
}, {
  value: 'galaxyS3',
  label: 'Galaxy S3'
}, {
  value: 'Chromebook',
  label: 'Chromebook'
}, {
  value: 'galaxyS3',
  label: 'Galaxy S3'
}, {
  value: 'galaxyS5',
  label: 'Galaxy S5'
}, {
  value: 'galaxyTab4',
  label: 'Galaxy Tab 4'
}, {
  value: 'HtcOneM8',
  label: 'HTC One M8'
}, {
  value: 'HuawieP8',
  label: 'Huawie P8'
}, {
  value: 'iMac',
  label: 'iMac'
}, {
  value: 'iPad',
  label: 'iPad'
}, {
  value: 'iPadAir2',
  label: 'iPad Air 2'
}, {
  value: 'iPadPro',
  label: 'iPad Pro'
}, {
  value: 'iPhone6',
  label: 'iPhone 6'
}, {
  value: 'iPhone6Plus',
  label: 'iPhone 6 Plus'
}, {
  value: 'iPhoneSE',
  label: 'iPhone SE'
}, {
  value: 'iPhone5',
  label: 'iPhone 5'
}, {
  value: 'iPhone6Hand',
  label: 'iPhone 6 with Hand'
}, {
  value: 'iPhone7Hand',
  label: 'iPhone 7 with Hand'
}, {
  value: 'iPhone7Hand_2',
  label: 'iPhone 7 with Hand 2'
}, {
  value: 'iPhone7',
  label: 'iPhone 7'
}, {
  value: 'iPhoneX',
  label: 'iPhone X'
}, {
  value: 'Lumia930',
  label: 'Lumia 930'
}, {
  value: 'Macbook',
  label: 'Macbook'
}, {
  value: 'Macbook2015',
  label: 'Macbook 2015'
}, {
  value: 'MacbookPro2015',
  label: 'Macbook Pro 2015'
}, {
  value: 'Pixel',
  label: 'Pixel'
}, {
  value: 'SamsungTV',
  label: 'Samsung TV'
}, {
  value: 'SurfacePro3',
  label: 'Surface Pro 3'
}, {
  value: 'SurfaceStudio',
  label: 'Surface Studio'
}];
var deviceConfig = {
  Chromebook: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }]
  },
  galaxyS3: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }, {
      value: 'landscape',
      label: 'Landscape'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }]
  },
  galaxyS5: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }, {
      value: 'landscape',
      label: 'Landscape'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }, {
      value: 'gold',
      label: 'Gold'
    }]
  },
  galaxyTab4: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }]
  },
  HtcOneM8: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }, {
      value: 'landscape',
      label: 'Landscape'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }]
  },
  HuawiP8: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }, {
      value: 'landscape',
      label: 'Landscape'
    }],
    colors: [{
      value: 'gold',
      label: 'Gold'
    }]
  },
  iMac: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }]
  },
  iPad: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }, {
      value: 'landscape',
      label: 'Landscape'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }]
  },
  iPadAir2: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }, {
      value: 'landscape',
      label: 'Landscape'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }, {
      value: 'gold',
      label: 'Gold'
    }]
  },
  iPadPro: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }, {
      value: 'landscape',
      label: 'Landscape'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }, {
      value: 'gold',
      label: 'Gold'
    }]
  },
  iPhone6: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }, {
      value: 'landscape',
      label: 'Landscape'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }, {
      value: 'gold',
      label: 'Gold'
    }]
  },
  iPhone6Plus: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }, {
      value: 'landscape',
      label: 'Landscape'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }, {
      value: 'gold',
      label: 'Gold'
    }]
  },
  iPhoneSE: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }, {
      value: 'landscape',
      label: 'Landscape'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }, {
      value: 'gold',
      label: 'Gold'
    }, {
      value: 'pink',
      label: 'Pink'
    }]
  },
  iPhone5: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }, {
      value: 'landscape',
      label: 'Landscape'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }]
  },
  iPhone6Hand: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }]
  },
  iPhone7Hand: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }]
  },
  iPhone7Hand_2: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }]
  },
  iPhone7: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }, {
      value: 'landscape',
      label: 'Landscape'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }, {
      value: 'gold',
      label: 'Gold'
    }, {
      value: 'pink',
      label: 'Pink'
    }, {
      value: 'red',
      label: 'Red'
    }]
  },
  iPhoneX: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }, {
      value: 'landscape',
      label: 'Landscape'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }]
  },
  Lumia930: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }, {
      value: 'landscape',
      label: 'Landscape'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }]
  },
  Macbook: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }, {
      value: 'gold',
      label: 'Gold'
    }]
  },
  Macbook2015: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }, {
      value: 'gold',
      label: 'Gold'
    }]
  },
  MacbookPro2015: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }]
  },
  Pixel: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }]
  },
  SamsungTV: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }]
  },
  SurfacePro3: {
    orientation: [{
      value: 'landscape',
      label: 'Landscape'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }]
  },
  SurfaceStudio: {
    orientation: [{
      value: 'portrait',
      label: 'Portrait'
    }],
    colors: [{
      value: 'black',
      label: 'Black'
    }]
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('tpd/device-mockups', {
  title: 'Device mockup',
  category: 'common',
  icon: icon,
  attributes: {
    device: {
      type: 'string',
      default: 'iPhone5'
    },
    orientation: {
      type: 'string',
      default: 'portrait'
    },
    color: {
      type: 'string',
      default: 'black'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var device = attributes.device,
        orientation = attributes.orientation,
        color = attributes.color,
        mediaID = attributes.mediaID,
        mediaURL = attributes.mediaURL;

    var onDeviceChange = function onDeviceChange(newDevice) {
      setAttributes({
        device: newDevice
      });
    };

    var onOrientationChange = function onOrientationChange(newOrientation) {
      setAttributes({
        orientation: newOrientation
      });
    };

    var onColorChange = function onColorChange(newColor) {
      setAttributes({
        color: newColor
      });
    };

    var onMediaSelect = function onMediaSelect(media) {
      setAttributes({
        mediaID: media.id,
        mediaURL: media.url
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: "Device Options"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
      label: "Device",
      value: device,
      options: deviceOpts,
      onChange: onDeviceChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
      label: "Orientation",
      value: orientation,
      options: deviceConfig[device].orientation,
      onChange: onOrientationChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
      label: "Color",
      value: color,
      options: deviceConfig[device].colors,
      onChange: onColorChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
      onSelect: onMediaSelect,
      allowedTypes: "image",
      value: mediaID,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          className: mediaID ? 'image-button' : 'button button-large',
          onClick: open
        }, !mediaID ? 'Upload Image' : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          src: mediaURL
        }));
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "device-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "device",
      "data-device": device,
      "data-orientation": orientation,
      "data-color": color
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "screen",
      style: {
        background: mediaURL ? "url(".concat(mediaURL, ")") : ''
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "button"
    }))));
  }
});

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!*****************************************!*\
  !*** external {"this":["wp","editor"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=device-mockup.js.map