module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './src', // 绝对路径的根目录
        alias: {
          '@/utils': './src/utils',
          '@/components': './src/components',
          '@/assets': './src/assets',
          '@/pages': './src/pages',
          '@models': './src/models',
          '@/navigator': './src/navigator',
          '@/config': './src/config',
        },
      },
    ],
  ],
};
