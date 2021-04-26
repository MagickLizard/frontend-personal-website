import React from 'react';

const Card = ({ content }) => {
return (
  <div class="card">
  <div class="card-content">
    <div class="content">
      {content}
      </div>
    </div>
  </div>
  )
}
export default Card;