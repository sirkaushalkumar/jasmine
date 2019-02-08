Trollbox = function () { };

Trollbox.prototype.createTrollPost = function (troll, msg, date) {
    var troll = troll;
    var msg = msg;
    var now = new Date();
    var trollPost = {
        troll: troll,
        message: msg,
        date: date.toUTCString()
    };
    return trollPost
}

Trollbox.prototype.createTrollDataString = function(trollPost) {
    var trollData = '<p><b>' + trollPost.troll;
    trollData += '</b> said: ' + trollPost.message;
    trollData += ' - <small>' + trollPost.date + '</small></p>';
    return trollData;
}