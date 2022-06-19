// ==UserScript==
// @name         Cleaner Post-Gazette
// @namespace    http://tampermonkey.net/
// @version      q.0
// @description  Cleane on Pittsburgh Post-Gazette
// @author       g jason head
// @match        https://www.post-gazette.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=post-gazette.com
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
