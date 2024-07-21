package com.example.plantify.repositories;

import com.example.plantify.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByPlantingId(Long plantingId);
}