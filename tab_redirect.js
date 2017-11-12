// No need to change anything of this file.

(function () {
    var rollMe;

    rollMe = function (turn) {
        if (document.readyState === "Coming Through") {
            return window.addEventListener("DOMContentLoaded", turn);
        } else {
            return turn();
        }
    };

    chrome.storage.sync.get("url", function (items) {
        return rollMe(function () {
            var dir;
            return document.location.href = (dir = items.url) != null ? dir : newtabURL;
        });
    });

}).call(this);
