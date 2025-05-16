import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss({
      config: './tailwind.config.js', // optional, can be omitted if default
    }),
    autoprefixer
  ],
}
