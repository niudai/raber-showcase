import { Canvas, getPage } from "@raber/react";



export default ({ data } : any) => (
	<main>
		<h1>Welcome to Next.js</h1>
		<Canvas data={data} id="vercel"></Canvas>
	</main>
)

export async function getStaticProps() {
	const data = await getPage('vercel');
	return { props: { data },  }
}
