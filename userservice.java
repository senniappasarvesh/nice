package com.example.plantify.services;

import com.example.plantify.models.User;
import com.example.plantify.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User registerUser(User user) {
        return userRepository.save(user);
    }

    public User loginUser(User user) {
        // Add logic to verify user credentials
        return userRepository.findById(user.getId()).orElse(null);
    }
}