
Angular, a popular framework developed by Google, is widely used for building dynamic web applications. One of its core features is the use of services to share data and functionality across various components.

An Angular service is a singleton object that provides specific functionality to multiple components within an application. Services allow you to encapsulate business logic, data access, and other reusable functionalities in a single location, promoting a separation of concerns and making your code more modular and maintainable.

Simply we use angular services , to share data and common methods among components whether there is a relationship between components or not.

--> ng generate service servuce_name

Dependency Injection (DI) in Angular
------------------------------------
What is Dependency Injection?
Dependency Injection (DI) is a design pattern used to implement IoC (Inversion of Control). It allows a class to receive its dependencies from an external source rather than creating them itself.

How DI Works in Angular
In Angular, DI is built into the framework. You declare the dependencies of a class in its constructor, and Angular automatically provides these dependencies when it creates an instance of the class.

Injecting a Service into a Component
To use a service in a component, you inject it into the component’s constructor. Here’s how you can do it:

Import the service into the component.
Declare the service as a dependency in the component’s constructor.


angular interface
--------------------
In Angular, interfaces are used to define the structure of an object. They are a way to describe the shape of an object, enforcing that the object meets certain criteria. Interfaces help in providing type-checking and ensuring that the objects used in the application adhere to a specific structure.


command to generate interface
ng g i folder_name/filename


