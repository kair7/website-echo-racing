
window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage = 'Hey, come back!';

    document.addEventListener('visibilitychange', function(e) {
        var isPageActive = !document.hidden;

        if (!isPageActive) {
            document.title = attentionMessage;
        } else {
            document.title = pageTitle;
        }
    });
}

