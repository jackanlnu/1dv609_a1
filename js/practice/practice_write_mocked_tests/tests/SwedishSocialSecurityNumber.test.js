import { jest } from '@jest/globals';

// import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'; 
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'; 
import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'; 
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn'; 
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear'; 

//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    //put constants here to increase readability

    test('constructor Should Throw Error For Too Long Security Number', () => {
        const mock = {
            isCorrectLength: jest.fn().mockReturnValue(false),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn(),
            isValidDay: jest.fn(),
            luhnisCorrect: jest.fn()
        }
        expect(() => new SwedishSocialSecurityNumber('050210-00000', mock)).toThrow('To short, must be 11 characters');
    });

    test('constructor Should Trim Security Number Input', () => {
        const mock = {
            isCorrectLength: jest.fn(),
            isCorrectFormat: jest.fn(),
            isValidMonth: jest.fn(),
            isValidDay: jest.fn(),
            luhnisCorrect: jest.fn()
        }
        const spacedSecurityNumber = '  050210-0000  '
        const SecurityNumber = new SwedishSocialSecurityNumber(spacedSecurityNumber, mock)
        expect(SecurityNumber.getYear()).toBe('05');
        expect(SecurityNumber.getSerialNumber()).toBe('0000');
    });

    //Add your tests here
});