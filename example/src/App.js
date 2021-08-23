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
  PlusIcon,
  ConfirmationIcon,
  OffersIcon,
  PaletIcon,
  StatisticsIcon,
  CalendarIcon,
  DriverIcon,
  ShipmentsIcon,
  ParcelIcon,
  QuotesIcon,
  DisconnectIcon,
  AddressBookIcon,
  HourIcon,
  DeleteIcon,
  InvoiceIcon,
  PickupDetailsIcon,
  SearchIcon,
  PinIcon,
  RequestIcon,
  StepIcon,
  ActionIcon,
  MonitoringIcon,
  DeliveryDetailsIcon,
  PriceIcon,
  InformationIcon,
  AutomaticIcon,
  HelpIcon,
  LogoAddressBookIcon,
  Truck01Icon,
  Truck02Icon,
  Truck03Icon,
  Truck04Icon,
  ExpertIcon,
  People1Icon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopIcon,
  ArrowBottomIcon,
  AddStepsIcon,
  PeopleGroupIcon,
  CheckIcon,
  SideLoadIcon,
  TailLiftIcon,
  DownloadIcon,
  UploadIcon,
  BurgerIcon,
  BurgerCloseIcon,
  StarIcon,
  TimerIcon,
  NotIncludedIcon,
  VisibilityIcon,
  VisibilityNoneIcon,
  LoadingIcon,
  WarningIcon,
  People2Icon,
  ArrowLeft2Icon,
  ArrowRight2Icon,
  ArrowTop2Icon,
  ArrowBottom2Icon,
  EditIcon
} from 'redspher-components'
import 'redspher-components/dist/index.css'
import { Button, MenuItem, Radio, Select, Chip } from '@material-ui/core'

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
        <Button startIcon={<PlusIcon primaryColor={'#fff'} secondaryColor={'#fff'} />} color="primary" variant="contained">Shipper Button</Button>
        <br />
        <br />
        <Button color="primary" variant="outlined">Shipper Button</Button>
        <Button startIcon={<PlusIcon />} color="primary" variant="outlined">Shipper Button</Button>
        <br />
        <br />
        <Button color="primary" variant="text">Shipper Button</Button>
        <Button startIcon={<PlusIcon />} color="primary" variant="text">Shipper Button</Button>
        <br />
        <br />
        <PlusIcon />
        <ConfirmationIcon />
        <OffersIcon />
        <StatisticsIcon />
        <CalendarIcon />
        <PaletIcon />
        <DriverIcon />
        <ParcelIcon />
        <ShipmentsIcon />
        <QuotesIcon />
        <DisconnectIcon />
        <AddressBookIcon />
        <HourIcon />
        <DeleteIcon />
        <InvoiceIcon />
        <PickupDetailsIcon />
        <SearchIcon />
        <PinIcon />
        <RequestIcon />
        <StepIcon />
        <ActionIcon />
        <MonitoringIcon />
        <DeliveryDetailsIcon />
        <PriceIcon />
        <InformationIcon />
        <AutomaticIcon />
        <HelpIcon />
        <LogoAddressBookIcon />
        <Truck01Icon />
        <Truck02Icon />
        <Truck03Icon />
        <Truck04Icon />
        <ExpertIcon />
        <People1Icon />
        <ArrowLeftIcon />
        <ArrowBottomIcon />
        <ArrowRightIcon />
        <ArrowTopIcon />
        <AddStepsIcon />
        <PeopleGroupIcon />
        <CheckIcon />
        <SideLoadIcon />
        <TailLiftIcon />
        <DownloadIcon />
        <UploadIcon />
        <BurgerIcon />
        <BurgerCloseIcon />
        <StarIcon />
        <TimerIcon />
        <NotIncludedIcon />
        <VisibilityIcon />
        <VisibilityNoneIcon />
        <LoadingIcon />
        <WarningIcon />
        <People2Icon />
        <ArrowLeft2Icon />
        <ArrowBottom2Icon />
        <ArrowRight2Icon />
        <ArrowTop2Icon />
        <EditIcon />
        <br />
        <br />
        <Radio color="primary" checked="true"/>
        <br />
        <br />
        <Radio color="primary"/>
        <br />
        <br />
        <Radio color="primary" disabled="true"/>
        <br />
        <br />
        <Chip color="default" label="Label"/>
        <br />
        <br />
        <Chip color="primary" label="Label"/>
        <br />
        <br />
        <Chip color="secondary" label="Label"/>
        <br />
        <br />
        <Chip color="primary" label="Label" disabled/>
        <br />
        <br />
      </ShipperThemeProvider>
    </>
  )
}

export default App
