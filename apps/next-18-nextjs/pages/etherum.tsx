import { Canvas, getPage } from "@raber/react";

export async function getStaticProps() {
	const data = await getPage('ethereum');
	return { props: { data }, }
}

export default function Etherum({ data }: any) {
	return (
		<main>
			<Canvas data={data} id="ethereum"></Canvas>
		</main>
	)
}