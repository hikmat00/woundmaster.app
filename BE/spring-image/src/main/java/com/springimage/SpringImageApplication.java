package com.springimage;

import jakarta.servlet.MultipartConfigElement;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.util.unit.DataSize;

@SpringBootApplication
public class SpringImageApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringImageApplication.class, args);
	}

}
