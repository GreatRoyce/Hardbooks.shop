# Frontend Folder Structure

```text
src/
  assets/
  components/
    ui/
      composites/
        CartButton.jsx
        Reveal.jsx
      primitives/
        Card.jsx
        CompBtn.jsx
        Pagination.jsx
        SearchBar.jsx
        SideBar.jsx
  modules/
    public/
      components/
      data/
      pages/
        Auth/
    user/
      cart/pages/
      components/
    shared/
      context/
  App.jsx
  main.jsx
```

## Notes

- `src/routes` and `src/services` currently exist as placeholders and are empty.
- Shared state currently lives in `src/modules/shared/context/CartContext.jsx`.
- Keep file and import casing consistent to avoid Linux deploy failures.
