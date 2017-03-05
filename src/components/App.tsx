/* tslint:disable: max-classes-per-file */
import * as React from 'react';
import { Page } from '../lib/Page';
import { ProjectsPage } from './pages/Projects/Projects';
import '../lib/site.less';

// tslint:disable-next-line:no-empty-interface
interface IAppProperties {
}

interface IAppState {
    links: Page[];
    currentPage: Page;
}

export class App extends React.Component<IAppProperties, IAppState> {
    constructor(props: IAppProperties) {
        super(props);

        this.state = {
            links: [
                ProjectsPage
            ],
            currentPage: ProjectsPage
        };

        this.setPage = this.setPage.bind(this);
    }
    setPage(page: Page) {
        this.setState({
            currentPage: page
        });
    }
    render() {
        return (
            <div>
                <h1>Project Dashboard <small><em>Manage ALL the projects!</em></small></h1>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#navbar-collapse"
                                aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">RDG</a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav">
                                {/* Map each page to a navbar item */}
                                {this.state.links.map((page, index) =>
                                    // Set active on currently selected page
                                    <li key={index}
                                        className={
                                            this.state.currentPage === page ?
                                                'active' :
                                                undefined
                                        }
                                    >
                                        {/* Set current page on click */}
                                        <a href="#" onClick={() => this.setPage(page)}>{page.name}</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Render the current page */}
                <div className="panel panel-default">
                    <div className="panel-body">
                        <this.state.currentPage.component />
                    </div>
                </div>
            </div>
        );
    }
}