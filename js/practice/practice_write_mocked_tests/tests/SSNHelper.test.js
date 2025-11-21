import { SSNHelper } from '../src/correct/SSNHelper'; 
import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'; 
import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0'; 
import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat'; 
import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn'; 
import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength'; 


describe('SSNHelpe Tests', () => {

    test('isValidDay Should Return True For Valid Day', () => {
        expect(new SSNHelper().isValidDay(31)).toBe(true);
    });

    //Add your tests here
});