package com.test.using.java.from.scripts;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.File;
import java.io.FileReader;
import java.net.URI;

/**
 * @author <a href="mailto:luojianwei@pinming.cn">LuoJianwei</a>
 * @since 2021/7/5 13:41
 */
public class ExtendingAbstractJavaClasses {
    public static void main(String[] args) throws Exception{
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("nashorn");

        URI uri = AccessingJavaClasses.class.getClassLoader().getResource("com/test/using/java/from/scripts/ExtendingAbstractJavaClasses.js").toURI();
        Object eval = engine.eval(new FileReader(new File(uri)));
    }
}
