import Head from 'next/head';
import utils from 'styles/utils.module.scss';

import { Landing, Results} from 'components'
import {useStore} from 'state';

export default function Home() {
	const isCalculated = useStore(state => state.isCalculated)
  return (
    <div className={utils.container}>
      <Head>
        <title>Tax-o-tron</title>
      </Head>

			<div className={utils.card}>
				{isCalculated}
				{ !isCalculated ? (
					<Landing  />
				) : (
					<Results />
				)}
			</div>
			
    </div>
  );
}
