module.exports = {
    plugins: ['ghost'],
    extends: [
        'plugin:ghost/node'
    ],
    rules: {
        'ghost/filenames/match-exported-class': 'off'
    }
};
