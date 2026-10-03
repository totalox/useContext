## Desafio `useContext()` — Tema Global

Crie um **ThemeContext** para controlar o tema da aplicação.

### Requisitos

1. Crie `ThemeContext` com `createContext()`.
2. Crie `ThemeProvider`.
3. Use `useState()` para controlar `"light"` / `"dark"`.
4. Disponibilize pelo Context:
   - `theme`
   - `toggleTheme`
5. Em um componente `Button`, use `useContext()` para acessar `toggleTheme`.
6. O componente `App` **não pode passar props** entre esses componentes.

### Resultado esperado

```text
App
 └── ThemeProvider
      ├── Header
      │    └── Button → toggleTheme()
      │
      └── Content → theme
```

**Bônus:** salve o tema no `localStorage` usando `useEffect()`.