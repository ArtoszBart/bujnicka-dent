import React from "react";

const ImportantInfo = ({ children }) => {
	return (
		<div className="important-info">
			<div className="important-info-title">
				<i className="fas fa-info-circle"></i>
				<h5>Ważne</h5>
			</div>
			<p>
				{children}
			</p>
		</div>
	);
};

export default ImportantInfo;