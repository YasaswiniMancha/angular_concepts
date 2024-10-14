
----------------------------------------------------------------------------------------------------------------



share data between components in different situations.
1. parent to child components via @Input decorator
2. child to parent components via @Output decorator
3. child to parent when there is Event, using @output Decorator and 
Event Emitter



And again to share data from child to parent component there are the below ways

1.child to parent component via @ViewChild Decorator
2. child to parent when there is Event, using @POutput decorator and Event Emitter


-----------------------------------------------------------------------------------


ngAfterViewInit()
What is it?
ngAfterViewInit is a lifecycle hook in Angular that is called after Angular has fully initialized a component's view. This includes its child views.

When does it run?
It runs after the component's view and its child views have been initialized. This is useful for any additional initialization that requires the component's view or its child views to be fully rendered.

-----------------------------------------------------------------------------------

constructor()
What is it?
The constructor is a special method in a TypeScript class that is automatically called when an instance of the class is created. It is used for initializing class members and performing any setup required before the class instance is used.

When does it run?
It runs immediately when an instance of the class is instantiated, before any other lifecycle hooks or methods are called.

for ex:
constructor() {
  console.log(this.childComp);
}

then-->

Lifecycle Timing:
At the time the constructor is executed, Angular has not yet created or initialized child components. Therefore, this.childComp will be undefined in the constructor.

if you need to interact with child components, you should do so in lifecycle hooks such as ngAfterViewInit , where Angular guarantees that child components are fully initialized.
-----------------------------------------------------------------------------------
ChangeDetectorRef

you have to tell angular that you updated the content after ngAfterContentChecked you can import ChangeDetectorRef from @angular/core and call detectChanges


------------------------------------------------------------------------------


In Angular, data binding is a way to synchronize data between the model (component) and the view (template). There are two main types of data binding: one-way binding and two-way binding.

### One-Way Binding

**Definition**:
One-way binding is a unidirectional data flow from the component to the view. Changes in the component's data automatically update the view, but changes in the view do not affect the component's data.

**Types of One-Way Binding**:
1. **Interpolation**: 
   - Syntax: `{{ expression }}`
   - Example: `<p>{{ title }}</p>`
   - Usage: To bind data from the component to the view inside the HTML content.

2. **Property Binding**: 
   - Syntax: `[property]="expression"`
   - Example: `<img [src]="imageUrl" />`
   - Usage: To bind data from the component to an HTML attribute, property, or DOM property.

3. **Event Binding**: 
   - Syntax: `(event)="expression"`
   - Example: `<button (click)="onClick()">Click me</button>`
   - Usage: To bind an event from the view to a method in the component.

**Example**:
```html
<!-- Component Template -->
<p>{{ title }}</p> <!-- Interpolation -->
<img [src]="imageUrl" /> <!-- Property Binding -->
<button (click)="onClick()">Click me</button> <!-- Event Binding -->
```

### Two-Way Binding

**Definition**:
Two-way binding is a bidirectional data flow where changes in the component's data automatically update the view, and changes in the view also update the component's data.

**Syntax**:
- Using `ngModel` directive: `[(ngModel)]="property"`
- Example: `<input [(ngModel)]="name" />`

**Usage**:
Two-way binding is typically used in form elements, where user input needs to be reflected in the component's data and vice versa.

**Example**:
```html
<!-- Component Template -->
<input [(ngModel)]="name" />
<p>Your name is: {{ name }}</p>
```

**Explanation**:
- When the user types into the input field, the `name` property in the component is updated.
- When the `name` property in the component is updated, the input field's value is also updated.

### Summary

- **One-Way Binding**: Unidirectional flow of data from the component to the view.
  - Types: Interpolation, Property Binding, Event Binding.
- **Two-Way Binding**: Bidirectional flow of data between the component and the view.
  - Used primarily with form elements using the `ngModel` directive.