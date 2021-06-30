package com.test;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

/**
 * @author <a href="mailto:luojianwei@pinming.cn">LuoJianwei</a>
 * @since 2021/6/30 15:40
 */
public class EvalFile {
    public static void main(String[] args) throws Exception {
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("nashorn");

        // By wrapping various input stream objects as readers,
        // it is possible to execute scripts from files, URLs, and other resources.
        // evaluate JavaScript code
        engine.eval(new java.io.FileReader("script.js"));
    }
}
