import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from 'semantic-ui-react';

const HeaderPage = () => (
	<header>
		<Icon name="spy icon" style={{ fontSize:'48px' }} />
		Development Sandbox
		<a href="https://github.com/RodriguezMichael/node_sandbox">
		<Button circular icon style={{ float : 'right' }}>
			<Icon name="github"/>
		</Button>
		</a>
	</header>
)
export default HeaderPage