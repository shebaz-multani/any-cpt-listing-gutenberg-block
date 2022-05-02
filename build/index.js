/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/editor.scss":
/*!******************************!*\
  !*** ./src/scss/editor.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/placeholder.png":
/*!************************************!*\
  !*** ./src/images/placeholder.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/placeholder.5b4e5f67.png";

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ (function(module) {

module.exports = window["wp"]["htmlEntities"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/editor.scss */ "./src/scss/editor.scss");
/* harmony import */ var _images_placeholder_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/placeholder.png */ "./src/images/placeholder.png");

const {
  registerBlockType
} = wp.blocks;

const {
  InspectorControls
} = wp.blockEditor;
const {
  useState
} = wp.element;

const {
  PanelBody,
  PanelRow,
  SelectControl,
  RadioControl
} = wp.components;


registerBlockType('acptlgb/any-cpt-listing', {
  title: 'Any CPT Listing',
  icon: 'smiley',
  category: 'common',
  attributes: {
    selected_post_type: {
      type: "string",
      default: "posts"
    },
    view_type: {
      type: "string",
      default: "grid"
    },
    posts_per_page: {
      type: "string",
      default: "6"
    },
    posts_per_row: {
      type: "string",
      default: "acpt-three-col"
    },
    posts_per_row_no: {
      type: "string",
      default: "3"
    },
    rows_per_page: {
      type: "string",
      default: "1"
    }
  },
  edit: function (_ref) {
    let {
      attributes,
      setAttributes
    } = _ref;
    const {
      className,
      selected_post_type,
      view_type,
      posts_per_page,
      posts_per_row,
      posts_per_row_no,
      rows_per_page
    } = attributes;
    const [newCPTData, setNewCPTData] = useState([]);
    const [registeredPostsTypes, setRegisteredPostsTypes] = useState([]);

    if (registeredPostsTypes.length === 0) {
      wp.apiFetch({
        path: '/wp/v2/types'
      }).then(post_types => {
        setRegisteredPostsTypes(post_types);
      }).catch(error => {
        console.error('Error:', error);
      });
      return 'Loading..';
    }

    let per_page = view_type === 'grid' ? posts_per_row_no * rows_per_page : posts_per_page;
    let filteredPost = {},
        filteredPostsData = [];

    if (newCPTData.length === 0) {
      wp.apiFetch({
        path: '/wp/v2/' + selected_post_type + '/?_embed=true&per_page=' + per_page
      }).then(posts => {
        if (posts.length > 0) {
          console.log('posts', posts);
          posts.map(function (post) {
            let featured_media_url = '';

            if (post.featured_media > 0) {
              featured_media_url = post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
            }

            filteredPost = {
              id: post.id,
              title: post.title && post.title.rendered,
              excerpt: post.excerpt && (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__.decodeEntities)(post.excerpt.rendered.replace(/(<([^>]+)>)/ig, '')),
              link: post.link,
              featured_media: featured_media_url
            };
            filteredPostsData.push(filteredPost);
          });
        } else {
          filteredPostsData = {
            no_data: `No data found in ${selected_post_type}`
          };
        }

        setNewCPTData(filteredPostsData);
      }).catch(error => {
        console.error('Error:', error);
      });
      return `Loading ${selected_post_type} data..`;
    }

    const col_options = [{
      label: '1',
      value: 'acpt-one-col'
    }, {
      label: '2',
      value: 'acpt-two-col'
    }, {
      label: '3',
      value: 'acpt-three-col'
    }, {
      label: '4',
      value: 'acpt-four-col'
    }, {
      label: '5',
      value: 'acpt-five-col'
    }, {
      label: '6',
      value: 'acpt-six-col'
    }];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "setting"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: 'Display Settings'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Select Post Type",
      value: selected_post_type,
      onChange: new_selected_post_type => {
        setAttributes({
          selected_post_type: new_selected_post_type
        });
        setNewCPTData([]);
      }
    }, Object.keys(registeredPostsTypes).map(function (key) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: registeredPostsTypes[key].rest_base
      }, " ", registeredPostsTypes[key].name, " ");
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
      label: "View Type",
      selected: view_type,
      options: [{
        label: 'Grid View',
        value: 'grid'
      }, {
        label: 'List List',
        value: 'List'
      }],
      onChange: new_view_type => setAttributes({
        view_type: new_view_type
      })
    })), view_type == 'grid' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Posts Per Row",
      value: posts_per_row,
      options: col_options,
      onChange: new_posts_per_row => {
        let col_label = col_options.filter(obj => {
          return obj.value === new_posts_per_row;
        });
        setAttributes({
          posts_per_row: new_posts_per_row,
          posts_per_row_no: col_label[0].label
        });
        setNewCPTData([]);
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
      label: "Rows Per Page",
      value: rows_per_page,
      onChange: new_rows_per_page => {
        setNewCPTData([]);
        setAttributes({
          rows_per_page: new_rows_per_page
        });
      }
    }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
      label: "Posts Per Page",
      value: posts_per_page,
      onChange: new_posts_per_page => {
        setNewCPTData([]);
        setAttributes({
          posts_per_page: new_posts_per_page
        });
      }
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className + ' acpt-main'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "acpt-row"
    }, newCPTData.no_data ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, newCPTData.no_data) : view_type === 'grid' ? newCPTData.map(function (post) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "acpt-block-item " + posts_per_row + " acpt-" + view_type,
        id: "post-" + post.id
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: post.featured_media ? post.featured_media : _images_placeholder_png__WEBPACK_IMPORTED_MODULE_4__
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "post-content"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, post.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, post.excerpt), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: post.link
      }, " Read More "))));
    }) : newCPTData.map(function (post) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "acpt-block-item acpt-" + view_type,
        id: "post-" + post.id
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: post.featured_media ? post.featured_media : _images_placeholder_png__WEBPACK_IMPORTED_MODULE_4__
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "acpt-item-content"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, post.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, post.excerpt), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: post.link
      }, " Read More "))));
    }))));
  },
  save: function () {
    return null;
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map