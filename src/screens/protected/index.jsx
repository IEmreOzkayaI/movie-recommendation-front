const Protected = ({child, path}) => {
	if (path === "auth" && !localStorage.getItem("token")) {
		return <>{child}</>;
	}
	if (path === "auth" && localStorage.getItem("token")) {
		window.location.replace("/");
		return;
	}
	if (path !== "auth" && !localStorage.getItem("token")) {
		window.location.replace("/");
		return;
	}
	if (path !== "auth" && localStorage.getItem("token")) {
		return <>{child}</>;
	}
};

export default Protected;
