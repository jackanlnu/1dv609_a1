// import { SSNHelper } from '../src/correct/SSNHelper'; 
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'; 
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0'; 
// import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat'; 
// import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn'; 
import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength'; 


describe('SSNHelpe Tests', () => {

    test('isValidDay Should Return True For Valid Day', () => {
        expect(new SSNHelper().isValidDay(31)).toBe(true);
    });

    test('isValidMonth Should Return False For Invalid Input', () => {
        expect(new SSNHelper().isValidMonth(0)).toBe(false);
    });

    test('isCorrectFormat Should Return False For Invalid Format', () => {
        expect(new SSNHelper().isCorrectFormat('05021-112')).toBe(false);
    });

    test('luhnisCorrect Should Return False For Invalid Input', () => {
        expect(new SSNHelper().luhnisCorrect('050210-5252')).toBe(false);
    });

    test('isCorrectLength Should Return False For Too Long Input', () => {
        expect(new SSNHelper().isCorrectLength('050210-52523')).toBe(false);
    });

    //Add your tests here
});