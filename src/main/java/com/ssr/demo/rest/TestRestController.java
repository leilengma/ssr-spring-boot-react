package com.ssr.demo.rest;

import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import com.ssr.demo.model.Person;
import com.ssr.demo.service.RandomNameService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class TestRestController {
    @Autowired
    RandomNameService randomNameService;
    
    @GetMapping(value="persons", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Person> getRandomPersons() {
        Random r = new Random();
        return Collections.nCopies(10, 1).stream().map(index -> {
            Person person = new Person();
            person.setFirstName(randomNameService.randomIdentifier());
            person.setLastName(randomNameService.randomIdentifier());
            person.setAge(r.nextInt(100));
            return person;
        }).collect(Collectors.toList());
    }
}