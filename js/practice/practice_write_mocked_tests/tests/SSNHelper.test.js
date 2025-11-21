import { SSNHelper } from '../src/correct/SSNHelper'; 



describe('SSNHelpe Tests', () => {

    test('isValidDay Should Return True For Valid Day', () => {
        expect(new SSNHelper().isValidDay(31)).toBe(true);
    });

    //Add your tests here
});