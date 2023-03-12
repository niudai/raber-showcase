import { Canvas, getPage } from "@raber/react";

export default ({ data } : any) => (
	<main>
		<h1>Welcome to Next.js</h1>
		<Canvas data={data} id="layout"></Canvas>
	</main>
)

export async function getStaticProps() {
	const data = await getPage('layout');
	return { props: { data },  }
}
