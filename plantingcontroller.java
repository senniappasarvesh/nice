package com.example.plantify.controllers;

import com.example.plantify.models.Planting;
import com.example.plantify.services.PlantingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plantings")
public class PlantingController {

    @Autowired
    private PlantingService plantingService;

    @GetMapping
    public List<Planting> getAllPlantings() {
        return plantingService.getAllPlantings();
    }

    @GetMapping("/{id}")
    public Planting getPlantingById(@PathVariable Long id) {
        return plantingService.getPlantingById(id);
    }

    @PostMapping
    public Planting addPlanting(@RequestBody Planting planting) {
        return plantingService.addPlanting(planting);
    }
}