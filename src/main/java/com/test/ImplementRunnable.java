package com.test;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

/**
 * In this example, the eval() method is called with JavaScript code that defines a function.
 * Then, an Invocable object is created, and its getInterface() method is used to create a Runnable interface object.
 * The methods of the interface are implemented by script functions with matching names (in this case, the run()
 * function is used to implement the run() method in the interface object).
 * Finally, a new thread is started that runs the script function.
 *
 * @author <a href="mailto:luojianwei@pinming.cn">LuoJianwei</a>
 * @since 2021/6/30 17:35
 */
public class ImplementRunnable {

    public static void main(String[] args) throws Exception {
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("nashorn");

        // evaluate JavaScript code that defines a function with one parameter
        engine.eval("function run() { print('run() function called') }");

        // create an Invocable object by casting the script engine object
        Invocable inv = (Invocable) engine;

        // get Runnable interface object
        Runnable r = inv.getInterface(Runnable.class);

        // start a new thread that runs the script
        Thread th = new Thread(r);
        th.start();
        th.join();
    }
}
