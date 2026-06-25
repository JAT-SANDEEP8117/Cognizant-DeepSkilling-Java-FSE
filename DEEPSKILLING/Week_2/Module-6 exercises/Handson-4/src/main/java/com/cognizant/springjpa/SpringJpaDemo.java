package com.cognizant.springjpa;

import com.cognizant.model.Employee;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.cognizant.springjpa")
@EntityScan(basePackages = "com.cognizant.model")
public class SpringJpaDemo {

    public static void runDemo() {
        System.out.println("--- Starting Spring Data JPA Demo ---");
        System.setProperty("spring.datasource.url", "jdbc:h2:mem:springdb;DB_CLOSE_DELAY=-1");
        System.setProperty("spring.datasource.driver-class-name", "org.h2.Driver");
        System.setProperty("spring.datasource.username", "sa");
        System.setProperty("spring.datasource.password", "");
        System.setProperty("spring.jpa.hibernate.ddl-auto", "update");
        System.setProperty("spring.jpa.show-sql", "true");

        ConfigurableApplicationContext context = SpringApplication.run(SpringJpaDemo.class);
        EmployeeService service = context.getBean(EmployeeService.class);
        Employee employee = new Employee("John Spring JPA");
        service.addEmployee(employee);
        System.out.println("Employee saved via Spring Data JPA: " + employee);
        context.close();
    }
}
