import * as React from 'react';
import {Page} from '../../Page';

class Home extends React.Component<undefined, undefined> {
    render() {
        return <h1>I am the Home Page</h1>;
    }
}

export const HomePage: Page = new Page('Home', Home);