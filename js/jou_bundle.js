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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/jou.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/jou.js":
/*!********************!*\
  !*** ./src/jou.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//輪播圖\nvar jsImg = new Array(\"images/1.jpg\", \"images/2.jpg\", \"images/3.jpg\");\nvar jsImg_len = jsImg.length;\nvar i = 0;\nsetInterval(\"sequentialImg()\", 3000);\n\nfunction sequentialImg() {\n  document.querySelector(\".slides\").innerHTML = \"<img src='\" + jsImg[i] + \"' width=400 height=320>\";\n  i++;\n  if (i >= jsImg_len) i = 0;\n} //輪播固定\n\n\nwindow.addEventListener(\"load\", slidesFix);\n\nfunction slidesFix() {\n  var slides = document.querySelector(\".slides\"),\n      slidesPosition = slides.offsetTop;\n\n  function scrollHandler3() {\n    console.log(slidesPosition);\n\n    if (window.scrollY + header.offsetHeight >= slidesPosition) {\n      slides.classList.add(\"fix-right\");\n      slides.style.top = header.offsetHeight + \"px\";\n      document.querySelector(\"#SlidesReplace\").classList.add(\"col-3\");\n    } else {\n      slides.classList.remove(\"fix-right\");\n      document.querySelector(\"#SlidesReplace\").classList.remove(\"col-3\");\n      slides.style.top = 0 + \"px\";\n    }\n  }\n\n  window.addEventListener(\"scroll\", scrollHandler3);\n} // 搜尋固定  \n\n\nwindow.addEventListener(\"load\", searchFix);\n\nfunction searchFix() {\n  var search = document.querySelector(\"#search\"),\n      searchPosition = search.offsetTop;\n\n  function scrollHandler2() {\n    if (window.scrollY + header.offsetHeight >= searchPosition) {\n      search.classList.add(\"fix\");\n      search.style.top = header.offsetHeight + \"px\";\n      document.querySelector(\"#replace\").classList.add(\"col-3\");\n    } else {\n      search.classList.remove(\"fix\");\n      document.querySelector(\"#replace\").classList.remove(\"col-3\");\n      search.style.top = 0 + \"px\";\n    }\n  }\n\n  window.addEventListener(\"scroll\", scrollHandler2);\n} // Little Canvas things\n\n\nvar canvas = document.querySelector(\"#canvas\"),\n    ctx = canvas.getContext('2d');\nvar header = document.querySelector(\".header\");\nvar footer = document.querySelector(\".footer\"); // console.log(header.offsetHeight);\n// console.log(footer.offsetHeight);\n// Set Canvas to be window size\n\ncanvas.width = window.innerWidth; // canvas.height =window.innerHeight;\n\ncanvas.height = (window.innerHeight - header.offsetHeight - footer.offsetHeight) / 2; //煙火高度為，扣除頭尾Navbar之高度後，剩下空間的一半\n\nvar space = document.querySelector(\"#space\");\nspace.style.height = canvas.height + \"px\"; // console.log(space.style.height);\n// canvas.offsetTop=header.offsetHeight;\n// console.log(canvas.offsetTop);\n// Configuration, Play with these\n\nvar config = {\n  particleNumber: 800,\n  maxParticleSize: 10,\n  maxSpeed: 40,\n  colorVariation: 50\n}; // Colors\n\nvar colorPalette = {\n  bg: {\n    r: 12,\n    g: 9,\n    b: 29\n  },\n  matter: [{\n    r: 36,\n    g: 18,\n    b: 42\n  }, // darkPRPL\n  {\n    r: 78,\n    g: 36,\n    b: 42\n  }, // rockDust\n  {\n    r: 252,\n    g: 178,\n    b: 96\n  }, // solorFlare\n  {\n    r: 253,\n    g: 238,\n    b: 152\n  } // totesASun\n  ]\n}; // Some Variables hanging out\n\nvar particles = [],\n    centerX = canvas.width / 2,\n    centerY = canvas.height / 2,\n    drawBg,\n    // Draws the background for the canvas, because space\ndrawBg = function drawBg(ctx, color) {\n  ctx.fillStyle = \"rgb(\" + color.r + \",\" + color.g + \",\" + color.b + \")\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n}; // Particle Constructor\n\n\nvar Particle = function Particle(x, y) {\n  // X Coordinate\n  this.x = x || Math.round(Math.random() * canvas.width); // Y Coordinate\n\n  this.y = y || Math.round(Math.random() * canvas.height); // Radius of the space dust\n\n  this.r = Math.ceil(Math.random() * config.maxParticleSize); // Color of the rock, given some randomness\n\n  this.c = colorVariation(colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)], true); // Speed of which the rock travels\n\n  this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), .7); // Direction the Rock flies\n\n  this.d = Math.round(Math.random() * 360);\n}; // Provides some nice color variation\n// Accepts an rgba object\n// returns a modified rgba object or a rgba string if true is passed in for argument 2\n\n\nvar colorVariation = function colorVariation(color, returnString) {\n  var r, g, b, a, variation;\n  r = Math.round(Math.random() * config.colorVariation - config.colorVariation / 2 + color.r);\n  g = Math.round(Math.random() * config.colorVariation - config.colorVariation / 2 + color.g);\n  b = Math.round(Math.random() * config.colorVariation - config.colorVariation / 2 + color.b);\n  a = Math.random() + .5;\n\n  if (returnString) {\n    return \"rgba(\" + r + \",\" + g + \",\" + b + \",\" + a + \")\";\n  } else {\n    return {\n      r: r,\n      g: g,\n      b: b,\n      a: a\n    };\n  }\n}; // Used to find the rocks next point in space, accounting for speed and direction\n\n\nvar updateParticleModel = function updateParticleModel(p) {\n  var a = 180 - (p.d + 90); // find the 3rd angle\n\n  p.d > 0 && p.d < 180 ? p.x += p.s * Math.sin(p.d) / Math.sin(p.s) : p.x -= p.s * Math.sin(p.d) / Math.sin(p.s);\n  p.d > 90 && p.d < 270 ? p.y += p.s * Math.sin(a) / Math.sin(p.s) : p.y -= p.s * Math.sin(a) / Math.sin(p.s);\n  return p;\n}; // Just the function that physically draws the particles\n// Physically? sure why not, physically.\n\n\nvar drawParticle = function drawParticle(x, y, r, c) {\n  ctx.beginPath();\n  ctx.fillStyle = c;\n  ctx.arc(x, y, r, 0, 2 * Math.PI, false);\n  ctx.fill();\n  ctx.closePath();\n}; // Remove particles that aren't on the canvas\n\n\nvar cleanUpArray = function cleanUpArray() {\n  particles = particles.filter(function (p) {\n    return p.x > -100 && p.y > -100;\n  });\n};\n\nvar initParticles = function initParticles(numParticles, x, y) {\n  for (var _i = 0; _i < numParticles; _i++) {\n    particles.push(new Particle(x, y));\n  }\n\n  particles.forEach(function (p) {\n    drawParticle(p.x, p.y, p.r, p.c);\n  });\n}; // That thing\n\n\nwindow.requestAnimFrame = function () {\n  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {\n    window.setTimeout(callback, 1000 / 60);\n  };\n}(); // Our Frame function\n\n\nvar frame = function frame() {\n  // Draw background first\n  drawBg(ctx, colorPalette.bg); // Update Particle models to new position\n\n  particles.map(function (p) {\n    return updateParticleModel(p);\n  }); // Draw em'\n\n  particles.forEach(function (p) {\n    drawParticle(p.x, p.y, p.r, p.c);\n  }); // Play the same song? Ok!\n\n  window.requestAnimFrame(frame);\n};\n\ndocument.body.addEventListener(\"click\", function (event) {\n  if (event.clientY <= canvas.height + 130 && event.clientX >= 400 && event.clientX <= 1150) {\n    var x = event.clientX,\n        y = event.clientY;\n    cleanUpArray();\n    initParticles(config.particleNumber, x, y);\n  } else {\n    return;\n  }\n}); // First Frame\n\nframe(); // First particle explosion\n\ninitParticles(config.particleNumber); // setInterval(\"initParticles(config.particleNumber)\",3000);\n// let time = window.setTimeout('document.getElementById(\"welcome\").classList.add(\"display\")',1600);\n\n//# sourceURL=webpack:///./src/jou.js?");

/***/ })

/******/ });