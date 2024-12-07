import React from 'react'

function page({params}) {
  return (
    <div>
      <h1>Review for {params.productId} is {params.reviewId}</h1>
    </div>
  )
}

export default page
