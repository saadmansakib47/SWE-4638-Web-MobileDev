import React from "react";
import "./ProfileCard.css";

function ProfileCard({ name, jobTitle, company, bio, skills, imageUrl }) {
	const handleContactClick = () => {
		console.log(`Contact button clicked for ${name}`);
	};

	return (
		<div className="card-container">
			<header>
				<img src={imageUrl} alt={name} className="profile-image" />
			</header>
			<h1 className="bold-text">{name}</h1>
			<h2 className="normal-text">{jobTitle} at {company}</h2>
			<p className="bio-text">{bio}</p>

			<div className="skills-container">
				{/* Safe rendering even if skills is undefined or empty */}
				{skills && skills.length > 0 ? (
					skills.map((skill, index) => (
						<span key={index} className="skill-badge">{skill}</span>
					))
				) : (
					<span className="no-skills">No skills listed</span>
				)}
			</div>

			<button className="contact-button" onClick={handleContactClick}>
				Contact
			</button>
		</div>
	);
}

export default ProfileCard;
