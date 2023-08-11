// ==UserScript==
// @name         Cleaner Post-Gazette
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Clean up some things on Pittsburgh Post-Gazette.
// @installURL   https://github.com/gjhead/cleanerpostgazette/raw/main/Cleaner%20Post-Gazette.user.js
// @updateURL    https://github.com/gjhead/cleanerpostgazette/raw/main/Cleaner%20Post-Gazette.user.js
// @downloadURL  https://github.com/gjhead/cleanerpostgazette/raw/main/Cleaner%20Post-Gazette.user.js
// @supportURL   https://github.com/gjhead/cleanerpostgazette/issues
// @author       G Jason Head
// @match        https://www.post-gazette.com/*
// @icon         https://www.post-gazette.com/favicon-32x32.png
// @require      https://greasyfork.org/scripts/446257-waitforkeyelements-utility-function/code/waitForKeyElements%20utility%20function.js?version=1059316
// @grant        none
// ==/UserScript==


waitForKeyElements ('.pgevoke-topads', topAdsMainFunction);
function topAdsMainFunction (jNode) {
    const topAdsMain = document.querySelector('.pgevoke-topads');
    if (typeof topAdsMain !== 'undefined') {
        topAdsMain.remove();
    }
}

waitForKeyElements ('.pgevoke-grid-row[data-nativo]', nativoHPFunction);
function nativoHPFunction (jNode) {
    const nativoHP = document.querySelector('.pgevoke-grid-row[data-nativo]');
    if (typeof nativoHP !== 'undefined') {
        nativoHP.remove();
    }
}

waitForKeyElements ('.pgevoke-story-topads', topadsFunction);
function topadsFunction (jNode) {
    const topAds = document.querySelector('.pgevoke-story-topads');
    if (typeof topAds !== 'undefined') {
        topAds.remove();
    }
}

waitForKeyElements ('.pgevoke-story-comments-disabled', commentDisabledFunction);
function commentDisabledFunction (jNode) {
    const commentDisabled = document.querySelector('.pgevoke-story-comments-disabled');
    if (typeof commentDisabled !== 'undefined') {
        commentDisabled.remove();
    }
}

waitForKeyElements ('.pgevoke-story-comments', commentFunction);
function commentFunction (jNode) {
    const comment = document.querySelector('.pgevoke-story-comments');
    if (typeof comment !== 'undefined') {
        comment.remove();
    }
}

waitForKeyElements ('.pgevoke-story-extracontent-nativo', nativoFunction);
function nativoFunction (jNode) {
    const nativo = document.querySelector('.pgevoke-story-extracontent-nativo');
    if (typeof nativo !== 'undefined') {
        nativo.remove();
    }
}

waitForKeyElements ('.pgevoke-civicscience', civicFunction);
function civicFunction (jNode) {
    const civic = document.querySelector('.pgevoke-civicscience');
    if (typeof civic !== 'undefined') {
        civic.remove();
    }
}

waitForKeyElements ('.pg-bigdrawer', gateFunction);
function gateFunction (jNode) {
    const gate = document.querySelector('.pg-bigdrawer');
    if (typeof gate !== 'undefined') {
        gate.remove();
    }
}

waitForKeyElements ('.pg-bigdrawergradient', gradientFunction);
function gradientFunction (jNode) {
    const gradient = document.querySelector('.pg-bigdrawergradient');
    if (typeof gradient !== 'undefined') {
        gradient.remove();
    }
}

waitForKeyElements ('body.pg-bigdraweropen .pgevoke-pagewrapper', wrapFunction);
function wrapFunction (jNode) {
    const targetElement = document.querySelector('body.pg-bigdraweropen .pgevoke-pagewrapper');
    if (targetElement) {
        // Change CSS properties
        targetElement.style.height = 'auto';
        targetElement.style.position = 'relative';
        targetElement.style.overflowY = 'scroll';
    }
}











}


