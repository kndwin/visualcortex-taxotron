import Head from 'next/head';
import utils from 'styles/utils.module.scss';

import { Landing, Results} from 'components'
import {useState} from 'react';

export default function Home() {
	const [isResults, setResults] = useState(false)
  return (
    <div className={utils.container}>
      <Head>
        <title>Tax-o-tron</title>
      </Head>

			{ !isResults ? (
				<Landing  />
			) : (
				<Results />
			)}
			
    </div>
  );
}
