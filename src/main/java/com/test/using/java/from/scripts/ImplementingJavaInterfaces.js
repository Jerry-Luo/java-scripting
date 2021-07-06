// Create an object that implements the Runnable interface by implementing
// the run() method as a JavaScript function
var r  = new java.lang.Runnable() {
    run: function() {
        print("running...\n");
    }
};

// The r variable can be passed to Java methods that expect an object implementing
// the java.lang.Runnable interface
var th = new java.lang.Thread(r);
th.start();
th.join();


// Define a JavaScript function
function func() {
    print("I am func!");
};

// Pass the JavaScript function instead of an object that implements
// the java.lang.Runnable interface
var th = new java.lang.Thread(func);
th.start();
th.join();