package com.example.plantify.repositories;

import com.example.plantify.models.Planting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantingRepository extends JpaRepository<Planting, Long> {
}