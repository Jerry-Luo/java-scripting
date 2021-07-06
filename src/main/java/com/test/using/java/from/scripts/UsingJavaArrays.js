var StringArray = Java.type("java.lang.String[]");
var a = new StringArray(5);

// Set the value of the first element
a[0] = "Scripting is great!";
// Print the length of the array
print(a.length);
// Print the value of the first element
print(a[0]);


// Given a JavaScript array, you can convert it to a Java array using the Java.to() method.
// You must pass the JavaScript array variable to this method and the type of array to be returned, either as a string or a type object.
// You can also omit the array type argument to return an Object[] array. Conversion is performed according to the ECMAScript conversion rules.
// The following example shows you how to convert a JavaScript array to a Java array using various Java.to() method arguments:

// Create a JavaScript array
var anArray = [1, "13", false];

// Convert the JavaScript array to a Java int[] array
var javaIntArray = Java.to(anArray, "int[]");
print(javaIntArray[0]); // prints the number 1
print(javaIntArray[1]); // prints the number 13
print(javaIntArray[2]); // prints the number 0

// Convert the JavaScript array to a Java String[] array
var javaStringArray = Java.to(anArray, Java.type("java.lang.String[]"));
print(javaStringArray[0]); // prints the string "1"
print(javaStringArray[1]); // prints the string "13"
print(javaStringArray[2]); // prints the string "false"

// Convert the JavaScript array to a Java Object[] array
var javaObjectArray = Java.to(anArray);
print(javaObjectArray[0]); // prints the number 1
print(javaObjectArray[1]); // prints the string "13"
print(javaObjectArray[2]); // prints the boolean value "false"


// Given a Java array, you can convert it to a JavaScript array using the Java.from() method.
// The following example shows you how to convert a Java array that contains a list of files in the current directory
// to a JavaScript array with the same contents:

// Get the Java File type object
var File = Java.type("java.io.File");
// Create a Java array of File objects
var listCurDir = new File(".").listFiles();
// Convert the Java array to a JavaScript array
var jsList = Java.from(listCurDir);
// Print the JavaScript array
print(jsList);
// Note: In most cases, you can use the Java array in scripts without converting the Java array to a JavaScript array.