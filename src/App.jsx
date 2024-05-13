import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import ErrorFallback from "./components/errorFallback";
import Navbar from "./components/navbar";
import Redirect from "./components/redirect";
import NotFound from "./screens/error";
import Protected from "./screens/protected";

const systemWarning = {
	redirect_message: "Be redirected to the page in 1 seconds.",
};

function App() {

	const LazyHome = lazy(() => {
		return new Promise((resolve) => setTimeout(() => resolve(import("./screens/home")), 1000));
	});

	const LazyMovie = lazy(() => {
		return new Promise((resolve) => setTimeout(() => resolve(import("./screens/movie")), 1000));
	});

	const LazyLogIn = lazy(() => {
		return new Promise((resolve) => setTimeout(() => resolve(import("./screens/logIn")), 1000));
	});

	const LazySignUp = lazy(() => {
		return new Promise((resolve) => setTimeout(() => resolve(import("./screens/signUp")), 1000));
	});
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Suspense fallback={<Redirect success={false} text={systemWarning.redirect_message} />} key={"suspense"}>
				<Navbar isOpen={localStorage.getItem("token")} />
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<LazyHome />} />
					<Route path='signUp' element={<Protected child={<LazySignUp />} path='auth' />} />
					<Route path='login' element={<Protected child={<LazyLogIn />} path='auth' />} />
					<Route path='movie/:id' element={<Protected child={<LazyMovie />} />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</ErrorBoundary>
	);
}

export default App;
