package com.example.plantify.services;

import com.example.plantify.models.Planting;
import com.example.plantify.repositories.PlantingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlantingService {

    @Autowired
    private Plant