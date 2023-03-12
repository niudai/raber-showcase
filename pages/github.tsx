import { Canvas, getPage } from "@raber/react";

export async function getStaticProps() {
	const data = await getPage('github');
	return { props: { data }, }
}


export default function Github({ data }: any) {
	return (
		<main>
			<Canvas data={data} id="github"></Canvas>
		</main>
	)
}
