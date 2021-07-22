var Runnable = java.lang.Runnable;
var r1 = new Runnable(function() { print("I'm runnable 1!") });
var r2 = new Runnable(function() { print("I'm runnable 2!") });
r1.run();
r2.run();
print("We share the same class: " + (r1.class === r2.class));

var RunnableImpl1 = Java.extend(java.lang.Runnable, function() { print("I'm runnable 1!") });
var RunnableImpl2 = Java.extend(java.lang.Runnable, function() { print("I'm runnable 2!") });
var r1 = new RunnableImpl1();
var r2 = new RunnableImpl2();
r1.run();
r2.run();
print("We share the same class: " + (r1.class === r2.class));


var RunnableImpl = Java.extend(java.lang.Runnable, function() { print("I'm runnable 1!") });
var r1 = new RunnableImpl();
var r2 = new RunnableImpl(function() { print("I'm runnable 2!") });
r1.run();
r2.run();
print("We share the same class: " + (r1.class === r2.class));