// tailwind.config.js

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'toDo-background': '#9875C3',
      'toDo-task': '#C3B1E9',
      'toDo-edit': '#47ADB4',
      'toDo-delete': '#B44747',
    },
    extend: {},
  },
  plugins: [],
}
