import React from 'react';
import preloaderGif from '../../../assets/images/preloader.gif';

type preloaderType = {
}

export const Preloader = (props: preloaderType) => {
	return (
		<>
			<img style={{ width: '100px', height: '100px' }} src={preloaderGif} />
		</>
	)
}