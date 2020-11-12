import React from "react";
import working from "../../img/working.jpg";
import menmarker from "../../img/manmarker.jpg";
import Image from "react-image-resizer";

export const About = () => {
	return (
		<>
			<div className="about-container">
				<div className="text-center bg-light mb-5">
					<h1>Organize, Remember, Schedule like never before</h1>

					<p>
						{" "}
						We want to help you seamlessly organize and stay on top of your busy life. Well remind you
						through a text message whenever your next assignemnt or appoinment is coming up. Parents
						learning to adapt to virtual school? Well send you a message so YOU can help your child stay on
						top of their work. Whatever reminder and schedule you need....
					</p>

					<h4>Dont worry we got a guy for that! </h4>
				</div>
			</div>
			<div className="how-it-works">
				<div className="container mb-2">
					<div className="row">
						<div className="col">
							<img src={menmarker} height={500} width={600} />
						</div>
						<div className="col">Simply create an account and add your reminder due dates and times</div>
						<div className="w-100" />
						<div className="col">Add phone number and well remind you!</div>
						<div className="col">
							<img src={working} height={500} width={600} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
