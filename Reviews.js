import React, { useState } from 'react';

function Reviews({ plantingId }) {
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetch(`/api/plantings/${plantingId}/reviews`)
      .then(response => response.json())
      .then(data => setReviews(data));
  }, [plantingId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { comment };

    fetch(`/api/plantings/${plantingId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    })
      .then(response => response.json())
      .then(data => {
        setReviews([...reviews, data]);
        setComment('');
      });
  };

  return (
    <div className="reviews">
      <h3>Reviews</h3>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>{review.comment}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Add a Review:
          <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reviews;