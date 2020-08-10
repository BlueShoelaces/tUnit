# tests
## compile and launch
### Local path to Tweego
```
"C:\Program Files\tweego-2.1.1-windows-x64\tweego.exe"
```
Add this to PATH variable to be able to use `tweego` cli.

### To compile with live updates
```
npm test
```
This runs
```
tweego -o bin\test.html test --watch
```
which will recursively compile all `*.tw` or `*.twee` files in `src` into a single file in `bin` called `alya.html`. This file can then be opened in the browser or imported into Twine.

## Sprint 0
### Personas
**Twila** the SugarCube developer
- primarily programs in SugarCube using Twee files
- experienced programmer

**Harley** the Harlowe developer
- primarily programs in Harlowe using Twee files
- experienced programmer

### Value stories
AS Twila,
I WANT automated unit tests
SO THAT I can build out my game with confidence.

goal: run a single command like `npm test` and have a suite of tests run
goal: have a minimalist, formulaic unit test template

The `run tests` passage can call a custom macro/function, which takes a list of `Test` custom objects and runs them.
- `Test` object will need a `run` method
- Custom assertion macros (e.g. `assertEquals`)
    - failures save the "expected" and "actual" values somewhere where `run tests` will be able to access them for display
- Custom macro to define a `Test` and add it to the `test suite`
    - so that Twila isn't spinning up new class instances left and right

Example:
```
<<test "Two plus two equals four">>
    <<assertEquals functionUnderTest(2, 2) 4>>
<</test>>
```