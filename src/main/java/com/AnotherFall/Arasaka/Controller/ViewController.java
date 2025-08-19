package com.AnotherFall.Arasaka.Controller; // Verifique se o nome do pacote está correto

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    // Mapeia a URL principal "/" para o arquivo "index.html"
    @GetMapping("/")
    public String indexPage() {
        return "index"; // Retorna o nome do arquivo HTML sem a extensão .html
    }
    
    // Mapeia a URL "/admin" para o arquivo "admin.html"
    @GetMapping("/admin")
    public String adminPage() {
        return "admin"; // Retorna o nome do arquivo HTML "admin.html"
    }
    
}