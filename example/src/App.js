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
  RubiwinActionIcon,
  RubiwinAddIcon,
  RubiwinAdrIcon,
  RubiwinArrowBottomIcon,
  RubiwinArrowLeftIcon,
  RubiwinArrowRightIcon,
  RubiwinArrowTopIcon,
  RubiwinAttachmentIcon,
  RubiwinAttentionIcon,
  RubiwinBigMapIcon,
  RubiwinBusinessDirectIcon,
  DirectBusinessIcon,
  RubiwinBurgerMenuIcon,
  RubiwinCamembertIcon,
  RubiwinCamion1Icon,
  RubiwinCamion2Icon,
  RubiwinCamion3Icon,
  RubiwinCamion4Icon,
  RubiwinCamion5Icon,
  RubiwinCamion6Icon,
  RubiwinCaretBottomIcon,
  RubiwinCaretLeftIcon,
  RubiwinCaretRightIcon,
  RubiwinCaretTopIcon,
  RubiwinCheckIcon,
  RubiwinCheckpointIcon,
  RubiwinCircleCaretBottomIcon,
  RubiwinCircleCaretLeftIcon,
  RubiwinCircleCaretRightIcon,
  RubiwinCircleCaretUpIcon,
  RubiwinClearIcon,
  RubiwinConcessionIcon,
  RubiwinContactIcon,
  RubiwinDashboardIcon,
  RubiwinDatePickerIcon,
  RubiwinDetailIcon,
  RubiwinDownloadIcon,
  RubiwinEditIcon,
  RubiwinEmailIcon,
  RubiwinEuroIcon,
  RubiwinFavorisIcon,
  RubiwinFiltersIcon,
  RubiwinFormationIcon,
  RubiwinGreenPassIcon,
  RubiwinHistogramIcon,
  RubiwinHomeIcon,
  RubiwinIncoterms,
  RubiwinInformationIcon,
  RubiwinInvoiceIcon,
  RubiwinManyPeopleIcon,
  RubiwinNotificationsIcon,
  RubiwinNumberCircleFillIcon,
  RubiwinNumberCircleStrokeIcon,
  RubiwinPeopleIcon,
  RubiwinPeopleLockIcon,
  RubiwinPercentageIcon,
  RubiwinPhoneIcon,
  RubiwinPinMapIcon,
  RubiwinRefreshIcon,
  RubiwinReposIcon,
  RubiwinSaveIcon,
  RubiwinSecondDriverIcon,
  RubiwinSendIcon,
  RubiwinSideLoadIcon,
  RubiwinSortIcon,
  RubiwinTabIcon,
  RubiwinTailLiftIcon,
  RubiwinTimerIcon,
  RubiwinUnvisibilityIcon,
  RubiwinUploadIcon,
  RubiwinVisibilityIcon,
  RubiwinWebAppIcon,
  RubiwinThemeProvider,
  E4pThemeProvider,
  ShipperThemeProvider,
  ShipperCardInvoice,
  ApprovalFlowIcon,
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
  TruckIcon,
  SemiIcon,
  VanIcon,
  BreakIcon,
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
  ShipperCard,
  ShipperSwitch,
  ShipperItem,
  ShipperCheckbox,
  ShipperPhoneNumber,
  PrintIcon,
  DragAndDrop,
  ShipperSelect,
  ShipperStepper,
  ShipperAddressStepper,
  ShipperErrorPopover,
  ShipperRequestStepper,
  RubiwinSelect
} from 'redspher-components'
import {
  Button,
  MenuItem,
  Radio,
  Select,
  Chip,
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormControlLabel,
  ThemeProvider,
  Typography,
  Slider
} from '@mui/material'
import { Pagination } from '@mui/lab'
import InputAdornment from '@mui/material/InputAdornment'

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
    <div style={{ display: 'grid', placeItems: 'center', gap: '1em' }}>
      <h1>--------- RUBIWIN COMPONENTS ---------</h1>

      <RubiwinThemeProvider>
        <RubiwinCheckbox
          onChange={handleChange}
          checked={checked}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          name='rubiwinCheck1'
        />
        <RubiwinCheckbox
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          name='rubiwinCheck2'
          disabled
        />
        <RubiwinFormLabel
          control={<RubiwinCheckbox />}
          onChange={handleChange}
          checked={checked}
          name='rubiwin'
          label='Rubiwin'
          labelPlacement='top'
        />
        <RubiwinInputField {...testProps} />
        <RubiwinInputField {...testProps} disabled />
        <RubiwinInputLabel htmlFor='test'>tests 2</RubiwinInputLabel>
        <RubiwinInputField id='test' />
        <FormControl variant='standard' fullWidth>
          <InputLabel>Select option</InputLabel>
          <RubiwinSelect label='Select option'>
            <MenuItem value={0}>Option 1</MenuItem>
            <MenuItem value={1}>Option 2</MenuItem>
          </RubiwinSelect>
        </FormControl>

        <div style={{ border: '1px solid #00C3FF', display: 'grid', placeItems: 'center', width: '100%', gap: '1em'}}>
          <h2>- BUTTONS -</h2>

          <RubiwinButton text='default RubiwinButton' onClick={sayHello} />
          <RubiwinButton text='default RubiwinButton disabled' disabled />
          <Button>Default button mui text</Button>
          <Button startIcon={<RubiwinAddIcon primarycolor='#00C3FF' />}>Default button mui text</Button>
          <Button disabled>Default button mui disabled</Button>
          <Button disabled startIcon={<RubiwinAddIcon primarycolor='#8F8F8F' />}>Default button mui disabled</Button>
          <Button variant='contained'>Default button mui contained</Button>
          <Button variant='contained' startIcon={<RubiwinAddIcon primarycolor='#FFFFFF' />}>Default button mui contained</Button>
          <Button variant='contained' disabled>Default button mui contained and disabled</Button>
          <Button variant='contained' disabled startIcon={<RubiwinAddIcon primarycolor='#FFFFFF' />}>Default button mui contained and disabled</Button>
          <Button variant='outlined'>Default button mui outlined</Button>
          <Button variant='outlined' startIcon={<RubiwinAddIcon primarycolor='#00C3FF' />}>Default button mui outlined</Button>
          <Button variant='outlined' disabled>Default button mui outlined and disabled</Button>
          <Button variant='outlined' disabled startIcon={<RubiwinAddIcon primarycolor='#8F8F8F' />}>Default button mui outlined and disabled</Button>
          <RubiwinSquareButton
            onClick={sayHello}
            text='square'
            className='rubiwin'
          />
          <RubiwinBackButton text='back' onClick={sayHello} />
        </div>

        <AmazonTimePicker
          value={time}
          onClick={(event) => event.target.focus()}
          onChange={(value) => setTime(value)}
        />
        <RubiwinDateTimePicker
          value={selectedDate}
          onChange={handleDateChange}
          className='test'
          label='test label'
          minDate={new Date('2020-10-05T00:00:00.000Z')}
          maxDate={'10/10/2020'}
        />
        <Select
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
          multiple
          variant='outlined'
        >
          {testRedenderTwo()}
        </Select>

        <div style={{ border: '1px solid #00C3FF', display: 'grid', placeItems: 'center', width: '100%', gap: '1em'}}>
          <h2>- ICONS -</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              placeItems: 'center',
              gap: '1em'
            }}
          >
            <RubiwinActionIcon />
            <RubiwinAddIcon />
            <RubiwinAdrIcon />
            <RubiwinArrowBottomIcon />
            <RubiwinArrowLeftIcon />
            <RubiwinArrowRightIcon />
            <RubiwinArrowTopIcon />
            <RubiwinAttachmentIcon />
            <RubiwinAttentionIcon />
            <RubiwinBigMapIcon />
            <RubiwinBusinessDirectIcon />
            <DirectBusinessIcon />
            <RubiwinBurgerMenuIcon />
            <RubiwinCamembertIcon />
            <RubiwinCamion1Icon />
            <RubiwinCamion2Icon />
            <RubiwinCamion3Icon />
            <RubiwinCamion4Icon />
            <RubiwinCamion5Icon />
            <RubiwinCamion6Icon />
            <RubiwinCaretBottomIcon />
            <RubiwinCaretLeftIcon />
            <RubiwinCaretRightIcon />
            <RubiwinCaretTopIcon />
            <RubiwinCheckIcon />
            <RubiwinCheckpointIcon />
            <RubiwinCircleCaretBottomIcon />
            <RubiwinCircleCaretLeftIcon />
            <RubiwinCircleCaretRightIcon />
            <RubiwinCircleCaretUpIcon />
            <RubiwinClearIcon />
            <RubiwinConcessionIcon />
            <RubiwinContactIcon />
            <RubiwinDashboardIcon />
            <RubiwinDatePickerIcon />
            <RubiwinDetailIcon />
            <RubiwinDownloadIcon />
            <RubiwinEditIcon />
            <RubiwinEmailIcon />
            <RubiwinEuroIcon />
            <RubiwinFavorisIcon />
            <RubiwinFiltersIcon />
            <RubiwinFormationIcon />
            <RubiwinGreenPassIcon />
            <RubiwinHistogramIcon />
            <RubiwinHomeIcon />
            <RubiwinIncoterms />
            <RubiwinInformationIcon />
            <RubiwinInvoiceIcon />
            <RubiwinManyPeopleIcon />
            <RubiwinNotificationsIcon />
            <RubiwinNumberCircleFillIcon />
            <RubiwinNumberCircleStrokeIcon />
            <RubiwinPeopleIcon />
            <RubiwinPeopleLockIcon />
            <RubiwinPercentageIcon />
            <RubiwinPhoneIcon />
            <RubiwinPinMapIcon />
            <RubiwinRefreshIcon />
            <RubiwinReposIcon />
            <RubiwinSaveIcon />
            <RubiwinSecondDriverIcon />
            <RubiwinSendIcon />
            <RubiwinSideLoadIcon />
            <RubiwinSortIcon />
            <RubiwinTabIcon />
            <RubiwinTailLiftIcon />
            <RubiwinTimerIcon />
            <RubiwinUnvisibilityIcon />
            <RubiwinUploadIcon />
            <RubiwinVisibilityIcon />
            <RubiwinWebAppIcon />
          </div>
        </div>

        <h2>- E4P COMPONENTS -</h2>
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
      </RubiwinThemeProvider>
    </div>
  )
}

