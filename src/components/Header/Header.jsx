import React from 'react';
import styled from 'styled-components'
const Bar = styled.section`
  padding-top: 16px;
  padding-bottom: 8px;
  height: max-height;
  div {
  display: contents;
  }
`
const Tabs = () => {
	return (
		<div class='tabs is-centered is-medium'>
			<ul>
				<li>
					<a>ABOUT</a>
				</li>
				<li>
					<a>EXPERIENCE</a>
				</li>
				<li>
					<a>CONTACT</a>
				</li>
			</ul>
		</div>
	);
};

const Header = () => {
	return (
		<Bar>
			<Tabs />
		</Bar>
	);
};
export default Header;
