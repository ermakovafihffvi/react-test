const validateValue = require('./validateValue');

describe('validateValue', () => {
    test('есть строка javascript', () => {
        expect(validateValue("Я люблю Javascript")).toBe(true);
    })
    test('нет строки javascript', () => {
        expect(validateValue("Я люблю JS")).toBe(false);
    })
});