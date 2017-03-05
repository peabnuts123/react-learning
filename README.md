# react-learning 🌈
Learning React (with TypeScript) by building a small application. I have chosen to write a project management tool of sorts, as it can be as comprehensive or as simple as you like. 

Unlike other repos I have, I have not written this one as a tutorial, but rather an example of a functioning code base with (I hope) a sane workflow.

## Workflow ⚙️
I have designed this workflow myself based on research sourced from around the internet; some from official docs, some from various recommendations from users on StackOverflow, and the rest from various dedicated developers' blog posts. I have designed this workflow to depend on as few workflow-assisting-packages as possible, as I wanted the workflow to be simple and not abstract-away functionality so as to be hard to understand.

The application is written in TypeScript 2 using React and Bootstrap 3, transpiled to ES5 using Babel. The application is compiled and wired together using Webpack 2. There are two separate webpack configurations; one for the application's dependencies (such as React or Bootstrap) – the "libraries" configuration – and one for the application itself. All libraries are bundled into separate files (which are referenced in `index.html`), while all application code is bundled into a single `.min.js` file. 

The structure of the application is such that each module or component may be as abstract and isolated as possible, such that each file only represents a single purpose or function. The webpack workflows are in-place to "wire" the project together so that high-modularity in the source does not lead to a messy output project.

## Commands ⌨️

The project has a few different commands for development:

| Command                       | Purpose |
|-------------------------------|---------|
| `build-libraries`             | Builds all library bundles (React, bootstrap, etc). |
| `build-application`           | Builds all application code into a single bundle. |
| `build-application:live`      | Builds all application bundles, then watches `src/` directory for changes and recompiles when any are detected. |
| `build-all`                   | Equivalent to `build-libraries; build-application`. |
| `serve`                       | Hosts a simple debug server for testing the application. |

These are npm scripts so run them with `npm run $commandName` or `yarn run $commandName` if you have yarn (which you should). You can also see other various (less-useful) scripts in `package.json`.

Feel free to [create an issue](https://github.com/peabnuts123/react-learning/issues) if you have any trouble or wish to contact me about the the repo. Otherwise you can [find me on Twitter](https://twitter.com/peabnuts123) 👍.