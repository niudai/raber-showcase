import { Canvas, getPage } from "@raber/react";

export async function getStaticProps() {
	const data = await getPage('layout');
	return { props: { data },  }
}

export default function Layout({ data } : any) {
	return (
		<main>
		<h1>Welcome to Next.js</h1>
		<Canvas data={data} id="layout"></Canvas>
	</main>
	)
}
