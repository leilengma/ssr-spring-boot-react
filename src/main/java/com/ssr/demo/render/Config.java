package com.ssr.demo.render;

import java.io.IOException;
import java.nio.file.Files;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.core.io.Resource;

@Configuration
public class Config {
    @Value(value = "classpath:static/js/nashorn-polyfill.js")
    private Resource nashornPolyfillFile;

    @Value(value = "classpath:static/js/main.js")
    private Resource bundleJsFile;


    @Bean
    @Scope(value = WebApplicationContext.SCOPE_APPLICATION, proxyMode = ScopedProxyMode.NO)
    public ScriptEngine nashornScriptEngine() throws ScriptException, IOException {

        ScriptEngine nashornScriptEngine =  new ScriptEngineManager().getEngineByName ("nashorn");
        System.out.println(nashornPolyfillFile.getFile().getCanonicalPath());
        String polyfills = new String(Files.readAllBytes(nashornPolyfillFile.getFile().toPath()));
        String mainjs = new String(Files.readAllBytes(bundleJsFile.getFile().toPath()));
        nashornScriptEngine.eval (polyfills);
        nashornScriptEngine.eval (mainjs);

        return nashornScriptEngine;
    }

    
}