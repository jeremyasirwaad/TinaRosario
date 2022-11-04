import React, { useState } from "react";
import "./feedback.css";
import face1 from "./greenface.svg";
import face2 from "./yellowface.svg";
import face3 from "./orangeface.svg";
import face4 from "./deeporange.svg";
import face5 from "./red.svg";
import StarRatings from "react-star-ratings";

export const Feedback = () => {
	const [rating, setRating] = useState(0);

	const changerating = (data) => {
		setRating(data);
	};

	return (
		<div className="feedback_page">
			<div className="feedbackinner">
				<span className="feedbackt1">Drop your Feedbacks</span>
				<span className="feedbackt2">
					We value your opinion, it makes us better!
				</span>
				<div className="feedback_div">
					<span className="feedsub1">Name</span>
					<input type="text" className="feedbackinput1" />
					<span className="feedsub2">Email</span>
					<input type="text" className="feedbackinput1" />
					<span className="feedsub2">Feedback</span>
					<input type="text" className="feedbackinput2" />
					<span className="feedsub2">Your Picture(Opitonal)</span>
					<button className="feedupbtn">Upload your picture</button>
					<span className="feedsub2">Rating</span>
					<div className="feedbratediv">
						<div className="feedbrateddivinner2">
							<span></span>
							<div className="innerradfeed">
								<img src={face1} alt="" />
								<img src={face2} alt="" />
								<img src={face3} alt="" />
								<img src={face4} alt="" />
								<img src={face5} alt="" />
							</div>
						</div>
						<div className="feedbrateddivinner">
							<span>Design</span>
							<div className="innerradfeed">
								<input type="radio" name="design" />
								<input type="radio" name="design" />
								<input type="radio" name="design" />
								<input type="radio" name="design" />
								<input type="radio" name="design" />
							</div>
						</div>
						<div className="feedbrateddivinner">
							<span>Creativity</span>
							<div className="innerradfeed">
								<input type="radio" name="creativity" />
								<input type="radio" name="creativity" />
								<input type="radio" name="creativity" />
								<input type="radio" name="creativity" />
								<input type="radio" name="creativity" />
							</div>
						</div>
						<div className="feedbrateddivinner">
							<span>Fit</span>
							<div className="innerradfeed">
								<input type="radio" name="fit" />
								<input type="radio" name="fit" />
								<input type="radio" name="fit" />
								<input type="radio" name="fit" />
								<input type="radio" name="fit" />
							</div>
						</div>
						<div className="feedbrateddivinner">
							<span>Quality</span>
							<div className="innerradfeed">
								<input type="radio" name="quality" />
								<input type="radio" name="quality" />
								<input type="radio" name="quality" />
								<input type="radio" name="quality" />
								<input type="radio" name="quality" />
							</div>
						</div>
						<div className="feedbrateddivinner">
							<span>Timeline</span>
							<div className="innerradfeed">
								<input type="radio" name="timeline" />
								<input type="radio" name="timeline" />
								<input type="radio" name="timeline" />
								<input type="radio" name="timeline" />
								<input type="radio" name="timeline" />
							</div>
						</div>
						<div className="feedbrateddivinner">
							<span>Response to Queries</span>
							<div className="innerradfeed">
								<input type="radio" name="restoquer" />
								<input type="radio" name="restoquer" />
								<input type="radio" name="restoquer" />
								<input type="radio" name="restoquer" />
								<input type="radio" name="restoquer" />
							</div>
						</div>
					</div>
					<div className="totalrating">
						<span>Overall Rating - </span>
						<StarRatings
							rating={rating}
							starRatedColor="#310851"
							changeRating={changerating}
							numberOfStars={5}
							name="rating"
							starDimension="25px"
							starEmptyColor="white"
						/>
					</div>
					<button className="feedbacksubbtn">Submit</button>
				</div>
			</div>
		</div>
	);
};
