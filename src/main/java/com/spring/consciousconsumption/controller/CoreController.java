package com.spring.consciousconsumption.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

@Controller
public class CoreController {
    @GetMapping("/")
    public String home(Model model) throws IOException {
        String keyAPI = Files.readString(Paths.get("key.txt"));
        model.addAttribute("keyAPI", keyAPI);
        return "index"; // имя HTML-шаблона
    }
}
