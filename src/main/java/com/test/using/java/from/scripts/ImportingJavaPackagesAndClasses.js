//// Load compatibility script
//load("nashorn:mozilla_compat.js");
//// Import the java.awt package
//importPackage(java.awt);
//// Import the java.awt.Frame class
//importClass(java.awt.Frame);
//// Create a new Frame object
//var frame = new java.awt.Frame("hello");
//// Call the setVisible() method
//frame.setVisible(true);
//// Access a JavaBean property
//print(frame.title);



// The java.lang package is not imported by default, because its classes would conflict with Object,
// Boolean, Math, and other built-in JavaScript objects. Furthermore,
// importing any Java package or class can lead to conflicts with the global variable scope in JavaScript.
// To avoid this, define a JavaImporter object and use the with statement to limit the scope of
// the imported Java packages and classes, as shown in the following example:

// Create a JavaImporter object with specified packages and classes to import
var Gui = new JavaImporter(java.awt, javax.swing);

// Pass the JavaImporter object to the "with" statement and access the classes
// from the imported packages by their simple names within the statement's body
with (Gui) {
    var awtframe = new Frame("AWT Frame");
    var jframe = new JFrame("Swing JFrame");
};