// remove_spans.js hosted externally
(function() {
    'use strict';

    var elementsToRemove = document.querySelectorAll('span[style*="position: absolute"]');
    elementsToRemove.forEach(function(element) {
        element.remove();
    });
})();
