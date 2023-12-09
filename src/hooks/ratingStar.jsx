// Function to convert rating to stars
// Function to convert rating to stars
export const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={i} className="star">&#9733;</span>); // Full star character
    }

    // Half star
    if (halfStar) {
        stars.push(<span key="half" className="half-star">&#9733;</span>); // Half star character
    }

    // Empty stars (if needed)
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<span key={`empty-${i}`} className="empty-star">&#9733;</span>); // Empty star character
    }

    return stars;
};

