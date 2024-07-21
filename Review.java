package com.example.plantify.models;

import javax.persistence.*;

@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String comment;

    @ManyToOne
    @JoinColumn(name = "planting_id", nullable = false)
    private Planting planting;

    // Getters and Setters
}