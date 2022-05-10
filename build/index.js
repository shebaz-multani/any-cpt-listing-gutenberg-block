/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
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

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

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

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

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
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _images_placeholder_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/placeholder.png */ "./src/images/placeholder.png");










(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('acptlgb/any-cpt-listing', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Any Post/CPT Listing', 'acptlgb'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Show list or grid view of any kind of wp post type including default posts as well as custom post types in front end also with verity of settings.'),
  category: 'widgets',
  icon: 'list-view',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('post'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('custom'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('cpt'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('list'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('grid')],
  attributes: {
    selected_post_type: {
      type: "string",
      default: "post"
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
    const [newCPTData, setNewCPTData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [registeredPostsTypes, setRegisteredPostsTypes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [selectedPostTypeRestBase, setSelectedPostTypeRestBase] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('posts');

    if (registeredPostsTypes.length === 0) {
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
        path: '/wp/v2/available_types'
      }).then(post_types => {
        console.log('post_types');
        console.log(post_types);
        setRegisteredPostsTypes(post_types);
      }).catch(error => console.error('Error:', error));
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Loading..', 'acptlgb');
    }

    let per_page = view_type === 'grid' ? posts_per_row_no * rows_per_page : posts_per_page;
    per_page = per_page > 0 ? per_page : 3;
    let filteredPost = {},
        filteredPostsData = [];

    if (newCPTData.length === 0) {
      console.log('/wp/v2/' + selectedPostTypeRestBase + '/?_embed=true&per_page=' + per_page);
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
        path: '/wp/v2/' + selectedPostTypeRestBase + '/?_embed=true&per_page=' + per_page
      }).then(posts => {
        if (posts.length > 0) {
          posts.map(function (post) {
            let featured_media_url = '';

            if (post.featured_media > 0) {
              featured_media_url = post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
            }

            filteredPost = {
              id: post.id,
              title: post.title && post.title.rendered,
              excerpt: post.excerpt && (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(post.excerpt.rendered.replace(/(<([^>]+)>)/ig, '')),
              link: post.link,
              featured_media: featured_media_url
            };
            filteredPostsData.push(filteredPost);
          });
        } else {
          filteredPostsData = {
            no_data: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(`No data found in ${selected_post_type}`, 'acptlgb')
          };
        }

        setNewCPTData(filteredPostsData);
      }).catch(error => {
        filteredPostsData = {
          no_data: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(`<b>${selected_post_type}</b> CPT rest route is not enable, please enable to show here. However, CPT will be still displayed on frontend.`, 'acptlgb')
        };
        setNewCPTData(filteredPostsData);
      }); // return __(`Loading ${selected_post_type} data..`,'acptlgb');
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      key: "acpt-display-setting"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: 'Display Settings'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select Post Type', 'acptlgb'),
      value: selected_post_type,
      onChange: new_selected_post_type => {
        setAttributes({
          selected_post_type: new_selected_post_type
        });
        setSelectedPostTypeRestBase(registeredPostsTypes[new_selected_post_type].rest_base ? registeredPostsTypes[new_selected_post_type].rest_base : new_selected_post_type);
        setNewCPTData([]);
      }
    }, Object.keys(registeredPostsTypes).map(function (key) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        "data-rest": registeredPostsTypes[key].rest_base,
        value: key
      }, " ", registeredPostsTypes[key].label, " ");
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('View Type', 'acptlgb'),
      selected: view_type,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Grid View', 'acptlgb'),
        value: 'grid'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('List List', 'acptlgb'),
        value: 'list'
      }],
      onChange: new_view_type => {
        setAttributes({
          view_type: new_view_type,
          posts_per_row: new_view_type == 'grid' ? 'acpt-three-col' : ''
        });
        setNewCPTData([]);
      }
    })), view_type == 'grid' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Posts Per Row', 'acptlgb'),
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
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Rows Per Page', 'acptlgb'),
      value: rows_per_page,
      min: "1",
      onChange: new_rows_per_page => {
        setAttributes({
          rows_per_page: new_rows_per_page
        });
        new_rows_per_page > 0 && setNewCPTData([]);
      }
    }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Posts Per Page', 'acptlgb'),
      value: posts_per_page,
      min: "1",
      onChange: new_posts_per_page => {
        setAttributes({
          posts_per_page: new_posts_per_page
        });
        new_posts_per_page > 0 && setNewCPTData([]);
      }
    })))), newCPTData.length === 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(`Loading ${selected_post_type} data..`, 'acptlgb') : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className + ' acpt-main acpt-editor-screen'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "acpt-row"
    }, newCPTData.no_data ? newCPTData.no_data : newCPTData.map(function (post) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "acpt-block-item " + posts_per_row + " acpt-" + view_type,
        id: "post-" + post.id
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: post.featured_media ? post.featured_media : _images_placeholder_png__WEBPACK_IMPORTED_MODULE_8__
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