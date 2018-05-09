var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./msg');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
       var from = 'mitch'
        var text = 'hello'
        var message = generateMessage(from, text);
        
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        })
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'mitch';
        var createdAt = 123;
        var laditude = 1;
        var longitude = 1;
        var url = 'https://www.google.com/maps?q=1,1';
        var message = generateLocationMessage(from, laditude, longitude)
        
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});