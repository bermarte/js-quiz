# JavaScript Quiz

You can test your JavaScript skills with this Quiz. The test contains n. questions.    

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

![figma](https://www.figma.com/file/1bbko0Mkahhhc3SGKBvXek/js-quiz?node-id=0%3A1)

---

## 0.Setup

- [x] Create a [repo](https://github.com/bermarte/js-quiz) using the starter template
- [x] Invite members
- [x] Create the github page for the repo
- [x] Clone or fork the repository
- [x] Study and modify the backlog
- [x] Devise a development strategy
- [ ] Design a wireframe to set guidelines for UI/UX design
- [ ] Design a user story dependencies diagram

This user story is developed on branch `master`

---

## 1. Initialize Application

**As a user I want to see a welcome message and a button to start the quiz**

By accessing the web page, I see a welcome message and a button to start the quiz

- [ ] Create the HTML and the CSS
- [ ] Add the start button

- This user story is developed on the branch `welcome`.    
This branch is merged into the `master` branch after completion.
---

## 2. Begin the Quiz (one question at a time)

**As a user I want to see the questions**

The user clicks on the start button and goes to question number one

- [ ] The user can see only one question at a time, together with the different answers

This user story is developed on the branch `start-quiz`.    
This branch is merged into the `master` branch after completion.

---
## 2. Begin the Quiz 

**As a user I want to see all the questions**

The user clicks on the start button and goes to the questions

- [ ] The user can see all the list of questions provided

This user story is developed on the branch `start-quiz-all-questions`.    
This branch is merged into the `master` branch after completion.

---


## 3. Select an answer  (one question at a time)

**As a user I want to select my answer for each question**

The user sees a list of possible answers from which to choose one; If the selected answer is correct, the text of the selected answer will be in green, red otherwise. Maybe we could use a timer that limits the time to select an answer.

- [ ] Use radio button if there is only one correct answer.
- [ ] Use chekboxes if there is more than one correct answer (optional)
- [ ] The correct answer is displayed in green
- [ ] The wrong answer is displayed in red
- [ ] Implementing a timer with a count down (optional)
- [ ] Implementing a progress bar (optional)

This user story is developed on the branch `select-answer`.    
This branch is merged into the `master` branch after completion.

---

## 3. Select all the answers

**As a user I want to select my answers**

The user sees a list of questions, for each question there are some possible answers from which to choose one; If the selected answer is correct, the text of the selected answer will be in green, red otherwise. Maybe we could use a timer that limits the time to complete the quiz.

- [ ] Use radio button if there is only one correct answer.
- [ ] Use chekboxes if there is more than one correct answer (optional)
- [ ] The correct answer is displayed in green
- [ ] The wrong answer is displayed in red
- [ ] Implementing a timer with a count down (optional)
- [ ] Implementing a progress bar (optional)

This user story is developed on the branch `select-answers`.    
This branch is merged into the `master` branch after completion.

---

## 4 View the Score

**As a user I want to see my score**
The score is updated in real time at every answer
<!--
- _if the percentage was less than 50% show me a failed massage_
- _I can see my score at the end of quiz_
- _I can see my score after selecting the answer for each question_
-->

- [ ] Increase the score by one after selecting a right answer
- [ ] No increment if the answer is wrong
- [ ] Show the score after each selection

This user story is developed on the branch `score`    
This branch is merged to the `master` branch after completion

---

## 5 Review the quiz

**As a user I want to have an overview of the quiz once is completed**

Once the quiz is completed the results are shown
<!--
- _show me the correct answer if I choosed wrong option_
- _I can see the right answer for each question along with my score_
- ...
-->

- [ ] Show the message 'failed' if the user fails the quiz (optional)
- [ ] Show the message 'passed' if the user passes the quiz
- [ ] Use an Emoji (optional)
- [ ] Display all the correct answers in green
- [ ] Display all the wrong answers in red
- [ ] Display the final score

This user story is developed on the branch `review-quiz`    
This branch is merged into the `master` branch after completion.

---

## 5. Cheat

**As a user I want to be able to see the correct answers without taking the quiz**

A user can cheat and read all the right answers
<!--
- _if you I am registered user_
- _and I have my login info then I am able to see the answers without taking the quiz_
-->

- [ ] The user is able to see all the answers by clicking on the cheat button
- [ ] All questions are available and the answers are available


This user story is developed on the branch `cheat`    
This branch is merged to the `master` branch after completion.

---
## 6. Data filling

**As a developer I want to provide to the user a number of questions**

A user has any questions to answer

- [x] We need to insert other questions in the JSON file
- [x] We need to find links to add
- [x] Create a PR
- [ ] review and merge the PR


This user story is developed on the branch `questions`    
This branch is merged into the `master` branch after completion.

---

## 7. Programming
**As a developer I want to have a functioning project**
## 8. Debugging
**As a developer I want to solve the bugs I encounter in my code**
## 9. Refactoring
**As a developer I want to refactor my code**
## 10. Documentation - code
**As a developer I want to use JDOC to document the functions I am using**
## 11. Documentation - project
**As a developer I want to use the project board, creating issues and documenting what I am doing**

