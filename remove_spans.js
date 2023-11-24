console.log("Script loaded successfully!");

(function() {
    'use strict';

    var elementsToRemove = document.querySelectorAll('span[style*="position: absolute"]');
    elementsToRemove.forEach(function(element) {
        element.remove();
    });
})();
