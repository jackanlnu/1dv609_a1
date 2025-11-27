import { beforeEach, jest } from '@jest/globals'

import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn' 
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear'

// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongMonth' 
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongDay' 
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoFormatCheck' 
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoMonthCheck' 
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoDayCheck' 

//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    let helperMock

    beforeEach(() => {
        helperMock = {
            isCorrectLength: jest.fn(),
            isCorrectFormat: jest.fn(),
            isValidMonth: jest.fn(),
            isValidDay: jest.fn(),
            luhnisCorrect: jest.fn()
        }
    })

    test('constructor Should Throw Error For Too Long Social Security Number', () => {
        helperMock.isCorrectLength.mockReturnValue(false)
        expect(() => new SwedishSocialSecurityNumber('050210-00000', helperMock)).toThrow('To short, must be 11 characters')
    })

    test('constructor Should Throw Error For Social Security Number With Wrong Format', () => {
        helperMock.isCorrectFormat.mockReturnValue(false)
        expect(() => new SwedishSocialSecurityNumber('05021060-00', helperMock)).toThrow('Incorrect format, must be: YYMMDD-XXXX')
    })

    test('constructor Should Throw Error For Social Security Number With Invalid Month', () => {
        helperMock.isValidMonth.mockReturnValue(false)
        expect(() => new SwedishSocialSecurityNumber('052210-0000', helperMock)).toThrow('Invalid month in SSN')
    })

    test('constructor Should Throw Error For Social Security Number With Invalid Day', () => {
        helperMock.isValidDay.mockReturnValue(false)
        expect(() => new SwedishSocialSecurityNumber('050242-0000', helperMock)).toThrow('Invalid day in SSN')
    })

    test('constructor Should Trim Social Security Number Input', () => {
        const spacedSecurityNumber = '  050210-0000  '
        const SecurityNumber = new SwedishSocialSecurityNumber(spacedSecurityNumber, helperMock)
        expect(SecurityNumber.getYear()).not.toMatch(' ')
        expect(SecurityNumber.getSerialNumber()).not.toMatch(' ')
    })

    test('constructor Should Throw Error For Incorrect Luhn', () => {
        helperMock.luhnisCorrect.mockReturnValue(false)
        expect(() => new SwedishSocialSecurityNumber('050210-0000', helperMock)).toThrow("Invalid SSN according to Luhn's algorithm")
    })

    test('getYear Should Return Social Security Number Year', () => {
        expect(new SwedishSocialSecurityNumber('050210-0000', helperMock).getYear()).toBe('05')
    })

    test('getMonth Should Return Social Security Number Month', () => {
        expect(new SwedishSocialSecurityNumber('050210-0000', helperMock).getMonth()).toBe('02')
    })

    test('getDay Should Return Social Security Number Day', () => {
        expect(new SwedishSocialSecurityNumber('050210-0000', helperMock).getDay()).toBe('10')
    })
})