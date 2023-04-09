import { Canvas, getPage } from "@raber/react";
import "../components/eth/nextjs-card";

export async function getStaticProps() {
	const data = await getPage('nextjs');
	return { props: { data }, }
}

export default function NextJS({ data }: any) {
	return (
		<main>
			<h1>Welcome to Next.js</h1>
			<Canvas data={data} id="nextjs"></Canvas>
		</main>
	)
}