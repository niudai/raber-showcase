import { Canvas, getPage } from "@raber/react";

export async function getStaticProps() {
	const data = await getPage('ethereum');
	return { props: { data }, }
}

export default function Etherum({ data }: any) {
	return (
		<main>
			<h1>Welcome to Next.js</h1>
			<Canvas data={data} id="ethereum"></Canvas>
		</main>
	)
}