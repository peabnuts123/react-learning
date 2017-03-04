class Library {
    constructor(name, entryPoints) {
        this.name = name;
        this.entryPoints = entryPoints;
    }
}

const libraries = [
    new Library('react', [
        'react',
        'react-dom'
    ]),
    new Library('bootstrap', [
        'bootstrap',
        './node_modules/bootstrap/less/bootstrap.less'
    ])
];

module.exports = {
    entryPoints: libraries.reduce((curr, next) => {
        curr[next.name] = next.entryPoints;
        return curr;
    }, {}),
    all: libraries.map(lib => lib.name)
};

