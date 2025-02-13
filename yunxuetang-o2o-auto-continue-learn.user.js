// ==UserScript==
// @name        云学堂企业培训自动点击"继续学习"脚本
// @namespace   https://github.com/maou-sama-desu/yunxuetang-o2o-auto-continue-learn
// @match       http*://*.yunxuetang.cn/o2o/*
// @grant       none
// @version     3.0.0
// @author      github.com/maou-sama-desu
// @license     MIT
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
