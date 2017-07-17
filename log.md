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



### Day 11: July 10, 2017

**Today's Progress:**
- used moment.js to format dates properly
- set moment.locale() based on user's browser settings
- fallback implemented if locale detection fails
- logs for days skipped beautified a bit (shows date + default message)
- added icons to show log type on a glance

**Thoughts and Takeaways:**
- importing svgs into react wasn't that smooth. had to hardcode my svg into the react component. there must be a way to load it from file, but i didn't find it yet.
- in order to use `moment.locale(<new-locale>)`, make sure to `import * as locales from 'moment/min/locales';`

**Link to work:**
[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)



### Day 12: July 11, 2017

**Today's Progress:**
- when user clicks finished, date and duration are automatically pulled into the form
- check if date of new entry is already in list and populate input fields accordingly
- automatically change from log-creation to log-updating if log for a given date already exists
- allow user to update those entries
- problem with updating entries fixed
- lookup by iteration replaced by mini mongo call
- added login-functionality to short lnk app

**Open Issues:**
- log entries in future not displayed yet (is that really a problem?)
- time today needs to be immediatly set if there is already an entry for today

**Thoughts and Takeaways:**

**Link to work:**

[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)

[short-lnk](https://github.com/Christian1984/short-lnk)



### Day 13: July 12, 2017

**Today's Progress:**
- 100-DoC-Journal:
  - edit button functionality added
  - add scroll to form
- short lnk
  - added login callback
  - added logout functionality
  - added user-navigation based on their login-status
  - added onEnter-callbacks to the single routes to make sure that users will be redirected if their not supposed to this page (even if they use the backbutton (see below))
  - implemented replace-based-redirects
  - customized login error message
  - added simpl-schema package for schema validation
  - schema validation examples added
  - server-side validation of new user's email added
  - error-handling for failed validations added
  - router-code and server-code refactored


**Thoughts and Takeaways:**
- learned about how to user tracker.autorun() to react to logout and login events
- learned about how double falsification (!!var) turns any js-value into a real boolean
- learned how to navigate users around based on their login status and their location
- the tracker.autorun() approach is still vulnurable, because it only runs when someone logs in or out. hence, if someone manually uses the browser's back button, he can still access the requested route (even if it is only for authorized users)
- learned how to use Meteor.userId() to check if a user is authenticated or not and then route him with tracker.autorun() (on login/logout events) and routes' onEnter-callbacks.
- learned about the difference between a push-based-redirect and a replace-based-redirect (push-based can destroy the back button functionality)
- learned about schema-validation with simpl-schema
- learned about hooks on server side (e.g. Accounts.validateNewUser)
- learned about js exception handling (try-catch)
- learned about Robomongo / Robo 3T (https://robomongo.org) - great mongo db explorer/viewer

**Link to work:**

[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)

[short-lnk](https://github.com/Christian1984/short-lnk)



### Day 14: July 13, 2017

**Today's Progress:**
- implemented the "unsafe" query system that we also used in the score keep app
  - implemented the mongo-db-collection
  - add link function added
  - list rendering added by using Tracker.autorun() in combination with the life-cycle methods
- started to adding security to the short lnk app
  - removed package autopublish
  - to get started, created a publication and subscription to restore the original, autopulish-like behaviour which we will customize soon!

**Thoughts and Takeaways:**
- learned some basic theory about how to lock down data in a mongo db so that it can only be requested by authorised users with subscriptions and publications
- learned about react component life cycle methods componentDidMount() and componentWillUnmount()
- when using a router, the Tracker.autorun() functionality for rerendering must be called inside the individual component, as we cannot rerender the entire app
- forgetting a simple 'return' in a react component's render()-function is FREAKING(!) hard to debug!
- learned how to use the return value of Tracker.autorun() to keep a reference to the Tracker in order to stop it later.
  ```javascript
  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      let links = LinksCollection.find({}).fetch();
      this.setState({links});
    });
  }

  componentWillUnmount() {
    this.linksTracker.stop();
  }
  ```

- learned how to test if the stop call to the Tracker worked: log out (i.e. make sure that the component did unload), delete all links from the mongo db console and check if errors are thrown in the console (Can only update a mounted or mounting component)
- learned about the autopublish package, which comes bundled with meteor, and publishes ALL db collections to ALL clients. great for prototyping, but should be removed as soon as sensitive or user-specific data comes into play

**Link to work:**
[short-lnk](https://github.com/Christian1984/short-lnk)



### Day 15: July 14, 2017

**Today's Progress:**
- added userId of currently logged in user to links object (WARNING: THIS IS NOT A SECURE APPROACH)
- updated the publication so that it will only return links to the user with the corresponding userId
- created a very simple meteor method (greetUser) to illustrate how meteor methods work. it's amazing stuff!
- added arguments to the greetUser-meteor-method
- simulated throwing an exception inside the greetUser-meteor-method
- added addNumbers meteor method for practice purposes
- removed the 'insecure' package. from now on, db manipulation can only be done on the server side!
- added a meteor method 'links.insert' to insert new links into the collection on the server side.
- tested the auth-validation in the 'links.insert'-method by calling it from meteor.startup and being logged out. error shows in the console (y)!


**Thoughts and Takeaways:**
- thought about what "arrow-functions do not bind this"-means. will code a small example to better understand that soon (Codepen TODO!!!)
- learned about meteor methods
  - when calling a remote method on the server, it only runs there
  - when calling a remote method from the client it will run on BOTH, the client itself AND the server, thus allowing for optimistic ui! 
  - however, the callback will only be executed on the client.
  - the callback is coming from THE SERVER! the client side NEVER fires the callback itself!
- finally learned about the difference between == and === in javescript:
  - == checks for ABSTRACT equality, e.g. 3 == '3' returns true!
  - === checks for STRICT equality, e.g. 3 === '3' return false!!!
  - === also checks for identity!

**Link to work:**
[short-lnk](https://github.com/Christian1984/short-lnk)



### Day 16: July 15, 2017

**Today's Progress:**
- added schema validation for the url of the link object
- improved form behaviour based on successful insert / errors
- customized the error-message using the label-parameter of SimpleSchema
- updated the code to prevent re-throwing a meteor-error when a validation fails
- added a intercept handler for http requests
- temp: printed some infos about the request to the console
- temp: modified the result with some test data
- temp: added a static redirect to google
- implement the dynamic redirect
- added shortid-package to the project

**Thoughts and Takeaways:**
- learned how to use the label-property in a SimpleSchema-Object to customize the e.message that is thrown in case the validation failed
- learned how to avoid re-throwing a meteor-error when a validation fails using SimpleSchema.defineValidationErrorTransform()
- learned about node http and node connect
  - learned about how to intercept a request using the middleware `WebApp.connectHandlers.use((req, res, next) => { //do stuff; next()})`;
  - learned how to modify the server's response (status code, headers, body)
  - learned how to redirect on the middleware intercept
- httpstatuses.com lists all the http status codes!
- while mongo db's find() returns a cursor, findOne() returns the document directly. No fetch() needed here!

**Link to work:**
[short-lnk](https://github.com/Christian1984/short-lnk)



### Day 17: July 16, 2017

**Today's Progress:**
- added react-router package to 100-DoC-Journal app
- prepared the entire app to support multiple pages using router
- added tracker activation and stopping on component level
- other housekeeping, refactoring, renaming etc. done
- bug in may router fixed (due to upgrading to v4, which works a bit different than v3 which we used in the short lnk-app)
- added some temporary pages for login, signup and not found

**Thoughts and Takeaways:**
- browserHistory is no longer part of react-router (since v4). this is the new approach:
  - `import { createBrowserHistory } from 'history';` 
  - `let history = createBrowserHistory()`
  - pass history into router via `<Router history={createBrowserHistory()}>...</Router>`
- learned about how routers work in react-router v4. all routes must be nested in a `<Switch>...</Switch>`-Block and the '/' route must be qualified with exact (see here for details on exact: https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)

**Link to work:**

[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)



### Day 18: July 17, 2017

**Today's Progress:**
- added accounts-password package
- added simpl-schema package
- forms to login and signup form added
- logout button to TitleBar added
- added login/logout functionality
- added routing based on login-status
- added redirect on login/logout status change
- refactored login and signup page (form in seperate component)
- styled login and signup page

**Thoughts and Takeaways:**
- learned that onEnter is no longer a valid prop of a react-router's route. since v4 use 
  ```javascript
  <Route path='/path' render={() => { isAuthorized ? <MyTargetComponent /> : <Redirect to='/' /> }} />
  ```

**Link to work:**

[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)



### Day x: July x, 2017

**Today's Progress:**

**Thoughts and Takeaways:**

**Link to work:**
[]()