const ShipperShowCase = () => {
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
  const [selectedFeatures, setSelectedFeatures] = React.useState([])
  const [selectedCarriers, setSelectedCarriers] = React.useState([])
  const [uploadStatus, setUploadStatus] = React.useState('')
  const [childrenStepper, setChildrenStepper] = useState([
    <div>
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
    </div>,
    <Typography>Step b</Typography>,
    <Typography>Step c</Typography>
  ])

  const downloadAction = () => {
    alert('Poney')
  }

  const uploadDocument = () => {
    setUploadStatus('loading')
    setTimeout(() => {
      setUploadStatus('error')
    }, 2000)
    setTimeout(() => {
      setUploadStatus('finished')
    }, 4000)
  }

  const onChangeMethodDrag = () => {
    setUploadStatus(null)
  }

  const steps = [
    {
      id: 'request',
      label: 'Request',
      icon: <RequestIcon />,
      onClick: () => {
        console.log('Step A')
      }
    },
    {
      id: 'offers',
      label: 'Offers',
      icon: <OffersIcon />,
      onClick: () => {
        console.log('Step B')
      }
    },
    {
      id: 'confirmation',
      label: 'Confirmation',
      icon: <ConfirmationIcon />,
      onClick: () => {
        console.log('Step C')
      }
    }
  ]

  const [activeStep] = useState(1)

  const addressStepperIcons = {
    first: <PinIcon title='PinIcon' />,
    last: <PinIcon title='PinIcon' />,
    middle: <StepIcon title='StepIcon' />
  }

  const removeStep = (index) => {
    if (index > -1) {
      setChildrenStepper([
        <Typography>Step b</Typography>,
        <Typography>Step c</Typography>
      ])
    }
  }

  const updatePhone = (e) => {
    console.log(e)
  }

  const [anchorEl, setAnchorEl] = React.useState(null)
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.target)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

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
              <PlusIcon primarycolor={'#fff'} secondarycolor={'#fff'} />
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
              startIcon={<DisconnectIcon primarycolor={'#fff'} />}
              variant='contained'
            >
              Shipper Button
            </Button>
          </div>

          <br />
          <br />
          <br />
          <br />
          <Button color='primary' disabled variant='contained'>
            Shipper Button
          </Button>
          <Button
            startIcon={
              <PlusIcon primarycolor={'#fff'} secondarycolor={'#fff'} />
            }
            color='primary'
            disabled
            variant='contained'
          >
            Shipper Button
          </Button>
          <Button color='primary' disabled variant='outlined'>
            Shipper Button
          </Button>
          <Button
            disabled
            startIcon={<PlusIcon />}
            color='primary'
            variant='outlined'
          >
            Shipper Button
          </Button>
          <Button disabled color='primary' variant='text'>
            Shipper Button
          </Button>
          <Button
            disabled
            startIcon={<PlusIcon />}
            color='primary'
            variant='text'
          >
            Shipper Button
          </Button>
        </section>
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            placeItems: 'center',
            gap: '1em'
          }}
        >
          <PlusIcon title='PlusIcon' />
          <ConfirmationIcon title='ConfirmationIcon' />
          <OffersIcon title='OffersIcon' />
          <StatisticsIcon title='StatisticsIcon' />
          <CalendarIcon title='CalendarIcon' />
          <PaletIcon title='PaletIcon' />
          <DriverIcon title='DriverIcon' />
          <ParcelIcon title='ParcelIcon' />
          <ShipmentsIcon title='ShipmentsIcon' />
          <QuotesIcon title='QuotesIcon' />
          <DisconnectIcon title='DisconnectIcon' />
          <AddressBookIcon title='AddressBookIcon' />
          <HourIcon title='HourIcon' />
          <DeleteIcon title='DeleteIcon' />
          <InvoiceIcon title='InvoiceIcon' />
          <PickupDetailsIcon title='PickupDetailsIcon' />
          <SearchIcon title='SearchIcon' />
          <PinIcon title='PinIcon' />
          <RequestIcon title='RequestIcon' />
          <StepIcon title='StepIcon' />
          <ActionIcon title='ActionIcon' />
          <MonitoringIcon title='MonitoringIcon' />
          <DeliveryDetailsIcon title='DeliveryDetailsIcon' />
          <PriceIcon title='PriceIcon' />
          <InformationIcon title='Icon' />
          <AutomaticIcon title='AutomaticIcon' />
          <HelpIcon title='HelpIcon' />
          <LogoAddressBookIcon title='LogoAddressBookIcon' />
          <TruckIcon title='TruckIcon' />
          <SemiIcon title='SemiIcon' />
          <VanIcon title='VanIcon' />
          <BreakIcon title='BreakIcon' />
          <ExpertIcon title='ExpertIcon' />
          <People1Icon title='People1Icon' />
          <ArrowLeftIcon title='ArrowLeftIcon' />
          <ArrowBottomIcon title='ArrowBottomIcon' />
          <ArrowRightIcon title='ArrowRightIcon' />
          <ArrowTopIcon title='ArrowTopIcon' />
          <AddStepsIcon title='AddStepsIcon' />
          <PeopleGroupIcon title='PeopleGroupIcon' />
          <CheckIcon title='CheckIcon' />
          <SideLoadIcon title='SideLoadIcon' />
          <TailLiftIcon title='TailLiftIcon' />
          <DownloadIcon title='DownloadIcon' />
          <UploadIcon title='UploadIcon' />
          <BurgerIcon title='BurgerIcon' />
          <BurgerCloseIcon title='BurgerCloseIcon' />
          <StarIcon title='StarIcon' />
          <TimerIcon title='TimerIcon' />
          <NotIncludedIcon title='NotIcon' />
          <VisibilityIcon title='VisibilityIcon' />
          <VisibilityNoneIcon title='VisibilityNoneIcon' />
          <LoadingIcon title='LoadingIcon' />
          <WarningIcon title='WarningIcon' />
          <People2Icon title='People2Icon' />
          <ArrowLeft2Icon title='ArrowLeft2Icon' />
          <ArrowBottom2Icon title='ArrowBottom2Icon' />
          <ArrowRight2Icon title='ArrowRight2Icon' />
          <ArrowTop2Icon title='ArrowTop2Icon' />
          <EditIcon title='EditIcon' />
          <PrintIcon title='PrintIcon' />
          <ApprovalFlowIcon title='ApprovalFlowIcon' />
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
          <div style={{ width: '400px', marginLeft: '50px' }}>
            <Slider disabled defaultValue={30} aria-label='Disabled slider' />
          </div>
        </section>
        <div>
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
        <Grid container direction='row' justifyContent='center' spacing={6}>
          <Grid item sm={2}>
            <ShipperCard
              startIcon='van'
              value='van'
              labelOne='Label'
              labelTwo='label'
              disabled={false}
              onclickFnc={cardVehicleAction}
              selectedValue={selectedVehicle}
              setSelectedValue={setSelectedVehicle}
              tooltipValue={
                <Grid container direction='column' style={{ margin: 8 }}>
                  <Grid item>
                    <Typography
                      style={{
                        fontSize: 12,
                        color: '#062440',
                        fontWeight: 700,
                        marginBottom: 5,
                        lineHeight: '16px'
                      }}
                    >
                      PL5
                    </Typography>
                  </Grid>
                  <Grid item container>
                    <Grid item style={{ width: 50 }}>
                      <Typography
                        style={{
                          fontSize: 12,
                          color: '#68717B',
                          fontWeight: 400,
                          lineHeight: '14px'
                        }}
                        display='inline'
                      >
                        Length
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          fontSize: 12,
                          color: '#062440',
                          fontWeight: 400,
                          lineHeight: '14px'
                        }}
                        display='inline'
                      >
                        600 (cm)
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container>
                    <Grid item style={{ width: 50 }}>
                      <Typography
                        style={{
                          fontSize: 12,
                          color: '#68717B',
                          fontWeight: 400,
                          lineHeight: '14px'
                        }}
                        display='inline'
                      >
                        Width
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          fontSize: 12,
                          color: '#062440',
                          fontWeight: 400,
                          lineHeight: '14px'
                        }}
                        display='inline'
                      >
                        500 (cm)
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container>
                    <Grid item style={{ width: 50 }}>
                      <Typography
                        style={{
                          fontSize: 12,
                          color: '#68717B',
                          fontWeight: 400,
                          lineHeight: '14px'
                        }}
                        display='inline'
                      >
                        Height
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          fontSize: 12,
                          color: '#062440',
                          fontWeight: 400,
                          lineHeight: '14px'
                        }}
                        display='inline'
                      >
                        270 (cm)
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container>
                    <Grid item style={{ width: 50 }}>
                      <Typography
                        style={{
                          fontSize: 12,
                          color: '#68717B',
                          fontWeight: 400,
                          lineHeight: '14px'
                        }}
                        display='inline'
                      >
                        Weight
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          fontSize: 12,
                          color: '#062440',
                          fontWeight: 400,
                          lineHeight: '14px'
                        }}
                        display='inline'
                      >
                        3500 (kg)
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
          <Grid item sm={2}>
            <ShipperCard
              startIcon='break'
              value='break'
              labelOne='Label'
              labelTwo='label'
              disabled
              onclickFnc={cardVehicleAction}
              selectedValue={selectedVehicle}
              setSelectedValue={setSelectedVehicle}
            />
          </Grid>
          <Grid item sm={2}>
            <ShipperCard
              startIcon='break'
              value='break'
              labelOne='Label'
              labelTwo='label'
              disabled={false}
              onclickFnc={cardVehicleAction}
              selectedValue={selectedVehicle}
              setSelectedValue={setSelectedVehicle}
            />
          </Grid>
          <Grid item sm={2}>
            <ShipperCard
              startIcon='truck'
              value='truck'
              labelOne='Label'
              labelTwo='label'
              disabled={false}
              onclickFnc={cardVehicleAction}
              selectedValue={selectedVehicle}
              setSelectedValue={setSelectedVehicle}
            />
          </Grid>
          <Grid item sm={2}>
            <ShipperCard
              startIcon='semi'
              value='semi'
              labelOne='Label'
              labelTwo='label'
              disabled={false}
              onclickFnc={cardVehicleAction}
              selectedValue={selectedVehicle}
              setSelectedValue={setSelectedVehicle}
            />
          </Grid>
        </Grid>
        <Grid container direction='row' justifyContent='center' spacing={4}>
          <Grid item sm={1}>
            <ShipperCard
              startIcon='driver'
              value='driver'
              labelOne='Label'
              disabled={false}
              selectedValue={selectedFeatures}
              setSelectedValue={setSelectedFeatures}
              enableUnselect={true}
              noInfoIcon={true}
            />
          </Grid>
          <Grid item sm={1}>
            <ShipperCard
              startIcon='tailLift'
              value='tailLift'
              labelOne='Label with two lines'
              disabled={false}
              selectedValue={selectedFeatures}
              setSelectedValue={setSelectedFeatures}
              enableUnselect={true}
              noInfoIcon={true}
            />
          </Grid>
          <Grid item sm={1}>
            <ShipperCard
              startIcon='sideLoad'
              value='sideLoad'
              labelOne='Label'
              disabled={false}
              selectedValue={selectedFeatures}
              setSelectedValue={setSelectedFeatures}
              enableUnselect={true}
              noInfoIcon={true}
            />
          </Grid>
        </Grid>
        <Grid container direction='row' justifyContent='center' spacing={4}>
          <Grid item sm={2}>
            <ShipperCard
              startIcon={
                <img
                  src='https://stagingcarrier.rubiwin.com/images/FRANAI001.png'
                  alt=''
                />
              }
              value='test1'
              labelOne='test1'
              disabled={false}
              selectedValue={selectedCarriers}
              setSelectedValue={setSelectedCarriers}
              enableUnselect={true}
              noInfoIcon={true}
            />
          </Grid>
          <Grid item sm={2}>
            <ShipperCard
              startIcon={
                <img
                  src='https://stagingcarrier.rubiwin.com/images/FRTEST020.png'
                  alt=''
                />
              }
              value='test2'
              labelOne='test2'
              disabled={false}
              selectedValue={selectedCarriers}
              setSelectedValue={setSelectedCarriers}
              enableUnselect={true}
              noInfoIcon={true}
            />
          </Grid>
          <Grid item sm={2}>
            <ShipperCard
              startIcon={
                <img
                  src='https://stagingcarrier.rubiwin.com/images/INTIME.png'
                  alt=''
                />
              }
              value='test3'
              labelOne='test3'
              disabled={false}
              selectedValue={selectedCarriers}
              setSelectedValue={setSelectedCarriers}
              enableUnselect={true}
              noInfoIcon={true}
            />
          </Grid>
        </Grid>
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

          <FormControl
            error
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <InputLabel htmlFor='input-test'>Label</InputLabel>
            <Input
              id='input-test'
              type={'text'}
              aria-describedby='component-error-text'
            />
            <ShipperErrorPopover
              open={open}
              anchorEl={anchorEl}
              text={'Error message'}
              handlePopoverClose={handlePopoverClose}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='input-test'>Label</InputLabel>
            <Input
              id='input-test'
              type={'text'}
              multiline={true}
              aria-describedby='component-error-text'
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='select-test'>Select label</InputLabel>
            <ShipperSelect label={'Select label'}>
              <MenuItem value={1}>
                <Typography>One</Typography>
              </MenuItem>
              <MenuItem value={2}>
                <Typography>Two</Typography>
              </MenuItem>
            </ShipperSelect>
          </FormControl>

          <ShipperPhoneNumber
            label={'Phone number'}
            helperText={'Not a number'}
            enableValidation
            inputProps={{
              className: 'contact-input',
              id: 'phoneNumberInput'
            }}
            onChange={(e) => {
              updatePhone(e)
            }}
          />
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
          <DragAndDrop
            uploadStatus={uploadStatus}
            onChangeMethod={() => {
              onChangeMethodDrag()
            }}
          />
          <br />
          <br />
          <br />
          <br />
          <Button
            color='primary'
            variant='contained'
            onClick={() => {
              uploadDocument()
            }}
          >
            Upload
          </Button>
        </div>
        <br />
        <br />
        <ShipperSwitch
          firstValueTranslate='parcel'
          firstValue='parcel'
          firstIcon={<ParcelIcon fontSize='small' />}
          secondValueTranslate='palet'
          secondValue='palet'
          secondIcon={<PaletIcon fontSize='small' />}
        />
        <br />
        <br />
        <ShipperSwitch
          firstValueTranslate='automatic'
          firstValue='automatic'
          firstIcon={<AutomaticIcon fontSize='small' />}
          secondValueTranslate='expert'
          secondValue='expert'
          secondIcon={<ExpertIcon fontSize='small' />}
        />
        <br />
        <br />
        <br />
        <br />
        <ShipperStepper steps={steps} activeStep={activeStep} />
        <br />
        <br />
        <br />
        <br />
        <ShipperRequestStepper
          steppercolor={'#000'}
          iconPrimaryColor={'#2986cc'}
          iconSecondaryColor={'#f44336'}
        />
        <br />
        <br />
        <br />
        <br />
        <ShipperAddressStepper
          icons={addressStepperIcons}
          nbItems={childrenStepper.length}
          childrenComponent={childrenStepper}
          removeStepMethod={removeStep}
        />
        <br />
        <br />
        <br />
        <br />
        <Typography variant='h1'>H1 text</Typography>
        <Typography variant='h2'>H2 text</Typography>
        <Typography variant='h3'>H3 text</Typography>
        <Typography variant='h4'>H4 text</Typography>
        <Typography variant='subtitle1'>Subtitle1 text</Typography>
        <Typography variant='body1'>Body1 text</Typography>
        <Typography variant='body2'>Body2 text</Typography>
        <Typography variant='caption'>Caption text</Typography>
        <Typography>Default no variant text</Typography>
        <br />
        <br />
        <br />
        <br />
      </ShipperThemeProvider>
    </div>
  )
}

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
