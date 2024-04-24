import React from 'react';

const Docs = ({ params }: { params: { slug: string[] } }) => {
	if (params.slug.length === 2) {
		return (
			<p>
				Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
			</p>
		);
	} else if (params.slug.length === 1) {
		return <p>View docs for feature {params.slug[0]}</p>;
	}
	return <div>Docs</div>;
};

export default Docs;
