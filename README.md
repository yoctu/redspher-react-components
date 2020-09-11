## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm t`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Add a component

### create component
1. create a folder with the name of your component in `src/compoments`
2. The component with the same name as the folder
3. index.js with `export { default } from "./shinyCompoment"`
4. create a `component.module.scss` and a `component.test.js`
5. create snapshots tests for your component.

The documentation will be generated from comments you write before the components.
The props and documentation is mandatory, comments before each props will be in docs.
We have jest and enzyme as tests frameworks. 
    [jest docs](https://jestjs.io/docs/en/getting-started)
    [enzyme docs](https://enzymejs.github.io/enzyme/docs/api/)
    
We do at least snapshots testing.
Enzyme helps with interaction testing.

### create an example
1. create a folder with the name of the component in `src/docs/examples/`
2. create as many Examples as you want.

## docs

deploy new online docs `npm run deploy:docs`

[online docs](https://yoctu.github.io/redspher-react-components/)
