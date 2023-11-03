// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  getReviews = reviewsList => {
    const {activeReviewIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewIndex
    ]

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onLeftClick = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onRightClick = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    console.log(activeReviewIndex)

    return (
      <div className="app-container">
        <button
          type="button"
          onClick={this.onLeftClick}
          data-testid="leftArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            className="arrow"
            alt="left arrow"
          />
        </button>
        {this.getReviews(reviewsList)}
        <button
          type="button"
          onClick={this.onRightClick}
          data-testid="rightArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            className="arrow"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
