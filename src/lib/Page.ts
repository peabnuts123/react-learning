import * as React from 'react';

export class Page {
    public readonly name: string;
    public readonly component: typeof React.Component;

    constructor(name: string, component: typeof React.Component) {
        this.name = name;
        this.component = component;
    }
}