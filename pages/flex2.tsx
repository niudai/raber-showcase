import { Canvas, getPage } from "@raber/react";
import { Header } from "../components/eth/header";



export default ({ data }: any) => (
	<main>
		<Header />

		<Canvas data={data} id="flex2"></Canvas>
	</main>
)

export async function getStaticProps() {
	const data = await getPage('flex2');
	return { props: { data },  }
}
