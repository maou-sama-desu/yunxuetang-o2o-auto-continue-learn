// ==UserScript==
// @name        云学堂企业培训自动点击"继续学习"脚本
// @namespace   https://github.com/maou-sama-desu/yunxuetang-o2o-script
// @match       http*://*.yunxuetang.cn/o2o/*
// @grant       none
// @version     2.2.0
// @author      -
// @license     MIT
// @description 8/16/2024, 2:14:21 PM
// ==/UserScript==

(function() {
    'use strict'

    setInterval(function() {
        document.getElementsByClassName("yxtf-dialog__body")[0].getElementsByClassName("yxtf-button")[0].click();
    }, 1000);

    setInterval(function() {
        document.getElementsByClassName("yxtulcdsdk-course-player__back")[0].getElementsByClassName("yxtf-button")[0].click();
    }, 1000);

})();
