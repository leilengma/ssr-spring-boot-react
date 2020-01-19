package com.ssr.demo.controller;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import javax.script.ScriptException;

import com.ssr.demo.model.Person;
import com.ssr.demo.render.React;
import com.ssr.demo.service.RandomNameService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestController {
    
    @Autowired
    private React react;

    @Autowired
    private RandomNameService randomNameService;

    @GetMapping(value = "/index")
    public String getIndex(Model model) throws IOException, ScriptException {
        Random r = new Random();
        List<Person> persons = Collections.nCopies(10, 1).stream().map(index -> {
            Person person = new Person();
            person.setFirstName(randomNameService.randomIdentifier());
            person.setLastName(randomNameService.randomIdentifier());
            person.setAge(r.nextInt(100));
            return person;
        }).collect(Collectors.toList());
        String renderedHTML = react.renderEntryPoint(persons);

        model.addAttribute("content", renderedHTML);
        model.addAttribute("persons", persons);
        return "index";
    }
    
}