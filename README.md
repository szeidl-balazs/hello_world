# Hello World

## Story

No question that your first programming exercise must be a [Hello, World!](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) implementation. However, we wouldn't want to bore you - let's be bold and and make your "Hello, World!" shine!

!> This is a **guided project**, a regular project with a step-by-step guide
   (see the Background materials). In order to learn the most, try and
   implement it on your own first, and check the solution only when you feel
   your version is ready. However, when you feel completely stuck, feel free
   to check the guide for hints.

## What are you going to learn?

- write strings to the console (a.k.a. _printing_)
- define and call functions
- use return values
- get user input
- call functions with arguments
- separation of concerns

## Tasks

1. Modify `helloworld.js` so that it logs out `Hello, World!` to the console (do not write any functions yet)
    - Running `helloworld.js` (by opening/refreshing `helloworld.html` in a browser) logs out `Hello, World!` to the console
    - The source code of `helloworld.js` contains no function definitions

2. Create and call a function in `hellofunction.js` which logs `Hello, World!` to the console
    - Running `hellofunction.js` (by opening/refreshing `hellofunction.html` in a browser) logs out `Hello, World!` to the console
    - The source code of `hellofunction.js` defines and calls a `sayHello()` function which is responsible for logging the `Hello, World!` message

3. Create and call two functions in `helloreturn.js` - one should return the `Hello, World!` string to the another which logs this message to the console
    - Running `helloreturn.js` (by opening/refreshing `helloreturn.html` in a browser) logs out `Hello, World!` to the console
    - The source code of `helloreturn.js` defines a `getHelloMessage()` function which does not log anything but returns the `Hello, World!` message
    - The source code of `helloreturn.js` defines and calls a `sayHello()` function which is responsible for logging the message returned by `getHelloMessage()`

4. Create and call two functions in `helloinput.js` - one should ask for the name of the user and an another which logs the custom greeting message to the console
    - Running `helloinput.js` (by opening/refreshing `helloinput.html` in a browser) logs `What's your name?` in a popup window, asks for user input, and using the input logs `Hello, <name>!` to the console
    - Running `helloinput.js` asks `What's your name?`, and if the user does not enter anything, it prints `Hello, World!` to the console
    - The source code of `helloinput.js` defines a `getHelloMessage()` function which asks `What's your name?` in a popup, and returns `Hello, <name>!` using the user input (or `Hello, World!` for an empty input)
    - The source code of `helloinput.js` defines and calls a `sayHello()` function which is responsible for logging the message returned by `getHelloMessage()`

5. Capitalize the user's diplayed name in a reorganized `helloargument.js` that separates the input collection and the message assembly parts
    - Running `helloargument.js` (by opening/refreshing `helloinput.html` in a browser) prints `What's your name?` in a popup window, asks for user input, and using the input logs `Hello, <Name>!` to the console (`<Name>` is capitalized)
    - Running `helloargument.js` asks `What's your name?`, and if the user does not enter anything, it logs `Hello, World!` to the console
    - The source code of `helloinput.js` defines a `getHelloMessage()` function which asks `What's your name?` in a popup, and returns the capitalized version of the user's input string
    - The source code of `helloinput.js` defines a `getHelloMessage()` function which returns `Hello, <name>!` using the incoming argument (or `Hello, World!` for an empty argument)
    - The source code of `helloinput.js` defines and calls a `sayHello()` function which is responsible for logging the message after collecting the returned values from the other two functions

## General requirements

None

## Hints



## Background materials

- <i class="far fa-exclamation"></i> [Functions](https://htmldog.com/guides/javascript/beginner/functions/)
- <i class="far fa-exclamation"></i> [Variables](https://htmldog.com/guides/javascript/beginner/variables/)
- <i class="far fa-book-open"></i> [Slicing strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- <i class="far fa-exclamation"></i> [A step-by-step solution guide](project/curriculum/materials/pages/javascript/hello-world-step-by-step-javascript.md) to this project

