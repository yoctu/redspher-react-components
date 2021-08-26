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
  EditIcon,
  ShipperRangeSlider,
  ShipperCardVehicle
} from 'redspher-components'
import 'redspher-components/dist/index.css'
import { Button, MenuItem, Radio, Select, Chip, createStyles, makeStyles, Grid } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: 300 + theme.spacing(3) * 2,
      marginLeft: theme.spacing(2)
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
  const min = 0
  const max = 23

  const rangeLabelFormat = (value) => {
    return `${value % 24}:00`
  }

  const shownLabelFormat = (value) => {
    return `+ ${value}h`
  }

  const cardVehicleAction = (txt) => {
    console.log(txt)
  }

  const [selectedVehicle, setSelectedVehicle] = React.useState('truck02');
  const [selectedSecondDriver, setSelectedSecondDriver] = React.useState('');
  const [selectedTailift, setSelectedTailLift] = React.useState('');

  return (
    <>
      <RubiwinThemeProvider>
        <h1>This is a test for github pages</h1>
        <RubiwinButton text='yes yes' onClick={sayHello} />
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
        <Button startIcon={<PlusIcon />} color="primary" variant="contained">Shipper Button</Button>
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
        <Radio color="primary" checked={true}/>
        <br />
        <br />
        <Radio color="primary"/>
        <br />
        <br />
        <Radio color="primary" disabled={true}/>
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
        <Chip color="primary" label="Label" disabled={true}/>
        <br />
        <br />
        <Pagination count={69} color='primary' />
        <br />
        <br />
        <div style={{width: '400px', marginLeft: '50px'}}>
          <ShipperRangeSlider
            min={min}
            max={max}
            rangeLabelFormat={rangeLabelFormat}
            shownLabelFormat={shownLabelFormat}
          />
        </div>
        <br />
        <br />
        <Grid container direction="row">
          <Grid item xs={1}>
            <div className={classes.root}>
              <ShipperCardVehicle startIcon="truck01" value="truck01" labelOne="Label" labelTwo="label" disabled={false} onclickFnc={cardVehicleAction} selectedValue={selectedVehicle} setSelectedValue={setSelectedVehicle}></ShipperCardVehicle>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div className={classes.root}>
              <ShipperCardVehicle startIcon="truck02" value="truck02" labelOne="Label" labelTwo="label" disabled={false} onclickFnc={cardVehicleAction} selectedValue={selectedVehicle} setSelectedValue={setSelectedVehicle}></ShipperCardVehicle>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div className={classes.root}>
              <ShipperCardVehicle startIcon="truck03" value="truck03" labelOne="Label" labelTwo="label" disabled={false} onclickFnc={cardVehicleAction} selectedValue={selectedVehicle} setSelectedValue={setSelectedVehicle}></ShipperCardVehicle>
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}>
            <div className={classes.root}>
              <ShipperCardVehicle startIcon="driver" value="driver" labelOne="Label" labelTwo="label" disabled={false} onclickFnc={cardVehicleAction} selectedValue={selectedSecondDriver} setSelectedValue={setSelectedSecondDriver} enableUnselect={true}></ShipperCardVehicle>
            </div>
          </Grid>
            <Grid item xs={1}>
            <div className={classes.root}>
              <ShipperCardVehicle startIcon="tailLift" value="tailLift" labelOne="Label" labelTwo="label" disabled={false} onclickFnc={cardVehicleAction} selectedValue={selectedTailift} setSelectedValue={setSelectedTailLift} enableUnselect={true}></ShipperCardVehicle>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div className={classes.root}>
              <ShipperCardVehicle startIcon="sideLoad" value="sideLoad" labelOne="Label" labelTwo="label" disabled={true}></ShipperCardVehicle>
            </div>
          </Grid>
        </Grid>
        <br />
        <br />
      </ShipperThemeProvider>
    </>
  )
}

export default App
