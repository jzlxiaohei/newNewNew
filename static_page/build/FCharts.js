(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["FCharts"] = factory();
	else
		root["FCharts"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//import Layout from './Layout/Layout.js'
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _ChartChartJs = __webpack_require__(1);
	
	var _ChartChartJs2 = _interopRequireDefault(_ChartChartJs);
	
	var _ConstantConstantJs = __webpack_require__(14);
	
	var _ConstantConstantJs2 = _interopRequireDefault(_ConstantConstantJs);
	
	var _DefaultStyleDefaultStyleJs = __webpack_require__(22);
	
	var _DefaultStyleDefaultStyleJs2 = _interopRequireDefault(_DefaultStyleDefaultStyleJs);
	
	var FCharts = {
	    Chart: _ChartChartJs2['default'],
	    Constant: _ConstantConstantJs2['default'],
	    DefaultStyle: _DefaultStyleDefaultStyleJs2['default']
	};
	
	exports['default'] = FCharts;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	//import Layout from '../Layout/Layout.js'
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _PainterPainterFactoryJs = __webpack_require__(2);
	
	var _PainterPainterFactoryJs2 = _interopRequireDefault(_PainterPainterFactoryJs);
	
	var _FactoryYBridgeFactoryJs = __webpack_require__(15);
	
	var _FactoryYBridgeFactoryJs2 = _interopRequireDefault(_FactoryYBridgeFactoryJs);
	
	var _FactoryXBridgeFactoryJs = __webpack_require__(17);
	
	var _FactoryXBridgeFactoryJs2 = _interopRequireDefault(_FactoryXBridgeFactoryJs);
	
	var _DrawComponentComponentFactoryJs = __webpack_require__(19);
	
	var _DrawComponentComponentFactoryJs2 = _interopRequireDefault(_DrawComponentComponentFactoryJs);
	
	var _ConstantConstantJs = __webpack_require__(14);
	
	var _ConstantConstantJs2 = _interopRequireDefault(_ConstantConstantJs);
	
	var _UtilsUtilsJs = __webpack_require__(5);
	
	var _UtilsUtilsJs2 = _interopRequireDefault(_UtilsUtilsJs);
	
	var _DefaultStyleDefaultStyleJs = __webpack_require__(22);
	
	var _DefaultStyleDefaultStyleJs2 = _interopRequireDefault(_DefaultStyleDefaultStyleJs);
	
	function getMousePos(canvas, evt) {
	    var rect = canvas.getBoundingClientRect();
	    return {
	        x: evt.clientX - rect.left,
	        y: evt.clientY - rect.top
	    };
	}
	
	var Chart = (function () {
	    function Chart(options) {
	        _classCallCheck(this, Chart);
	
	        this.ctx = options.ctx;
	        this.drawCanvas = options.drawCanvas;
	        this.seriesOptions = options.series || [];
	        this.xAxisOptions = options.xAxis;
	
	        //this.canvasColor = options.canvasColor|| DefaultStyle.canvasColor;
	
	        this.eventCanvas = options.eventCanvas;
	        this.movable = options.movable || false;
	        this.scalable = options.scalable || false;
	
	        this.componentList = {};
	        this.tips = options.tips;
	        this.defaultStyle = options.defaultStyle || _DefaultStyleDefaultStyleJs2['default'];
	        this.xAxisInited = false;
	        this.init();
	    }
	
	    _createClass(Chart, [{
	        key: 'setCtx',
	        value: function setCtx(ctx) {
	            this.ctx = ctx;
	            for (var i in this.componentList) {
	                this.componentList[i].setCtx(ctx);
	            }
	            return this;
	        }
	    }, {
	        key: 'initXAxis',
	        value: function initXAxis() {
	            this.xAxisInited = true;
	            this.xBridge.buildAxis();
	        }
	    }, {
	        key: 'init',
	        value: function init() {
	            this._buildXAxis()._buildSeries()._buildEvent();
	        }
	    }, {
	        key: '_buildEvent',
	        value: function _buildEvent() {
	            var _this = this;
	
	            if (!this.eventCanvas) {
	                console.warn('eventCanvas not set');
	            }
	            if (this.movable) {
	                this._dragging = false;
	                this._lastX;
	                this._curX;
	                var eventCanvas = this.eventCanvas;
	                eventCanvas.onmousedown = function (e) {
	                    _this._dragging = true;
	                    _this._lastX = e.x;
	                };
	
	                eventCanvas.onmouseup = function (e) {
	                    _this._dragging = false;
	                };
	
	                eventCanvas.onmousemove = function (e) {
	                    //console.log(e)
	
	                    var eventCtx = _this.eventCanvas.getContext('2d');
	                    eventCtx.clearRect(0, 0, eventCanvas.width, eventCanvas.height);
	
	                    var x = getMousePos(eventCanvas, e).x;
	                    var y = getMousePos(eventCanvas, e).y;
	                    var info = _this.getInfoByX(x);
	
	                    eventCtx.beginPath();
	                    eventCtx.strokeStyle = '#999999';
	                    eventCtx.moveTo(x, 0);
	                    eventCtx.lineTo(x, eventCanvas.height);
	                    eventCtx.fillText(_this.xBridge.getIndexByValue(x), 10, 10);
	                    eventCtx.stroke();
	
	                    eventCtx.font = '18px';
	
	                    eventCtx.save();
	                    eventCtx.fillStyle = _this.defaultStyle.tipColor;
	                    if (!info.outBound) {
	                        var text = _this.tips(info);
	                        _UtilsUtilsJs2['default'].Canvas.wrapText(eventCtx, text, x, y, 200, 20);
	                    }
	                    eventCtx.restore();
	
	                    _this._curX = x;
	                    console.log(_this._curX, _this._lastX);
	                    if (_this._dragging) {
	                        _this.setTranslation(_this._curX - (_this._lastX ? _this._lastX : _this._curX));
	                        _this.render();
	                    }
	
	                    _this._lastX = _this._curX;
	                };
	            }
	            if (this.scalable) {
	                eventCanvas.onwheel = function (event) {
	                    var delta = event.wheelDelta // Webkit
	                     || -event.deltaY || -event.detail; // Firefox
	                    var scale = delta > 0 ? 1.1 : 1 / 1.1;
	
	                    _this.setScale(scale, getMousePos(eventCanvas, event).x);
	                    _this.render();
	                };
	            }
	        }
	    }, {
	        key: '_buildXAxis',
	        value: function _buildXAxis() {
	            var xOptions = this.xAxisOptions;
	            if (xOptions.fixedCount) {
	                this.xBridge = (0, _FactoryXBridgeFactoryJs2['default'])('fixedCount', xOptions);
	            } else {
	                this.xBridge = (0, _FactoryXBridgeFactoryJs2['default'])('itemWidth', xOptions);
	            }
	            //this.xBridge.buildAxis()
	            return this;
	        }
	    }, {
	        key: '_buildSeries',
	        value: function _buildSeries() {
	            var sOptions = this.seriesOptions;
	            for (var i in sOptions) {
	                var sOpt = sOptions[i];
	                this.addSeries(i, sOpt);
	            }
	            return this;
	        }
	    }, {
	        key: 'addSeries',
	        value: function addSeries(key, sOpt) {
	            var componentType = sOpt.type;
	            sOpt.bridgeType = sOpt.bridgeType || _ConstantConstantJs2['default'].YBridge.OHLC;
	            var yBridge = (0, _FactoryYBridgeFactoryJs2['default'])(sOpt.bridgeType, {
	                range: sOpt.range,
	                data: sOpt.data,
	                tickCount: sOpt.tickCount,
	                niceTick: sOpt.niceTick
	            });
	
	            //console.log(sOpt)
	
	            var cp = (0, _DrawComponentComponentFactoryJs2['default'])(componentType, {
	                chart: this,
	                xBridge: this.xBridge,
	                yBridge: yBridge,
	                ctx: this.ctx,
	                //yTextFormat:sOpt.yTextFormat,
	                xTextFormat: sOpt.xTextFormat,
	                xGridOn: sOpt.xGridOn,
	                yGridOn: sOpt.yGridOn,
	                gridColor: sOpt.gridColor,
	                candleData: sOpt.candleData,
	                style: sOpt.style,
	                labels: sOpt.labels
	            });
	
	            this.componentList[key] = cp;
	        }
	    }, {
	        key: 'getComponent',
	        value: function getComponent(key) {
	            return this.componentList[key];
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            //let [x,y,w,h] = this.canvasRect
	            //this.ctx.clearRect(0,0,600,600)
	            if (!this.xAxisInited) {
	                this.initXAxis();
	            }
	            this.ctx.fillStyle = this.canvasColor || this.defaultStyle.canvasColor;
	            this.ctx.fillRect(0, 0, this.drawCanvas.width, this.drawCanvas.height);
	            for (var i in this.componentList) {
	                this.componentList[i].render();
	            }
	        }
	    }, {
	        key: 'setScale',
	        value: function setScale(scale, value) {
	            this.xBridge.setScale(scale, value);
	        }
	    }, {
	        key: 'setTranslation',
	        value: function setTranslation(x) {
	            this.xBridge.setTranslation(x);
	        }
	    }, {
	        key: 'getInfoByX',
	        value: function getInfoByX(xValue) {
	            var index = this.xBridge.getIndexByValue(xValue);
	
	            if (index == -1) {
	                return { outBound: true };
	            }
	
	            var tipInfo = {
	                x: this.xBridge.getDataByIndex(index)
	            };
	
	            for (var i in this.componentList) {
	                var yBridge = this.componentList[i].getYBridge();
	                tipInfo[i] = yBridge.getDataByIndex(index);
	            }
	            return tipInfo;
	        }
	    }]);
	
	    return Chart;
	})();
	
	exports['default'] = Chart;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _CandlePainterJs = __webpack_require__(9);
	
	var _CandlePainterJs2 = _interopRequireDefault(_CandlePainterJs);
	
	var _AreaPainterJs = __webpack_require__(10);
	
	var _AreaPainterJs2 = _interopRequireDefault(_AreaPainterJs);
	
	var _LinePainterJs = __webpack_require__(11);
	
	var _LinePainterJs2 = _interopRequireDefault(_LinePainterJs);
	
	var _XGridPainterJs = __webpack_require__(12);
	
	var _XGridPainterJs2 = _interopRequireDefault(_XGridPainterJs);
	
	var _YGridPainterJs = __webpack_require__(3);
	
	var _YGridPainterJs2 = _interopRequireDefault(_YGridPainterJs);
	
	var _BarPainterJs = __webpack_require__(13);
	
	var _BarPainterJs2 = _interopRequireDefault(_BarPainterJs);
	
	var _ConstantConstantJs = __webpack_require__(14);
	
	var _ConstantConstantJs2 = _interopRequireDefault(_ConstantConstantJs);
	
	var _UtilsUtilsJs = __webpack_require__(5);
	
	//var id = Utils.Fn.identify
	
	var _UtilsUtilsJs2 = _interopRequireDefault(_UtilsUtilsJs);
	
	var kvArr = [[_ConstantConstantJs2['default'].Painter.LINE, _LinePainterJs2['default']], [_ConstantConstantJs2['default'].Painter.CANDLE, _CandlePainterJs2['default']], [_ConstantConstantJs2['default'].Painter.AREA, _AreaPainterJs2['default']], [_ConstantConstantJs2['default'].Painter.X_GRID, _XGridPainterJs2['default']], [_ConstantConstantJs2['default'].Painter.Y_GRID, _YGridPainterJs2['default']], [_ConstantConstantJs2['default'].Painter.BAR, _BarPainterJs2['default']]];
	
	var FactoryMap = _UtilsUtilsJs2['default'].Common.makeKvObj(kvArr);
	
	var PainterFactory = function PainterFactory(type, options) {
	    //if(type in FactoryMap){
	    return new FactoryMap[type](options);
	    //}
	    //else return undefined
	};
	
	exports['default'] = PainterFactory;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _PainterBaseJs = __webpack_require__(4);
	
	var _PainterBaseJs2 = _interopRequireDefault(_PainterBaseJs);
	
	var _UtilsUtilsJs = __webpack_require__(5);
	
	/**
	 * labels:[
	 *  textAlign:
	 *  yText:
	 *  yList
	 *  top:
	 *  pos:
	 *  place:
	 * ]
	 *
	 *
	 *
	 */
	
	var _UtilsUtilsJs2 = _interopRequireDefault(_UtilsUtilsJs);
	
	var YGridPainter = (function (_PainterBase) {
	    _inherits(YGridPainter, _PainterBase);
	
	    function YGridPainter() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, YGridPainter);
	
	        _get(Object.getPrototypeOf(YGridPainter.prototype), 'constructor', this).call(this, options);
	        //this.textArr = options.textArr;
	        this.xRange = options.xRange;
	        //this.xAxis = options.xAxis;
	        this.labels = options.labels;
	    }
	
	    _createClass(YGridPainter, [{
	        key: 'setLabels',
	        value: function setLabels(labels) {
	            this.labels = labels;
	            return this;
	        }
	    }, {
	        key: 'setXRange',
	        value: function setXRange(xRange) {
	            this.xRange = xRange;
	            return this;
	        }
	    }, {
	        key: 'setTextArray',
	        value: function setTextArray(textArr) {
	            this.textArr = textArr;
	            return this;
	        }
	    }, {
	        key: 'draw',
	        value: function draw() {
	            var ctx = this.ctx;
	            //var textArr = this.textArr;
	
	            var _xRange = _slicedToArray(this.xRange, 2);
	
	            //var fontHeight = 0;
	            var xBegin = _xRange[0];
	            var xEnd = _xRange[1];
	            ctx.save();
	            for (var i = 0; i < this.yAxis.length; i++) {
	                var y = this.yAxis[i].rangeValue;
	                ctx.moveTo(xBegin, y);
	                ctx.lineTo(xEnd, y);
	            }
	            this.drawText();
	            ctx.restore();
	        }
	    }, {
	        key: 'drawText',
	        value: function drawText() {
	            var ctx = this.ctx;
	            var yList = this.yAxis.map(function (item) {
	                return item.rangeValue;
	            });
	            var yText = this.yAxis.map(function (item) {
	                return item.domainValue;
	            });
	            ctx.save();
	            ctx.fillStyle = this.style.tickLabelColor;
	            for (var i = 0; i < this.labels.length; i++) {
	                this._drawSingle(yList, yText, this.labels[i]);
	            }
	            ctx.restore();
	        }
	    }, {
	        key: '_drawSingle',
	        value: function _drawSingle(yList, yText, opt) {
	            var _xRange2 = _slicedToArray(this.xRange, 2);
	
	            var xBegin = _xRange2[0];
	            var xEnd = _xRange2[1];
	
	            var base = undefined,
	                textAlign = undefined;
	            var top = opt.top || 0;
	            if (opt.pos == 'left') {
	                if (opt.place == 'inner') {
	                    textAlign = 'start';
	                }
	                if (opt.place == 'outer') {
	                    textAlign = 'end';
	                }
	                base = opt.base || xBegin;
	            }
	            if (opt.pos == 'right') {
	                if (opt.place == 'inner') {
	                    textAlign = 'end';
	                }
	                if (opt.place == 'outer') {
	                    textAlign = 'start';
	                }
	                base = opt.base || xEnd;
	            }
	            var valueFn = opt.value || _UtilsUtilsJs2['default'].Fn.identify;
	            var ctx = this.ctx;
	            ctx.textAlign = textAlign;
	            for (var i = 0; i < yList.length; i++) {
	                var y = yList[i];
	                ctx.fillText(valueFn(yText[i]), base, y - top);
	            }
	        }
	    }]);
	
	    return YGridPainter;
	})(_PainterBaseJs2['default']);
	
	exports['default'] = YGridPainter;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _UtilsUtilsJs = __webpack_require__(5);
	
	var _UtilsUtilsJs2 = _interopRequireDefault(_UtilsUtilsJs);
	
	var PainterBase = (function () {
	    function PainterBase(options) {
	        _classCallCheck(this, PainterBase);
	
	        //options = options || {};
	        this.xRange = options.xRange; //这个暂时并没有什么用
	        this.yRange = options.yRange;
	        this.yAxis = options.yAxis || []; //
	        this.xAxis = options.xAxis || [];
	        this.style = options.style || {}; //画图的样式
	        this.ctx = options.ctx;
	        //this.style.itemWidth = options.style.itemWidth;
	    }
	
	    _createClass(PainterBase, [{
	        key: 'setCtx',
	        value: function setCtx(ctx) {
	            this.ctx = ctx;
	            return this;
	        }
	    }, {
	        key: 'setYRange',
	        value: function setYRange(range) {
	            this.yRange = range;
	            return this;
	        }
	    }, {
	        key: 'setXRange',
	        value: function setXRange(range) {
	            this.xRange = range;
	            return this;
	        }
	    }, {
	        key: 'setStyle',
	        value: function setStyle(style) {
	            _UtilsUtilsJs2['default'].Common.merge(this.style, style, true);
	            return this;
	        }
	    }, {
	        key: 'setXAxis',
	        value: function setXAxis(x) {
	            this.xAxis = x;
	            return this;
	        }
	    }, {
	        key: 'setYAxis',
	        value: function setYAxis(y) {
	            this.yAxis = y;
	            return this;
	        }
	    }, {
	        key: '__beforeCheck',
	        value: function __beforeCheck() {
	            if (this.xAxis.length < this.yAxis.length) {
	                console.error('xAxis.length should bigger than yAxis.length');
	            }
	        }
	    }, {
	        key: 'beforeDraw',
	        value: function beforeDraw() {
	            //this.__beforeCheck();
	            this.ctx.save();
	            //var xLen = this.xRange[1] - this.xRange[0],
	            //    yLen = this.yRange[1] = this.yRange[0]
	            //ctx.rect(this.xRange[0],this.yRange[1],xLen,yLen);
	            //ctx.clip();
	            this.ctx.beginPath();
	        }
	    }, {
	        key: 'draw',
	        value: function draw() {
	            console.error('subClass should implements draw method');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.beforeDraw();
	            this.draw();
	
	            this.setDefaultStyle();
	            this.afterDraw();
	        }
	    }, {
	        key: 'setDefaultStyle',
	        value: function setDefaultStyle() {}
	    }, {
	        key: 'afterDraw',
	        value: function afterDraw() {
	            var ctx = this.ctx;
	            var style = this.style;
	            ctx.strokeStyle = style.strokeStyle || style.color;
	            ctx.fillStyle = style.fillStyle || style.color;
	            ctx.lineWidth = style.lineWidth || 1;
	            style.brushType = style.brushType || 'stroke';
	            if (style.brushType == 'both') {
	                ctx.stroke();
	                ctx.fill();
	            } else if (style.brushType == 'fill') {
	                ctx.fill();
	            } else {
	                ctx.stroke();
	            }
	            ctx.restore();
	        }
	    }]);
	
	    return PainterBase;
	})();
	
	exports['default'] = PainterBase;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _LinearScaleJs = __webpack_require__(6);
	
	var _LinearScaleJs2 = _interopRequireDefault(_LinearScaleJs);
	
	var _TimeScaleJs = __webpack_require__(7);
	
	var _TimeScaleJs2 = _interopRequireDefault(_TimeScaleJs);
	
	var toString = Object.prototype.toString;
	
	var utils = {};
	utils.Type = {
	    isArray: function isArray(arr) {
	        return toString.call(arr) == '[object Array]';
	    },
	    isFunction: function isFunction(fn) {
	        return toString.call(fn) == '[object Function]';
	    }
	};
	
	utils.String = {
	    capitalizeFirstLetter: function capitalizeFirstLetter(string) {
	        return string.charAt(0).toUpperCase() + string.slice(1);
	    }
	};
	
	utils.Common = {
	    merge: function merge(target, source, isOverwrite) {
	        for (var i in source) {
	            if (i in target) {
	                if (isOverwrite) {
	                    target[i] = source[i];
	                }
	            } else {
	                target[i] = source[i];
	            }
	        }
	        return target;
	    },
	    //[[k1,v1],[k2,v2]] =>{ k1:v1,k2:v2}
	    //k1,
	    makeKvObj: function makeKvObj(kvArr) {
	        var kvObj = {};
	        for (var i = 0; i < kvArr.length; i++) {
	            var kv = kvArr[i];
	            kvObj[kv[0]] = kv[1];
	        }
	        return kvObj;
	    },
	
	    invertKv: function invertKv(kvObj) {
	        var vkObj = {};
	        for (var i in kvObj) {
	            vkObj[kvObj[i]] = i;
	        }
	        return vkObj;
	    },
	
	    generateGetterSetter: function generateGetterSetter(obj, properties) {
	        for (var i in properties) {
	            var p = utils.String.capitalizeFirstLetter(i);
	            var v = properties[i];
	            (function (prop, value) {
	                obj[prop] = value;
	                obj['get' + prop] = function () {
	                    return obj[prop];
	                };
	                obj['set' + prop] = function (v) {
	                    obj[prop] = v;
	                    return obj;
	                };
	            })(p, v);
	        }
	    }
	};
	
	utils.Array = {
	    push: function push(originArr, item) {
	        if (utils.isArray(item)) {
	            for (var i = 0; i < item.length; i++) {
	                originArr.push(item[i]);
	            }
	        } else {
	            originArr.push(item);
	        }
	    },
	    unshift: function unshift(originArr, item) {
	        if (utils.isArray(item)) {
	            for (var i = 0; i < item.length; i++) {
	                originArr.unshift(item[i]);
	            }
	        } else {
	            originArr.unshift(item);
	        }
	    }
	};
	
	utils.Math = {
	    LineScale: function LineScale(domain, range) {
	        return new _LinearScaleJs2['default']({ domain: domain, range: range });
	    },
	    TimeScale: function TimeScale(domain, range) {
	        return new _TimeScaleJs2['default']({
	            domain: domain,
	            range: range
	        });
	    },
	    //@see http://stackoverflow.com/questions/4228356/integer-division-in-javascript
	    integerDivide: function integerDivide(a, b) {
	        return {
	            div: Math.floor(a / b),
	            rem: a % b
	        };
	    }
	};
	
	utils.Canvas = {
	    fillTextCenter: function fillTextCenter(ctx, text, x, y) {
	        var textWidth = ctx.measureText(this.textFormat).width;
	        ctx.fillText(text, x - textWidth / 2, y);
	        return textWidth;
	    },
	    wrapText: function wrapText(context, text, x, y, maxWidth, lineHeight) {
	        var cars = text.split("\n");
	
	        for (var ii = 0; ii < cars.length; ii++) {
	
	            var line = "";
	            var words = cars[ii].split(" ");
	
	            for (var n = 0; n < words.length; n++) {
	                var testLine = line + words[n] + " ";
	                var metrics = context.measureText(testLine);
	                var testWidth = metrics.width;
	
	                if (testWidth > maxWidth) {
	                    context.fillText(line, x, y);
	                    line = words[n] + " ";
	                    y += lineHeight;
	                } else {
	                    line = testLine;
	                }
	            }
	
	            context.fillText(line, x, y);
	            y += lineHeight;
	        }
	    }
	};
	
	utils.Fn = {
	    noop: function noop() {},
	    identify: function identify(e) {
	        return e;
	    }
	};
	
	var defaultBinarySearchCompareFunc = function defaultBinarySearchCompareFunc(target, curElem) {
	    if (curElem < target) {
	        //return 'less';
	        return -1;
	    } else if (curElem > target) {
	        //return 'more';
	        return 1;
	    } else {
	        //return 'equal'
	        return 0;
	    }
	};
	
	utils.Algorithms = {
	    binarySearch: function binarySearch(arr, value, compareFunc) {
	        compareFunc = compareFunc || defaultBinarySearchCompareFunc;
	        var minIndex = 0;
	        var maxIndex = arr.length - 1;
	        var currentIndex;
	        var currentElement;
	        while (minIndex <= maxIndex) {
	            currentIndex = Math.floor((minIndex + maxIndex) / 2);
	            currentElement = arr[currentIndex];
	            //less more equal
	            var lme = compareFunc(value, currentElement);
	
	            if (lme < 0) {
	                minIndex = currentIndex + 1;
	            } else if (lme > 0) {
	                maxIndex = currentIndex - 1;
	            } else {
	                return currentIndex;
	            }
	        }
	        return -1;
	    }
	};
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _UtilsUtilsJs = __webpack_require__(5);
	
	var _UtilsUtilsJs2 = _interopRequireDefault(_UtilsUtilsJs);
	
	function niceNum(rangeLen, round) {
	    var exponent = Math.floor(Math.log10(rangeLen)),
	        fraction = rangeLen / Math.pow(10, exponent),
	        niceFraction;
	
	    if (round) {
	        if (fraction < 1.5) niceFraction = 1;else if (fraction < 3) niceFraction = 2;else if (fraction < 7) niceFraction = 5;else niceFraction = 10;
	    } else {
	        if (fraction <= 1) niceFraction = 1;else if (fraction <= 2) niceFraction = 2;else if (fraction <= 5) niceFraction = 5;else niceFraction = 10;
	    }
	
	    return niceFraction * Math.pow(10, exponent);
	}
	
	var Linear = (function () {
	    function Linear() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, Linear);
	
	        this.domain = options.domain || [0, 1];
	        this.range = options.range || [0, 1];
	    }
	
	    _createClass(Linear, [{
	        key: 'setRange',
	        value: function setRange(range) {
	            this.range = range;
	            return this;
	        }
	    }, {
	        key: 'setDomain',
	        value: function setDomain(domain) {
	            this.domain = domain;
	            return this;
	        }
	    }, {
	        key: 'linear',
	        value: function linear(a, b, value) {
	            var t = (value - a[0]) / (a[1] - a[0]);
	            return b[0] * (1 - t) + b[1] * t;
	        }
	    }, {
	        key: 'scale',
	        value: function scale(value) {
	            return this.linear(this.domain, this.range, value);
	        }
	    }, {
	        key: 'invert',
	        value: function invert(value) {
	            return this.linear(this.range, this.domain, value);
	        }
	    }, {
	        key: 'ticks',
	        value: function ticks() {
	            var count = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];
	            var nice = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	            if (nice) {
	                return this._niceTick(count);
	            } else {
	                return this._avgTick(count);
	            }
	        }
	    }, {
	        key: '_avgTick',
	        value: function _avgTick(count) {
	            var _domain = _slicedToArray(this.domain, 2);
	
	            var min = _domain[0];
	            var max = _domain[1];
	
	            if (max <= min) return [];
	
	            var step = (max - min) / (count - 1);
	
	            var start = Math.floor(min * step / step),
	                end = Math.ceil(max * step / step),
	                step = step;
	
	            var ticks = [];
	            for (var i = start; i < end; i += step) {
	                ticks.push(i);
	            }
	            return ticks;
	        }
	
	        /**
	         * @see http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
	         *
	         */
	    }, {
	        key: '_niceTick',
	        value: function _niceTick(count) {
	            var _domain2 = _slicedToArray(this.domain, 2);
	
	            var min = _domain2[0];
	            var max = _domain2[1];
	
	            if (max <= min) return [];
	
	            var maxTicks = count;
	
	            var niceRangeLen = niceNum(max - min, false);
	
	            var tickSpacing = niceNum(niceRangeLen / (maxTicks - 1), true);
	            var niceMin = Math.floor(min / tickSpacing) * tickSpacing;
	            var niceMax = Math.ceil(max / tickSpacing) * tickSpacing;
	
	            var start = niceMin,
	                end = niceMax,
	                step = tickSpacing;
	
	            var ticks = [];
	            for (var i = start; i < end; i += step) {
	                ticks.push(i);
	            }
	            return ticks;
	        }
	    }]);
	
	    return Linear;
	})();
	
	exports['default'] = Linear;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _TimeTimeFnsJs = __webpack_require__(8);
	
	var _TimeTimeFnsJs2 = _interopRequireDefault(_TimeTimeFnsJs);
	
	var _LinearScaleJs = __webpack_require__(6);
	
	var _LinearScaleJs2 = _interopRequireDefault(_LinearScaleJs);
	
	var tickMethods = [
	//ms ,fn ,offset
	[6e4, _TimeTimeFnsJs2['default'].minute, 1], // 1-minute
	[3e5, _TimeTimeFnsJs2['default'].minute, 5], // 5-minute
	[9e5, _TimeTimeFnsJs2['default'].minute, 15], // 15-minute
	[18e5, _TimeTimeFnsJs2['default'].minute, 30], // 30-minute
	[36e5, _TimeTimeFnsJs2['default'].hour, 1], // 1-hour
	[108e5, _TimeTimeFnsJs2['default'].hour, 3], // 3-hour
	[216e5, _TimeTimeFnsJs2['default'].hour, 6], // 6-hour
	[432e5, _TimeTimeFnsJs2['default'].hour, 12], // 12-hour
	[864e5, _TimeTimeFnsJs2['default'].day, 1], // 1-day
	[1728e5, _TimeTimeFnsJs2['default'].day, 2], // 2-day
	[864e6, _TimeTimeFnsJs2['default'].day, 10], //10 day
	[2592e6, _TimeTimeFnsJs2['default'].month, 1], // 1-month
	[7776e6, _TimeTimeFnsJs2['default'].month, 3], // 3-month
	[15552e6, _TimeTimeFnsJs2['default'].month, 6], // 3-month
	[31536e6, _TimeTimeFnsJs2['default'].year, 1] // 1-year
	];
	
	//domain 以Date形式传入
	
	var TimeScale = (function () {
	    function TimeScale() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, TimeScale);
	
	        this.domain = options.domain;
	        //this.range = options.range;
	    }
	
	    //setRange(range){
	    //    this.range = range;
	    //    return this;
	    //}
	
	    _createClass(TimeScale, [{
	        key: 'setDomain',
	        value: function setDomain(domain) {
	            this.domain = domain;
	            return this;
	        }
	    }, {
	        key: 'ticks',
	        value: function ticks() {
	            var count = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];
	            var withBound = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	            var _domain = _slicedToArray(this.domain, 2);
	
	            var bDate = _domain[0];
	            var eDate = _domain[1];
	
	            var span = eDate - bDate;
	            var len = tickMethods.length;
	
	            var scaleMethod, offsetValue;
	            for (var i = len - 1; i >= 0; i--) {
	                var tMethods = tickMethods[i];
	                var timeStep = tMethods[0];
	                if (span / timeStep > count) {
	                    scaleMethod = tMethods[1];
	                    offsetValue = tMethods[2];
	                    break;
	                }
	            }
	
	            //这种情况说明 时间段太短
	            if (!scaleMethod) {
	                scaleMethod = tickMethods[0][1];
	                offsetValue = tickMethods[0][2];
	            }
	
	            var ticks = scaleMethod.range(bDate, eDate, offsetValue);
	            if (withBound && ticks.length) {
	                var tickLen = ticks.length;
	                if (bDate.getTime() != ticks[0].getTime()) {
	                    ticks.unshift(bDate);
	                }
	                if (eDate.getTime() != ticks[tickLen - 1].getTime()) {
	                    ticks.push(eDate);
	                }
	            }
	
	            return ticks;
	        }
	    }]);
	
	    return TimeScale;
	})();
	
	exports['default'] = TimeScale;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var TimeFns = {};
	
	function timeInterval(local, step, number) {
	
	    function round(date) {
	        var d0 = local(date),
	            d1 = offset(d0, 1);
	        return date - d0 < d1 - date ? d0 : d1;
	    }
	
	    function ceil(date) {
	        step(date = local(new Date(date - 1)), 1);
	        return date;
	    }
	
	    function offset(date, k) {
	        step(date = new Date(+date), k);
	        return date;
	    }
	
	    function range(t0, t1, dt) {
	        var time = local(t0),
	            times = [];
	        if (dt > 1) {
	            while (time < t1) {
	                if (!(number(time) % dt)) times.push(new Date(+time)); //可以整除
	                step(time, 1);
	            }
	        } else {
	            while (time < t1) times.push(new Date(+time)), step(time, 1);
	        }
	        return times;
	    }
	
	    local.floor = local;
	    local.range = range;
	    local.ceil = ceil;
	    local.round = round;
	    local.offset = offset;
	
	    return local;
	}
	
	TimeFns.second = timeInterval(function (date) {
	    return new Date(Math.floor(date / 1e3) * 1e3);
	}, function (date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 1e3); // DST breaks setSeconds
	}, function (date) {
	    return date.getSeconds();
	});
	
	TimeFns.minute = timeInterval(function (date) {
	    return new Date(Math.floor(date / 6e4) * 6e4);
	}, function (date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 6e4); // DST breaks setMinutes
	}, function (date) {
	    return date.getMinutes();
	});
	
	TimeFns.hour = timeInterval(function (date) {
	    var timezone = date.getTimezoneOffset() / 60;
	    return new Date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
	}, function (date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 36e5); // DST breaks setHours
	}, function (date) {
	    return date.getHours();
	});
	
	TimeFns.day = timeInterval(function (date) {
	    var day = new Date(2000, 0);
	    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	    return day;
	}, function (date, offset) {
	    date.setDate(date.getDate() + offset);
	}, function (date) {
	    return date.getDate() - 1;
	});
	
	TimeFns.dayOfYear = function (date) {
	    var year = this.year(date);
	    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
	};
	
	TimeFns.month = timeInterval(function (date) {
	    date = TimeFns.day(date);
	    date.setDate(1);
	    return date;
	}, function (date, offset) {
	    date.setMonth(date.getMonth() + offset);
	}, function (date) {
	    return date.getMonth();
	});
	
	TimeFns.year = timeInterval(function (date) {
	    date = TimeFns.day(date);
	    date.setMonth(0, 1);
	    return date;
	}, function (date, offset) {
	    date.setFullYear(date.getFullYear() + offset);
	}, function (date) {
	    return date.getFullYear();
	});
	
	//TimeFns.week = timeInterval(function(date) {
	//    (date = TimeFns.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
	//    return date;
	//}, function(date, offset) {
	//    date.setDate(date.getDate() + Math.floor(offset) * 7);
	//}, function(date) {
	//    var day = TimeFns.year(date).getDay();
	//    return Math.floor((TimeFns.dayOfYear(date) + (day + 6) % 7) / 7) - (day !== 6);
	//});
	
	var tickMethods = [
	//ms ,fn ,offset
	[6e4, TimeFns.minute, 1], // 1-minute
	[3e5, TimeFns.minute, 5], // 5-minute
	[9e5, TimeFns.minute, 15], // 15-minute
	[18e5, TimeFns.minute, 30], // 30-minute
	[36e5, TimeFns.hour, 1], // 1-hour
	[108e5, TimeFns.hour, 3], // 3-hour
	[216e5, TimeFns.hour, 6], // 6-hour
	[432e5, TimeFns.hour, 12], // 12-hour
	[864e5, TimeFns.day, 1], // 1-day
	[1728e5, TimeFns.day, 2], // 2-day
	[864e6, TimeFns.day, 10], //10 day
	[2592e6, TimeFns.month, 1], // 1-month
	[7776e6, TimeFns.month, 3], // 3-month
	[15552e6, TimeFns.month, 6], // 3-month
	[31536e6, TimeFns.year, 1] // 1-year
	];
	
	exports["default"] = TimeFns;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _PainterBaseJs = __webpack_require__(4);
	
	var _PainterBaseJs2 = _interopRequireDefault(_PainterBaseJs);
	
	var CandlePainter = (function (_PainterBase) {
	    _inherits(CandlePainter, _PainterBase);
	
	    function CandlePainter() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, CandlePainter);
	
	        _get(Object.getPrototypeOf(CandlePainter.prototype), 'constructor', this).call(this, options);
	    }
	
	    _createClass(CandlePainter, [{
	        key: 'draw',
	        value: function draw() {
	            var ctx = this.ctx;
	            var xAxis = this.xAxis;
	            var yAxis = this.yAxis;
	            var itemWidth = this.style.itemWidth || 6;
	            for (var i = 0; i < yAxis.length; i++) {
	                var d = yAxis[i];
	                var x1 = xAxis[i],
	                    open = d.open,
	                    close = d.close,
	                    high = d.high,
	                    low = d.low;
	
	                var x2 = x1 + itemWidth;
	                var midX = (x1 + x2) / 2;
	
	                //画矩形
	                ctx.moveTo(x1, open);
	                ctx.lineTo(x2, open);
	                ctx.lineTo(x2, close);
	                ctx.lineTo(x1, close);
	                ctx.lineTo(x1, open);
	
	                //画上下两根线
	                var _big, _small;
	
	                //y轴是从上到下的方向，大小是相反的
	                if (open > close) {
	                    _big = close, _small = open;
	                } else {
	                    _big = open, _small = close;
	                }
	
	                ctx.moveTo(midX, _big);
	                ctx.lineTo(midX, high);
	
	                ctx.moveTo(midX, _small);
	                ctx.lineTo(midX, low);
	            }
	        }
	    }, {
	        key: 'setDefaultStyle',
	        value: function setDefaultStyle() {}
	    }]);
	
	    return CandlePainter;
	})(_PainterBaseJs2['default']);
	
	exports['default'] = CandlePainter;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _PainterBaseJs = __webpack_require__(4);
	
	/*
	* 和LinePainter的实现算法一样
	*
	*  1: LinePainter 是 stroke
	*
	*  2: AreaPainter 是 fill ，另外多两个点，用于设定x轴
	* */
	
	var _PainterBaseJs2 = _interopRequireDefault(_PainterBaseJs);
	
	var AreaPainter = (function (_PainterBase) {
	    _inherits(AreaPainter, _PainterBase);
	
	    function AreaPainter() {
	        var opt = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, AreaPainter);
	
	        _get(Object.getPrototypeOf(AreaPainter.prototype), 'constructor', this).call(this, opt);
	        //this.propName = opt.propName || 'close'
	    }
	
	    _createClass(AreaPainter, [{
	        key: 'render',
	        value: function render() {
	            this.beforeDraw();
	            var xAxis = this.xAxis;
	            var yAxis = this.yAxis;
	            if (xAxis.length === 0 || yAxis.length === 0) {
	                throw new Error('xAxis and yAxis should not be empty');
	            }
	            //var propName = this.propName;
	            //ctx.moveTo(xAxis[0],yAxis[0][propName])
	
	            var len = Math.min(yAxis.length, xAxis.length);
	            for (var i = 1; i < len; i++) {
	                //var y = yAxis[i][propName]
	                var x = xAxis[i],
	                    y = yAxis[i];
	                ctx.lineTo(x, y);
	            }
	
	            this.setStyle({ brushType: 'stroke' });
	            this.afterDraw();
	
	            ctx.lineTo(xAxis[len - 1], this.xRange[0]);
	            ctx.lineTo(xAxis[0], this.xRange[1]);
	
	            this.setStyle({ brushType: 'fill' });
	            this.afterDraw();
	        }
	
	        //draw(){
	        //    var ctx = this.ctx;
	        //    var xAxis = this.xAxis;
	        //    var yAxis = this.yAxis;
	        //    if(xAxis.length ===0 || yAxis.length===0){
	        //        throw new Error('xAxis and yAxis should not be empty')
	        //    }
	        //    var propName = this.propName;
	        //    ctx.moveTo(xAxis[0],yAxis[0][propName])
	        //
	        //    var len = Math.min(yAxis.length,xAxis.length)
	        //    for(var i = 1;i<len;i++){
	        //        var y = yAxis[i][propName]
	        //        var x = xAxis[i]
	        //        ctx.lineTo(x,y)
	        //    }
	        //    this.setStyle({
	        //        brushType:'stroke'
	        //    })
	        //    this.afterDraw();
	        //
	        //    ctx.lineTo(xAxis[len-1],600)
	        //    ctx.lineTo(xAxis[0],600)
	        //
	        //    this.setStyle({
	        //        brushType:'fill'
	        //    })
	        //}
	    }]);
	
	    return AreaPainter;
	})(_PainterBaseJs2['default']);
	
	exports['default'] = AreaPainter;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _PainterBaseJs = __webpack_require__(4);
	
	var _PainterBaseJs2 = _interopRequireDefault(_PainterBaseJs);
	
	var LinePainter = (function (_PainterBase) {
	    _inherits(LinePainter, _PainterBase);
	
	    function LinePainter() {
	        var opt = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, LinePainter);
	
	        _get(Object.getPrototypeOf(LinePainter.prototype), 'constructor', this).call(this, opt);
	        //this.propName = opt.propName || 'close'
	    }
	
	    _createClass(LinePainter, [{
	        key: 'draw',
	        value: function draw() {
	            var ctx = this.ctx;
	            var xAxis = this.xAxis;
	            var yAxis = this.yAxis;
	            if (xAxis.length === 0 || yAxis.length === 0) {
	                throw new Error('xAxis and yAxis should not be empty');
	            }
	            //if(typeof yAxis[0] ==='object'){
	            //    var propName = this.propName;
	            //    ctx.moveTo(xAxis[0],yAxis[0][propName])
	            //    var len = Math.min(yAxis.length,xAxis.length)
	            //    for(var i = 1;i<len;i++){
	            //        var y = yAxis[i][propName]
	            //        var x = xAxis[i]
	            //        ctx.lineTo(x,y)
	            //    }
	            //}else{
	            ctx.moveTo(xAxis[0], yAxis[0]);
	            var len = Math.min(yAxis.length, xAxis.length);
	            for (var i = 1; i < len; i++) {
	                var y = yAxis[i];
	                var x = xAxis[i];
	                ctx.lineTo(x, y);
	            }
	            //}
	        }
	    }, {
	        key: 'afterDraw',
	        value: function afterDraw() {
	            var style = this.style;
	            if (style.lineDash) {
	                if (typeof ctx.setLineDash == 'function') {
	                    ctx.setLineDash(style.lineDash);
	                } else {
	                    console.warn('setLineDash not support in your browser');
	                }
	            }
	            _get(Object.getPrototypeOf(LinePainter.prototype), 'afterDraw', this).call(this);
	        }
	    }]);
	
	    return LinePainter;
	})(_PainterBaseJs2['default']);
	
	exports['default'] = LinePainter;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _PainterBaseJs = __webpack_require__(4);
	
	var _PainterBaseJs2 = _interopRequireDefault(_PainterBaseJs);
	
	var _UtilsUtilsJs = __webpack_require__(5);
	
	var _UtilsUtilsJs2 = _interopRequireDefault(_UtilsUtilsJs);
	
	var XGridPainter = (function (_PainterBase) {
	    _inherits(XGridPainter, _PainterBase);
	
	    function XGridPainter() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, XGridPainter);
	
	        _get(Object.getPrototypeOf(XGridPainter.prototype), 'constructor', this).call(this, options);
	        this.yRange = options.yRange;
	        this.xAxis = options.xAxis;
	        this.textArr = options.textArr;
	    }
	
	    _createClass(XGridPainter, [{
	        key: 'setTextArray',
	        value: function setTextArray(textArr) {
	            this.textArr = textArr;
	            return this;
	        }
	    }, {
	        key: 'draw',
	        value: function draw() {
	            var ctx = this.ctx;
	
	            var _yRange = _slicedToArray(this.yRange, 2);
	
	            var yBegin = _yRange[0];
	            var yEnd = _yRange[1];
	
	            var textArr = this.textArr;
	            var lastTickX = -Infinity;
	
	            ctx.save();
	            ctx.fillStyle = this.style.tickLabelColor;
	            for (var i = 0; i < this.xAxis.length; i++) {
	                var x = this.xAxis[i].rangeValue;
	                ctx.moveTo(x, yBegin);
	                ctx.lineTo(x, yEnd);
	                if (textArr) {
	                    var text = textArr[i];
	                    var textWidth = ctx.measureText(text).width;
	                    if (lastTickX < x - textWidth / 2) {
	                        ctx.fillText(text, x - textWidth / 2, yEnd + 15);
	                        lastTickX = x + textWidth / 2;
	                    }
	                }
	            }
	            ctx.restore();
	        }
	    }]);
	
	    return XGridPainter;
	})(_PainterBaseJs2['default']);
	
	exports['default'] = XGridPainter;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _PainterBaseJs = __webpack_require__(4);
	
	var _PainterBaseJs2 = _interopRequireDefault(_PainterBaseJs);
	
	var BarPainter = (function (_PainterBase) {
	    _inherits(BarPainter, _PainterBase);
	
	    function BarPainter() {
	        var opt = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, BarPainter);
	
	        _get(Object.getPrototypeOf(BarPainter.prototype), 'constructor', this).call(this, opt);
	        this.setStyle({
	            brushType: 'fill'
	        });
	    }
	
	    _createClass(BarPainter, [{
	        key: 'draw',
	        value: function draw() {
	            var ctx = this.ctx;
	            var xAxis = this.xAxis;
	            var yAxis = this.yAxis;
	            var width = this.style.itemWidth || 6;
	            var y = this.yRange[1];
	
	            for (var i = 0; i < yAxis.length; i++) {
	                var height = yAxis[i];
	                var x = xAxis[i];
	
	                //ctx.fillRect(x,y-height,width,height)
	                ctx.moveTo(x, y);
	                ctx.lineTo(x, height);
	                ctx.lineTo(x + width, height);
	                ctx.lineTo(x + width, y);
	                ctx.closePath();
	            }
	        }
	    }]);
	
	    return BarPainter;
	})(_PainterBaseJs2['default']);
	
	exports['default'] = BarPainter;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var Constant = {
	    Painter: {
	        LINE: 'line',
	        CANDLE: 'candle',
	        AREA: 'area',
	        X_GRID: 'xGrid',
	        Y_GRID: 'yGrid',
	        BAR: 'bar'
	    },
	    YBridge: {
	        'OHLC': 'ohlc'
	    },
	    XBridge: {
	        'FIXED_COUNT': 'fixedCount',
	        'ITEM_WIDTH': 'itemWidth'
	    },
	    Component: {
	        LINE: 'line',
	        CANDLE: 'candle',
	        AREA: 'area',
	        BAR: 'bar'
	    }
	};
	
	exports['default'] = Constant;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	//import {YDataBridge,YDataBridgeWidthPreClose} from '../DataBridge/YDataBridge.js'
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _DataBridgeYDataBridgeJs = __webpack_require__(16);
	
	var _ConstantConstantJs = __webpack_require__(14);
	
	var _ConstantConstantJs2 = _interopRequireDefault(_ConstantConstantJs);
	
	var _UtilsUtilsJs = __webpack_require__(5);
	
	var _UtilsUtilsJs2 = _interopRequireDefault(_UtilsUtilsJs);
	
	var kvArr = [[_ConstantConstantJs2['default'].YBridge.OHLC, _DataBridgeYDataBridgeJs.YDataBridge]
	//[Constant.YBridge.OHLC_PRECLOSE, YDataBridgeWidthPreClose]
	];
	
	var FactoryMap = _UtilsUtilsJs2['default'].Common.makeKvObj(kvArr);
	
	var YBridgeFactory = function YBridgeFactory(type, options) {
	    return new FactoryMap[type](options);
	};
	
	exports['default'] = YBridgeFactory;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _UtilsUtilsJs = __webpack_require__(5);
	
	//import _m  from '../Utils/OhlcNameMap.js'
	
	var _UtilsUtilsJs2 = _interopRequireDefault(_UtilsUtilsJs);
	
	var _ConstantConstantJs = __webpack_require__(14);
	
	//如果单个数据为对象，必须为{open,close,high,low}
	
	var _ConstantConstantJs2 = _interopRequireDefault(_ConstantConstantJs);
	
	var YDataBridge = (function () {
	    function YDataBridge(options) {
	        _classCallCheck(this, YDataBridge);
	
	        this.axisType = options.axisType || 'default'; //symmetry
	
	        //this.ohlcNameMap = options.ohlcNameMap || ohlcNameMap;
	
	        //this.ohlcNameMapInvert = Utils.Common.invertKv(this.ohlcNameMap);
	        this.data = options.data || []; //原始数据 一般为[{open,high,low,close} ... ]
	        this.range = options.range || [0, 0];
	
	        this.viewDomain = options.viewDomain || [0, this.data.length];
	        this.yAxis = new Array(this.data.length);
	        this.tickCount = options.tickCount;
	        this.niceTick = options.niceTick || false;
	
	        this.linearScale = _UtilsUtilsJs2['default'].Math.LineScale();
	
	        this.isInit = false;
	    }
	
	    //_m(k){
	    //    var ohlcNameMap = this.ohlcNameMap
	    //    if(k in ohlcNameMap){
	    //        return ohlcNameMap[k]
	    //    }
	    //    return k;
	    //}
	    //
	    //_mi(k){
	    //    var ohlcNameMapInvert = this.ohlcNameMapInvert
	    //    if(k in ohlcNameMapInvert){
	    //        return ohlcNameMapInvert[k]
	    //    }
	    //    return k;
	    //}
	
	    _createClass(YDataBridge, [{
	        key: 'cloneWithOptions',
	        value: function cloneWithOptions(extraOptions) {
	            var originOptions = {
	                axisType: this.axisType,
	                //_m : this._m,
	                range: [this.range[0], this.range[1]]
	            };
	            var options = _UtilsUtilsJs2['default'].Common.merge(originOptions, extraOptions, true);
	            return new YDataBridge(options);
	        }
	    }, {
	        key: 'addFirst',
	        value: function addFirst(arr) {
	            _UtilsUtilsJs2['default'].Array.unshift(this.data, arr);
	            return this;
	        }
	    }, {
	        key: 'addLast',
	        value: function addLast(arr) {
	            _UtilsUtilsJs2['default'].Array.push(this.data, arr);
	            return this;
	        }
	    }, {
	        key: '_calcMaxMin',
	        value: function _calcMaxMin() {
	            var _viewDomain = _slicedToArray(this.viewDomain, 2);
	
	            var beginIdx = _viewDomain[0];
	            var endIdx = _viewDomain[1];
	
	            var max = -Infinity,
	                min = Infinity;
	            var data = this.data;
	            if (typeof data[0] === 'object') {
	                for (var i = beginIdx; i < endIdx; i++) {
	                    var dataItem = data[i];
	                    var localMax = dataItem['high'],
	                        localMin = dataItem['low'];
	                    if (localMax > max) {
	                        max = localMax;
	                    }
	                    if (localMin < min) {
	                        min = localMin;
	                    }
	                }
	            } else {
	                for (var i = beginIdx; i < endIdx; i++) {
	                    var dataValue = data[i];
	                    if (dataValue > max) {
	                        max = dataValue;
	                    }
	                    if (dataValue < min) {
	                        min = dataValue;
	                    }
	                }
	            }
	
	            if (this.axisType === 'symmetry') {
	                var absMax = Math.max(Math.abs(min), Math.abs(max));
	                min = -absMax, max = absMax;
	            }
	            this.domain = [min, max];
	            this.linearScale.setDomain(this.domain).setRange(this.range);
	        }
	    }, {
	        key: 'buildAxis',
	        value: function buildAxis() {
	            if (!this.isInit) {
	                this.isInit = true;
	            }
	
	            this._calcMaxMin();
	            var data = this.data;
	
	            //console.log(this.domain)
	            var rangeLen = this.range[1] + this.range[0];
	            var ls = this.linearScale;
	
	            var tranYFn = function tranYFn(y) {
	                if (typeof y === 'object') {
	                    var dataObj = {};
	                    for (var i in y) {
	                        //var _i = this._mi(i);
	                        dataObj[i] = rangeLen - ls.scale(y[i]);
	                    }
	                    return dataObj;
	                } else {
	                    return rangeLen - ls.scale(y);
	                }
	            };
	
	            var _viewDomain2 = _slicedToArray(this.viewDomain, 2);
	
	            var beginIdx = _viewDomain2[0];
	            var endIdx = _viewDomain2[1];
	
	            this.yAxis = data.slice(beginIdx, endIdx).map(function (item) {
	                return tranYFn(item);
	            });
	
	            return this;
	        }
	    }, {
	        key: 'setViewDomain',
	        value: function setViewDomain(viewDomain, forceCalculate) {
	            if (forceCalculate === undefined) {
	                forceCalculate = true;
	            }
	            this.viewDomain = viewDomain;
	            if (forceCalculate) {
	                this.buildAxis();
	            }
	            return this;
	        }
	    }, {
	        key: 'getTicks',
	        value: function getTicks() {
	            //var lineScale =  Utils.Math.LineScale(this.domain)
	            var ticks = this.linearScale.ticks(this.tickCount, this.niceTick);
	            var rangeLen = this.range[1] + this.range[0];
	
	            var newTicks = [];
	            for (var i = 0; i < ticks.length; i++) {
	                var domain = ticks[i];
	                var rangeValue = rangeLen - this.linearScale.scale(domain);
	                if (rangeValue > this.range[1] || rangeValue < this.range[0]) {
	                    continue;
	                }
	                newTicks.push({
	                    //rangeValue:i,
	                    //domainValue:this.linearScale.invert(i)
	                    domainValue: domain,
	                    rangeValue: rangeValue
	                });
	            }
	            return newTicks;
	        }
	    }, {
	        key: 'getViewData',
	        value: function getViewData() {
	            var _viewDomain3 = _slicedToArray(this.viewDomain, 2);
	
	            var beginIdx = _viewDomain3[0];
	            var endIdx = _viewDomain3[1];
	
	            return this.data.slice(beginIdx, endIdx);
	        }
	    }, {
	        key: 'getData',
	        value: function getData() {
	            //if(origin){
	            //    return this.data;
	            //}else{
	            //    var [beginIdx,endIdx] = this.viewDomain;
	            //    return this.data.slice(beginIdx,endIdx)
	            //}
	            return this.data;
	        }
	    }, {
	        key: 'getDataByIndex',
	        value: function getDataByIndex(index) {
	            return this.data[index];
	        }
	    }, {
	        key: 'getYAxis',
	        value: function getYAxis() {
	            if (!this.isInit) {
	                this.buildAxis();
	            }
	            return this.yAxis;
	        }
	    }, {
	        key: 'getViewDomain',
	        value: function getViewDomain() {
	            return this.viewDomain;
	        }
	    }, {
	        key: 'getDomain',
	        value: function getDomain() {
	            return this.domain;
	        }
	    }, {
	        key: 'getRange',
	        value: function getRange() {
	            return this.range;
	        }
	    }]);
	
	    return YDataBridge;
	})();

	exports.YDataBridge = YDataBridge;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _DataBridgeXDataBridgeJs = __webpack_require__(18);
	
	var _ConstantConstantJs = __webpack_require__(14);
	
	var _ConstantConstantJs2 = _interopRequireDefault(_ConstantConstantJs);
	
	var _UtilsUtilsJs = __webpack_require__(5);
	
	var _UtilsUtilsJs2 = _interopRequireDefault(_UtilsUtilsJs);
	
	var kvArr = [[_ConstantConstantJs2['default'].XBridge.FIXED_COUNT, _DataBridgeXDataBridgeJs.XDataBridgeWithFixedCount], [_ConstantConstantJs2['default'].XBridge.ITEM_WIDTH, _DataBridgeXDataBridgeJs.XDataBridgeWithItemWidth]];
	
	var FactoryMap = _UtilsUtilsJs2['default'].Common.makeKvObj(kvArr);
	
	var XBridgeFactory = function XBridgeFactory(type, options) {
	    return new FactoryMap[type](options);
	};
	
	exports['default'] = XBridgeFactory;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _UtilsUtilsJs = __webpack_require__(5);
	
	var _UtilsUtilsJs2 = _interopRequireDefault(_UtilsUtilsJs);
	
	var XDataBridgeBase = (function () {
	    function XDataBridgeBase(options) {
	        _classCallCheck(this, XDataBridgeBase);
	
	        this.data = options.data || [];
	
	        this.beginDate = options.beginDate;
	        this.endDate = options.endDate;
	        this.range = options.range || [0, 0];
	        this.gap = options.gap || 0;
	        this.direction = options.direction || 'end';
	        this.xAxis = new Array(this.data.length);
	        this.scaleRange = options.scaleRange || [0.01, 5];
	        this.scale = 1;
	        this.isInit = false;
	
	        this.tickCount = options.tickCount || 10;
	        //this.niceTick = options.niceTick || false;
	    }
	
	    _createClass(XDataBridgeBase, [{
	        key: 'getItemWidth',
	        value: function getItemWidth() {
	            return this.itemWidth;
	        }
	    }, {
	        key: 'initItemWidth',
	        value: function initItemWidth() {
	            throw new Error('subClass of XDataBridge should implement initItemWidth');
	        }
	    }, {
	        key: 'addLast',
	        value: function addLast(arr) {
	            if (!_UtilsUtilsJs2['default'].Type.isArray(arr)) {
	                arr = [arr];
	            }
	
	            var space = this.itemWidth + this.gap;
	            var maxX = this.xAxis[this.xAxis.length - 1];
	            for (var i = 0; i < arr.length; i++) {
	                this.data.push(arr[i]);
	                this.xAxis.push(maxX + space * (i + 1));
	            }
	            return this;
	        }
	    }, {
	        key: 'addFirst',
	        value: function addFirst(arr) {
	            if (!_UtilsUtilsJs2['default'].Type.isArray(arr)) {
	                arr = [arr];
	            }
	
	            var space = this.itemWidth + this.gap;
	            var minX = this.xAxis[0];
	            for (var i = 0; i < arr.length; i++) {
	                this.data.unshift(arr[i]);
	                this.xAxis.unshift(minX - space * (i + 1));
	            }
	            return this;
	        }
	
	        //value 指canvas上的x坐标，range中一个值
	    }, {
	        key: 'getIndexByValue',
	        value: function getIndexByValue(value) {
	            var axisData = this.xAxis;
	            if (axisData.length == 0) {
	                throw new Error('调用getIndexByValue时，xAxis不能为空');
	            }
	            var space = this.itemWidth + this.gap;
	            return _UtilsUtilsJs2['default'].Algorithms.binarySearch(axisData, value, function (value, curElem) {
	                if (curElem >= value - space && curElem <= value) {
	                    return 0;
	                } else if (curElem + space < value) {
	                    return -1;
	                } else {
	                    return 1;
	                }
	            });
	        }
	    }, {
	        key: 'getXAxis',
	        value: function getXAxis() {
	            if (!this.isInit) {
	                this.buildAxis();
	            }
	
	            var _viewDomain = _slicedToArray(this.viewDomain, 2);
	
	            var beginIdx = _viewDomain[0];
	            var endIdx = _viewDomain[1];
	
	            return this.xAxis.slice(beginIdx, endIdx);
	        }
	    }, {
	        key: 'getDataByIndex',
	        value: function getDataByIndex(index) {
	            return this.data[index];
	        }
	    }, {
	        key: 'buildAxis',
	        value: function buildAxis() {
	            this.initItemWidth();
	
	            this._originItemWidth = this.itemWidth;
	            var range = this.range;
	            var begin = range[0],
	                offset = 0,
	                space = this.itemWidth + this.gap;
	            var data = this.data;
	
	            if (!this.isInit) {
	                this.isInit = true;
	                if (this.displayCount < data.length && this.direction == 'end') {
	                    offset = (data.length - this.displayCount) * space;
	                }
	            }
	
	            var realOffset = begin - offset;
	
	            this._updateXAxis(function (item, idx) {
	                return space * idx + realOffset;
	            });
	
	            //this.linearScale = Utils.Math.LineScale(this.range,this.range)
	
	            return this;
	        }
	    }, {
	        key: 'getTicks',
	        value: function getTicks() {
	            //let [beginIdx,endIdx] = this.viewDomain
	            var halfSpace = (this.itemWidth + this.gap) / 2;
	            var beginIdx = 0,
	                endIdx = this.data.length - 1;
	            var data = this.data;
	            var beginDate = this.beginDate || data[beginIdx],
	                endDate = this.endDate || data[endIdx - 1];
	
	            var xAxis = this.xAxis;
	
	            var timeScale = _UtilsUtilsJs2['default'].Math.TimeScale([beginDate, endDate], [xAxis[0], xAxis[xAxis.length - 1]]);
	
	            var scale = this.scale > 1 ? this.scale : 1;
	            var ticks = timeScale.ticks(Math.round(this.tickCount * scale));
	
	            var newTicks = [];
	            //console.log(ticks)
	            for (var i = 0; i < ticks.length; i++) {
	                var tick = ticks[i];
	                var index = _UtilsUtilsJs2['default'].Algorithms.binarySearch(this.data, tick);
	
	                if (index == -1) continue;
	                newTicks.push({
	                    domainValue: this.data[index],
	                    rangeValue: this.xAxis[index] + halfSpace,
	                    index: index
	                });
	            }
	            //console.log(newTicks)
	            return newTicks;
	        }
	    }, {
	        key: '_updateXAxis',
	        value: function _updateXAxis(fn) {
	            var xAxis = this.xAxis;
	
	            var _range = _slicedToArray(this.range, 2);
	
	            var bRange = _range[0];
	            var eRange = _range[1];
	
	            var space = this.itemWidth + this.gap;
	            var beginIdx = undefined,
	                endIdx = undefined;
	            for (var i = 0; i < xAxis.length; i++) {
	                xAxis[i] = fn(xAxis[i], i);
	                if (beginIdx === undefined && xAxis[i] + space >= bRange) {
	                    beginIdx = i;
	                }
	                if (endIdx === undefined && xAxis[i] >= eRange) {
	                    endIdx = i;
	                }
	            }
	            //beginIdx = beginIdx === undefined?0:beginIdx
	            endIdx = endIdx === undefined ? xAxis.length : endIdx;
	            this.viewDomain = [beginIdx, endIdx];
	        }
	    }, {
	        key: 'getData',
	        value: function getData() {
	            return this.data;
	        }
	    }, {
	        key: 'getViewData',
	        value: function getViewData() {
	            var _viewDomain2 = _slicedToArray(this.viewDomain, 2);
	
	            var beginIdx = _viewDomain2[0];
	            var endIdx = _viewDomain2[1];
	
	            return this.data.slice(beginIdx, endIdx);
	        }
	    }, {
	        key: 'getViewDomain',
	        value: function getViewDomain() {
	            return this.viewDomain;
	        }
	    }, {
	        key: 'getRange',
	        value: function getRange() {
	            return this.range;
	        }
	    }, {
	        key: 'setScale',
	        value: function setScale(factor, val) {
	
	            var scale = this.scale * factor;
	            if (scale > this.scaleRange[1] || scale < this.scaleRange[0]) {
	                return this;
	            }
	            this.scale = scale;
	
	            var axisData = this.xAxis;
	            var len = axisData.length;
	
	            var maxX = axisData[len - 1],
	                minX = axisData[0];
	
	            var oItemWidth = this.itemWidth;
	
	            var index = -1;
	            if (val >= maxX) {
	                index = Math.round(val - maxX) / oItemWidth;
	            } else if (val <= minX) {
	                index = Math.round(val - minX) / oItemWidth;
	            } else {
	                index = this.getIndexByValue(val);
	            }
	
	            this.itemWidth = this._originItemWidth * this.scale;
	            var itemWidth = this.itemWidth;
	
	            var spaceDiff = itemWidth - oItemWidth;
	
	            this._updateXAxis(function (item, idx) {
	                return item + spaceDiff * (idx - index);
	            });
	
	            return this;
	        }
	    }, {
	        key: 'setTranslation',
	        value: function setTranslation(x) {
	
	            this._updateXAxis(function (item, idx) {
	                return item + x;
	            });
	            return this;
	        }
	    }]);
	
	    return XDataBridgeBase;
	})();
	
	var XDataBridgeWithItemWidth = (function (_XDataBridgeBase) {
	    _inherits(XDataBridgeWithItemWidth, _XDataBridgeBase);
	
	    function XDataBridgeWithItemWidth(options) {
	        _classCallCheck(this, XDataBridgeWithItemWidth);
	
	        _get(Object.getPrototypeOf(XDataBridgeWithItemWidth.prototype), 'constructor', this).call(this, options);
	        if (!('itemWidth' in options)) {
	            throw new Error('need itemWidth');
	        }
	        this.itemWidth = options.itemWidth;
	    }
	
	    _createClass(XDataBridgeWithItemWidth, [{
	        key: 'initItemWidth',
	        value: function initItemWidth() {
	            var gap = this.gap;
	            var range = this.range;
	            var itemWidth = this.itemWidth;
	            if (range[0] >= range[1]) {
	                throw new Error('区间(Range)开始数值，应小于结束数值');
	            }
	            var len = range[1] - range[0];
	            var divObj = _UtilsUtilsJs2['default'].Math.integerDivide(len + gap, itemWidth + gap);
	            var count = divObj.div; //能够显示的数据个数
	            this.displayCount = count;
	            var rem = divObj.rem;
	            itemWidth += rem / count;
	            this.itemWidth = itemWidth;
	        }
	    }]);
	
	    return XDataBridgeWithItemWidth;
	})(XDataBridgeBase);
	
	exports.XDataBridgeWithItemWidth = XDataBridgeWithItemWidth;
	
	var XDataBridgeWithFixedCount = (function (_XDataBridgeBase2) {
	    _inherits(XDataBridgeWithFixedCount, _XDataBridgeBase2);
	
	    function XDataBridgeWithFixedCount(options) {
	        _classCallCheck(this, XDataBridgeWithFixedCount);
	
	        options.direction = options.direction || 'normal';
	        _get(Object.getPrototypeOf(XDataBridgeWithFixedCount.prototype), 'constructor', this).call(this, options);
	        if (!('fixedCount' in options)) {
	            throw new Error('need fixedCount');
	        }
	        this.fixedCount = options.fixedCount;
	    }
	
	    _createClass(XDataBridgeWithFixedCount, [{
	        key: 'initItemWidth',
	        value: function initItemWidth() {
	            var gap = this.gap;
	            var range = this.range;
	            var totalWidth = range[1] - range[0];
	            var space = totalWidth / this.fixedCount;
	
	            if (space < gap) {
	                throw new Error('gap too big，itemWidth will be zero or negative');
	            }
	
	            this.itemWidth = space - gap;
	        }
	    }]);
	
	    return XDataBridgeWithFixedCount;
	})(XDataBridgeBase);
	
	exports.XDataBridgeWithFixedCount = XDataBridgeWithFixedCount;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _ConstantConstantJs = __webpack_require__(14);
	
	var _ConstantConstantJs2 = _interopRequireDefault(_ConstantConstantJs);
	
	var _UtilsUtilsJs = __webpack_require__(5);
	
	var _UtilsUtilsJs2 = _interopRequireDefault(_UtilsUtilsJs);
	
	var _CandleComponentJs = __webpack_require__(23);
	
	var _CandleComponentJs2 = _interopRequireDefault(_CandleComponentJs);
	
	var _LineDrawComponentJs = __webpack_require__(20);
	
	var _LineDrawComponentJs2 = _interopRequireDefault(_LineDrawComponentJs);
	
	var _AreaComponentJs = __webpack_require__(24);
	
	var _AreaComponentJs2 = _interopRequireDefault(_AreaComponentJs);
	
	var _BarDrawComponentJs = __webpack_require__(25);
	
	var _BarDrawComponentJs2 = _interopRequireDefault(_BarDrawComponentJs);
	
	var kvArr = [[_ConstantConstantJs2['default'].Component.CANDLE, _CandleComponentJs2['default']], [_ConstantConstantJs2['default'].Component.LINE, _LineDrawComponentJs2['default']], [_ConstantConstantJs2['default'].Component.BAR, _BarDrawComponentJs2['default']]];
	
	var FactoryMap = _UtilsUtilsJs2['default'].Common.makeKvObj(kvArr);
	
	var ComponentFactory = function ComponentFactory(type, options) {
	    return new FactoryMap[type](options);
	};
	
	exports['default'] = ComponentFactory;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _BaseDrawComponentJs = __webpack_require__(21);
	
	var _BaseDrawComponentJs2 = _interopRequireDefault(_BaseDrawComponentJs);
	
	var _ConstantConstantJs = __webpack_require__(14);
	
	var _ConstantConstantJs2 = _interopRequireDefault(_ConstantConstantJs);
	
	var _PainterPainterFactoryJs = __webpack_require__(2);
	
	//TODO defaultStyle
	
	var _PainterPainterFactoryJs2 = _interopRequireDefault(_PainterPainterFactoryJs);
	
	var LineDrawComponent = (function (_BaseDrawComponent) {
	    _inherits(LineDrawComponent, _BaseDrawComponent);
	
	    function LineDrawComponent() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, LineDrawComponent);
	
	        _get(Object.getPrototypeOf(LineDrawComponent.prototype), 'constructor', this).call(this, options);
	        this.pickedProp = options.pickedProp || 'close';
	        this.linePainter = (0, _PainterPainterFactoryJs2['default'])(_ConstantConstantJs2['default'].Painter.LINE);
	        //this.painters.push(this.linePainter)
	        this.style = options.style;
	    }
	
	    _createClass(LineDrawComponent, [{
	        key: 'draw',
	        value: function draw() {
	            var _this = this;
	
	            var yAxis = this.yBridge.getYAxis(),
	                xAxis = this.xBridge.getXAxis();
	
	            var y0 = yAxis[0];
	            if (typeof y0 == 'object') {
	                yAxis = yAxis.map(function (item) {
	                    return item[_this.pickedProp];
	                });
	            }
	
	            this.linePainter.setCtx(this.ctx).setXAxis(xAxis).setYAxis(yAxis).setStyle(this.style).render();
	        }
	    }]);
	
	    return LineDrawComponent;
	})(_BaseDrawComponentJs2['default']);
	
	exports['default'] = LineDrawComponent;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _PainterPainterFactoryJs = __webpack_require__(2);
	
	var _PainterPainterFactoryJs2 = _interopRequireDefault(_PainterPainterFactoryJs);
	
	var _ConstantConstantJs = __webpack_require__(14);
	
	var _ConstantConstantJs2 = _interopRequireDefault(_ConstantConstantJs);
	
	var _UtilsUtilsJs = __webpack_require__(5);
	
	var _UtilsUtilsJs2 = _interopRequireDefault(_UtilsUtilsJs);
	
	var _DefaultStyleDefaultStyleJs = __webpack_require__(22);
	
	var _DefaultStyleDefaultStyleJs2 = _interopRequireDefault(_DefaultStyleDefaultStyleJs);
	
	var textFormatFn = function textFormatFn(t) {
	    return '';
	};
	
	var BaseDrawComponent = (function () {
	    function BaseDrawComponent(options) {
	        _classCallCheck(this, BaseDrawComponent);
	
	        //this.ctx = options.ctx;
	        //this.type = 'base'
	        this.chart = options.chart;
	        this.defaultStyle = this.chart.defaultStyle;
	
	        this.xBridge = options.xBridge;
	        this.yBridge = options.yBridge;
	
	        this.xGridOn = options.xGridOn || false;
	        this.yGridOn = options.yGridOn || false;
	
	        this.setXGridOn(this.xGridOn);
	        this.setYGridOn(this.yGridOn);
	
	        this.xTextFormat = options.xTextFormat || textFormatFn;
	        //this.yTextFormat = options.yTextFormat || textFormatFn
	        //this.painterInited = false;
	
	        this.gridColor = options.gridColor || _DefaultStyleDefaultStyleJs2['default'].gridColor;
	        this.gridWidth = options.gridWidth || 1;
	        this.tickLabelColor = options.tickLabelColor || _DefaultStyleDefaultStyleJs2['default'].tickLabelColor;
	        this.labels = options.labels || [];
	        this.style = options.style || {};
	    }
	
	    //setCtx(ctx){
	    //    this.ctx = ctx;
	    //    return this;
	    //}
	
	    _createClass(BaseDrawComponent, [{
	        key: 'setYBridge',
	        value: function setYBridge(yBridge) {
	            this.yBridge = yBridge;
	            return this;
	        }
	    }, {
	        key: 'setXBridge',
	        value: function setXBridge(xBridge) {
	            this.xBridge = xBridge;
	            return this;
	        }
	    }, {
	        key: 'setXGridOn',
	        value: function setXGridOn(xGridOn) {
	            this.xGridOn = xGridOn;
	            if (this.xGridOn && !this.xGridPainter) {
	                this.xGridPainter = (0, _PainterPainterFactoryJs2['default'])(_ConstantConstantJs2['default'].Painter.X_GRID);
	            }
	            return this;
	        }
	    }, {
	        key: 'setYGridOn',
	        value: function setYGridOn(yGridOn) {
	            this.yGridOn = yGridOn;
	            if (this.yGridOn && !this.yGridPainter) {
	                this.yGridPainter = (0, _PainterPainterFactoryJs2['default'])(_ConstantConstantJs2['default'].Painter.Y_GRID);
	            }
	            return this;
	        }
	
	        //yBridge 设置可视区，非常重要！！！
	    }, {
	        key: 'beforeDraw',
	        value: function beforeDraw() {
	            this.yBridge.setViewDomain(this.xBridge.getViewDomain());
	            this.ctx = this.chart.ctx;
	        }
	    }, {
	        key: 'afterDraw',
	        value: function afterDraw() {
	            this.drawGrid();
	        }
	    }, {
	        key: 'draw',
	        value: function draw() {
	            console.error('subClass of BaseDrawComponent should implements draw method :' + this.constructor.toString());
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.beforeDraw();
	            this.draw();
	            this.afterDraw();
	        }
	    }, {
	        key: 'drawGrid',
	        value: function drawGrid() {
	            var _this = this;
	
	            //TODO check xGridOn and yGridOn
	
	            var xTicks = this.xBridge.getTicks();
	            var yTicks = this.yBridge.getTicks();
	            var yRange = this.yBridge.getRange();
	            var xRange = this.xBridge.getRange();
	
	            if (this.yGridOn) {
	                this.yGridPainter.setCtx(this.ctx).setYAxis(yTicks).setXRange(xRange).setYRange(yRange).setStyle({
	                    strokeStyle: this.gridColor,
	                    lineWidth: this.gridWidth,
	                    tickLabelColor: this.tickLabelColor
	                })
	                //.setTextArray(yTicks.map(i=>this.yTextFormat(i.domainValue)))//format fns
	                .setLabels(this.labels).render();
	            }
	
	            if (this.xGridOn) {
	                this.xGridPainter.setCtx(this.ctx).setXAxis(xTicks).setXRange(xRange).setYRange(yRange).setStyle({
	                    strokeStyle: this.gridColor,
	                    lineWidth: this.gridWidth,
	                    tickLabelColor: this.tickLabelColor
	                }).setTextArray(xTicks.map(function (i) {
	                    return _this.xTextFormat(i.domainValue);
	                })).render();
	            }
	        }
	    }, {
	        key: 'getYBridge',
	        value: function getYBridge() {
	            return this.yBridge;
	        }
	    }, {
	        key: 'setStyle',
	        value: function setStyle(style) {
	            this.style = style;
	            return this;
	        }
	
	        //setViewDomain(viewDomain) {
	        //    this.yBridge.setViewDomain(viewDomain);
	        //    return this;
	        //}
	
	    }]);
	
	    return BaseDrawComponent;
	})();
	
	exports['default'] = BaseDrawComponent;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var Style = {
	    canvasColor: '#FFFFFF',
	    Candle: {
	        up: {
	            fillStyle: '#f85c5c',
	            brushType: 'both',
	            strokeStyle: "#f85c5c"
	        },
	        down: {
	            strokeStyle: '#50c88c',
	            brushType: 'stroke'
	        }
	    },
	    upColor: '#f85c5c',
	    downColor: '#50c88c',
	    lineColor: '#666',
	    gridColor: '#666',
	    tickLabelColor: '#a9a9a9',
	    crossColor: '#999999',
	    tipColor: '#f1f1f1'
	};
	
	exports['default'] = Style;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _PainterPainterFactoryJs = __webpack_require__(2);
	
	var _PainterPainterFactoryJs2 = _interopRequireDefault(_PainterPainterFactoryJs);
	
	var _ConstantConstantJs = __webpack_require__(14);
	
	var _ConstantConstantJs2 = _interopRequireDefault(_ConstantConstantJs);
	
	var _UtilsUtilsJs = __webpack_require__(5);
	
	var _UtilsUtilsJs2 = _interopRequireDefault(_UtilsUtilsJs);
	
	var _BaseDrawComponentJs = __webpack_require__(21);
	
	//TODO DefaultStyle
	
	var _BaseDrawComponentJs2 = _interopRequireDefault(_BaseDrawComponentJs);
	
	var CandleComponent = (function (_BaseDrawComponent) {
	    _inherits(CandleComponent, _BaseDrawComponent);
	
	    function CandleComponent() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, CandleComponent);
	
	        _get(Object.getPrototypeOf(CandleComponent.prototype), 'constructor', this).call(this, options);
	        //this.itemWidth
	        this.upCandlePainter = (0, _PainterPainterFactoryJs2['default'])(_ConstantConstantJs2['default'].Painter.CANDLE);
	        this.downCandlePaiter = (0, _PainterPainterFactoryJs2['default'])(_ConstantConstantJs2['default'].Painter.CANDLE);
	    }
	
	    _createClass(CandleComponent, [{
	        key: 'draw',
	        value: function draw() {
	            var yAxis = this.yBridge.getYAxis(),
	                xAxis = this.xBridge.getXAxis(),
	                yRange = this.yBridge.getRange(),
	                xRange = this.xBridge.getRange();
	
	            var viewData = this.yBridge.getViewData();
	
	            var itemWidth = this.xBridge.getItemWidth();
	
	            var upY = [],
	                downY = [],
	                upX = [],
	                downX = [];
	
	            for (var i = 0; i < viewData.length; i++) {
	                var yItem = viewData[i];
	                if (yItem.close < yItem.open) {
	                    downY.push(yAxis[i]);
	                    downX.push(xAxis[i]);
	                } else {
	                    upY.push(yAxis[i]);
	                    upX.push(xAxis[i]);
	                }
	            }
	
	            this.upCandlePainter.setCtx(this.ctx).setXAxis(upX).setYAxis(upY).setXRange(xRange).setYRange(yRange).setStyle(this.defaultStyle.Candle.up).setStyle({ itemWidth: itemWidth }).render();
	
	            this.downCandlePaiter.setCtx(this.ctx).setXAxis(downX).setYAxis(downY).setXRange(xRange).setYRange(yRange).setStyle(this.defaultStyle.Candle.down).setStyle({ itemWidth: itemWidth }).render();
	        }
	    }]);
	
	    return CandleComponent;
	})(_BaseDrawComponentJs2['default']);
	
	exports['default'] = CandleComponent;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _BaseDrawComponentJs = __webpack_require__(21);
	
	var _BaseDrawComponentJs2 = _interopRequireDefault(_BaseDrawComponentJs);
	
	var _ConstantConstantJs = __webpack_require__(14);
	
	var _ConstantConstantJs2 = _interopRequireDefault(_ConstantConstantJs);
	
	var _PainterPainterFactoryJs = __webpack_require__(2);
	
	var _PainterPainterFactoryJs2 = _interopRequireDefault(_PainterPainterFactoryJs);
	
	function defaultSplitFn(item) {
	    if (item.close < item.open) return 'down';else return 'up';
	}
	
	var BarDrawComponent = (function (_BaseDrawComponent) {
	    _inherits(BarDrawComponent, _BaseDrawComponent);
	
	    function BarDrawComponent() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, BarDrawComponent);
	
	        _get(Object.getPrototypeOf(BarDrawComponent.prototype), 'constructor', this).call(this, options);
	        this.upBarPainter = (0, _PainterPainterFactoryJs2['default'])(_ConstantConstantJs2['default'].Painter.BAR);
	        this.downBarPainter = (0, _PainterPainterFactoryJs2['default'])(_ConstantConstantJs2['default'].Painter.BAR);
	        this.style = options.style;
	        this.candleData = options.candleData || [];
	        this.upDownSplitFn = options.upDownSplitFn || defaultSplitFn;
	    }
	
	    _createClass(BarDrawComponent, [{
	        key: 'draw',
	        value: function draw() {
	            var yAxis = this.yBridge.getYAxis(),
	                xAxis = this.xBridge.getXAxis();
	
	            var itemWidth = this.xBridge.getItemWidth();
	            var yRange = this.yBridge.getRange();
	            var xRange = this.xBridge.getRange();
	
	            var viewDomain = this.xBridge.getViewDomain();
	
	            var candleData = this.candleData.slice(viewDomain[0], viewDomain[1]);
	
	            var upY = [],
	                downY = [],
	                upX = [],
	                downX = [];
	
	            for (var i = 0; i < candleData.length; i++) {
	                var yItem = candleData[i];
	                if (this.upDownSplitFn(yItem) === 'down') {
	                    downY.push(yAxis[i]);
	                    downX.push(xAxis[i]);
	                } else {
	                    upY.push(yAxis[i]);
	                    upX.push(xAxis[i]);
	                }
	            }
	
	            this.upBarPainter.setCtx(this.ctx).setYRange(yRange).setXRange(xRange).setXAxis(upX).setYAxis(upY).setStyle({
	                color: this.defaultStyle.upColor,
	                itemWidth: itemWidth
	            }).setStyle(this.style).render();
	
	            this.downBarPainter.setCtx(this.ctx).setYRange(yRange).setXRange(xRange).setXAxis(downX).setYAxis(downY).setStyle({
	                color: this.defaultStyle.downColor,
	                itemWidth: itemWidth
	            }).setStyle(this.style).render();
	        }
	    }]);
	
	    return BarDrawComponent;
	})(_BaseDrawComponentJs2['default']);
	
	exports['default'] = BarDrawComponent;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=FCharts.js.map