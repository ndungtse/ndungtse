import Link from "next/link";
import React, { useState } from "react";
import Work from "../work";

type Props = {
	recent: any;
	setLinear: React.Dispatch<React.SetStateAction<boolean>>;
};
const RecentActivity = ({ recent, setLinear }: Props) => {
	const [works, setWorks] = useState(recent.slice(0, 4));
	const [showMore, setShowMore] = useState(false);

	const loadMore = () => {
		// setLinear(true);
		if (showMore){
			setShowMore(false);
			return setWorks(recent.slice(0, 4));
		}
		setShowMore(true);
		setWorks(recent);
		// setLinear(false);
	};

	return (
		<div id="projects" className={`flex flex-col w-full py-8`}>
			<h2 className='text-center text-2xl font-semibold'>Recent Activities</h2>
			<div className=' grid xtab:grid-cols-3 tablet:grid-cols-2 desktop:grid-cols-4 w-full'>
				{works.map((work: any, index: number) => (
					<Work work={work} key={index} no={index} />
				))}
			</div>
			<button
				onClick={loadMore}
				className='px-7 mt-6 py-2 bg-blue-800 text-white mx-auto'
			>
				{showMore ?'See Less':'See more'}
			</button>
		</div>
	);
};

export default RecentActivity;
