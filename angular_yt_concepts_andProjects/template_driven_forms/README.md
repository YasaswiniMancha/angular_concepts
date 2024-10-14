form types in angular
---------------------
1.template_driven form
2.Reactive form

1. Template-Driven Forms
Template-driven forms rely heavily on Angular directives to create forms directly in the template (HTML). They are suitable for simpler use cases and are similar to forms in AngularJS.

Key Features:
Uses Angular directives like ngModel for two-way data binding.
Forms are defined in the HTML template.
Validation is done using directives (e.g., required, minlength, etc.).
Suitable for simple forms.

2. Reactive Forms
Reactive forms provide a more robust and scalable approach to handling forms in Angular. They are built around the concept of reactive programming and are more suitable for complex forms.

Key Features:
Uses FormControl, FormGroup, and FormArray for form control and group management.
Forms are defined in the component class.
Provides more control over form validation and dynamic form creation.
Suitable for complex and dynamic forms.

--------------------------------------
Template-Driven Forms:

Easier to use for simple forms.
Less boilerplate code.
Preferred for forms with less dynamic or simple validation requirements.

Reactive Forms:

Better for complex forms and dynamic form creation.
Provides more control over validation.
Easier to test.


Handle forms data
--------------------


1. formGroup class(contains many formControl classes)- form tags
2. formControl class- input fields

Angular app contains many formGroup classes