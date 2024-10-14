An angular Directive is a special type of technology that can manipulate the DOM object -->
 Directives can do adding html elements removing html elements from DOM dynamically
  Directives are components without a view
   angular components are directives, with a view
  4 tyes of Direcctive types : 1. component Directive 2. Structural Directive 3. Attribute Directive 4. Custom Directive
 1. Component Directive : A component directive is a angular directive that creates a new component with a template view
 2. Structural Directive : Structural directives change / manipulate the DOM layout by adding, removing or manipulating DOM elements.
-> Responsible for the HTML layout.
-> Shape or Reshape the DOM structure by adding, removing HTML elements.
-> Can Identify with Leading * Symbol.
-> Structural Directive- *ngFor , *ngIf , *ngSwitchCase
3. Attribute Directive : An attribute directive is a directive that only changes the appearance or behavior of an HTML element,Component or another directives.
-> Attribute Directives:
  ngStyle, ngClass
 4. Custom Directive : A custom directive is a directive that you create to solve a specific problem and which can create our custom directive from scratch


1. NgFor Directive: We use NgFor Directive to render an Array inside the view
->NgFor is a Stuctural Directive
->With this directive we can manipulate the DOM

2. NgIf directive: it is like if else , we use NgIf to show something conditionally inside the view


3. Ng-template directive: Unlike regular HTML elements, the content inside ng-template is not rendered immediately. Instead, it serves as a blueprint for creating dynamic content, which can be rendered conditionally or repeatedly.
*When you define a template using ng-template, Angular does not render it directly to the DOM.
*It acts as a placeholder that Angular can use to instantiate elements dynamically.
*ng-template is often used with structural directives like *ngIf, *ngFor, and *ngSwitchCase

4. ng-Switch-case: The ng-switch directive in Angular is used to conditionally switch between different DOM elements based on a given expression. It works similarly to a switch statement in programming languages.

ng-switch
This directive is placed on a container element (typically a <div>). It defines the switch expression which determines which child element will be displayed.

ng-switch-when
These directives are placed on the child elements of the container with the ng-switch directive. Each ng-switch-when specifies a matching expression that is compared against the ng-switch expression.

ng-switch-default
This directive is also placed on a child element of the ng-switch container. It is used as a fallback option when none of the ng-switch-when conditions match the ng-switch expression.

5. ngStyle

The ngStyle directive in Angular allows you to dynamically set one or more CSS styles on an HTML element based on an expression. It evaluates an expression that results in an object of key-value pairs, where the keys are CSS property names and the values are corresponding CSS values.

Usage Example:

html
Copy code
<div [ngStyle]="{'font-size.px': fontSize, 'color': fontColor}">
  This is a styled div.
</div>
Here, fontSize and fontColor are properties from the component's class. If fontSize is 16 and fontColor is 'blue', the resulting div will have a font size of 16 pixels and the text color will be blue.

Explanation:

ngStyle is used to apply inline styles dynamically.
It binds to an object where keys are the style properties and values are the style values.

6. ngClass
The ngClass directive in Angular allows you to dynamically set one or more CSS classes on an HTML element based on an expression. It can take a string, array, or object as input.

Usage Examples:

String Syntax:
html
Copy code
<div [ngClass]="'my-class another-class'">
  This div has multiple classes.
</div>
Here, the div will have both my-class and another-class.

Array Syntax:
html
Copy code
<div [ngClass]="['class1', 'class2', 'class3']">
  This div has multiple classes from an array.
</div>
Object Syntax:
html
Copy code
<div [ngClass]="{'class1': isClass1, 'class2': isClass2}">
  This div conditionally has classes.
</div>
In this example, isClass1 and isClass2 are boolean properties in the component's class. If isClass1 is true, class1 will be applied to the div, and similarly for isClass2.

Explanation:

ngClass is used to add or remove CSS classes dynamically.
It can accept a string, array, or object to determine which classes should be applied.

