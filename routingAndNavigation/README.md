Angular-Routes
---------------
We use angular routes navigate through the components.
Router is a main building core module of an angular framework.
This includes bunch of directives and modules which help us to imlement routing and navigation.


Angular routers(implementation steps)
1. configure the routes.
2. add the router-outlet
3. add navigation link path 


RxJs
-----
Observable: An observable is a sequence of data this is emitted data asynchronously or synchronously overtime of period.

An Observable will continuosly observe a set of stream data and automatically update or track that sequence of data whenever there is something changed.

Observables are used for a wide range of purposes, including handling data streams, making HTTP requests, and managing events. Angular uses the RxJS library to work with observables. Here's a detailed explanation of observables in Angular:

What is an Observable?
An observable is a data type that represents a stream of values that can be emitted over time. Observables are similar to promises but offer more powerful capabilities. They can emit multiple values, handle errors, and complete.

Key Concepts
------------
Creation: Observables can be created using various creation functions provided by RxJS, such as of, from, interval, timer, and more.
Subscription: To use an observable, you subscribe to it. This sets up a function that will be called whenever the observable emits a value.
Operators: RxJS provides a rich set of operators that allow you to transform, filter, and combine observables. Common operators include map, filter, mergeMap, switchMap, and catchError.
Unsubscription: To avoid memory leaks, it's important to unsubscribe from observables when they are no longer needed. This can be done manually or using Angular's AsyncPipe.


Synchronous and asynchronously programming
------------------------------------------
1. Synchronous code is executed in sequence- each statement waits for the previous statement to finish before executing..
2. Asynchronous code doesnot have to wait to execute the previous code completely this can continue to run.



ng g module app-routing --module app.module.ts
ng g module app-routing --module app --flat