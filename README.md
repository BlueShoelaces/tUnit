# tUnit
Automated unit-testing in Twine

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
tweego -o test-output\test.html test --watch
```
which will recursively compile all `*.tw` or `*.twee` files in `src` into a single file in `test-output` called `test.html`. This file can then be opened in the browser or imported into Twine.

## links & docs
- [GitHub repo](https://github.com/BlueShoelaces/tUnit)
- [GitHub project board](https://github.com/BlueShoelaces/tUnit/projects/1)
- [SugarCube documentation](http://www.motoslave.net/sugarcube/2/docs/)
- [Tweego documentation](https://www.motoslave.net/tweego/docs/)
- [Twee specification](https://github.com/iftechfoundation/twine-specs/blob/master/twee-3-specification.md)
- [Extremely helpful Twee/Tweego blog post](https://dev.to/lazerwalker/a-modern-developer-s-workflow-for-twine-4imp)

### Switching between plain text and the visual editor
To view a project in the Twine visual editor, just open Twine and import the compiled `*.html` file.

To "decompile" an `*.html` file into a `*.twee` file, use Tweego's `-d` flag:
```
tweego -o <output>.twee <input>.html -d
```
Note that "decompiling" in this way will always result in a *single* `*.twee` file. It's probably not a good idea to make this a regular development practice, since we'll lose our whole code structure. It's probably best reserved for the one-time use of converting an existing Twine project into a `*.twee` file.

## Sprint 0
### Personas
**Twila** the SugarCube developer
- primarily programs in SugarCube using Twee files
- experienced programmer
- will use unit tests primarily for testing her custom macros

**Harley** the Harlowe developer
- primarily programs in Harlowe using Twee files
- experienced programmer
- probably more interested in functional testing

### Value stories
AS Twila,
I WANT automated unit tests
SO THAT I can build out my game with confidence.

- [X] goal: run a single command like `npm test` and have a suite of tests run
- [X] goal: have a minimalist, formulaic unit test template

### How it works
- Create a passage to house some tests. Tag the passage `[test]` to allow it to be picked up by the runner.
- Write a unit test using `<<test>>` macro. This creates a `Test` class instance and pushes it to a global list of tests to run.
- The `run tests` passage finds all passages tagged `[test]` and "displays" them, executing the `<<test>>` macros within.
- Custom assertion macros (currently `assert-equals` and `assert-true`). *Only one assertion per unit test.* When the test is run, output is saved to a variable and immediately displayed.
- Optional `testControl` parameter may be passed to `<<test>>`
    - `skip`: this test will not be run during test execution
    - `focus`: if one or more tests are marked `focus`, *only* those tests will be run

Example:
```
<<test "Two plus three equals five" focus>>
    <<set _actualSum to (2 + 3)>>
    <<set _expectedSum to 5>>
    <<assertEquals _expectedSum _actualSum>>
<</test>>
```