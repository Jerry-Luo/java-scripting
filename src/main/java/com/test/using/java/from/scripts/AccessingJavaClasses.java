package com.test.using.java.from.scripts;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

/**
 * @author <a href="mailto:luojianwei@pinming.cn">LuoJianwei</a>
 * @since 2021/6/30 18:04
 */
public class AccessingJavaClasses {
    public static void main(String[] args) throws Exception{
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("nashorn");

        // By wrapping various input stream objects as readers,
        // it is possible to execute scripts from files, URLs, and other resources.
        // evaluate JavaScript code
        // 这个方法能获取到资源，必须先拿到classloader，再用classloader去getResource
        //URI uri = AccessingJavaClasses.class.getResource("com/test/using/java/from/scripts/AccessingJavaClasses.js").toURI();
        URI uri = AccessingJavaClasses.class.getClassLoader().getResource("com/test/using/java/from/scripts/AccessingJavaClasses.js").toURI();
        //InputStream resourceAsStream = AccessingJavaClasses.class.getClassLoader().getResourceAsStream("com/test/using/java/from/scripts/AccessingJavaClasses.js");
        engine.eval(new java.io.FileReader(new File(uri)));
    }
}
