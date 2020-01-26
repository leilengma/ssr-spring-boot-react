package com.ssr.demo.render;

import java.io.IOException;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class React {

    @Autowired
    private ScriptEngine nashornScriptEngine;

    public String renderEntryPoint(String path, String data) throws ScriptException, IOException {
        try {
            Invocable inv = (Invocable) nashornScriptEngine;       
            Object html = inv.invokeFunction("renderServer", path, data);
            return String.valueOf(html);
        } catch (Exception e) {
            throw new IllegalStateException("Error! Failed to render react component!", e);
        }

    }
}