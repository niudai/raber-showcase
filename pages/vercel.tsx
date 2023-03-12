import { Canvas, getPage } from "@raber/react";




export async function getStaticProps() {
	const data = await getPage('vercel');
	return { props: { data }, }
}

export default function Vercel({ data }: any) {

	return (
		<main>
			<h1>Welcome to Next.js</h1>
			<Canvas data={data} id="vercel"></Canvas>
		</main>
	)
}
