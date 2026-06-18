package com.cognizant.singleton;

public class Logger {
    private static Logger loggerInstance;

    private Logger() {
        System.out.println("Logger constructor running...");
    }

    public static synchronized Logger getInstance() {
        if (loggerInstance == null) {
            loggerInstance = new Logger();
        }
        return loggerInstance;
    }

    public void log(String msg) {
        System.out.println("[LOG] " + msg);
    }
}
