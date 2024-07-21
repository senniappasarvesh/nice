package com.example.plantify.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Planting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String type;
    private String location;
    private String description;
    private int likes;

    @OneToMany(mappedBy = "planting")
    private List<Review> reviews;

    // Getters and Setters
}