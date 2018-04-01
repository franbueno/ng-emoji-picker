# Angular 5 Emoji Picker for Material
[![npm version](https://badge.fury.io/js/ng-emoji-picker.svg)](https://badge.fury.io/js/ng-emoji-picker)

### Important / Credits
This package is based on https://github.com/lbertenasco/ng-emoji-picker
I've started to adapt it for material

## Usage
Install through npm
```bash
npm install ng-emoji-picker-material --save # Angular >= 5

```
In your module file for your angular project.
```javascript
import {EmojiPickerModule} from 'ng-emoji-picker-material';

@NgModule({
  ...
  imports: [
      EmojiPickerModule
  ],
  ...
})
```
## Components
`<emoji-input>`
```html
  <emoji-input></emoji-input>
```
#### Parameters
`[popupAnchor]` : ['top' (default) : 'bottom']
Where to anchor the emoji popup

`[onEnter]` : method to run when users presses enter key. If you want to use your parent scope inside the function make sure to bind the function (`[onEnter]="onEnterFunction.bind(this)"`)

`[group]` : assign FormGroup

`[autofocus]` : autofocus on the textarea/input right after the component is created.

`[(model)]` : model value to two-way bind to input fields ngModel

`[inputClass]` : assigns a class name to the emoji input or textArea.

`[searchClass]` : assigns a class name to the search input

`[closeAfterSelection]` : boolean: defaults `true`. If true closes the emoji popup after selecting an emoji.

`(setPopupAction)` : outputs a binding function to `this.openPopup(status: boolean = null)`. Call the function without parameters to toggle the picker popup.

`(keyup)` : outputs the keyup event on the textarea/input.

`(focus)` : outputs the event when focus on the textarea/input.

`(blur)` : outputs the event when blur outside the textarea/input.

`(emojiClick)` : outputs the emoji character clicked.

##### Example
```javascript
@Component({})

export class ExampleComponent {

    public openPopup: Function;
    public form: FormGroup;

    setPopupAction(fn: any) {
        this.openPopup = fn;
    }
}
```
```html
<emoji-input
  [(model)]="bindedVariable"
  [group]="form"
  [onEnter]="onEnterFunction"
  [popupAnchor]="'bottom'"
  (setPopupAction)="setPopupAction($event)">
</emoji-input>
```

## Submitting an Issue

If you're confident that you've found a bug in
ng-emoji-picker-material, please [open an issue][issues], but check to make sure it hasn't
already been submitted. When submitting a bug report, please include a
[Gist][] that includes a stack trace and any details that may be
necessary to reproduce the bug, including your browser, version of ng-emoji-picker-material, and operating system. Ideally, a bug report should include a
pull request with failing specs.

[gist]: https://gist.github.com/

## Submitting a Pull Request
1. [Fork the repository.][fork]
2. [Create a topic branch.][branch]
3. Add specs for your unimplemented feature or bug fix.
4. Implement your feature or bug fix.
5. Add, commit, and push your changes.
6. [Submit a pull request.][pr]

[issues]: https://github.com/franbueno/ng-emoji-picker-material/issues
[fork]: http://help.github.com/fork-a-repo/
[branch]: http://learn.github.com/p/branching.html
[pr]: http://help.github.com/send-pull-requests/
