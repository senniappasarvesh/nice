package com.example.plantify.services;

import com.example.plantify.models.Review;
import com.example.plantify.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getReviewsByPlantingId(Long plantingId) {
        return reviewRepository.findByPlantingId(plantingId);
    }

    public Review addReview(Long plantingId, Review review) {
        review.setPlantingId(plantingId); // Set the planting ID on the review
        return reviewRepository.save(review);
    }
}