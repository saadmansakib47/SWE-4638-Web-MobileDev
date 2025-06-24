import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
	return (
		<div className="background">
			<div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>

			<div className="card-wrapper">
				<ProfileCard
					name="Julie Diabinho"
					jobTitle="Software Engineer"
					company="Nantes Tech"
					bio="Loves building scalable web applications and exploring new technologies."
					skills={["React", "Node.js", "MongoDB", "CSS"]}
					imageUrl="https://via.placeholder.com/100"
				/>
				<ProfileCard
					name="Alex Martinez"
					jobTitle="UI/UX Designer"
					company="Creative Studio"
					bio="Passionate about crafting beautiful, user-friendly designs."
					skills={["Figma", "Adobe XD", "Illustrator", "CSS"]}
					imageUrl="https://via.placeholder.com/100"
				/>
				<ProfileCard
					name="Michael Chen"
					jobTitle="Project Manager"
					company="BuildRight Inc."
					bio="Leading software teams to deliver projects efficiently and on time."
					skills={["Scrum", "Agile", "Leadership", "JIRA"]}
					imageUrl="https://via.placeholder.com/100"
				/>
			</div>
		</div>
	);
}

export default App;
