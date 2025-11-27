| SUT | Test | CorrectSSNHelper | BuggySSNHelperAllowDayUpTo30 | BuggySSNHelperAllowMonth0 |  BuggySSNHelperIncorrectFormat | BuggySSNHelperMessyLuhn | BuggySSNHelperWrongLength | CorrectSwedishSocialSecurityNumber | BuggySwedishSocialSecurityNumberNoLenCheck | BuggySwedishSocialSecurityNumberNoTrim | BuggySwedishSocialSecutityNumberNoLuhn | BuggySwedishSocialSecutityNumberWrongYear | BuggySwedishSocialSecutityNumberWrongMonth | BuggySwedishSocialSecutityNumberWrongDay |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SSNHelper | isValidDay Should Return True For Valid Day | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | | | | | | | |
| SSNHelper | isValidMonth Should Return False For Invalid Input | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | | | | | | | |
| SSNHelper | isCorrectFormat Should Return False For Invalid Format | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | | | | | | | |
| SSNHelper | luhnisCorrect Should Return False For Invalid Input | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |  | | | | | | |
| SSNHelper | isCorrectLength Should Return False For Too Long Input | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |  | | | | | | |
| SwedishSecurityNumber | constructor Should Throw Error For Too Long Social Security Number | | | | | | | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| SwedishSecurityNumber | constructor Should Trim Social Security Number Input | | | | | | | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| SwedishSecurityNumber | constructor Should Throw Error For Incorrect Luhn | | | | | | | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| SwedishSecurityNumber | getYear Should Return Social Security Number Year | | | | | | | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| SwedishSecurityNumber | getMonth Should Return Social Security Number Month | | | | | | | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| SwedishSecurityNumber | getDay Should Return Social Security Number Day | | | | | | | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Coverage |  | 100% | 100% | 100% | 100% | 100% | 100% | 82.35% | 80% | 75% | 80% | 82.35% | 82.35% | 82.35% |