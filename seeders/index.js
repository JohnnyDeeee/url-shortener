const Seeder = require("mongoose-seed");

Seeder.connect("mongodb://localhost", function() {
    Seeder.loadModels([
        'models/url.js'
    ]);

    Seeder.clearModels(['Urls'], function() {
        Seeder.populateModels(data, function() {
            Seeder.disconnect();
        });
    });
});

const data = [
    {
        model: 'Urls',
        documents: [
            {
                destination: 'https://google.com',
                short: 'abcd',
                owner: '192.168.1.100'
            },
            {
                destination: 'https://youtube.com',
                short: 'abcde',
                owner: '192.168.1.101'
            },
            {
                destination: 'https://facebook.com',
                short: 'abcdef',
                owner: '192.168.1.102'
            }
        ]
    }
];