/** @type {import('tailwindcss').Config} */
module.exports = {
  // 指定tailwindcss作用范围
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      aria: {  // 自定义aria属性
        asc: 'sort="ascending"',
        desc: 'sort="descending"',
      }
    },
  },
  corePlugins: {
    preflight: false, // 禁用tailwindcss默认的样式
  },
  plugins: [],
}