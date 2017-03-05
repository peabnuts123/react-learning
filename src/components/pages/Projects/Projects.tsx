import * as React from 'react';
import { Page } from '../../../lib/Page';
import { Project } from '../../../lib/Project';

interface IProjectsState {
    projects: Project[];
}

class Projects extends React.Component<undefined, IProjectsState> {
    constructor(props: undefined) {
        super(props);

        this.state = {
            projects: [
                new Project("React Learning", "Learning React by creating an example project"),
                new Project("TypeScript Learning", "Tutorial Project to teach others TypeScript"),
                new Project("Video Game", "Sweet Hack and Slash RPG"),
                new Project("Machine Learning", "Example project demonstrating basic Neural Network principles")
            ]
        };
    }
    render() {
        return (
            <div>
                <h2>Projects <small>Dummy Data</small></h2>

                <table className="table table-sriped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Project Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map((project) =>
                            <tr className="clickable" key={project.id}>
                                <td>{project.id}</td>
                                <td>{project.name}</td>
                                <td>{project.description}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export const ProjectsPage: Page = new Page('Projects', Projects);