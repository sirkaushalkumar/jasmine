require('../src/utilities')

describe('test_trollbox', function() {
    var trollbox;
    beforeAll(function() {
        trollbox = new Trollbox();
    })
    it('should Create Troll Post Object', function() {
        const troll = 'testTroll';
        const msg = 'testMsg';
        var now = new Date();
        var output = {troll: troll, message: msg, date: now.toUTCString()}
        expect(trollbox.createTrollPost(troll, msg, now)).toEqual(output);
        //console.log('Sample Test Created')
    });
    it('should Update Troll List with New Post', function(){
        const now = new Date();
        const testPost = {troll: 'testName', message: 'testMessage', date: now.toUTCString()};
        var output = '<p><b>testName</b> said: testMessage - <small>' + testPost.date + '</small></p>';
        expect(trollbox.createTrollDataString(testPost)).toContain(output);
    })
});