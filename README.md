# tUnit
Automated unit-testing in Twine

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