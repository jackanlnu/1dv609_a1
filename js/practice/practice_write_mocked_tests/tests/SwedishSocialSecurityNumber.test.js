import { jest } from '@jest/globals';

// import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'; 
import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'; 
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'; 
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn'; 
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear'; 

//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    //put constants here to increase readability
    const mock = {
        isCorrectLength: jest.fn(),
        isCorrectFormat: jest.fn(),
        isValidMonth: jest.fn(),
        isValidDay: jest.fn(),
        luhnisCorrect: jest.fn()
    }

    test('constructor Should Throw Error For Too Long Security Number', () => {
        expect(() => new SwedishSocialSecurityNumber('050210-00000', mock)).toThrow();
    });

    //Add your tests here
});