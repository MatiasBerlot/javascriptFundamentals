Skip to content
This repository
Search
Pull requests
Issues
Gist
 @MatiasBerlot
 Watch 3
  Star 33
  Fork 5 wcoder/highlightjs-line-numbers.js
 Code  Issues 3  Pull requests 0  Pulse  Graphs
Branch: master Find file Copy pathhighlightjs-line-numbers.js/src/highlightjs-line-numbers.js
b5dac3d  on 25 Feb
@wcoder wcoder Improvement loading process. Issue #8
1 contributor
RawBlameHistory     67 lines (54 sloc)  1.41 KB
(function (w) {
	'use strict';

	if (typeof w.hljs === 'undefined') {
		console.error('highlight.js not detected!');
	} else {
		w.hljs.initLineNumbersOnLoad = initLineNumbersOnLoad;
		w.hljs.lineNumbersBlock = lineNumbersBlock;
	}

	function initLineNumbersOnLoad () {
		if (document.readyState === 'complete') {
			documentReady();
		} else {
			w.addEventListener('DOMContentLoaded', documentReady);
		}
	}

	function documentReady () {
		try {
			var blocks = document.querySelectorAll('code.hljs');

			for (var i in blocks) {
				if (blocks.hasOwnProperty(i)) {
					lineNumbersBlock(blocks[i]);
				}
			}
		} catch (e) {
			console.error('LineNumbers error: ', e);
		}
	}

	function lineNumbersBlock (element) {
		if (typeof element !== 'object') return;

		var parent = element.parentNode;
		var lines = getCountLines(parent.textContent);

		if (lines > 1) {
			var l = '';
			for (var i = 0; i < lines; i++) {
				l += (i + 1) + '\n';
			}

			var linesPanel = document.createElement('code');
			linesPanel.className = 'hljs hljs-line-numbers';
			linesPanel.style.float = 'left';
			linesPanel.textContent = l;

			parent.insertBefore(linesPanel, element);
		}
	}

	function getCountLines(text) {
		if (text.length === 0) return 0;

		var regExp = /\r\n|\r|\n/g;
		var lines = text.match(regExp);
		lines = lines ? lines.length : 0;

		if (!text[text.length - 1].match(regExp)) {
			lines += 1;
		}

		return lines;
	}
}(window));
Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Contact Help