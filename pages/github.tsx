import { Canvas, getPage } from "@raber/react";



export default ({ data } : any) => (
	<main>
		<Canvas data={data} id="github"></Canvas>
	</main>
)

export async function getStaticProps() {
	const data = await getPage('github');
	return { props: { data },  }
}
