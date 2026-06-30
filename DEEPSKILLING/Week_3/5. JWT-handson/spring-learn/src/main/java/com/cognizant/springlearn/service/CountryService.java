package com.cognizant.springlearn.service;

import com.cognizant.springlearn.Country;
import jakarta.annotation.PostConstruct;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private List<Country> countryList;

    @PostConstruct
    public void init() {
        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        countryList = context.getBean("countryList", List.class);
    }

    public Country getCountry(String code) {

        for (Country country : countryList) {
            if (country.getCode().equalsIgnoreCase(code))
                return country;
        }

        return null;
    }
}