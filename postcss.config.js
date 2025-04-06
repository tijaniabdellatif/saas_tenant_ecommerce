export default {
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: {
          config: process.env.TAILWIND_CONFIG || './tailwind.public.js',
        },
        autoprefixer: {},
      },
};
