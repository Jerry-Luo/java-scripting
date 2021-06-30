package com.test;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.File;

/**
 * @author <a href="mailto:luojianwei@pinming.cn">LuoJianwei</a>
 * @since 2021/6/30 15:44
 */
public class ScriptVars {
    public static void main(String[] args) throws Exception {
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("nashorn");

        // create File object
        File f = new File("test.txt");

        // expose File object as a global variable to the engine
        engine.put("file", f);

        // evaluate JavaScript code and access the variable
        engine.eval("print(file.getAbsolutePath())");
    }
}
