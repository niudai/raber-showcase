import { Canvas, getPage } from "@raber/react";

export default ({ data }) => (
	<main>
		<h1>Welcome to Next.js</h1>
		<Canvas data={data} id="ethereum"></Canvas>
	</main>
)

export async function getStaticProps() {
	const data = await getPage('ethereum');
	return { props: { data },  }
}
