import React, { useState } from 'react'

import {
  RubiwinButton,
  RubiwinCheckbox,
  RubiwinFormLabel,
  RubiwinInputField,
  RubiwinInputLabel,
  RubiwinSquareButton,
  RubiwinBackButton,
  AmazonTimePicker,
  RubiwinDateTimePicker,
  DirectBusinessIcon,
  RubiwinThemeProvider,
  ShipperThemeProvider,
  ShipperCardInvoice
} from 'redspher-components'
import 'redspher-components/dist/index.css'
import { Button, MenuItem, Radio, Select, Chip } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: 300 + theme.spacing(3) * 2,
      paddingLeft: theme.spacing(2)
    },
  }),
);

const testRedenderTwo = () => {
  const items = []
  for (let i = 0; i < 30; i++) {
    items.push(<MenuItem value={i}>{i}</MenuItem>)
  }
  return items
}

const App = () => {
  const [checked, setChecked] = useState(true)
  const [time, setTime] = useState(null)
  const [selectedDate, handleDateChange] = useState(
    new Date('2020-10-05T00:00:00.000Z')
  )
  const [selected, setSelected] = useState([10])

  const handleChange = () => {
    setChecked(!checked)
  }
  const testProps = {
    className: 'test',
    id: 'id',
    name: 'name',
    onChange: () => {},
    placeholder: 'placeholder'
  }

  const sayHello = () => {
    window.alert('Hello Rubiwin')
  }

  const classes = useStyles();

  return (
    <>
      <RubiwinThemeProvider>
        <h1>This is a test for github pages</h1>
        <RubiwinButton text='yes yes' onClick={sayHello} />
        <br />
        <Button color="tertiary"> Poney </Button>
        <br />
        <RubiwinCheckbox
          onChange={handleChange}
          checked={checked}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          name='rubiwinCheck'
        />
        <br />
        <RubiwinFormLabel
          control={<RubiwinCheckbox />}
          onChange={handleChange}
          checked={checked}
          name='rubiwin'
          label='Rubiwin'
          labelPlacement='top'
        />
        <br />
        <RubiwinInputField {...testProps} />
        <br />
        <RubiwinInputLabel htmlFor='test'>tests 2</RubiwinInputLabel>
        <br />
        <RubiwinInputField id='test' />
        <br />
        <RubiwinSquareButton
          onClick={sayHello}
          text='Click me'
          className='rubiwin'
        />
        <br />
        <RubiwinBackButton text={<>test</>} onClick={sayHello} />
        <br />
        <RubiwinBackButton text='test string' onClick={sayHello} />
        <br />
        <AmazonTimePicker
          value={time}
          onClick={(event) => event.target.focus()}
          onChange={(value) => setTime(value)}
        />
        <br />
        <RubiwinDateTimePicker
          value={selectedDate}
          onChange={handleDateChange}
          className='test'
          label='test label'
          minDate={new Date('2020-10-05T00:00:00.000Z')}
          maxDate={'10/10/2020'}
        />
        <br />
        <br />

        <Button
          variant='contained'
          startIcon={<DirectBusinessIcon />}
          color='primary'
          size='large'
        >
          Bid on it !
        </Button>
        <br />
        <br />
        <Select
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
          multiple
          variant="outlined"
        >
          {testRedenderTwo()}
        </Select>
      </RubiwinThemeProvider>
      <br />
      <h1>--------- SHIPPER COMPONENTS ---------</h1>
      <br />
      <ShipperThemeProvider>
        <Button color="primary" variant="contained">Shipper Button</Button>
        <br />
        <br />
        <Button color="primary" variant="outlined">Shipper Button</Button>
        <br />
        <br />
        <Button color="primary" variant="text">Shipper Button</Button>
        <br />
        <br />
        <Radio color="primary" checked="true"> </Radio>
        <br />
        <br />
        <Radio color="primary"> </Radio>
        <br />
        <br />
        <Radio color="primary" disabled="true"> </Radio>
        <br />
        <br />
        <Chip color="default" label="Label"></Chip>
        <br />
        <br />
        <Chip color="primary" label="Label"></Chip>
        <br />
        <br />
        <Chip color="secondary" label="Label"></Chip>
        <br />
        <br />
        <Chip color="primary" label="Label" disabled></Chip>
        <br />
        <br />
        <div className={classes.root}>
          <ShipperCardInvoice title="invoice" reference="#GH012021032680" userReference="24WINAHL" invoiceDate="29/01/2021" dueDate="14/02/2021" priceTtc="125,85" priceHt="315,84" vatAmount="60,01"></ShipperCardInvoice>
        </div>
      </ShipperThemeProvider>
    </>
  )
}

export default App
