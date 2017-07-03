# 100 Days Of Code - Chris' Log

### Day 1: June 30, 2017

**Today's Progress:**
- 100 Days Of Code Kick-Off.
- Created my first react components
- Used React props for the first time
- Asked instructor a question :-)

**Thoughts:** 
I've commited to 100 days of code. 1 hour coding, every day for the next 100 days. Let's see how this will turn out. For now, I'll keep working on my frontend skills, going through a udemy meteor-and-react-course.

**Link to work:** 
[GitHub Repo](https://github.com/Christian1984/100-days-of-code/)
[Score Keep App](https://github.com/Christian1984/100-days-of-code/tree/master/meteor-and-react-course-projects/score-keep)



### Day 2: July 1, 2017

**Today's Progress:**
- extracted Player and PlayerList into individual react component
- extracted the app itself to a react component
- implemented conditional rendering

**Thoughts and Takeaways:** 
- Learned about binding and how to control binding in callbacks with .bind(this)
- Learned about how to pass key-attributes to react child components: don't add them inside the class of the component, but where you render them.
- Huh! Make sure to always import named and unnamed exports correctly if you add or miss those {} on the import statement you'll probably get some really ugly-to-debug errors.

**Link to work:** 
[Score Keep App](https://github.com/Christian1984/100-days-of-code/tree/master/meteor-and-react-course-projects/score-keep)



### Day 3: July 2, 2017

**Today's Progress:**
- scss / sass package (fourseven:scss) added to project (-> meteor add fourseven:scss)
- scss styling implemented:
  - scss wrapper class added
  - title bar styled
  - list, list items and input box styled

**Thoughts and Takeaways:** 
- brainstormed a bit about 100DayOfCode-Log-App
- css reset re-memorized. heard about this and probably used it a looong time ago! memory refreshed: reset your css, at least with a four-line-reset.
- learned about rem (relative em) in css styling -> set font-size to 62.5% (=10px) for html-element, then use rem to scale fonts and other sizes relative to that.
- classes need to be assigned to jsx elements using className-attribute (not class, since that
s a reserved keyword)
- use a wrapper-class and think about the order of div tags :-)
- use @import-statements in scss to split up styling in multiple file (for better maintainability)
- learned about scss partial imports (http://sass-lang.com/guide#topic-4):
  - partial files start with an underscore (_)
  - when importing a partial _<file>.scss, type @import './<folder>/<file>';

**Link to work:** 
[Score Keep App](https://github.com/Christian1984/100-days-of-code/tree/master/meteor-and-react-course-projects/score-keep)



### Day 4: July 3, 2017

**Today's Progress:**
- buttons styled with scss and BEM
- BEM challenge taken: refactor title bar to match BEM pattern
- input component styled using FlexBox
- player block created and beatified using FlexBox
- added mobile support
- react-flip-move library installed via "meteor nmp install react-flip-move --save" (https://github.com/joshwcomeau/react-flip-move)
- Flip Move Animation added to the list. Looks very nice!
- Rank added (1st, 2nd, 3rd) etc. by using numeral library (http://numeraljs.com/)
- first three places appear colored - nice :-)
- SCORE KEEP PROJECT COMPLETED!

**Thoughts and Takeaways:**
- learned about BEM (Block, Element, Modifier) pattern (http://getbem.com/)
- learned about FlexBox (https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- learned how to simply make the app responsively scale to mobile devices using
  <meta name='viewport' content='width=device-width, initial-scale=1' />
- learned about jsx child components by using 'normal' tags instead of self-closing tags and then calling {this.props.children}
- learned how to use third party components/libraries with meteor. it was really easy (y)
- learned about two no es6-features:
  - learned about object spread operator (https://rainsoft.io/how-three-dots-changed-javascript/), order matters!
  - learned about object property shorthand
  - example:

    ```javascript
    let house = {
      bedrooms: 2,
      bathrooms: 1
    };

    let yearBuilt = 2014;

    /**
    * challenge: print to console
    * {
    *  ...house,
    *  bedrooms:3,
    *  yearBuilt,
    *  flooring: 'Carpet'
    * }
    */

    let out = {
      ...house,
      bedrooms:3,
      yearBuilt,
      flooring: 'Carpet'
    };

    console.log(out);
    ```
- learned about dynamic classes
- learned how to darken colors with scss darken() -> (http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method)

**Questions:**
- how to get a log on the server side when a new item is added to the db?

**Link to work:** 
[Score Keep App](https://github.com/Christian1984/100-days-of-code/tree/master/meteor-and-react-course-projects/score-keep)



### Day x: July x, 2017

**Today's Progress:**

**Thoughts and Takeaways:**

**Link to work:** 
[Score Keep App](https://github.com/Christian1984/100-days-of-code/tree/master/meteor-and-react-course-projects/score-keep)
