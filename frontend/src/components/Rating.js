import React from 'react'

export default function Rating(props) {
    const{ numReviews } =props;
 return (

<div className="rating">
                        <span> <i class="fa fa-star"></i> </span>
                        <span> <i class="fa fa-star"></i> </span>
                        <span> <i class="fa fa-star"></i> </span>
                        <span> <i class="fa fa-star"></i> </span>
                        <span> <i class="fa fa-star-o"></i> </span>
<span>{numReviews + 'reviews'}</span>

    </div>
  );
}
