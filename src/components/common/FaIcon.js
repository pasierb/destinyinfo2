import React from 'react';

export default function FaIcon (props) {
	const cssClass = `fa fa-${props.icon}`;

	return (<i className={cssClass}></i>);
}
