// ==UserScript==
// @name         Google Translate Keyboard Shortcuts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add a few keyboard shortcuts to Google Translate
// @author       Gary Shi
// @match        https://translate.google.com/
// @grant        none
// ==/UserScript==


// DONE
//   Ctrl-A: Focus and select source input.
//
// TODO
//   Ctrl-S: Triggle Star
//   Ctrl-R: Reverse translate (swap source/result and languages)
//   Ctrl-I <lang>: Quick change input language
//   Ctrl-O <lang>: Quick change output language
//           lang: space - auto, e - english, c - chinese, j - japanese, s - spanish, f - french, g - germany
function handleKeyDown(e) {
    if (e.code == "KeyA" && e.getModifierState("Control")) {
        var source_input = document.getElementById("source");
        source_input.focus();
        source_input.select();
        return false;
    }
    return true;
}

(function() {
    'use strict';

    document.addEventListener('keydown', handleKeyDown, true);
})();
