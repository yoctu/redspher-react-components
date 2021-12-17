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
  E4pThemeProvider,
  ShipperThemeProvider,
  ShipperCardInvoice,
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
  ShipperCardVehicle,
  ShipperSwitchPackage,
  ShipperItem,
  ShipperCheckbox,
  ShipperPhoneNumber,
  PrintIcon,
  DragAndDrop
} from 'redspher-components'
import 'redspher-components/dist/index.css'
import {
  Button,
  MenuItem,
  Radio,
  Select,
  Chip,
  createStyles,
  makeStyles,
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormControlLabel,
  ThemeProvider
} from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import 'redspher-components/dist/index.css'
import InputAdornment from '@material-ui/core/InputAdornment'

const RubiWinShowCase = () => {
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
      <E4pThemeProvider>
        <Button
          variant='contained'
          startIcon={<DirectBusinessIcon />}
          color='primary'
          size='large'
        >
          Bid on it !
        </Button>
      </E4pThemeProvider>
      <br />
      <br />
      <Select
        value={selected}
        onChange={(event) => setSelected(event.target.value)}
        multiple
        variant='outlined'
      >
        {testRedenderTwo()}
      </Select>
      <br />

    </RubiwinThemeProvider>
  )
}

const ShipperShowCase = () => {
  const classes = useStyles()
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

  const [selectedVehicle, setSelectedVehicle] = React.useState('truck02')
  const [selectedSecondDriver, setSelectedSecondDriver] = React.useState('')
  const [selectedTailift, setSelectedTailLift] = React.useState('')
  const [uploadStatus, setUploadStatus] = React.useState('')

  const downloadAction = () => {
    alert('Poney')
  }

  const uploadDocument = () => {
    setUploadStatus('loading');
    setTimeout(() => {
      setUploadStatus('error');
    }, 2000);
    setTimeout(() => {
      setUploadStatus('finished');
    }, 4000);
  }

  const onChangeMethodDrag = () => {
    setUploadStatus(null);
  }

  return (
    <div style={{ display: 'grid', placeItems: 'center', gap: '1em' }}>
      <h1>--------- SHIPPER COMPONENTS ---------</h1>
      <ShipperThemeProvider>
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            placeItems: 'center'
          }}
        >
          <Button color='primary' variant='contained'>
            Shipper Button
          </Button>
          <Button
            startIcon={
              <PlusIcon primaryColor={'#fff'} secondaryColor={'#fff'} />
            }
            color='primary'
            variant='contained'
          >
            Shipper Button
          </Button>
          <Button color='primary' variant='outlined'>
            Shipper Button
          </Button>
          <Button startIcon={<PlusIcon />} color='primary' variant='outlined'>
            Shipper Button
          </Button>
          <Button color='primary' variant='text'>
            Shipper Button
          </Button>
          <Button startIcon={<PlusIcon />} color='primary' variant='text'>
            Shipper Button
          </Button>
          <div
            style={{
              width: '300px',
              height: '100px',
              display: 'flex',
              backgroundColor: '#1436D3'
            }}
          >
            <Button
              className={'logoutButton'}
              startIcon={<DisconnectIcon primaryColor={'#fff'} />}
              variant='contained'
            >
              Shipper Button
            </Button>
          </div>
        </section>
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            placeItems: 'center',
            gap: '1em'
          }}
        >
          <PlusIcon title="PlusIcon"/>
          <ConfirmationIcon title="ConfirmationIcon"/>
          <OffersIcon title="OffersIcon"/>
          <StatisticsIcon title="StatisticsIcon"/>
          <CalendarIcon title="CalendarIcon"/>
          <PaletIcon title="PaletIcon"/>
          <DriverIcon title="DriverIcon"/>
          <ParcelIcon title="ParcelIcon"/>
          <ShipmentsIcon title="ShipmentsIcon"/>
          <QuotesIcon title="QuotesIcon"/>
          <DisconnectIcon title="DisconnectIcon"/>
          <AddressBookIcon title="AddressBookIcon"/>
          <HourIcon title="HourIcon"/>
          <DeleteIcon title="DeleteIcon"/>
          <InvoiceIcon title="InvoiceIcon"/>
          <PickupDetailsIcon title="PickupDetailsIcon"/>
          <SearchIcon title="SearchIcon"/>
          <PinIcon title="PinIcon"/>
          <RequestIcon title="RequestIcon"/>
          <StepIcon title="StepIcon"/>
          <ActionIcon title="ActionIcon"/>
          <MonitoringIcon title="MonitoringIcon"/>
          <DeliveryDetailsIcon title="DeliveryDetailsIcon"/>
          <PriceIcon title="PriceIcon"/>
          <InformationIcon title="Icon"/>
          <AutomaticIcon title="AutomaticIcon"/>
          <HelpIcon title="HelpIcon"/>
          <LogoAddressBookIcon title="LogoAddressBookIcon"/>
          <Truck01Icon title="Truck01Icon"/>
          <Truck02Icon title="Truck02Icon"/>
          <Truck03Icon title="Truck03Icon"/>
          <Truck04Icon title="Truck04Icon"/>
          <ExpertIcon title="ExpertIcon"/>
          <People1Icon title="People1Icon"/>
          <ArrowLeftIcon title="ArrowLeftIcon"/>
          <ArrowBottomIcon title="ArrowBottomIcon"/>
          <ArrowRightIcon title="ArrowRightIcon"/>
          <ArrowTopIcon title="ArrowTopIcon"/>
          <AddStepsIcon title="AddStepsIcon"/>
          <PeopleGroupIcon title="PeopleGroupIcon"/>
          <CheckIcon title="CheckIcon"/>
          <SideLoadIcon title="SideLoadIcon"/>
          <TailLiftIcon title="TailLiftIcon"/>
          <DownloadIcon title="DownloadIcon"/>
          <UploadIcon title="UploadIcon"/>
          <BurgerIcon title="BurgerIcon"/>
          <BurgerCloseIcon title="BurgerCloseIcon"/>
          <StarIcon title="StarIcon"/>
          <TimerIcon title="TimerIcon"/>
          <NotIncludedIcon title="NotIcon"/>
          <VisibilityIcon title="VisibilityIcon"/>
          <VisibilityNoneIcon title="VisibilityNoneIcon"/>
          <LoadingIcon title="LoadingIcon"/>
          <WarningIcon title="WarningIcon"/>
          <People2Icon title="People2Icon"/>
          <ArrowLeft2Icon title="ArrowLeft2Icon"/>
          <ArrowBottom2Icon title="ArrowBottom2Icon"/>
          <ArrowRight2Icon title="ArrowRight2Icon"/>
          <ArrowTop2Icon title="ArrowTop2Icon"/>
          <EditIcon title="EditIcon"/>
          <PrintIcon title="PrintIcon"/>
        </section>
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            placeItems: 'center'
          }}
        >
          <Radio color='primary' checked='true' />
          <Radio color='primary' />
          <Radio color='primary' disabled='true' />
        </section>
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            placeItems: 'center',
            gap: '1em'
          }}
        >
          <Chip color='default' label='Label' />
          <Chip color='primary' label='Label' />
          <Chip color='secondary' label='Label' />
          <Chip color='primary' label='Label' disabled />
          <Pagination count={69} color='primary' />
          <div style={{ width: '400px', marginLeft: '50px' }}>
            <ShipperRangeSlider
              min={min}
              max={max}
              rangeLabelFormat={rangeLabelFormat}
              shownLabelFormat={shownLabelFormat}
              showLabel={true}
            />
          </div>
        </section>
        <div className={classes.root}>
          <ShipperCardInvoice
            title='Invoice'
            reference='#GH012021032680'
            userReference='24WINAHL'
            invoiceDate='29/01/2021'
            dueDate='14/02/2021'
            priceTtc='125,85€'
            priceHt='315,84€'
            vatAmount='60,01€'
            downloadAction={downloadAction}
            invoiceDateTranslate='Invoice Date'
            dueDateTranslate='Due Date'
            withoutTaxes='HT'
            withTaxes='TTC'
            VATAmount='VAT Amount'
            downloadTranslate='Download'
          />
        </div>
        <Grid
          container
          direction='row'
          style={{
            width: 'unset',
            margin: 'auto',
            'place-content': 'center'
          }}
        >
          <Grid item sm={2}>
            <div className={classes.root}>
              <ShipperCardVehicle
                startIcon='truck01'
                value='truck01'
                labelOne='Label'
                labelTwo='label'
                disabled={false}
                onclickFnc={cardVehicleAction}
                selectedValue={selectedVehicle}
                setSelectedValue={setSelectedVehicle}
              ></ShipperCardVehicle>
            </div>
          </Grid>
          <Grid item sm={2}>
            <div className={classes.root}>
              <ShipperCardVehicle
                startIcon='truck02'
                value='truck02'
                labelOne='Label'
                labelTwo='label'
                disabled={false}
                onclickFnc={cardVehicleAction}
                selectedValue={selectedVehicle}
                setSelectedValue={setSelectedVehicle}
              ></ShipperCardVehicle>
            </div>
          </Grid>
          <Grid item sm={2}>
            <div className={classes.root}>
              <ShipperCardVehicle
                startIcon='truck03'
                value='truck03'
                labelOne='Label'
                labelTwo='label'
                disabled={false}
                onclickFnc={cardVehicleAction}
                selectedValue={selectedVehicle}
                setSelectedValue={setSelectedVehicle}
              ></ShipperCardVehicle>
            </div>
          </Grid>
        </Grid>
        <Grid container direction='row'>
          <Grid item sm={2}>
            <div className={classes.root}>
              <ShipperCardVehicle
                startIcon='driver'
                value='driver'
                labelOne='Label'
                labelTwo='label'
                disabled={false}
                onclickFnc={cardVehicleAction}
                selectedValue={selectedSecondDriver}
                setSelectedValue={setSelectedSecondDriver}
                enableUnselect={true}
                noInfoIcon={true}
              ></ShipperCardVehicle>
            </div>
          </Grid>
          <Grid item sm={2}>
            <div className={classes.root}>
              <ShipperCardVehicle
                startIcon='tailLift'
                value='tailLift'
                labelOne='Label'
                labelTwo='label'
                disabled={false}
                onclickFnc={cardVehicleAction}
                selectedValue={selectedTailift}
                setSelectedValue={setSelectedTailLift}
                enableUnselect={true}
                noInfoIcon={true}
              ></ShipperCardVehicle>
            </div>
          </Grid>
          <Grid item sm={2}>
            <div className={classes.root}>
              <ShipperCardVehicle
                startIcon='sideLoad'
                value='sideLoad'
                labelOne='Label'
                labelTwo='label'
                disabled={true}
                noInfoIcon={true}
              ></ShipperCardVehicle>
            </div>
          </Grid>
        </Grid>
        <br />
        <br />
        <ShipperSwitchPackage
          parcelTranslate='parcel'
          paletTranslate='pallet'
        />
        <br />
        <br />
        <div style={{ width: '400px', marginLeft: '50px' }}>
          <ShipperItem text='Yolo' action={downloadAction} />
          <ShipperItem
            startIcon={<PlusIcon />}
            text='Yolo'
            action={downloadAction}
          />
          <ShipperItem
            endIcon={<PlusIcon />}
            text='Yolo'
            action={downloadAction}
          />
          <ShipperItem
            startIcon={<PlusIcon />}
            endIcon={<PlusIcon />}
            text='Yolo'
            action={downloadAction}
          />
        </div>
        <br />
        <br />
        <div
          style={{
            backgroundColor: '#ececec',
            padding: '20px',
            width: '400px'
          }}
        >
          <FormControl>
            <InputLabel htmlFor='input-test'>Label</InputLabel>
            <Input id='input-test' type={'text'} />
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor='input-test'>Label</InputLabel>
            <Input
              id='input-test'
              type={'text'}
              endAdornment={
                <InputAdornment position='end'>
                  <PlusIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <FormControl error>
            <InputLabel htmlFor='input-test'>Label</InputLabel>
            <Input
              id='input-test'
              type={'text'}
              aria-describedby='component-error-text'
            />
            <FormHelperText id='component-error-text'>
              Error message
            </FormHelperText>
          </FormControl>
          <br />
          <FormControl error>
            <InputLabel htmlFor='input-test'>Label</InputLabel>
            <Input
              id='input-test'
              type={'text'}
              endAdornment={
                <InputAdornment position='end'>
                  <PlusIcon />
                </InputAdornment>
              }
              aria-describedby='component-error-text'
            />
            <FormHelperText id='component-error-text'>
              Error message
            </FormHelperText>
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor='input-test'>Label</InputLabel>
            <Input
              id='input-test'
              type={'text'}
              multiline={true}
              aria-describedby='component-error-text'
            />
          </FormControl>
          <br />
          <br />
          <ShipperPhoneNumber label={'Phone number'} helperText={'Not a number'} />
        </div>
        <br />
        <br />
        <FormControlLabel
          value='top'
          control={<ShipperCheckbox color='primary' />}
          label='Top'
          labelPlacement='top'
        />
        <FormControlLabel
          value='right'
          control={<ShipperCheckbox color='primary' />}
          label='Right'
          labelPlacement='right'
        />
        <br />
        <br />
        <div
          style={{
            backgroundColor: '#ececec',
            padding: '20px',
            width: '300px'
          }}
        >
          <DragAndDrop uploadStatus={uploadStatus} onChangeMethod={() => {onChangeMethodDrag()}}/>
          <br />
          <br />
          <br />
          <br />
          <Button color='primary' variant='contained' onClick={() => {uploadDocument()}}>
            Upload
          </Button>
        </div>
        <br />
        <br />
        <br />
        <br />
      </ShipperThemeProvider>
    </div>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: 300 + theme.spacing(3) * 2,
      marginLeft: theme.spacing(2)
    }
  })
)

const testRedenderTwo = () => {
  const items = []
  for (let i = 0; i < 30; i++) {
    items.push(<MenuItem value={i}>{i}</MenuItem>)
  }
  return items
}

const App = () => {
  return (
    // See: https://github.com/mui-org/material-ui/issues/15914
    //      https://stackoverflow.com/a/67555923/6595024
    <ThemeProvider>
      <RubiWinShowCase />
      <ShipperShowCase />
    </ThemeProvider>
  )
}

export default App
