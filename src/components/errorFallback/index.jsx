import React, {useEffect, useState} from "react";
import Development from "./development";
import Production from "./production";

const NODE_ENV = import.meta.env.VITE_NODE_ENV;

function ErrorFallback({error}) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDetails = () => {
		setIsOpen(!isOpen);
	};
	if (NODE_ENV === "development") {
		return <Development error={error} isOpen={isOpen} toggleDetails={toggleDetails} />;
	}

	if (NODE_ENV === "production") {
		return <Production />;
	}
}

export default ErrorFallback;
