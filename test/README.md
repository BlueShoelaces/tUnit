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