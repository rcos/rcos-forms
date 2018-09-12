AGENDA


Getting Started
- What is Vue?

A reactive, progressive framework for client-side app development based on components.


Reative is a term used to describe the relationship between your data and the user interface.

Specifically, it implies that the UI will update as your data changes - unlike using libraries like jQuery to build interactivity into your UI where you have to manually update HTML elements, a reactive framework will update it automatically.


Progressive describes the scope of the framework - meaning that it's a framework in which you can incrementally opt-in to new features and functionality, as opposed to more monolithic frameworks like Angular and Ember where features must be opted-out of.


Let's start. Everybody should open the up the file '/src/components/Hello.vue'.

So - I mentioned the Vue is a component-based framework.

Other frameworks like React and Polymer are follow the component paradigm.

Vue leans into this methodology by introducing it's own filetype - the `dot vue` file.

A `.vue` file encapsulates a single component's definition - this includes everything the component needs - an HTML template, a JavaScript tag, and a Style tag.

Browser's don't interpret `.vue` files natively - instead we process our source code through a compiler to generate browser-compatible code.

We won't go too deep into this process - but we're using a module bundler called Webpack to compile our code.

This stack also gives us a handful of useful features you should be aware of:



- Live Reload

EXAMPLE EXAMPLE

change something, and the browser will automatically update, no there's no need to manually refresh.



- Live linting & error checking.

EXAMPLE EXAMPLE

if you produce a syntax error, or break a style rule, the compiler will short-circuit until you resolve the issue. This could be a little frustrating at first - but it ensures that your development team produce really consistently and it will really force you to prodduce better code. You'll get used to it quickly.



OKAY - let's start playing around with the framework and and get a feel for the sorts of stuff we can do with Vue.

Any questions before we dive in?



TEMPLATES

So as you can see from our template we're basically just writing HTML. We've got Bootstrap and FontAwesome loaded up, so we can use all those styles as needed.

EXPLAIN FONT AWESOME QUICK



SCRIPT TAG

This is where the JavaScript for our component is defined - a component could be as simple as an empty JavaScript object (btw, if you're new to JS - an object is a dictionary - key/value data structure). Our basic component only has a `name` attribute, which is optional.



STYLE TAG

This is where can write any styles for our component. We can even scope our styles to this specific component, which is great because we can nsure that we don't pollute the global CSS namespace with any component-specific styles.

// // // // //


What we've got right now is great for static HTML - but we want our UI to display some data.

During the course of this talk we're going to add several top-level attributes and functions to our component - the first of which will be the `data` function.

ADD DATA FUNCTION - describe ES6 object-attribute function syntax `func: () {}`.

Our data function can perform any operations, but it must return an object. Let's return an object with key `msg` - this can be any message.




<!-- LETS USE OUR DATA IN THE TEMPLATE -->

So if we save the file, nothing happens - we've got to add some special syntax to our template to display this attribute.

Handlebars template language style {{ msg }}.

THESE ALLOW US TO RENDER DATA IN BETWEEN HTML ELEMENTS.

Let's change the `msg` value and save - reloads value automatically.



<!-- DIRECTIVES -->
A diretive in vue is just an HTML attribute prefixed with `v-`

A LOT OF THE MAGIC OF VUE COMES FROM DIRECTIVES

THEY'RE USED TO KEEP OUR TEMPLATES STRUCTUR REACTIVE



<!-- OUR FIRST DIRECTIVE  -->
<!-- LETS USE V-MODEL DIRECTIVE TO CHANGE OUR DATA -->
This binds the value of an attribute of the component's data to the user-interface - so things like checkboxes




<!-- EVALUATING INSIDE HANDLEBARS -->
Let's add a different attribute - `checked` - and set the value to `true`.

So those handlebars can also evaluate basic expressions:

{{ checked ? 'Go' : 'Stop' }}

Let's add a checkbox to and use V-BIND to wire it up to the `checked` attribute




<!-- NOW LETS MAKE OUR HTML STRUCTURE DATA-REACTIVE -->

Vue gives us some special syntax to do this: V-IF

We can attach the v-if tag to any HTML element to conditionally render it.

Let's use the let's used the `checked` variable to conditionally render an icon.

<i class='fa fa-check' v-if="checked"></i>

`v-if` is special because the value inside those parentheses are evaulated as an expression - so we can put an expression in there.

Let's do that for a non-checked icon
<i class='fa fa-times' v-if="!checked"></i>


<!-- COOL!  -->
<!-- Let's work with some more complex data -->
<!-- Any questions before we move forward, 5 minute break? -->


<!-- LETS CONTINUE -->
<!-- DEFINE DATA.TODOS - STUDY SLEEP EAT CODE -->
<!-- label & done attributes -->
todos: [
  { label: 'Study', done: true },
  { label: 'Sleep', done: false },
  { label: 'Eat', done: true },
  { label: 'Code', done: true }
]

Just like V-IF, Vue gives us some a loop directive so our templates can render things like arrays and collections

v-for="each in todos" v-key="each.label"


WE HAVE A LIST!


<!-- LETS MAKE SOME HTML ATTRIBUTES REACTIVE -->
<!-- EVALUATING WITH V-BIND -->
So we've conditionally rendered content between our HTML elements

Let's go a level deeper and start modifying some of the attributes those elements.

We can't use handlebars for HTML attributes - so Vue gives us a directive

`v-bind:attr` is used to dynamically assign value to an HTML attribute


<!-- COOL, BUT IT'S A LITTLE TIGHT THERE -->
