module.exports = {
    client: {
        excludes: ['**/graphql.ts'],
        service: {
            name: 'my-graphql-app',
            url: 'http://localhost:4000/graphql',
        },
    },
}
