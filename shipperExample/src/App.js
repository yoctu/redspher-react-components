import React from 'react'
import { ShipperThemeProviderV2, CustomCheckbox } from 'redspher-components'

import 'redspher-components/dist/index.css'

const App = () => {
  return (
    <ShipperThemeProviderV2>
      <CustomCheckbox defaultChecked />
    </ShipperThemeProviderV2>
  )
}

export default App
