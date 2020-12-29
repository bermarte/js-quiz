'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!
    your handlers will query the DOM each time they need to make a change

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners

*/

// this is example data for the starter demo
//  delete this data when you begin and use the own quiz data instead
/**
 * data that is saved and used between user interactionss
 * @property {string} separator - the full user artwork
 * @property {string[]} lines - all the lines that have been entered
 */
export const data = {
  separator: '|',
  lines: [],
};

// here's a suggestion for your game's state, see if this works for your team
//  there are many ways to represent your game as data!
/**
 *
 */
export const quizData = {
  quiz: {
    // how many questions has the user answered?
    //  you can calculate this value by iterating through the questions
    //  is selected === null?
    answered: 0,
    // how many correct answers has the user submitted?
    //  you can calculate this value by iterating through the questions
    //  is selected === correct?
    correct: 0,
  },
  // the questions in the quiz
  questions: [
    {
      text: '1.Which built-in method returns the calling string value converted to lower case?',
      answers: {
        a: 'toLowerCase()',
        b: 'toLower()',
        c: 'changeCase(case)',
        d: 'None of the above.',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Lower Case',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase',
        },
        {
          text: 'Lower Case',
          href: 'https://www.w3schools.com/jsref/jsref_tolowercase.asp',
        },
      ],
    },{
      text: '2.Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?',
      answers: {
        a: 'pop()',
        b: 'push()',
        c: 'join()',
        d: 'map()',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'add elements',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
        },
        {
          text: 'add elements',
          href: 'https://www.w3schools.com/jsref/jsref_push.asp',
        },
      ],
    },{
      text: '3.which of this is not! comparison operator? ',
      answers: {
        a: '<',
        b: '>',
        c: '==',
        d: '=>',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'comparison operators',
          href: 'https://www.w3schools.com/js/js_comparisons.asp',
        },
        {
          text: 'comparison operators',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators',
        },
      ],
    },{
      text: '4.how many parameters can be passed for a function?',
      answers: {
        a: '2',
        b: 'none',
        c: 'as much as u want',
        d: '1',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'parameter rules',
          href: 'https://www.w3schools.com/js/js_function_parameters.asp',
        },
        {
          text: 'functions',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions',
        },
      ],
    },{
      text: '5.Inside which HTML element do we put the JavaScript?',
      answers: {
        a: '<js>',
        b: '<javaScript>',
        c: '<script>',
        d: '<body>',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'tags',
          href: 'https://www.w3schools.com/tags/tag_script.asp',
        },
        {
          text: 'tags',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script',
        },
      ],
    },{
      text: '6.How do you write "Hello World" in an alert box?',
      answers: {
        a: 'msg(Hello World',
        b: 'prompt(Hello world)',
        c: 'message(hello World)',
        d: 'alert(Hello World)',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'alert box msg',
          href: 'https://www.w3schools.com/jsref/met_win_alert.asp',
        },
        {
          text: 'alert box msg',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/alert',
        },
      ],
    },{
      text: '7.How do you call a function named "myFunction"?',
      answers: {
        a: 'myFunction()',
        b: 'function.myFunction',
        c: 'let function',
        d: 'const function',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'call function',
          href: 'https://www.w3schools.com/js/js_function_call.asp',
        },
        {
          text: 'call function',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions',
        },
      ],
    },{
      text: '8.How to write an IF statement in JavaScript?',
      answers: {
        a: 'if else (a === b)',
        b: 'if a(===b)',
        c: 'else if (a)==b',
        d: 'if (a === b)',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'if statement',
          href: 'https://www.w3schools.com/js/js_if_else.asp',
        },
        {
          text: 'if else',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else',
        },
      ],
    },{
      text: '9.How does a FOR loop start?',
      answers: {
        a: 'for (const i = 0; i < 5; i++)',
        b: 'for (i = 0; i < 5; i++)',
        c: 'for const (i = 0; i < 5; i++)',
        d: 'for let (i = 0; i < 5; i++)',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'for loop',
          href: 'https://www.w3schools.com/js/js_loop_for.asp',
        },
        {
          text: 'for loop',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration',
        },
      ],
    },{
      text: '10.Which event occurs when the user clicks on an HTML element?',
      answers: {
        a: 'hover',
        b: 'button',
        c: 'onclick',
        d: 'onchange',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'click event',
          href: 'https://www.w3schools.com/jsref/event_onclick.asp',
        },
        {
          text: 'events in js',
          href: 'https://www.w3schools.com/js/js_events.asp',
        },
      ],
    },
  ],
};
