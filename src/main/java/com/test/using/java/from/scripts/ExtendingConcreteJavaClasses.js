// This code can be interpreted both as extending the Thread class with the specified implementation of the run() method,
// and the instantiation of the Thread class by passing to its constructor an object that implenents the Runnable interface.
// See Implementing Java Interfaces.
var t = new java.lang.Thread({ run: function() { print("Thread running!") } });
t.start();

// To extend a concrete Java class, pass its type object to the Java.extend() function that returns a type object of the subclass.
// Then, use the type object of the subclass as a JavaScript-to-Java adapter to create instances of the subclass with the
// specified method implementations. The following example shows you how to extend the Thread class with the specified
// implementation of the run() method:
var Thread = Java.type("java.lang.Thread");
var threadExtender = Java.extend(Thread);
var t = new threadExtender() {
    run: function() { print("Thread running!!!") }};
t.start();

// The Java.extend() function can take a list of multiple type objects.
// You can specify no more than one type object of a Java class, and as many type objects of Java interfaces as you want.
// The returned type object extends the specified class (or java.lang.Object if no class is specified) and implements all interfaces.
// The class type object does not have to be first in the list.