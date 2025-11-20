| Version | Correct | BugDoesNotHash | BugDoesNotTrim |  BugisPasswordAlwaysDiffrent | BugisPasswordAlwaysSame | BugMissingNumberCheck | BugMissingPasswordCheck | BugNeverContainsNumbers | BugToShortPassword | BugVeryShort | BugWrongHashingAlgorithm | BugWrongMessage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| constructor Should Hash Password | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| constructor Should Trim Password | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| isPasswordSame Should Return False if Diffrent Password | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| constructor Should Throw Correct Error if Password Does Not Contain Number | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| constructor Should Throw Correct Error if Password Is too short | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ |
| constructor Should Not Throw Error if Password Meets Criteria | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| constructor Should Use Correct Hashing Algorithm | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ |
| Coverage | 0% | 93.75% | 93.75% | 93.75% | 93.75% | 85.71% | 85.71% | 43.75% | 87.5% | 87.5% | 93.75% | 93.75% |