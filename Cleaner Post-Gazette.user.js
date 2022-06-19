// ==UserScript==
// @name         Cleaner Post-Gazette
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Clean up some things on Pittsburgh Post-Gazette.
// @installURL   https://github.com/gjhead/cleanerpostgazette/raw/main/Cleaner%20Post-Gazette.user.js
// @updateURL    https://github.com/gjhead/cleanerpostgazette/raw/main/Cleaner%20Post-Gazette.user.js
// @downloadURL  https://github.com/gjhead/cleanerpostgazette/raw/main/Cleaner%20Post-Gazette.user.js
// @supportURL   https://github.com/gjhead/cleanerpostgazette/issues
// @author       G Jason Head
// @match        https://www.post-gazette.com/*
// @icon         https://www.post-gazette.com/favicon-32x32.png
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==


waitForKeyElements ('.pgevoke-topads', topAdsMainFunction);
function topAdsMainFunction (jNode) {
    const topAdsMain = document.querySelector('.pgevoke-topads');
    topAdsMain.remove();
}

waitForKeyElements ('[data-nativo]', nativoHPFunction);
function nativoHPFunction (jNode) {
    const nativoHP = document.querySelector('[data-nativo]');
    nativoHP.remove();
}

waitForKeyElements ('.pgevoke-story-topads', topadsFunction);
function topadsFunction (jNode) {
    const topAds = document.querySelector('.pgevoke-story-topads');
    topAds.remove();
}

waitForKeyElements ('.pgevoke-story-comments-disabled', commentDisabledFunction);
function commentDisabledFunction (jNode) {
    const commentDisabled = document.querySelector('.pgevoke-story-comments-disabled');
    commentDisabled.remove();
}

waitForKeyElements ('.pgevoke-story-comments', commentFunction);
function commentFunction (jNode) {
    const comment = document.querySelector('.pgevoke-story-comments');
    comment.remove();
}

waitForKeyElements ('.pgevoke-story-extracontent-nativo', nativoFunction);
function nativoFunction (jNode) {
    const nativo = document.querySelector('.pgevoke-story-extracontent-nativo');
    nativo.remove();
}

waitForKeyElements ('.pgevoke-civicscience', civicFunction);
function civicFunction (jNode) {
    const civic = document.querySelector('.pgevoke-civicscience');
    civic.remove();
}
