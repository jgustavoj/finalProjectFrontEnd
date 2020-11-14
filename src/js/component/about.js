import React from "react";
import working from "../../img/working.jpg";
import menmarker from "../../img/manmarker.jpg";
import iphone from "../../img/iphone.png";

export const About = () => {
	return (
		<>
			<div className="about-section bg-light text-center" id="about">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mx-auto">
							<h2 className="text-black mb-4">Organize, Remember, Schedule like never before</h2>
							<p className="text-black-50">
								We want to help you seamlessly organize and stay on top of your busy life. Well remind
								you through a text message whenever your next assignemnt or appoinment is coming up.
								Parents learning to adapt to virtual school? Well send you a message so YOU can help
								your child stay on top of their work. Whatever reminder and schedule you need....
							</p>
							<h4 className="text-black mb-3">Dont worry we got a guy for that! </h4>
						</div>
					</div>
					<img className="img-fluid" src={iphone} height={350} width={300} />
				</div>
			</div>

			<div className="projects-section bg-light" id="projects">
				<div className="container">
					<div className="row justify-content-center no-gutters mb-5 mb-lg-0">
						<div className="col-lg-6">
							<img className="img-fluid" src={menmarker} />
						</div>
						<div className="col-lg-6">
							<div className="text-center h-100">
								<div className="d-flex h-100">
									<div className="project-text w-100 my-auto text-center text-lg-left">
										<h4 className="text-black"> Add</h4>
										<p className="mb-0 text-black-50">
											Simply create an account and add your reminder due dates and times
										</p>

										<hr className="d-none d-lg-block mb-0 ml-0" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row justify-content-center no-gutters ">
						<div className="col-lg-6">
							<img className="img-fluid" src={working} />
						</div>
						<div className="col-lg-6 order-lg-first">
							<div className="text-center h-100">
								<div className="d-flex h-100">
									<div className="project-text w-100 my-auto text-center text-lg-right">
										<h4 className="text-black"> Get Notified</h4>
										<p className="mb-0 text-black-50">Add phone number and well remind you! </p>
										<hr className="d-none d-lg-block mb-0 mr-0" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

// Test code for diff approach on image

{
	/*
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
			</div> */
}

// <div className="about-container">
// 	<div className="text-center bg-light mb-5">
// 		<h1>Organize, Remember, Schedule like never before</h1>

// 		<p>
// 			{" "}
// 			We want to help you seamlessly organize and stay on top of your busy life. Well remind you
// 			through a text message whenever your next assignemnt or appoinment is coming up. Parents
// 			learning to adapt to virtual school? Well send you a message so YOU can help your child stay on
// 			top of their work. Whatever reminder and schedule you need....
// 		</p>

// 		<h4>Dont worry we got a guy for that! </h4>
// 	</div>
// </div>
