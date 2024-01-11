# Space X Tracker

## Getting Started

- Clone this repository and run `npm install` to install dependencies.

## Scripts

- `npm run dev` - starts the app in development mode
- `npm run build` - builds the app for production
- `npm run lint` - runs eslint
- `npm run lint:fix` - runs eslint and fixes errors
- `npm run format` - runs prettier

## Code Structure

The `src/*` folder is structured as:

```
src/
├── components/
│   ├── common/ (common components - buttons, inputs, etc)
│   │   ├── <component_name>/
│   ├── layout/ (layout components - header, footer, etc)
│   │   ├── <component_name>/
├── core/
│   ├── constants/
│   ├── types/
├── routes/ (page components per route used by react-router-dom)
├── store/ (redux store properties)
│   ├── api/ (the api service layer)
│   │   ├── <endpoint_name>/ (the endpoint, with generated hooks for consuming data)
    )
```

- The api service layer is split based on the resource base url (e.g. 'spacex'), and within this folder it is split based on the endpoint (e.g. '/history'). The `injectEndpoints()` function includes a query builder for fetching based on a resource ('one', 'all') and transforming the response. The consumer is able to access data from each endpoint using the hooks that are generated with RTK Query.
- Path aliases are used to avoid long relative imports, and to make the code more readable ('@core/**/\*', '@components/**/\*', etc).
- Components should ensure good colocation/grouping of similar elements, and should be split into smaller components if they become too large. A good rule of thumb being when the length exceeds ~150 lines, at which point elements could be split into smaller presentational components and nested within this directory.

## Future Scope (Ommitted due to time constraints)

- Zod could be used for runtime type checking, which would be especially useful for the API layer.
- Tests should be added for the api layer using Jest and Redux Mock Store. For good colocation, these would ideally be stored in the same folder with the directory `__tests__` and be configured to run in `package.json` with Jest.
- Given this repository is very small, it wasn't possible to expand on a 'vision' for how tailwindCSS would be managed in a design system. Either in the `Root.css` file or a separate `/styles` folder design element style properties could be grouped (e.g. `btn btn-blue-500`) or the `tailwind.config.js` could be expanded with theming similar to [https://tailwindcss.com/docs/theme].
