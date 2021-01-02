<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [artify.js](#srchandlersartifyjs)
  - [change-separator.js](#srchandlerschange-separatorjs)
  - [checkScore.js](#srchandlerscheckScorejs)
  - [goToindexHandler.js](#srchandlersgoToindexHandlerjs)
  - [showResults.js](#srchandlersshowResultsjs)
- [listeners](#listeners)
  - [change-separator.js](#srclistenerschange-separatorjs)
  - [goToIndex.js](#srclistenersgoToIndexjs)
  - [inputting.js](#srclistenersinputtingjs)
  - [next.js](#srclistenersnextjs)
- [logic](#logic)
  - [allAnswers.js](#srclogicallAnswersjs)
  - [checkItem.js](#srclogiccheckItemjs)
  - [dataQuestions.js](#srclogicdataQuestionsjs)
  - [getNull.js](#srclogicgetNulljs)
  - [lastQuestion.js](#srclogiclastQuestionjs)
  - [lastQuestionSetter.js](#srclogiclastQuestionSetterjs)
  - [reverse.js](#srclogicreversejs)
  - [reviewArray.js](#srclogicreviewArrayjs)
  - [reviewQuizSetter.js](#srclogicreviewQuizSetterjs)
- [views](#views)
  - [artify.js](#srcviewsartifyjs)
  - [correctAnswer.js](#srcviewscorrectAnswerjs)
  - [green.js](#srcviewsgreenjs)
  - [newArrayWithoutEmptyView.js](#srcviewsnewArrayWithoutEmptyViewjs)
  - [red.js](#srcviewsredjs)
- [data.js](#srcdatajs)
- [init.js](#srcinitjs)
- [review.js](#srcreviewjs)

<!-- END TOC -->

<!-- BEGIN DOCS -->

---

# Handlers

Handler function define user interactions. They will:

- read user input from events and from the DOM
- read and modify program data variables
- process user data with logic functions
- update the DOM to show changes to the user
- log any important information for developers

---

### [./src/handlers/artify.js](./src/handlers/artify.js?study)

<a name="artifyHandler"></a>

## artifyHandler

creates a mirror-image rendering of the user input and displays the growing artwork

| Param | Type               | Description                                                |
| ----- | ------------------ | ---------------------------------------------------------- |
| event | <code>Event</code> | triggered whenever a user releases a key in the input area |

---

### [./src/handlers/change-separator.js](./src/handlers/change-separator.js?study)

<a name="changeSeparatorHandler"></a>

## changeSeparatorHandler

changes the program's separator value

| Param | Type               | Description                                                 |
| ----- | ------------------ | ----------------------------------------------------------- |
| event | <code>Event</code> | triggered whenever a user types in the separator input area |

---

### [./src/handlers/checkScore.js](./src/handlers/checkScore.js?study)

<a name="checkScore"></a>

## checkScore(e)

update the score and store it in localStore

| Param | Type           | Description |
| ----- | -------------- | ----------- |
| e     | <code>e</code> | event       |

---

### [./src/handlers/goToindexHandler.js](./src/handlers/goToindexHandler.js?study)

<a name="goToIndex"></a>

## goToIndex

opens index.html

| Param                                     |
| ----------------------------------------- |
| =>{window.location.replace("./index.html" |

---

### [./src/handlers/showResults.js](./src/handlers/showResults.js?study)

<a name="showResults"></a>

## showResults()

opens ./review.html

[TOP](#DOCS)

---

---

# Listeners

Event listeners are used to connect handler functions to user interactions with the DOM.

You can use the same handler in many different listeners, or add more than one listeners to the same DOM element.

---

### [./src/listeners/change-separator.js](./src/listeners/change-separator.js?study)

<a name="change separator
calls handler that changes the mirror-arts separator"></a>

## change separator

calls handler that changes the mirror-arts separator

---

### [./src/listeners/goToIndex.js](./src/listeners/goToIndex.js?study)

---

### [./src/listeners/inputting.js](./src/listeners/inputting.js?study)

<a name="user input
calls the reverseHandler when a user types in the input field"></a>

## user input

calls the reverseHandler when a user types in the input field

---

### [./src/listeners/next.js](./src/listeners/next.js?study)

[TOP](#DOCS)

---

---

# Logic

Logic functions are pure functions. They take primitives, objects or arrays as arguments and they return primitives, objects or arrays. Handlers will use logic functions to transform user input.

Logic functions will _never_ ...

- read from the DOM
- write to the DOM
- use events
- use prompt/alert/confirm
- use data that is not passed as a parameter

---

### [./src/logic/allAnswers.js](./src/logic/allAnswers.js?study)

---

### [./src/logic/checkItem.js](./src/logic/checkItem.js?study)

<a name="checkitem"></a>

## checkitem()

takes care of the Bootstrap carousel component and creates the UI

---

### [./src/logic/dataQuestions.js](./src/logic/dataQuestions.js?study)

<a name="dataFunction"></a>

## dataFunction

reads data and creates all the elements of the UI

---

### [./src/logic/getNull.js](./src/logic/getNull.js?study)

<a name="getNull"></a>

## getNull

creates an array for localStorage's items called 'newArrayWithEmpty'

---

### [./src/logic/lastQuestion.js](./src/logic/lastQuestion.js?study)

<a name="lastQuestion"></a>

## lastQuestion

set the UI for the last button to review the quiz

---

### [./src/logic/lastQuestionSetter.js](./src/logic/lastQuestionSetter.js?study)

<a name="lastQuestionSetter"></a>

## lastQuestionSetter

set the event listener for the last question

| Param | Type                | Description              |
| ----- | ------------------- | ------------------------ |
| id    | <code>string</code> | the id of the UI element |

---

### [./src/logic/reverse.js](./src/logic/reverse.js?study)

<a name="reverse"></a>

## reverse ⇒ <code>string</code>

reverses a string

**Returns**: <code>string</code> - the string reversed

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| input | <code>string</code> | a string to reverse |

---

### [./src/logic/reviewArray.js](./src/logic/reviewArray.js?study)

<a name="getArray"></a>

## getArray()

creates the array of the answers given by the user, 'newArrayWithoutEmpty'

---

### [./src/logic/reviewQuizSetter.js](./src/logic/reviewQuizSetter.js?study)

<a name="reviewQuizSetter"></a>

## reviewQuizSetter

add the event listener to the button of the very last question

| Param | Type                | Description              |
| ----- | ------------------- | ------------------------ |
| id    | <code>string</code> | the id of the UI element |

[TOP](#DOCS)

---

---

# Views

View functions are pure functions used to render JS data into DOM elements. They take primitives, objects or arrays as arguments and they return primitives, objects or arrays. Handlers will use view functions to render program state and update the UI.

VIEW functions will _never_ ...

- read from the DOM
  - they will create _new_ DOM elements
- write to the DOM
  - they return a DOM element that the handler will append
- use events
- use prompt/alert/confirm
- use data that is not passed as a parameter

---

### [./src/views/artify.js](./src/views/artify.js?study)

<a name="artify"></a>

## artify ⇒ <code>HTMLPreElement</code>

creates a PRE element with artful text
each line in the provided array will be mirrored around the separator

**Returns**: <code>HTMLPreElement</code> - a PRE element with the rendered string content

| Param     | Type                              | Description                                                                       |
| --------- | --------------------------------- | --------------------------------------------------------------------------------- |
| lines     | <code>Array.&lt;string&gt;</code> | an array of strings, each one will be mirrored around the separator on a new line |
| separator | <code>string</code>               | the string to separate mirrored lines                                             |

---

### [./src/views/correctAnswer.js](./src/views/correctAnswer.js?study)

<a name="correctAnswer"></a>

## correctAnswer()

returns text and a css class

---

### [./src/views/green.js](./src/views/green.js?study)

<a name="green"></a>

## green()

returns a css class

---

### [./src/views/newArrayWithoutEmptyView.js](./src/views/newArrayWithoutEmptyView.js?study)

<a name="newArrayWithoutEmptyView"></a>

## newArrayWithoutEmptyView(index, element) ⇒

returns a string and a css class

**Returns**: string

| Param   | Type                | Description |
| ------- | ------------------- | ----------- |
| index   | <code>string</code> | string      |
| element | <code>string</code> | string      |

---

### [./src/views/red.js](./src/views/red.js?study)

<a name="red"></a>

## red()

returns a css class

[TOP](#DOCS)

---

---

## [./src/data.js](./src/data.js?study)

## Constants

<dl>
<dt><a href="#data">data</a></dt>
<dd><p>data that is saved and used between user interactionss</p>
</dd>
<dt><a href="#quizData">quizData</a></dt>
<dd></dd>
</dl>

<a name="data"></a>

## data

data that is saved and used between user interactionss

**Properties**

| Name      | Type                              | Description                          |
| --------- | --------------------------------- | ------------------------------------ |
| separator | <code>string</code>               | the full user artwork                |
| lines     | <code>Array.&lt;string&gt;</code> | all the lines that have been entered |

<a name="quizData"></a>

## quizData

---

## [./src/init.js](./src/init.js?study)

---

## [./src/review.js](./src/review.js?study)

<!-- END DOCS -->
