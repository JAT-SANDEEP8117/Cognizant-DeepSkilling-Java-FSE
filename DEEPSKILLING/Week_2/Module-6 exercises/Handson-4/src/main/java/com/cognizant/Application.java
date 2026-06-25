package com.cognizant;

import com.cognizant.jpa.JpaDemo;
import com.cognizant.hibernate.HibernateDemo;
import com.cognizant.springjpa.SpringJpaDemo;

public class Application {

    public static void main(String[] args) {
        JpaDemo.runDemo();
        HibernateDemo.runDemo();
        SpringJpaDemo.runDemo();
    }
}
