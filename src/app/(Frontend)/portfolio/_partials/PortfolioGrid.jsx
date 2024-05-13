import Image from "next/image";
import React from "react";
import demoImage from "@/public/img/demo/demo1.jpg";

const PortfolioGrid = () => {
	return (
		<div>
			<div className="flex flex-wrap mt-16 justify-center gap-4">
				<div className="">
					<Image src={demoImage} alt="portfolio image" />
				</div>
				<div>
					<Image src={demoImage} alt="portfolio image" />
				</div>
				<div>
					<Image src={demoImage} alt="portfolio image" />
				</div>
				<div>
					<Image src={demoImage} alt="portfolio image" />
				</div>
			</div>
		</div>
	);
};

export default PortfolioGrid;
