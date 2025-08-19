package com.AnotherFall.Arasaka; // Certifique-se de que o pacote está correto!

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> 
                auth.anyRequest().permitAll()
            )
            .csrf(csrf -> csrf.disable());
            .cors (Customizer.withDefaults());

        return http.build();
    }
}

