# Fall 2022 Intro to Internet Programming — Assignment 3

* **Do not start this project until you have read these instructions carefully.**
* **Read these instructions repeatedly until you understand, then begin your project. If something is not clear, ask.**

---

## ❖・Introduction・❖
Create a *single* web page consisting of HTML, CSS, and JavaScript that creates a carousel (also referred to as a slide show) of the images included in the `img` folder. A short, 21-second video of what’s required for this project is available from [http://vanegas.cs.hartford.edu/uploads/videos/cs-275/slide-show.mp4](http://vanegas.cs.hartford.edu/uploads/videos/cs-275/slide-show.mp4).

You will need to implement from scratch development and production Gulp tracks for this project. Running `gulp serve` should invoke the development track; running `gulp build` should invoke the production track.

**Note**: _You may **only** work within the confines of the included scaffold._

---

## ❖・Rules・❖
Before you begin, **update Node, NPM, ESLint, and Stylelint**

### General
* Do not alter the scaffold of this project, especially the `.gitignore` files.
* Ensure your editor is configured to use the enclosed `.editorconfig` file.
* The user interface of your project should approximate as close as possible the rendering in the video.
* Images may not be resized.
* There should not be any scroll bars, either horizontal or vertical.
* Author your code according to the included `.editorconfig` rules. (**Do not alter**.)
* Validate/lint JavaScript according to the included `.eslintrc` rules. (**Do not alter**.)
* Validate/lint CSS according to the included `.stylelintrc.json` rules. (**Do not alter**.)
* Do not add images.
* Keep the default font size to 16 pixels.
* Set the content leading to 1.125 × default font size.
* Set the font size of `h1` to 32 pixels.
* Set the leading of the `h1` element to 1.2 × the `h1` font size.
* Set the top and bottom padding of the images to 15 pixels. (**Exclude the arrow images from this rule.**)
* Set the left and right padding of the images to 18 pixels. (**Exclude the arrow images from this rule.**)

### HTML
* Place *all* your markup in `index.html`.

### CSS
* No CSS libraries may be used.
* Place *all* your styles in `style.css`.

### JavaScript
* No JavaScript libraries may be used.
* Place *all* your JavaScript in `app.js`.
* No ESLint errors, except warnings for line lengths.
* Use backticks exclusively for all variable interpolation and string manipulation. Should you need to defeat this rule, explain so in a comment.
* No function hoisting; only arrow functions. Should you need to defeat this rule, explain so in a comment.
* No variable hoisting; only `let` declarations. Should you need to defeat this rule, explain so in a comment.

### Task Running with Gulp
As mentioned in the introduction, you must employ Gulp as the task runner with workflows for development and production.

* Use *only* the following Gulp modules:
* `gulp`
* `gulp-html`
* `gulp-stylelint`
* `gulp-htmlmin`
* `gulp-clean-css`
* `gulp-eslint`
* `gulp-babel`
* `gulp-uglify`
* `browser-sync`

And, of course, use `src`, `dest`, `series`, and `watch` as needed

#### Development
* Your HTML must validate via the `gulp-html` module.
* Your CSS must validate via the `gulp-stylelint` module using the enclosed `.stylelintrc.json` file.
* Your JavaScript must validate via the `gulp-eslint` module using the included `.eslintrc.json` file.
* Your JavaScript must transpile using `gulp-babel`, and, possibly, `@babel/core` and `babel-present-env`.
* The development, or dev, track must lint/validate HTML, CSS, and JavaScript each time you save a `.html`, `.css`, or `.js` file.
* Additionally, the dev track must also refresh the browser when any of these files have changed.
* `gulp serve` triggers the dev track.

#### Production
* The production, or prod, track must compress all the aforementioned languages. *Do not lint them*, as they have already been linted in the development track
* `gulp build` should load the entire production environment into a folder called `prod`, which must be fully self-sufficient and contain all the required files — compressed and linted — of the web page
* Ensure to check that your entire project works as a standalone web app in the `prod` folder. You can do so by moving the `prod` folder elsewhere in your file system before submitting, then launching `index.html`. **Note**: The prod folder is ignored for this project, because it should be built by the production track.

---

## ❖・Due・❖
Thursday, 27 October 2022, at 12:00 PM.

---

## ❖・Grading・❖
| Item                                                                   | Points |
| ---------------------------------------------------------------------- | :----: |
| *Fully-implemented JavaScript code according to directions*            | `25`   |
| *Overall code quality across Gulp, JavaScript, HTML, and CSS*          | `10`   |
| *Project implemented following assignment directions*                  | `10`   |
| *JavaScript, including `gulpfile.js` is valid (via `gulp-eslint`)*     | `10`   |
| *Full Gulp development scaffold in place*                              | `10`   |
| *Full Gulp production scaffold in place*                               | `10`   |
| *`.editorconfig` implemented*                                          | `05`   |
| *Uses back ticks exclusively for quoted strings*                       | `05`   |
| *HTML is valid (via `gulp-html`)*                                      | `05`   |
| *CSS is valid (via `gulp-stylelint`)*                                  | `05`   |
| *Variables declared using only `let` (no variable hoisting)*           | `05`   |
| *Functions declared using only arrow functions (no function hoisting)* | `05`   |

**Tip**: To ensure the files required by your project are not being ignored, you’re strongly advised to clone your repo into a different folder on your computer.

---

## ❖・Submission・❖
You will need to issue a pull request back into the original repo, the one from which your fork was created for this project. See the **Issuing Pull Requests** section of [this site](http://code-warrior.github.io/tutorials/git/github/index.html) for help on how to submit your assignment.

**Note**: This assignment may *only* be submitted via GitHub. **No other form of submission will be accepted**.
