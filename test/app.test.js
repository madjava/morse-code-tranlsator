
const app = require('../resource/app');

describe.skip('Application', () => {
    describe('displayInfo()', () => {

        test('should display basic user info', () => {
            app.displayInfo();
        });
    });
});