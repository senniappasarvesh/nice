package com.example.plantify.controllers;

import com.example.plantify.models.Review;
import com.example.plantify.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plantings/{plantingId}/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping
    public List<Review> getReviewsByPlantingId(@PathVariable Long plantingId) {
        return reviewService.getReviewsByPlantingId(plantingId);
    }

    @PostMapping
    public Review addReview(@PathVariable Long plantingId, @RequestBody Review review) {
        return reviewService.addReview(plantingId, review);
    }
}