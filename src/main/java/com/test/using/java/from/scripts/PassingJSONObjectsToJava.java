package com.test.using.java.from.scripts;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.File;
import java.io.FileReader;
import java.net.URI;
import java.util.List;
import java.util.Map;

/**
 * @author <a href="mailto:luojianwei@pinming.cn">LuoJianwei</a>
 * @since 2021/7/7 19:07
 */
public class PassingJSONObjectsToJava {
    public static void main(String[] args) throws Exception{
        //ScriptEngineManager manager = new ScriptEngineManager();
        //ScriptEngine engine = manager.getEngineByName("nashorn");
        //
        //URI uri = AccessingJavaClasses.class.getClassLoader().getResource("com/test/using/java/from/scripts/PassingJSONObjectsToJava.js").toURI();
        //Object eval = engine.eval(new FileReader(new File(uri)));

        jsonTest();
    }

    public static void jsonTest() throws Exception {
        ScriptEngineManager m = new ScriptEngineManager();
        ScriptEngine e = m.getEngineByName("nashorn");

        Object obj1 = e.eval(
                "JSON.parse('{ \"x\": 343, \"y\": \"hello\", \"z\": [2,4,5] }');");
        Map<String, Object> map1 = (Map<String, Object>)obj1;
        System.out.println(map1.get("x"));
        System.out.println(map1.get("y"));
        System.out.println(map1.get("z"));
        Map<Object, Object> array1 = (Map<Object, Object>)map1.get("z");
        array1.forEach((a, b) -> System.out.println("z[" + a + "] = " + b));

        System.out.println();

        Object obj2 = e.eval(
                "Java.asJSONCompatible({ \"x\": 343, \"y\": \"hello\", \"z\": [2,4,5] })");
        Map<String, Object> map2 = (Map<String, Object>)obj2;
        System.out.println(map2.get("x"));
        System.out.println(map2.get("y"));
        System.out.println(map2.get("z"));
        List<Object> array2 = (List<Object>)map2.get("z");
        array2.forEach(a -> System.out.println(a));
    }
}
