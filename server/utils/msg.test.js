var expect = require('expect');

var {generateMessage} = require('./msg');

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