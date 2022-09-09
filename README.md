# Eventemitter and how to use ;
 Use them as is shown in the documentation only to emit events in components
 you should not subscribe manually to it.
is an angular2 abstraction and its only purpose is to emit events in components.
EventEmitter is really an Angular abstraction, and should be used pretty much only for emitting custom Events in components. Otherwise, just use Rx as if it was any other library.
Angular2 will never guarantee us that EventEmitter will continue being an Observable. So that means refactoring our code if it changes. The only API we must access is its emit() method. We should never subscribe manually to an EventEmitter.

Do NOT count on EventEmitter continuing to be an Observable!

Do NOT count on those Observable operators being there in the future!

These will be deprecated soon and probably removed before release.

Use EventEmitter only for event binding between a child and parent component. Do not subscribe to it. Do not call any of those methods. Only call eve.emit()
---------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
