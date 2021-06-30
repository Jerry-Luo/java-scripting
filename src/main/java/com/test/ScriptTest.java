package com.test;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

/**
 * @author <a href="mailto:luojianwei@pinming.cn">LuoJianwei</a>
 * @since 2021/6/28 17:56
 */
public class ScriptTest {

    public static void main(String[] args) throws Exception {
        Boolean compare = compare(1.4, "a<1.3");
        System.out.println(compare);
    }


    public static Boolean compare(double a, String expression) throws Exception{
        expression = expression.replace("a", String.valueOf(a));
        ScriptEngineManager sem = new ScriptEngineManager();
        ScriptEngine scriptEngine = sem.getEngineByName("js");
        return (Boolean) scriptEngine.eval(expression);
    }
}
