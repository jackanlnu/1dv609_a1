
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
import { Password } from '../src/BugWrongMessage'
// import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const acceptablePassword = 'Password1234';
    const emptyPassword = '';

    /* test('replace this test with one of your own and add more', () => {
        expect(true).toBe(true);
    }); */
    //Add your tests here

    // Fix
    test('Should Hash Password', () => {
        expect(new Password(acceptablePassword).getPasswordHash()).not.toBe('Password1234');
    });

    test('Should Trim Password', () => {
        const spacesPassword = new Password(' Password1234 ')
        expect(new Password(acceptablePassword).getPasswordHash()).toBe(spacesPassword.getPasswordHash());
    });

    test('Should Return False if Diffrent Password', () => {
        const diffrentPassword = new Password('Password12345')
        expect(new Password(acceptablePassword).isPasswordSame(diffrentPassword)).toBe(false);
    });

    test('Should Throw Correct Error if Password Does Not Contain Number', () => {
        expect(() => new Password('Passwordtest')).toThrow('No number found');
    });

    test('Should Throw Correct Error if Password Is too short', () => {
        expect(() => new Password('Password123')).toThrow('Too short password');
    });

    test('Should Not Throw Error if Password Meets Criteria', () => {
        expect(() => new Password(acceptablePassword)).not.toThrow();
    });
});