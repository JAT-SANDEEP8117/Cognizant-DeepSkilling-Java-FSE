package com.cognizant.jpa;

import com.cognizant.model.Employee;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.Persistence;

public class JpaDemo {

    public static void runDemo() {
        System.out.println("--- Starting JPA Demo ---");
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("JpaDemoUnit");
        EntityManager em = emf.createEntityManager();
        EntityTransaction tx = em.getTransaction();
        try {
            tx.begin();
            Employee employee = new Employee("John JPA");
            em.persist(employee);
            tx.commit();
            System.out.println("Employee saved via JPA: " + employee);
        } catch (Exception e) {
            if (tx != null && tx.isActive()) {
                tx.rollback();
            }
            e.printStackTrace();
        } finally {
            em.close();
            emf.close();
        }
    }
}
