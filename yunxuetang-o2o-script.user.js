// ==UserScript==
// @name        云学堂企业培训自动继续学习脚本
// @namespace   https://github.com/maou-sama-desu/yunxuetang-o2o-script
// @match       http*://*.yunxuetang.cn/o2o/*/playinfo*
// @grant       none
// @version     2.0.0
// @author      -
// @license     MIT
// @description 8/16/2024, 2:14:21 PM
// ==/UserScript==

(function() {
    'use strict'

    setInterval(function() {
        document.getElementsByClassName("yxtf-dialog__body")[0].getElementsByClassName("yxtf-button")[0].click();
    }, 30000);

})();
