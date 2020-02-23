module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: {
          "esmodules": false
        }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ]
};
