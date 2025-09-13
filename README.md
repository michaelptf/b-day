# Birthday Card App

Welcome to the Birthday Card App! This is a mobile-first web application designed to celebrate birthdays with a festive card, complete with confetti effects and a password gate for added fun.

## Features

- **Password Gate**: A secure entry point that requires a password to access the birthday card.
- **Birthday Card**: A visually appealing card that displays a festive header, clickable areas for confetti, and hidden messages.
- **Confetti Effects**: Enjoy a colorful confetti explosion when interacting with the card.
- **Responsive Design**: Optimized for mobile devices to ensure a delightful user experience.

## Technologies Used

- React 18+
- TypeScript
- Styled-components or CSS Modules for styling
- react-confetti for confetti effects
- framer-motion for animations

## Getting Started

To get started with the Birthday Card App, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```
   cd birthday-card-app
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the application**:
   ```
   npm start
   ```

5. **Open your browser** and go to `http://localhost:3000` to view the app.

## Folder Structure

```
birthday-card-app
├── src
│   ├── components
│   │   ├── BirthdayCard.tsx
│   │   ├── Confetti.tsx
│   │   ├── PasswordGate.tsx
│   │   └── styles
│   │       ├── BirthdayCard.module.css
│   │       ├── Confetti.module.css
│   │       └── PasswordGate.module.css
│   ├── hooks
│   │   └── useConfetti.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

If you'd like to contribute to the Birthday Card App, feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is open-source and available under the [MIT License](LICENSE).