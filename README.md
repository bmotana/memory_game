# Memory Game

A lightweight browser-based memory challenge built with HTML, CSS, and JavaScript.

## Features

- Adjustable sequence length and round settings
- Listen and visual presentation modes, with voice selection shown only for listening
- Optional no-repeat sequences, with no repeated characters within each sequence
- Custom and progressive play modes
- Character pool customization
- Responsive layout for desktop and mobile devices

When no-repeat sequences are enabled, custom mode requires a sequence length no greater than the
number of unique characters in the selected pool. In progressive mode, the sequence stops growing
once it reaches the pool size.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL printed in the terminal.

## Project Scripts

```bash
npm run dev     # start the Vite dev server
npm run build   # build the app for production
npm run preview # preview the production build
npm run lint    # check formatting with Prettier
npm test        # run sequence generation tests
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
"
