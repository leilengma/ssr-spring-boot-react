package com.ssr.demo.render;

import java.io.IOException;
import java.util.List;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptException;

import com.google.gson.Gson;
import com.ssr.demo.model.Person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class React {

    @Autowired
    private ScriptEngine nashornScriptEngine;

    public String renderEntryPoint(List<Person> persons) throws ScriptException, IOException {
        try {
            Invocable inv = (Invocable) nashornScriptEngine;
            Gson gson = new Gson();
            String json = gson.toJson(persons);            
            Object html = inv.invokeFunction("renderServer", json);
            return String.valueOf(html);
        } catch (Exception e) {
            throw new IllegalStateException("Error! Failed to render react component!", e);
        }

    }
}