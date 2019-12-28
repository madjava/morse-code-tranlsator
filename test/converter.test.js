const converter = require('../resource/converter');

describe('Converter', () => {

    describe('letterToMorse', () => {
        test('should convert english letter to morse letter', () => {
            const value1 = converter.letterToMorse('a');
            const value2 = converter.letterToMorse('j');
            const value3 = converter.letterToMorse('z');
            const value4 = converter.letterToMorse(' ');

            expect(value1).toEqual('.-');
            expect(value2).toEqual('.---');
            expect(value3).toEqual('--..');
            expect(value4).toEqual('   ');
        });
    });

    describe('wordToMorse', () => {
        test('should convert an english word to morse word', () => {
            const value = converter.wordToMorse('felix');

            expect(value).toEqual('..-. . .-.. .. -..-');
        });
    });

    describe('sentenceToMorse', () => {
        test('should convert english sentence to morse sentence', () => {
            const value = converter.sentenceToMorse('morse code');

            expect(value).toEqual('-- --- .-. ... .   -.-. --- -.. .');
        });

        test('should convert sentence with period correctly', () => {
            const value = converter.sentenceToMorse('The wizard quickly jinxed the gnomes before they vaporized.');

            expect(value).toEqual('- .... .   .-- .. --.. .- .-. -..   --.- ..- .. -.-. -.- .-.. -.--   .--- .. -. -..- . -..   - .... .   --. -. --- -- . ...   -... . ..-. --- .-. .   - .... . -.--   ...- .- .--. --- .-. .. --.. . -.. .-.-.-');
        });
    });

});