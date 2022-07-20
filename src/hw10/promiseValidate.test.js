import { httpGet }  from './promiseValidate.js';

describe('httpGet', () => {
    test('connection error', async () => {
        
        const resp = await httpGet("https://learn.javascript.ru/promise");

        expect(resp).toBe("Network Error");
    })
})