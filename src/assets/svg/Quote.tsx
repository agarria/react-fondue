import React from 'react';

interface SvgProps {
	className?: string;
}

function Svg({ className }: SvgProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="21"
			viewBox="0 0 15 21"
			className={className}
		>
			<path
				fill="#1F2D3D"
				fillRule="evenodd"
				d="M14.1106963,7.05812741 C14.1130133,6.97710815 14.1222696,6.89608889 14.1222696,6.81275852 C14.1222696,6.7849837 14.1176415,6.75720296 14.1176415,6.73173926 C14.1176415,6.6761837 14.1222696,6.62294519 14.1222696,6.56970074 L14.1106963,6.57896296 C13.9856948,2.92616296 10.9903407,0 7.30773333,0 C3.54382222,0 0.490548148,3.0509037 0.490548148,6.81718519 C0.490548148,10.2523852 3.03454815,13.0856296 6.33777778,13.5555556 C5.51602963,16.2778074 2.99288889,18.2592593 0,18.2592593 L0,20.6921481 C7.64148148,20.6898311 13.8518519,14.6340741 14.1108148,7.05777778 L14.1106963,7.05812741 Z"
			/>
		</svg>
	);
}

export default Svg;
