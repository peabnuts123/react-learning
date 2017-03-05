import * as React from 'react';
import {Page} from './page';

interface ICurrentPageState {
    currentPage?: Page;
}

export class CurrentPage extends React.Component<undefined, ICurrentPageState> {
    render() {
        if (!this.state.currentPage) {
            return null;
        }

        return (
            <this.state.currentPage.component />
        );
    }
}