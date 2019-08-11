import React from 'react';

interface SvgProps {
	className?: string;
}

function Svg({ className }: SvgProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="33"
			height="33"
			viewBox="0 0 33 33"
			className={className}
		>
			<path
				fillRule="evenodd"
				d="M16.404,0 C7.346,0 0,7.345 0,16.406 C0,23.653 4.7,29.802 11.22,31.972 C12.04,32.122 12.34,31.616 12.34,31.181 C12.34,30.791 12.325,29.76 12.317,28.391 C7.754,29.382 6.791,26.191 6.791,26.191 C6.045,24.297 4.97,23.792 4.97,23.792 C3.48,22.774 5.082,22.795 5.082,22.795 C6.729,22.911 7.595,24.485 7.595,24.485 C9.058,26.992 11.435,26.269 12.369,25.849 C12.519,24.789 12.942,24.066 13.411,23.655 C9.768,23.241 5.938,21.834 5.938,15.548 C5.938,13.757 6.578,12.292 7.627,11.145 C7.458,10.73 6.895,9.062 7.787,6.804 C7.787,6.804 9.165,6.363 12.299,8.486 C13.6375822,8.12115698 15.0185896,7.93520687 16.406,7.933 C17.799,7.94 19.203,8.122 20.513,8.486 C23.645,6.363 25.02,6.804 25.02,6.804 C25.915,9.062 25.352,10.73 25.183,11.145 C26.235,12.292 26.869,13.757 26.869,15.548 C26.869,21.85 23.034,23.236 19.379,23.643 C19.969,24.149 20.493,25.15 20.493,26.681 C20.493,28.874 20.473,30.643 20.473,31.181 C20.473,31.62 20.768,32.131 21.601,31.97 C28.114,29.796 32.811,23.651 32.811,16.406 C32.81,7.345 25.463,0 16.403,0 L16.404,0 Z"
				transform="translate(0 .5)"
			/>
		</svg>
	);
}

export default Svg;
