import { useEffect, useState } from 'react';
import { BiSolidUpArrow } from 'react-icons/bi';

// style the scroll to top button


const ScrollToTopButtom = () => {
	const [hasScrollToTopButton, setHasScrollToTopButton] = useState(false);

	function toggleScrollTopButton() {
		setHasScrollToTopButton(
			document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
		);
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleScrollTopButton);

		return () => {
			window.removeEventListener('scroll', toggleScrollTopButton);

		};
	}, []);

	return (
		<>
			{hasScrollToTopButton && (
				<a href="#" className="scroll-top btn-hover">
					<BiSolidUpArrow/>
				</a>
			)}
		</>
	);
};

export default ScrollToTopButtom;