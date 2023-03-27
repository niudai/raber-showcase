import Head from 'next/head';
import { EthereumCard } from '../components/eth/card';
import { Chart } from '../components/eth/etheStat';

export default function Test({ data } : any) { (
	<main>
		<Head>
			<title>Home | ethereum.org</title>
			<meta name="description" content="Make Your React App Visually Editable." />
			<link rel="icon" href="https://ethereum.org/favicon-32x32.png?v=8b512faa8d4a0b019c123a771b6622aa" />

		</Head>
		{/* <div style={{
			maxWidth: '1504px',
			margin: 'auto'
		}}> */}
		<EthereumCard />
		<div style={{
			width: '100%',
			height: '200px',
		}}>
			{/* <div style={{
				width: 100
			}}> */}
				{/* <AreaChartWithBackground /> */}
			{/* </div> */}
			{/* <div style={{
				width: 100
			}}> */}
			{/* </div> */}

			<div>xx</div>
		</div>
		<div style={{
			width: '500px',
			height: '300px',
		}}>
		<Chart />			 
		</div>

		{/* </div> */}
	</main>
) }

