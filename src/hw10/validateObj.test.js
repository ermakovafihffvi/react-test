const validateObj = require('./validateObj');

describe('validateObj', () => {
    test('есть ключ name', () => {
        let obj = {"name": "Katya"};
        expect(validateObj(obj)).toBe(obj);
    })
    test("нет необходимого ключа", () => {
        let obj = {"last_name": "Ivanova", "age": 19};
        expect(validateObj(obj)).toBe(false);
    })
})