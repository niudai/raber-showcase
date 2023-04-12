import { Canvas, getPage } from '@raber/react';
import Head from 'next/head';
import { Header } from '../components/eth/header';

export async function getStaticProps() {
	const data = await getPage('raber_showcase');
	return { props: { data }, }
}


export default function Index({ data }: any) {

	return (
		<main>
			<Head>
				<title>Raber Showcases</title>
				<meta name="description" content="Raber Showcases - Make Your React App Visually Editable." />
				<link rel="icon" href="/icon.svg" />

			</Head>
			<div style={{
				maxWidth: '1504px',
				margin: 'auto'
			}}>
				<Header />
				<Canvas data={data} id='raber_showcase'></Canvas>

			</div>
		</main>
	)
}


