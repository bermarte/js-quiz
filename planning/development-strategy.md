# JavaScript Quiz

You can test your JavaScript skills with this Quiz. The test contains n. questions and there is no time limit.    

Aim of the project is to learn to work in group and to adopt the SoC design principle.    
From [Wikipedia:](https://en.wikipedia.org/wiki/Separation_of_concerns)   
>In computer science, separation of concerns (SoC) is a design principle for separating a computer program into distinct sections such that each section addresses a separate concern. A concern is a set of information that affects the code of a computer program.

Another concept we need to put into practice is that of **state** of an application.    
From [Wikipedia:](https://en.wikipedia.org/wiki/State_(computer_science))    

>A computer program stores data in variables, which represent storage locations in the computer's memory. The contents of these memory locations, at any given point in the program's execution, is called the program's state.    

From [reecodecamp.org:](https://www.freecodecamp.org/news/state-in-javascript-explained-by-cooking-a-simple-meal-2baf10a787ee/)
>**State** describes the status of the entire program or an individual object. It could be text, a number, a boolean, or another data type. It's a common tool for coordinating code. For example, once you update state, a bunch of different functions can instantly react to that change.

[Go to the README](https://github.com/bermarte/js-quiz/blob/master/README.md)

---

## Data

> describe the data used in your project.

We use JSON to store the data and the state of the application; data types are arrays and objects. Data is stored in an array of objects containing objects and arrays.

- Questions
- Answers (multiple answers for each question)
- Answer choosen by the user
- Score
- Resorces links

---

## User Story Dependencies

![Story Dependency Diagram]()

---

## WIREFRAME

![wireframe]()

---

## 0.Setup

- [x] Create a [repo](https://github.com/bermarte/js-quiz) using the starter template
- [x] Invite members
- [x] Create the github page for the repo
- [x] clone or fork the repository
- [x] Study and modify the backlog
- [x] Devise a development strategy
- [ ] Design a wireframe to set guidelines for UI/UX design

This user story is developed on branch `master`

---

## 1. Initialize Application

**As a user I want to see the home page when I load the page**

By accessing the web page, I see a welcome message and button to start the quiz


- This user story is developed on branch `welcome`.

- [ ] create the HTML and the CSS
- [ ] add the start button

---

## 2. Begin the Quiz

**As a user I want to see at least 8 quiz questions**
- _I am able to see a list of questions.
- _I have a button to choose **start** quiz_
- _I click the start button and I go to question number one_
- ...

### REPO

- This user story is developed on the branch `start-quiz`
- This branch is merged to the `master` branch after completion.

### Task A
show the list of questions for all users.
### Task B
show list of question and answers if user is loged in.
### Task C
**start** button in main page allows user to start the quiz.
### Task D
user can see only one question at a time along with answer options.
---

## 3. Select an answer

**As a user I want to select my answer for each quiz question**

- _I have one question with multiple answer chooices_
- _I select one answer if it was correct it shows in green color_
- _if answer is wrong it shows in red color_
- _I have a timer that limits the time for choosing answer_
- ...

### REPO

- This user story is developed on the branch `select-answer`
- This branch is merged to the `master` branch after completion.

### Task A
show one question with multiple answer options.
### Task B
use radio button if there is one correct option.
### Task D
use chekboxes if there is more than one correct options.
### Task E
the correct answer shows in green color.
### Task F
the wrong answer shows in red color.
### Task G
show a timer with 30 sec count down for answering each quesion (progress bar and count down is optional).
---

## 4.a View Score

**As a user I want to see my score**
- _if the percentage was less than 50% show me a failed massage_
- _I can see my score at the end of quiz_
- _I can see my score after selecting the answer for each question_

- ...

### REPO

- This user story is developed on the branch `score`
- This branch is merged to the `master` branch after completion.

### Task A
increase the score by one after selecting a right answer.
### Task B
no increment if the answer is wrong.
### Task C
show the score after each selection.
### Task D
show the total score at the end of quiz.
### Task E
show the score percentage with failed or passed result (with an Emoji, is optional)

---

## 4.b Get Feedback

**As a user I want to know the correct answers for incorrect questions**

- _show me the correct answer if I choosed wrong option_
- _I can see the right answer for each question along with my score_
- ...

### REPO

- This user story is developed on the branch `correct-answer`
- This branch is merged to the `master` branch after completion.

### Task A
show the correct answer in green color
### Task B
show all correct answers if there was more than one options
### Task C
show the score along with answer.

---

## 5. Cheat

**As a user I want to be able to see the correct answers without taking the quiz**

- _if you I am registered user_
- _and I have my login info then I am able to see the answers without taking the quiz_
- ...

### REPO

- This user story is developed on the branch `cheat`
- This branch is merged to the `master` branch after completion.

### Task A
all questions are available for loged in users.
### Task B
user is able to see the answers by hovering on the question.
### Task ...

---
