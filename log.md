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



### Day 19: July 18, 2017

**Today's Progress:**
- started building the js drumkit from JavaScript 30, https://courses.wesbos.com/
- styled the drumkid with css
- refactored the drumkit

**Thoughts and Takeaways:**
- got into some basic, vanilla javascript
- learned about attribute selectors (e.g. `let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);`)
- learned about transitionend event handlers and how every single transition in a css `transition: all`-property fire individually
- to vertically center items inside a flex container, set that flexcontainers css like:
```css
.keys {
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center; //aligns vertically
  justify-content: center; //aligns horizontally
}
```

**Link to work:**

[Javascript Drumkit](http://apps.chris-hoffmann.ch/javascript30/jsdrumkit/)



### Day 20: July 19, 2017

**Today's Progress:**
- boilerplate (html and css) for css and js watch project created
- digital stopwatch implemented
- digital watch implemented
- basic styling done
- functionality and styling for analog clock added
- refactored code
- removed stopwatch
- added background
- used absolute positioning inside relative positioned parent instead. obviously, the previous approach didn't work

**Thoughts and Takeaways:**
- worked with a combination of absolute positioning and flexbox. not sure if that's rock solid, but it seems to work
- learned about how to apply a transform operation to an element through js
- learned how to use `transform-origin` in css
- learned about http://unsplash.it - pretty cool for getting quick results
- recap regarding absolute & relative positioning (https://www.youtube.com/watch?v=aFtByxWjfLY) -> if you want the child, which is positioned absolute to honor the position of its parent, that parent needs position relative!

**Link to work:**

[CSS Clock](http://apps.chris-hoffmann.ch/javascript30/css-clock/)



### Day 21: July 20, 2017

**Today's Progress:**
- started building a breakout clone with what I've learned from the css clock project
- added blocks, collision detection, scores etc. it's a game!

**Thoughts and Takeaways:**
- i made an entire game in one day! pretty cool :-)

**Link to work:**

[Javascript 30 Repository](http://apps.chris-hoffmann.ch/javascript30/)



### Day 22: July 21, 2017

**Today's Progress:**
- watched a few bootstrap tutorials



### Day 23: July 22, 2017

**Today's Progress:**
- applied updates to my shopify store
- started building a very simple shopify plugin



### Day 24: July 23, 2017

**Today's Progress:**
- worked on the shopify app
- learned a few basics about liquid



### Day 25: July 24, 2017

**Today's Progress:**
- worked on and deployed the shopify app



### Day 26: July 25, 2017

**Today's Progress:**
- worked on further customization of my shopify store. created a rumbling add to cart button and added a free shipping label



### Day 27: July 26, 2017

**Today's Progress:**
- worked on some backend stuff on 100DoC Journal
  - list empty notification updated and styled
  - added schema validation to account creation
  - autopublish package removed and serverside publication implemented
  - added back the old functionality without autopublish. up next: return only user-specific data
  - data is now queried on a per user-basis, i.e. queries now include user ids.

**Link to work:**

[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)



### Day 28: July 27, 2017

**Today's Progress:**
- worked on some backend stuff on 100DoC Journal
- implemented server side validation when writing to db via Meteor.methods
- added username to user signup
  

**Thoughts and Takeaways:**
- learned about React's **Stateless Functional Components**
- Learned about the concept of "Presentational Components" vs. "Container Components"

**Link to work:**

[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)



### Day 29: July 28, 2017

**Today's Progress:**
- added a home button
- added a log-view component that allows read access to ANYONE's log!
- added an http-request-interceptor to allow read-access to other people's log by typing <url>/<username>

**Link to work:**

[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)



### July 29, 2017
**skipped :-/** 



### Day 30: July 30, 2017

**Today's Progress:**
- added call to actions to share journals on the journal page and another to signup for a new account on the journalViewer
- added some config stuff in order to deploy my app to heroku
- deployed the 100-DoC-Journal-App to Heroku! HOW AWESOME!!!

**Link to work:**

[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)



### Day 31: July 31, 2017

**Today's Progress:**
- fixed a bug in 100-DoC-Journal app:
- date textbox has a placeholder now showing in browsers that do not support datepickers
- date entered will be regEx-validated on the backend

**Link to work:**

[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)



### Day 32: August 01, 2017

**Today's Progress:**
- fixed schema-validation regEx-bug in 100DoC-App
- timer gets automatically updated if there is already a log entry for the current day

**Link to work:**

[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)



### Day 33: August 02, 2017

**Today's Progress:**
- added a new stats bar to the 100-DoC-App (longest streak, average coding time etc.)
- refactored some stuff
- added code to avoid logs submitted for future dates (today + 1)
- stats bar added to JournalViewer as well
- added flex-grow to timer, text centered

**Link to work:**

[100-days-of-code-journal-app](https://github.com/Christian1984/100-days-of-code-journal)



### Day 34: August 03, 2017

**Today's Progress:**
- got my feet wet with cppcms on my local machine
- compiled and installed the make recipe on my linux vm
- followed along the hello world tutorial and fixed several issues along the way



### Day 35: August 04, 2017

**Today's Progress:**
- extracted two parts of the link-page into their own components to follow the single responsibility principle
- turned several components that do not manage any state into "stateless functional components"
- removed unneccessary imports
- did some minor refactoring (LinkItem renamed to LinksListItem) for consistency purposes
- added npm-package clipboard
- added copy-to-clipboard feature to LinksListItem
- destroy clipboard in componentWillUnmount-LC-method
- added ui-feedback on clipboard-copy-success

**Thoughts and Takeaways:**
- access props in stateless functional components like this:
```javascript
  import React from 'react';
  import PropTypes from 'prop-types';

  import { Accounts } from 'meteor/accounts-base';

  export default PrivateHeader = (props) => {
    return (
        <div>
          <h1>{props.title}</h1>
          <button onClick={() => Accounts.logout()}>Logout</button>
        </div>
      );
  };

  PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired
  }
```

- learned about Meteor-Method `Meteor.absoluteUrl('abcd')`to get the absolute url and attach /abcd
- learned how to use `document.execCommand('copy')`in order to copy stuff to the clipboard
- learned how to use an input field, run the `select()` command on it and then copy it to the clipboard

**Link to work:**

[short-lnk](https://github.com/Christian1984/short-lnk)



### Day 36: August 05, 2017

**Today's Progress:**
- updated the old links in the db to feature the new visible property, so that links can be hidden
- worked on the hide-links feature
- meteor session package added
- checkbox added to LinksList component
- checkbox extracted to own component
- url-input turned into a controlled input
- checkbox turned into a controlled input

**Thoughts and Takeaways:**
- learned how to use `db.links.updateMany({}, { $set: { visible: true } })` to update all entries in a given collection
- I tried to get the hide feature up and running with a simple component state. this does not work though, because filtering happens in the db-call inside the Tracker.autorun(), which DOES NOT rerun if the state changes. Hence, the session package must be used, which is reactive!
- learned how to use session-variable with `Session.set(key, value)`and `Session.get(key)`. If the getter is called inside a `Trackker.autorun()` this method will rerun everytime the Session-value changes.
- using session variables also allows for an easy way to spread out functionality accross multiple components, without wiring everything up with external event listeners!
- initially, the checkbox is an "uncontrolled input", we can make it a controlled input by
  - add a state to the component
  - set the value of the input to the state
  - provide an onChange-Handler
  - validate, update state in the onChange-Handler

**Link to work:**

[short-lnk](https://github.com/Christian1984/short-lnk)



### Day 37: August 06, 2017

**Today's Progress:**
- updated the old links in the db: added visitedCount and lastTimeVisited for analytics
- added analytics to each short-link: visitedCount gets incremented by 1 and lastVisited at gets set to the current timestamp
- dump the new information to the screen when rendering LinksListItems
- added moment.js to the project
- used moment.js and its `fromNow()` method to show some nice stats like 'visited x minutes ago'
- added conditional rendering to the stats subrender
- added the react-modal npm package
- moved the link-add form into a react modal
- added a button to open the modal using the form component's state
- programatically switched focus to the link input field in the modal's `onAfterOpen`-prop
- user can now close the modal when clicking outside of it
- added an anchor tag to follow the short-link

**Thoughts and Takeaways:**
- learned about moment.js's `fromNow()` method
- learned about react modals
- learned how to programatically switch focus to a ref with e.g. `this.refs.url.focus()`
- learned how to close the modal when clicking outside of it with adding functionality to the modal's`onRequestClose`-prop

**Link to work:**

[short-lnk](https://github.com/Christian1984/short-lnk)



### Day 38: August 07, 2017

**Today's Progress:**
- added fourseven:scss package
- switched from css to scss file extensions
- added partials, folder architecture and import hierarchy (boiler plate)
- styled login and signup forms (except button, leave that for tomorrow)

**Thoughts and Takeaways:**
- learned how to select a subset of html-elements in (s)css like so: `input[type=text], input[type=email], input[type=password] {}`

**Link to work:**

[short-lnk](https://github.com/Christian1984/short-lnk)



### Day 39: August 08, 2017

**Today's Progress:**
- styled the buttons
- styled the <a>-tags to look like buttons
- styles the pill-buttons
- styled the modal dialog
- freestyle-styled the title-bar... will check against the solution tomorrow

**Thoughts and Takeaways:**
- learned that <a>-tags are INLINE-tags by default. use `display: block;` to turn them into block elements, so that margins from other elements have an impact on them
- learned how to add classes to the react-modal-dialog by setting the `<Modal>` component's classes with the properties `className` and `overlayClassName`
- learned how to use `display: fixed` and `top: 0`, `bottom: 0`, `left: 0` and `right: 0` to make sure the modal dialog covers the entire viewport
- learned to use the `type='button'` property for a `<button>`-element inside a form in order to prevent that buttom from submitting the form (which is the default behaviour)
- learned about scss-function `fade-out` to add transparency to a given color

**Link to work:**

[short-lnk](https://github.com/Christian1984/short-lnk)



### Day 40: August 09, 2017

**Today's Progress:**
- styled the title-bar a bit more
- styled the checkbox
- ran into a problem and asked a question in the forums: https://www.udemy.com/meteor-react/learn/v4/questions/2673066
- styled the link list items and the status message if list is empty
- added the react-flip-move library
- added the `<meta name='viewport' content='width=device-width, initial-scale=1' />` meta tag to main.html to make the app look good on mobile devices

**Thoughts and Takeaways:**
- `<label>`-elements from checkboxes need that exact same `display: block;` property set for margins to take effect

**Link to work:**

[short-lnk](https://github.com/Christian1984/short-lnk)



### Day 41: August 22, 2017

**Today's Progress:**
- started flexbox zombies. great course
- built a rotating cube with html and css

**Thoughts and Takeaways:**
- learned a bit more about `display: flex`, `flex-direction`, `justify-content` and `align-items`
- learned a lot about git stash, use it all the time now :-D



### Days 42-47: November 13-27, 2017

**Progress:**
- built a first draft of "Project Stats", a project cars stats webapp, that uses CREST to fetch data from Project Cars 1 and 2.

**Thoughts and Takeaways:**
- learned tons about chart.js
- got started with bootstraü

**Link to work:**

[pstats](https://github.com/Christian1984/pcars-web-viewer)



### Days 48: November 28, 2017

**Progress:**
- returned to Javascript 30, Project 3 on the train to munich today
- worked on Project 4 (Array Cardio Day 1)

**Thoughts and Takeaways:**

***Part 1 - CSS Variables***
- learned about how css variables work. pretty cool :-)
- learned how css variables are defined with --variable
- learned that :root can be used as a css selector, which refers to the html element in html documents
- learned how to use css vars by calling var(--varname) on them, e.g.
```css
:root {
  --spacing: 10px;
}

img {
  padding: var(--spacing); 
}
```

- learned about css' `filter: blur(10px);` - That's pretty nice, and works on text well :-)
- got a short refresher on how data-... attributes can be accessed through javascript (, e.g. access element's data-hello attribute through element.dataset.hello)
- learned how css variables can be modified from javascript with `document.documentElement.style.setProperty('--varName', newValue);`
- learned how to read a css variable from javascript by using `let cssBaseColor = getComputedStyle(document.body).getPropertyValue('--base');`


***Part 2 - Array Cardio***
- learned about how arrays' filter method works
- also, learned about console.table() which could come in really handy!!! e.g.
```javascript
let fifteen = inventors.filter((inventor) => {
if(inventor.year >= 1500 && inventor.year < 1600) {
  return true; //means keep it!
}
});

console.table(fifteen);
```

- learned about how sort works: it always compares two elements, returns either 1 or -1 based on whether an item should bubble up or down. pretty simple, once someone explains it :-)
- learned how reduce works and what it does, e.g.
```javascript
let totalYears = inventors.reduce((total, inventor) => 
  total + (inventor.passed - inventor.year), 0); 
// that zero at the end is important, as it initialized the "total" var
    
```

**Link to work:**

[Javascript 30 Repository](http://apps.chris-hoffmann.ch/javascript30/)



### Days 49: November 29, 2017

**Progress:**
- worked on Javascript 30 Project 5 (Flex Panel Gallery)

**Thoughts and Takeaways:**
- kind of a refresher on how to add and remove classes to html elements with pure ES6
- how append eventlisteners, especially for transitions etc
- cool project!

**Link to work:**

[Javascript 30 Repository](http://apps.chris-hoffmann.ch/javascript30/)



### Days 50: November 30, 2017

**Progress:**
- worked on Javascript 30 Project 6 (Type Ahead)

**Thoughts and Takeaways:**
- learned about a pretty big misunderstanding regarding const and let in ES6. Thought they're the same. Turns out, they're not!!! (https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)
- learned about `fetch`, which is a new browser keyword that fires an ajax query against a given endpoint. it returns a promise! use `.then(callback)` to access the results! e.g.
```javascript
fetch(endpoint)
  .then(prom => prom.json())
  .then(data => {
    cities.push(...data);
    console.log(cities);
  });
```

**Link to work:**

[Javascript 30 Repository](http://apps.chris-hoffmann.ch/javascript30/)



### Days 51: December 16, 2017

**Progress:**
- started to get into unity by taking the Roll A Ball tutorial (https://unity3d.com/de/learn/tutorials/s/roll-ball-tutorial)

**Thoughts and Takeaways:**
- learned the difference between Update(), FixedUpdate() (for physics) and LateUpdate() (for operations that need to be made after the entire scene has been modified, e.g. control camera)
- reminder: if you want to make your game framerate independent, multiplay modifications with Time.deltaTime, e.g. `transform.Rotate (new Vector3 (15, 30, 35) * Time.deltaTime);` means: rotate my Transform every second by the given Vector, NOT every frame!


**Link to work:**

[Roll A Ball](https://github.com/Christian1984/UnityRollABall)



### Days 52: December 17, 2017

**Progress:**
- kept working on the Roll A Ball tutorial (https://unity3d.com/de/learn/tutorials/s/roll-ball-tutorial)
- finished and built for macos. pretty slick!

**Thoughts and Takeaways:**
- learned how to use tags to identify certain objects (the pickups in this example): add a tag to a gameobject or prefab in the editor, and then use `if (other.gameObject.CompareTag("pickup")) {...}` to compare the tag in conditional statements.
- learned that unity treats static and dynamic colliders differently: in order to stay performant, you want to make sure that moving objects are considered as "dynamic", so that unity does not have to update the static collider cache every frame. this can be achieved by adding a Rigidbody component to the gameobject and then checking "Is Kinematic" in the editor. That way, the gameobject is considered dynamic, while it does not react to physical impact (like gravity, forces).

THIS IS VERY IMPORTANT:

  - RIGIDBODIES are moved using PHYSICS
  - KINEMATIC RIGIDBODIES are moved using their TRANSFORM

- learned that any scripts using UI elements must include UnityEngine.UI
 

**Link to work:**

[Roll A Ball](https://github.com/Christian1984/UnityRollABall)





### Day x: July x, 2017

**Today's Progress:**

**Thoughts and Takeaways:**

**Link to work:**
[]()
