const { JSDOM } = require('jsdom');

describe('Counter functionality', function() {
    it('should start at zero', function() {
        const dom = new JSDOM(`<!DOCTYPE html><div id="counter">0</div>`);
        const counterDisplay = dom.window.document.getElementById('counter');
        expect(counterDisplay.textContent).toBe('0');
    });
});
