package com.cognizant.springlearn.controller;

import io.jsonwebtoken.Jwts;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import io.jsonwebtoken.security.Keys;
import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.*;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String,String> authenticate(
            @RequestHeader("Authorization") String authHeader){

        LOGGER.info("START");

        LOGGER.debug("Authorization Header : {}",authHeader);

        String user=getUser(authHeader);

        String token=generateJwt(user);

        Map<String,String> map=new HashMap<>();

        map.put("token",token);

        LOGGER.info("END");

        return map;
    }

    private String getUser(String authHeader){

        LOGGER.debug("Inside getUser()");

        String encodedCredentials=authHeader.substring("Basic ".length());

        byte[] decodedBytes=
                Base64.getDecoder().decode(encodedCredentials);

        String credentials=new String(decodedBytes);

        LOGGER.debug("Credentials : {}",credentials);

        return credentials.substring(0,credentials.indexOf(":"));
    }

    private String generateJwt(String user) {

        SecretKey key = Keys.hmacShaKeyFor(
                "mysecretkeymysecretkeymysecretkey1234"
                        .getBytes(StandardCharsets.UTF_8));

        return Jwts.builder()
                .subject(user)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 1200000))
                .signWith(key)
                .compact();
    }

}