import { Canvas, getPage } from "@raber/react";



export default ({ data }) => (
	<main>
		<Canvas data={data} id="template"></Canvas>
	</main>
)

export async function getStaticProps() {
	const data = await getPage('template');
	return { props: { data },  }
}
