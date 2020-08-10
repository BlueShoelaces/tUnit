# alya
## compile and launch
### Local path to Tweego
```
"C:\Program Files\tweego-2.1.1-windows-x64\tweego.exe"
```
Add this to PATH variable to be able to use `tweego` cli.

### To compile with live updates
```
npm run-script compile
```
This runs
```
tweego -o bin\alya.html src --watch
```
which will recursively compile all `*.tw` or `*.twee` files in `src` into a single file in `bin` called `alya.html`. This file can then be opened in the browser or imported into Twine.

## links & docs
- [GitHub repo](https://github.com/BlueShoelaces/alya-twine)
- [Trello board](https://trello.com/b/k6P0oCE6/alya)
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