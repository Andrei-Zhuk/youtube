/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _searchBar = __webpack_require__(1);

	var _searchBar2 = _interopRequireDefault(_searchBar);

	var _swipeEvents = __webpack_require__(11);

	var _variables = __webpack_require__(4);

	var _update = __webpack_require__(8);

	var _update2 = _interopRequireDefault(_update);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import Url from './_url';
	var search = new _searchBar2.default();
	search.create();

	_variables.container.className = 'container';
	_variables.container.onmousedown = _swipeEvents.handleMouseDown;
	_variables.container.onmousemove = _swipeEvents.handleMouseMove;
	_variables.container.onmouseup = _swipeEvents.handleMouseUp;
	_variables.container.style.transition = 'all .3s';
	document.body.appendChild(_variables.container);

	_variables.containerPaging.className = 'container-paging';
	_variables.containerPaging.style.margin = '0 auto';
	_variables.containerPaging.style.overflowX = 'hidden';
	document.body.appendChild(_variables.containerPaging);
	_variables.containerPaging.appendChild(_variables.pages.bar);

	window.onresize = function (e) {
	    if (!!_variables.results.length) {
	        (0, _update2.default)(_variables.results);
	    }
	    e.preventDefault();
	};

	// let container = document.createElement('div');
	// container.className = 'container';
	// container.onmousedown = handleMouseDown;
	// container.onmousemove = handleMouseMove;
	// container.onmouseup = handleMouseUp;
	// document.body.appendChild(container);


	// var xhr = new XHR();
	// var url = new Url(host, searchResource, apiKey, part, q, maxResults, type)
	// xhr.open('GET', url.makeSearchUrl());
	//
	// xhr.onload = function() {
	//   console.log( JSON.parse(xhr.responseText));
	// }
	//
	// xhr.send();
	//
	// var xhr2 = new XHR();
	// xhr2.open('GET', 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=r-BExc9SS68&part=snippet,statistics')
	// xhr2.onload = function() {
	//   console.log( JSON.parse(xhr2.responseText));
	// }
	// xhr2.send();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _requestSearch = __webpack_require__(2);

	var _requestSearch2 = _interopRequireDefault(_requestSearch);

	var _variables = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SearchBar = function () {
	    function SearchBar() {
	        _classCallCheck(this, SearchBar);

	        this.form = document.createElement('form');
	        this.form.className = "search-form";

	        this.input = document.createElement('input');
	        this.input.setAttribute('type', 'text');
	        this.input.setAttribute('name', 'search');
	        this.input.className = "search-form__input";
	        this.btn = document.createElement('input');
	        this.btn.setAttribute('type', 'image');
	        this.btn.setAttribute('src', './../../assets/search.png');
	        this.btn.className = 'search-form__btn';
	    }

	    _createClass(SearchBar, [{
	        key: 'create',
	        value: function create() {
	            document.body.appendChild(this.form);
	            this.form.appendChild(this.input);
	            this.form.appendChild(this.btn);
	            this.form.onsubmit = function () {
	                if (_variables.loadInfo.requestIsGoing) {
	                    return false;
	                } else {
	                    _variables.results.forEach(function (res) {
	                        return res.deleteItem();
	                    });
	                    _variables.results.splice(0, _variables.results.length);
	                    (0, _requestSearch2.default)(this.input.value);
	                    return false;
	                }
	            };
	            this.form.onsubmit = this.form.onsubmit.bind(this);
	        }
	    }]);

	    return SearchBar;
	}();

	exports.default = SearchBar;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = requestSearch;

	var _detailSearch = __webpack_require__(3);

	var _detailSearch2 = _interopRequireDefault(_detailSearch);

	var _url = __webpack_require__(6);

	var _url2 = _interopRequireDefault(_url);

	var _variables = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function requestSearch(q) {
	    _variables.loadInfo.requestIsGoing = true;
	    _variables.loadInfo.lastQ = q;
	    var xhr = new XMLHttpRequest();
	    var url = new _url2.default(_variables.host, _variables.searchResource, _variables.apiKey, _variables.partSearch, q, _variables.maxResults, _variables.type);
	    xhr.open('GET', url.makeSearchUrl());
	    xhr.onload = function () {
	        (0, _detailSearch2.default)(JSON.parse(xhr.responseText));
	    };
	    xhr.onload = xhr.onload.bind(this);
	    xhr.send();
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = detailSearch;

	var _variables = __webpack_require__(4);

	var _requestVideos = __webpack_require__(5);

	var _requestVideos2 = _interopRequireDefault(_requestVideos);

	var _item = __webpack_require__(10);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function detailSearch(result) {
	    var i = void 0,
	        item = void 0,
	        ids = void 0,
	        title = void 0,
	        link = void 0,
	        preview = void 0,
	        description = void 0,
	        author = void 0,
	        date = void 0,
	        day = void 0,
	        month = void 0,
	        year = void 0;
	    ids = [];
	    _variables.loadInfo.nextPage = result.nextPageToken;
	    for (i = 0; i < result.items.length; i++) {
	        title = result.items[i].snippet.title;
	        link = 'https://youtube.com/watch?v=' + result.items[i].id.videoId;
	        preview = result.items[i].snippet.thumbnails.high.url;
	        description = result.items[i].snippet.description;
	        author = result.items[i].snippet.channelTitle;
	        date = new Date(Date.parse(result.items[i].snippet.publishedAt));
	        day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
	        month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
	        year = date.getFullYear();
	        date = day + '-' + month + '-' + year;

	        _variables.results.push(new _item2.default(title, link, preview, description, author, date));
	        ids.push(result.items[i].id.videoId);
	    }
	    (0, _requestVideos2.default)(ids.join(','));
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var XHR = exports.XHR = void 0,
	    host = exports.host = void 0,
	    apiKey = exports.apiKey = void 0,
	    searchResource = exports.searchResource = void 0,
	    videosResource = exports.videosResource = void 0,
	    partSearch = exports.partSearch = void 0,
	    partVideos = exports.partVideos = void 0,
	    maxResults = exports.maxResults = void 0,
	    type = exports.type = void 0,
	    results = exports.results = void 0,
	    pages = exports.pages = void 0,
	    container = exports.container = void 0,
	    containerPaging = exports.containerPaging = void 0,
	    loadInfo = exports.loadInfo = void 0;

	exports.XHR = XHR = "onload" in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;

	exports.host = host = 'https://www.googleapis.com/youtube/v3/';
	exports.apiKey = apiKey = 'AIzaSyDH4jGoxH8VnlXA92DI2ZSdAXNIoq8Sc8U';
	exports.searchResource = searchResource = 'search';
	exports.videosResource = videosResource = 'videos';
	exports.partSearch = partSearch = 'snippet';
	exports.partVideos = partVideos = 'snippet,statistics';
	exports.maxResults = maxResults = '15';
	exports.type = type = 'video';
	exports.results = results = [];

	exports.pages = pages = {
	    list: [],
	    current: 0,
	    items: 0,
	    bar: document.createElement('ul'),
	    itemsList: []
	};

	exports.loadInfo = loadInfo = {
	    lastQ: '',
	    nextPage: '',
	    requestIsGoing: false
	};
	pages.bar.className = 'pages-bar';

	exports.container = container = document.createElement('div');
	exports.containerPaging = containerPaging = document.createElement('div');

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = requestVideos;

	var _url = __webpack_require__(6);

	var _url2 = _interopRequireDefault(_url);

	var _variables = __webpack_require__(4);

	var _detailVideos = __webpack_require__(7);

	var _detailVideos2 = _interopRequireDefault(_detailVideos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function requestVideos(ids) {
	    var xhr = new XMLHttpRequest();
	    var url = new _url2.default(_variables.host, _variables.videosResource, _variables.apiKey, _variables.partVideos, '', _variables.maxResults, _variables.type, ids);
	    xhr.open('GET', url.makeVideosUrl());
	    xhr.onload = function () {
	        (0, _detailVideos2.default)(JSON.parse(xhr.responseText));
	    };
	    xhr.onload = xhr.onload.bind(this);
	    xhr.send();
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _variables = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Url = function () {
	    function Url(host, resource, api, part, q, maxResults, type, ids) {
	        _classCallCheck(this, Url);

	        this.host = host;
	        this.resource = resource + '?';
	        this.apiKey = 'key=' + api;
	        this.part = 'part=' + part;
	        this.q = 'q=' + encodeURIComponent(q);
	        this.maxResults = 'maxResults=' + maxResults;
	        this.type = 'type=' + type;
	        this.ids = 'id=' + ids;
	    }

	    _createClass(Url, [{
	        key: 'makeSearchUrl',
	        value: function makeSearchUrl() {
	            if (!_variables.loadInfo.nextPage) {
	                return this.host + this.resource + '&' + this.apiKey + '&' + this.part + '&' + this.q + '&' + this.maxResults + '&' + this.type;
	            } else {
	                return this.host + this.resource + '&' + this.apiKey + '&' + this.part + '&' + this.q + '&' + this.maxResults + '&' + this.type + '&' + ('pageToken=' + _variables.loadInfo.nextPage);
	            }
	        }
	    }, {
	        key: 'makeVideosUrl',
	        value: function makeVideosUrl() {
	            return this.host + this.resource + '&' + this.apiKey + '&' + this.part + '&' + this.ids;
	        }
	    }]);

	    return Url;
	}();

	exports.default = Url;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = detailVideos;

	var _variables = __webpack_require__(4);

	var _update = __webpack_require__(8);

	var _update2 = _interopRequireDefault(_update);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function detailVideos(result) {
	    var i = void 0;
	    for (i = _variables.results.length - 15; i < _variables.results.length; i++) {
	        _variables.results[i].setViewCount(result.items[i % 15].statistics.viewCount);
	        _variables.results[i].postItem();
	    }
	    (0, _update2.default)(_variables.results);
	    _variables.loadInfo.requestIsGoing = false;
	}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = update;

	var _variables = __webpack_require__(4);

	var _pageClick = __webpack_require__(9);

	var _pageClick2 = _interopRequireDefault(_pageClick);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function update(results) {
	    var widthScreen = void 0,
	        margin = void 0,
	        widthItem = void 0,
	        i = void 0,
	        itemNumber = void 0,
	        func = void 0;
	    document.body.style.overflow = "hidden";
	    widthScreen = document.body.offsetWidth;
	    document.body.style.overflow = "";
	    if (widthScreen >= 1200) {
	        margin = 30;
	        widthItem = (widthScreen - 8 * margin) / 4;

	        if (_variables.pages.items === 3) {
	            itemNumber = _variables.pages.current * _variables.pages.items + 1;
	            _variables.pages.itemsList[_variables.pages.current].classList.remove('pages-bar__item-active');
	            _variables.pages.current = Math.ceil(itemNumber / 4) - 1;
	            _variables.pages.itemsList[_variables.pages.current].classList.add('pages-bar__item-active');
	            if (_variables.pages.list.length > 5 && _variables.pages.current >= 2 && _variables.pages.current <= _variables.pages.list.length - 3) {
	                _variables.pages.bar.style.left = -25 * (_variables.pages.current - 2) + 'px';
	            }
	        }
	        _variables.pages.items = 4;
	        _variables.container.style.left = widthScreen * -_variables.pages.current + 'px';
	        _variables.pages.list.splice(0, _variables.pages.list.length);

	        for (i = 1; i <= Math.ceil(results.length / 4); i++) {
	            _variables.pages.list.push(i);
	        }
	        _variables.container.style.width = widthScreen * _variables.pages.list.length + 'px';

	        for (i = 0; i < results.length; i++) {
	            results[i].updateWidth(widthItem);
	            results[i].updateMargin(margin);
	        }
	    } else if (widthScreen >= 992) {
	        margin = 40;
	        widthItem = (widthScreen - 6 * margin) / 3;

	        if (_variables.pages.items === 2 || _variables.pages.items === 4) {
	            itemNumber = _variables.pages.current * _variables.pages.items + 1;
	            _variables.pages.itemsList[_variables.pages.current].classList.remove('pages-bar__item-active');
	            _variables.pages.current = Math.ceil(itemNumber / 3) - 1;
	            _variables.pages.itemsList[_variables.pages.current].classList.add('pages-bar__item-active');
	            if (_variables.pages.list.length > 5 && _variables.pages.current >= 2 && _variables.pages.current <= _variables.pages.list.length - 3) {
	                _variables.pages.bar.style.left = -25 * (_variables.pages.current - 2) + 'px';
	            }
	        }
	        _variables.pages.items = 3;
	        _variables.container.style.left = widthScreen * -_variables.pages.current + 'px';

	        _variables.pages.list.splice(0, _variables.pages.list.length);
	        for (i = 1; i <= Math.ceil(results.length / 3); i++) {
	            _variables.pages.list.push(i);
	        }
	        _variables.container.style.width = widthScreen * _variables.pages.list.length + 'px';

	        for (i = 0; i < results.length; i++) {
	            results[i].updateWidth(widthItem);
	            results[i].updateMargin(margin);
	        }
	    } else if (widthScreen >= 700) {
	        margin = 50;
	        widthItem = (widthScreen - 4 * margin) / 2;

	        if (_variables.pages.items === 1 || _variables.pages.items === 3) {
	            itemNumber = _variables.pages.current * _variables.pages.items + 1;
	            _variables.pages.itemsList[_variables.pages.current].classList.remove('pages-bar__item-active');
	            _variables.pages.current = Math.ceil(itemNumber / 2) - 1;
	            _variables.pages.itemsList[_variables.pages.current].classList.add('pages-bar__item-active');
	            if (_variables.pages.list.length > 5 && _variables.pages.current >= 2 && _variables.pages.current <= _variables.pages.list.length - 3) {
	                _variables.pages.bar.style.left = -25 * (_variables.pages.current - 2) + 'px';
	            }
	        }
	        _variables.pages.items = 2;
	        _variables.container.style.left = widthScreen * -_variables.pages.current + 'px';

	        _variables.pages.list.splice(0, _variables.pages.list.length);
	        for (i = 1; i <= Math.ceil(results.length / 2); i++) {
	            _variables.pages.list.push(i);
	        }
	        _variables.container.style.width = widthScreen * _variables.pages.list.length + 'px';

	        for (i = 0; i < results.length; i++) {
	            results[i].updateWidth(widthItem);
	            results[i].updateMargin(margin);
	        }
	    } else {
	        margin = 50;
	        widthItem = widthScreen - 2 * margin;
	        if (widthItem > 300) {
	            widthItem = 300;
	            margin = (widthScreen - widthItem) / 2;
	        }

	        if (_variables.pages.items === 2) {
	            itemNumber = _variables.pages.current * _variables.pages.items + 1;
	            _variables.pages.itemsList[_variables.pages.current].classList.add('pages-bar__item-active');
	            _variables.pages.current = itemNumber - 1;
	            _variables.pages.itemsList[_variables.pages.current].classList.add('pages-bar__item-active');
	            if (_variables.pages.list.length > 5 && _variables.pages.current >= 2 && _variables.pages.current <= _variables.pages.list.length - 3) {
	                _variables.pages.bar.style.left = -25 * (_variables.pages.current - 2) + 'px';
	            }
	        }
	        _variables.pages.items = 1;
	        _variables.container.style.left = widthScreen * -_variables.pages.current + 'px';

	        _variables.pages.list.splice(0, _variables.pages.list.length);
	        for (i = 1; i <= results.length; i++) {
	            _variables.pages.list.push(i);
	        }
	        _variables.container.style.width = widthScreen * _variables.pages.list.length + 'px';

	        for (i = 0; i < results.length; i++) {
	            results[i].updateWidth(widthItem);
	            results[i].updateMargin(margin);
	        }
	    }
	    if (_variables.pages.list.length > 5) {
	        _variables.containerPaging.style.width = 5 * 25 + 'px';
	    } else {
	        _variables.containerPaging.style.width = _variables.pages.list.length * 25 + 'px';
	    }

	    if (_variables.pages.itemsList.length !== 0) {
	        for (i = 0; i < _variables.pages.itemsList.length; i++) {
	            _variables.pages.bar.removeChild(_variables.pages.itemsList[i]);
	        };
	        _variables.pages.itemsList.splice(0, _variables.pages.itemsList.length);
	    }

	    for (i = 0; i < _variables.pages.list.length; i++) {
	        _variables.pages.itemsList[i] = document.createElement('li');
	        _variables.pages.itemsList[i].innerText = '' + _variables.pages.list[i];
	        _variables.pages.itemsList[i].classList.add('pages-bar__item');
	        func = function func() {
	            var number = i;
	            return function () {
	                (0, _pageClick2.default)(number);
	            };
	        };
	        _variables.pages.itemsList[i].onclick = func();
	        _variables.pages.bar.appendChild(_variables.pages.itemsList[i]);
	    }
	    _variables.pages.itemsList[_variables.pages.current].classList.add('pages-bar__item-active');
	    _variables.pages.bar.style.width = _variables.pages.list.length * 25 + 'px';
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = handleClick;

	var _variables = __webpack_require__(4);

	function handleClick(number) {
	    _variables.pages.itemsList[_variables.pages.current].classList.remove('pages-bar__item-active');
	    _variables.pages.current = number;
	    _variables.pages.itemsList[_variables.pages.current].classList.add('pages-bar__item-active');
	    _variables.container.style.left = document.body.offsetWidth * -_variables.pages.current + 'px';
	    if (_variables.pages.list.length > 5 && _variables.pages.current >= 2 && _variables.pages.current <= _variables.pages.list.length - 3) {
	        _variables.pages.bar.style.left = -25 * (_variables.pages.current - 2) + 'px';
	    }
	    if (_variables.pages.current >= _variables.pages.list.length - 4 && !_variables.loadInfo.requestIsGoing) {
	        requestSearch(_variables.loadInfo.lastQ);
	    }
	}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Item = function () {
	    function Item(title, link, preview, description, author, date) {
	        _classCallCheck(this, Item);

	        this.item = document.createElement('div');
	        this.item.className = 'item';

	        this.title = document.createElement('a');
	        this.title.href = link;
	        this.title.innerText = title;
	        this.title.className = 'item__title';

	        this.preview = document.createElement('img');
	        this.preview.src = preview;
	        this.preview.className = 'item__preview';

	        this.description = document.createElement('p');
	        this.description.innerText = description;
	        this.description.className = 'item__description';

	        this.info = document.createElement('div');
	        this.info.className = 'item__info';

	        this.author = document.createElement('p');
	        this.author.innerHTML = '<i class="fa fa-user" aria-hidden="true"></i>' + author;
	        this.author.className = 'item__info__author';

	        this.date = document.createElement('p');
	        this.date.innerHTML = '<i class="fa fa-calendar" aria-hidden="true"></i>' + date;
	        this.date.className = 'item__info__date';
	    }

	    _createClass(Item, [{
	        key: 'setViewCount',
	        value: function setViewCount(viewCount) {
	            this.viewCount = document.createElement('p');
	            this.viewCount.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>' + viewCount;
	            this.viewCount.className = 'item__info__viewCount';
	        }
	    }, {
	        key: 'postItem',
	        value: function postItem() {
	            var container = document.querySelector('.container');
	            this.item.appendChild(this.title);
	            this.item.appendChild(this.preview);
	            this.info.appendChild(this.author);
	            this.info.appendChild(this.date);
	            this.info.appendChild(this.viewCount);
	            this.item.appendChild(this.info);
	            this.item.appendChild(this.description);
	            container.appendChild(this.item);
	        }
	    }, {
	        key: 'deleteItem',
	        value: function deleteItem() {
	            var container = document.querySelector('.container');
	            container.removeChild(this.item);
	        }
	    }, {
	        key: 'updateWidth',
	        value: function updateWidth(width) {
	            this.item.style.width = width + 'px';
	        }
	    }, {
	        key: 'updateMargin',
	        value: function updateMargin(margin) {
	            this.item.style.margin = '0 ' + margin + 'px';
	        }
	    }]);

	    return Item;
	}();

	exports.default = Item;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.handleMouseDown = handleMouseDown;
	exports.handleMouseMove = handleMouseMove;
	exports.handleMouseUp = handleMouseUp;

	var _variables = __webpack_require__(4);

	var _requestSearch = __webpack_require__(2);

	var _requestSearch2 = _interopRequireDefault(_requestSearch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var startingX = void 0,
	    mouseIsDown = void 0;

	function handleMouseDown(e) {
		mouseIsDown = true;
		startingX = e.clientX;
	};

	function handleMouseMove(e) {
		if (mouseIsDown) {
			var change = void 0,
			    diff = void 0;
			change = startingX - e.clientX;
			if (change < 0 && _variables.pages.current !== 0) {
				_variables.container.style.left = document.body.offsetWidth * -_variables.pages.current - change + 'px';
			} else if (change > 0 && _variables.pages.current !== _variables.pages.list.length - 1) {
				_variables.container.style.left = document.body.offsetWidth * -_variables.pages.current - change + 'px';
			}
			e.preventDefault();
		}
	};

	function handleMouseUp(e) {
		mouseIsDown = false;
		var change = void 0,
		    border = void 0;
		change = startingX - e.clientX;
		border = 200;
		if (Math.abs(change) < border) {
			_variables.container.style.left = document.body.offsetWidth * -_variables.pages.current + 'px';
		} else {
			if (change > 0 && _variables.pages.current !== _variables.pages.list.length - 1) {
				_variables.pages.itemsList[_variables.pages.current].classList.remove('pages-bar__item-active');
				_variables.pages.current++;
				_variables.pages.itemsList[_variables.pages.current].classList.add('pages-bar__item-active');
				_variables.container.style.left = document.body.offsetWidth * -_variables.pages.current + 'px';
			} else if (change < 0 && _variables.pages.current !== 0) {
				_variables.pages.itemsList[_variables.pages.current].classList.remove('pages-bar__item-active');
				_variables.pages.current--;
				_variables.pages.itemsList[_variables.pages.current].classList.add('pages-bar__item-active');
				_variables.container.style.left = document.body.offsetWidth * -_variables.pages.current + 'px';
			}
			if (_variables.pages.list.length > 5 && _variables.pages.current >= 2 && _variables.pages.current <= _variables.pages.list.length - 3) {
				_variables.pages.bar.style.left = -25 * (_variables.pages.current - 2) + 'px';
			}
			if (_variables.pages.current >= _variables.pages.list.length - 4 && !_variables.loadInfo.requestIsGoing) {
				(0, _requestSearch2.default)(_variables.loadInfo.lastQ);
			}
		}
	}

/***/ })
/******/ ]);