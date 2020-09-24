# redspher-components

> reusable components for redspher

[![NPM](https://img.shields.io/npm/v/redspher-components.svg)](https://www.npmjs.com/package/redspher-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save redspher-components
```

## Usage

```jsx
import { MyComponent } from 'redspher-components'
import 'redspher-components/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## contribute

Clone repo https://github.com/yoctu/redspher-react-components

install node modules

```bash
npm install
```

compile components

```bash
npm start
```

check demo and develop

```bash
cd example
npm start
```

run tests

```bash
npm run test
```

test watch (jest only)

```bash
npm run test:watch
```

create a new folder with you component name, check the structure of the other components.
We use scss modules
create tests

import component in src/index.js

create examples in example folder.

DONT FORGET TO UPDATE NPM VERSION !!!

```bash
npm version [<newversion> | major | minor | patch ]
```

## License

MIT © [yoctu](https://github.com/yoctu)
