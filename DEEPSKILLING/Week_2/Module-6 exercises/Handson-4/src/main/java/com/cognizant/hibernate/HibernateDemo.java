package com.cognizant.hibernate;

import com.cognizant.model.Employee;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class HibernateDemo {

    private SessionFactory factory;

    public HibernateDemo() {
        Configuration cfg = new Configuration();
        cfg.setProperty("hibernate.connection.driver_class", "org.h2.Driver");
        cfg.setProperty("hibernate.connection.url", "jdbc:h2:mem:hibernatedb;DB_CLOSE_DELAY=-1");
        cfg.setProperty("hibernate.connection.username", "sa");
        cfg.setProperty("hibernate.connection.password", "");
        cfg.setProperty("hibernate.show_sql", "true");
        cfg.setProperty("hibernate.hbm2ddl.auto", "update");
        cfg.addAnnotatedClass(Employee.class);
        factory = cfg.buildSessionFactory();
    }

    public Integer addEmployee(Employee employee) {
        Session session = factory.openSession();
        Transaction tx = null;
        Integer employeeID = null;
        try {
            tx = session.beginTransaction();
            session.persist(employee);
            tx.commit();
            employeeID = employee.getId();
        } catch (Exception e) {
            if (tx != null) {
                tx.rollback();
            }
            e.printStackTrace();
        } finally {
            session.close();
        }
        return employeeID;
    }

    public void close() {
        if (factory != null) {
            factory.close();
        }
    }

    public static void runDemo() {
        System.out.println("--- Starting Hibernate Demo ---");
        HibernateDemo demo = new HibernateDemo();
        Employee employee = new Employee("John Hibernate");
        Integer id = demo.addEmployee(employee);
        System.out.println("Employee saved via Hibernate ID: " + id + ", details: " + employee);
        demo.close();
    }
}
