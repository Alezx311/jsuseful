const { Text } = require('../lib/cjs/src');

describe('JsUseful.Text module tests', () => {
  it('Should return text splitted to lines', () => {
    const someText = `1\n2\n3`;

    expect(Text.splitToLines(someText)).toEqual(['1', '2', '3']);
  });
});
