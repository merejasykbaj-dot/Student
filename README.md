# Qazaq Coffee — Seminar 11

React Native / Expo demonstration of Lab 19 (smart/dumb components and props) and Lab 20 (catalog, design constants, navigation and business logic).

## Run in VS Code

```bash
npm install
npx expo start -c
```

Scan QR with Expo Go, or press `a` for Android emulator. For web preview:

```bash
npx expo install react-dom react-native-web @expo/metro-runtime
npx expo start --web
```

## Architecture
- Smart components: screens, ShopContext
- Dumb UI components: Header, Categories, CategoryItem, Popular, ProductItem
- Data: `src/data/categories.js`, `src/data/products.js`
- Shared style constants: `constants.js`
- Navigation: bottom tabs + stack product details
- Local persistence: AsyncStorage

Checkout is a demo only; there is no real payment processing or backend. Product photos are loaded from Unsplash URLs and require internet.

## Submission
Push to GitHub `Student/Ashykbay_19` and `Student/Ashykbay_20` as requested by your instructor, or use separate commits for the two labs. Publish/share the Expo project link separately.
