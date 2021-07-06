
var TimerTask =  Java.type("java.util.TimerTask");
var task = new TimerTask({ run: function() { print("Hello World!") } });

// Instead of invoking the constructor and passing an argument to it,
// you can provide the argument directly after the new expression.
// The following example shows you how this syntax (similar to Java anonymous inner class definition)
// can simplify the second line in the previous example:
var task = new TimerTask {
    run: function() {
        print("Hello World!")
    }
};

// If the abstract class is a functional interface (it has a single abstract method),
// then instead of passing a JavaScript object to the constructor, you can pass the function that implements the method.
// The following example shows how you can simplify the syntax when using a functional interface:
var task = new TimerTask(function() { print("Hello World!") });

// Whichever syntax you choose, if you need to invoke a constructor with arguments,
// you can specify the arguments before the implementation object or function.

// If you want to invoke a Java method that takes a functional interface as the argument,
// you can pass a JavaScript function to the method. Nashorn will instantiate a subclass of the expected class
// and use the function to implement its only abstract method.
// The following example shows you how to invoke the Timer.schedule() method, which expects a TimerTask object as the argument:
var Timer = Java.type("java.util.Timer");
Timer.schedule(function() { print("Hello World!") };
// The previous syntax assumes that the expected functional interface is either an interface or it has a default constructor,
// which is used by Nashorn to instantiate a subclass of the expected class.
// It is not possible to use a non-default constructor.