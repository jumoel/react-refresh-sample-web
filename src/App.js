import React from "react";

function App() {
	const [state, setState] = React.useState(0);
	const onClick = () => setState(state + 1);

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			setState(counter => counter + 1);
		}, 1500);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<h1>{state}</h1>
			<h1 onClick={onClick}>Click me!</h1>
		</>
	);
}

export default function App2() {
	return <App />;
}
