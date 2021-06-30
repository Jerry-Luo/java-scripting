// To access primitive and reference Java types from JavaScript, call the Java.type() function,
// which returns a type object that corresponds to the full name of the class passed in as a string.
// The following example shows you how to get various type objects:
var ArrayList = Java.type("java.util.ArrayList");
var intType = Java.type("int");
var StringArrayType = Java.type("java.lang.String[]");
var int2DArrayType = Java.type("int[][]");

// The type object returned by the Java.type() function can be used in JavaScript code similar to how a class name is used in Java.
// For example, you can can use it to instantiate new objects as follows:
// var anArrayList = new Java.type("java.util.ArrayList"); // TypeError: function type() { [native code] } is not a constructor function

// Java type objects can be used to instantiate new Java objects.
// The following example shows you how to instantiate new objects using the default constructor
// and by passing arguments to another constructor:
var ArrayList = Java.type("java.util.ArrayList");
var defaultSizeArrayList = new ArrayList;
var customSizeArrayList = new ArrayList(16);

// You can use the type object returned by the Java.type() function to access static fields and methods as follows:
var File = Java.type("java.io.File");
File.createTempFile("nashorn", ".tmp");

// To access a static inner class, use the dollar sign ($) in the argument passed to the Java.type() method.
// The following example shows how to return the type object of the Float inner class in java.awt.geom.Arc2D:
var Float = Java.type("java.awt.geom.Arc2D$Float");

// If you already have the outer class type object, then you can access the inner class as a property of the outer class as follows:
var Arc2D = Java.type("java.awt.geom.Arc2D")
var Float = Arc2D.Float
// In case of a nonstatic inner class, you must pass an instance of the outer class as the first argument to the constructor.

// Although a type object in JavaScript is used similar to the Java class,
// it is distinct from the java.lang.Class object, which is returned by the getClass() method.
// You can obtain one from the other using the class and static properties. The following example shows this distinction:
var ArrayList = Java.type("java.util.ArrayList");
var a = new ArrayList;

// All of the following are true:
print("Type acts as target of instanceof: " + (a instanceof ArrayList));
// TypeError: instanceof must be called with a javascript or java object as the right-hand argument in <eval> at line number 41
//print("Class doesn't act as target of instanceof: " + !(a instanceof a.getClass()));
print("Type is not the same as instance's getClass(): " + (a.getClass() !== ArrayList));
print("Type's `class` property is the same as instance's getClass(): " + (a.getClass() === ArrayList.class));
print("Type is the same as the `static` property of the instance's getClass(): " + (a.getClass().static === ArrayList));
// Syntactically and semantically, this distinction between compile-time class expressions and runtime class objects
// makes JavaScript similar to Java code. However, there is no equivalent of the static property for a Class object in Java,
// because compile-time class expressions are never expressed as objects.
