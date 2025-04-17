@nosirjonov/dark-mode
=====================

A simple, customizable dark mode web component that allows you to toggle between dark and light themes in your web applications. The component automatically detects the system's theme preference and can store the user's selection in localStorage.

Features
--------

*   Toggle between light and dark modes.
    
*   Automatically detects system color scheme preference.
    
*   Saves the theme preference in localStorage for persistent theming.
    
*   Customizable icons for both light and dark themes.
    
*   Supports custom CSS styling for dark and light modes.
    

Installation
------------

You can install the package via npm:

```
yarn add @nosirjonov/dark-mode

pnpm add @nosirjonov/dark-mode

npm install @nosirjonov/dark-mode
```

Alternatively, you can include it via a script tag directly in your HTML file:

```html
<script src="https://unpkg.com/@nosirjonov/dark-mode"></script>
```

Usage
-----

To use the dark mode toggle in your HTML, simply add the component.

### Basic Example

HTML

```html
<body>
  <dark-mode></dark-mode>
</body>
```

Or in a React or other JSX environment:

```jsx
import '@nosirjonov/dark-mode';

const ToggleMode () => {
  return (
    <dark-mode></dark-mode>
  )
}
```

Or in a Vue environment:

```jsx
import '@nosirjonov/dark-mode';

<template>
  <dark-mode></dark-mode>
</template>
```

### Attributes

*   **light-icon** (optional): Set the SVG or text for the icon displayed when light mode is active.
    
*   **dark-icon** (optional): Set the SVG or text for the icon displayed when dark mode is active.

```html
<dark-mode 
  light-icon="<svg>...</svg>" 
  dark-icon="<svg>...</svg>"
  >
</dark-mode>
```
**Note**: Safe SVGs without XSS attacks

By default, the component will show 🌞 for light mode and 🌒 for dark mode if no icons are provided.

### Customizing Styles

To customize the dark and light modes, you can add your own CSS rules targeting the data-theme attribute on the document.documentElement.

```css
[data-theme="dark"] {    
  background-color: #0d1117;    
  color: #c9d1d9;  
}  

[data-theme="light"] {    
  background-color: #ffffff;    
  color: #24292f;  
}
```

API
---

### Properties

*   **mode**: The current theme, either 'light' or 'dark'. You can get and set this property to manually switch between themes.
    

### Methods

*   **toggleMode()**: Toggle between dark and light modes. When the mode changes, it updates the localStorage and the page's theme.
    

### Events

*   **themeChanged**: Fired when the theme is changed, either by user interaction or system preference.
    

Example: Integrating with Your Web App
--------------------------------------

### HTML

```html
<script src="https://unpkg.com/@nosirjonov/dark-mode"></script>
```

### JavaScript (Optional)

If you want to manually control the theme, you can access the component instance:

```javascript
const darkModeToggle = document.querySelector('dark-mode'); 
darkModeToggle.toggleMode(); // Toggle the theme manually
```

Contributing
------------

Feel free to fork the project and submit issues or pull requests. Contributions are always welcome!

License
-------

This project is licensed under the ISC License.# dark-mode-component
