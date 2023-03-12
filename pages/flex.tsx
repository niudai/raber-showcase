import { Canvas, getPage } from "@raber/react";



export default ({ data }) => (
	<main>
		<h1>Welcome to Next.js</h1>
		<Canvas data={data} id="flex"></Canvas>
	</main>
)

export async function getStaticProps() {
	const data = await getPage('flex');
	return { props: { data },  }
}
