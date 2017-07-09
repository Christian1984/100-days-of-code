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
- created new project, basic structure and some core html for the 100-days-of-code-journaling app!

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



### Day 5: July 4, 2017

**Today's Progress:**
- done a few basic #freeCodeCamp-challenges in the morning to get started
- created a new project for the short-lnk project of udemy's meteor and react course  and added some basic structure to it (customized the boiler plate project) and did some housekeeping (created respository etc.)
- 100-days-of-code-journal-app restructered. everything broken up into components, db functionality added etc.
- played around a bit in the MongoDB shell
- added entry-create/-update form to journal-app
- added insert functionality
- added functionality to sum up duration data

**Link to work:**

[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)

[short-lnk](https://github.com/Christian1984/short-lnk)



### Day 6: July 5, 2017

**Today's Progress:**
- styled the 100-days-of-code-journal-app using scss
- continued working on the short lnk app as part of the meteor/react course

**Thoughts and Takeaways:**
- learned about react routing (Routes, Router, browserHistory)
- IMPORTANT: fallback-route (path='*') must be the LAST component in the Router!

**Link to work:**
[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)

[short-lnk](https://github.com/Christian1984/short-lnk)



### Day 7: July 6, 2017

**Today's Progress:**
- continued working on the short lnk app as part of the meteor/react course
- implemented navigation through the router via react-router's <Link to='url'>-component
- implemented navigation through the router using react-router's browserHistory.push('url')-method (for switching routes programmatically)
- created a signup form for Short Lnk project
- added a conditionally rendered error message by utilizing state. pretty cool stuff!
- onChange-callback for password added, updating 'passwordOkay' while typing and rendering an error message accordingly, using react component state, also deactivating submit-button on the fly
- basic user-system and signup implemented (data validation still missing)

**Thoughts and Takeaways:**
- routers are just a normal react component. they can also be nested, which will come in handy when there are static components (like a footer or so), e.g.

```javascript
let routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route path='/link' component={Link} />
    <Route path='*' component={NotFound} />
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(<div><p>TEST</p><div>{routes}</div></div>, document.getElementById('app'));
});
```

- learned about react-router's Link component and browserHistory-object
- learned about react component state. looks like this is something that would solve a problem with my 100-day-of-code-journal-app I was thinking about yesterday. man that udemy course delivers the information just when I need it :-) state is updated by user interaction.
- learned about the difference between props and state:
  - props get passed into a component from OUTSIDE. they CANNOT be modified by the component itself.
  - the state is managed by the component ITSELF. state CANNOT be modified from outside.
- learned how to update a component's state using this.setState({stateParamToUpdate: newValue}, [callback]). calling this.state.stateParamToUpdate = newValue DOES NOT work (no callback being invoked, thus no re-rendering)

**Link to work:**
[short-lnk](https://github.com/Christian1984/short-lnk)



### Day 8: July 7, 2017

**Today's Progress:**
- today was backseat-coding-day :-)
- stopwatch functionality implemented using react component state
- support for multiline logs added
- link element made clickable
- a-tag styled
- added support for seperate project name and link which then shows as <a href={projectUrl}>{projectName}</a>
- support for date-flooring and adding days added (utils)
- progress bar added and styled (needs some finishing touches, but works and looks okay enough to start with)

**Thoughts and Takeaways:**
- practiced a lot today, and put the stuff I learned into practice... pretty good to see that the transfer works nicely :-)

**Link to work:**
[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)



### Day 9: July 8, 2017

**Today's Progress:**
- progress bars tuned

**Thoughts and Takeaways:**

**Link to work:**
[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)



### Day 10: July 9, 2017

**Today's Progress:**
- restyled some elements (form and progressbars)
- added rendering for skipped days

**Thoughts and Takeaways:**

**Link to work:**
[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)



### Day x: July x, 2017

**Today's Progress:**

**Thoughts and Takeaways:**

**Link to work:**
[]()
