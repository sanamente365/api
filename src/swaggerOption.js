export const option = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Sanamente api',
            version: '1.0.0',
            description: 'aasssd'
        },
        servers: [
            {
                url: "http://localhost:3001"
            }
        ]
    },
    apis: ["./src/routes/*.js"]
}