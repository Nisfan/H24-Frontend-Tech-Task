### Following changes are done
---
- Install/Update react and third party deps
- Install some of the dependencies as dev deps
- Rename `ProductList` component name (PLP) into more descriptive name
- Create `.env.development` file
- Use `ApolloClient` to fetch graphql data
- Move graphql fetch logic into hook to make the component more readable
- Add `IList` generic typescript type due graphql query change
- Create `ArticleCard` component and make it testable
- Move utiliy functions into seperate folder `src/utils`
- Create `Layout` component
- Follow HTML semantics
- Add unit tests
- Fix `ArticleCard` layout issues (css)
- Change 3 to 2 columns layout
- Refactor `src/index.tsx` to align with new react version