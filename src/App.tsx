import React from 'react'
import BaseInput from './components/atoms/inputs/base-input'
import {
  Badge,
  Button,
  ButtonWithIcon,
  Card,
  Checkbox,
  CheckboxGroup,
  Chip,
  ChipGroup,
  CircularLoader,
  Container,
  DateInput,
  DateRangeInput,
  DateTimeInput,
  DateTimeRangeInput,
  Dropdown,
  EmailInput,
  FloatingButton,
  Grid,
  ImageUpload,
  InputDescription,
  Label,
  LinearLoader,
  Link,
  Loader,
  Logo,
  MultiImageUpload,
  MultiSelect,
  MultiSelectDropdown,
  NumberInput,
  NumericRangeInput,
  NumericRangeSliderInput,
  PasswordInput,
  Radio,
  RegexInput,
  SearchBar,
  SelectWithIcon,
  SingleFileUpload,
  Switch,
  TextAreaInput,
  TextInput,
  TimeInput,
  Tooltip,
  TypeAhead
} from './components'
import { FaSave } from 'react-icons/fa'

// constants
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' }
]

function App() {
  const [checked, setChecked] = React.useState(false)
  const [startDate, setStartDate] = React.useState('2021-09-01')
  const [endDate, setEndDate] = React.useState('2021-09-30')

  const onRangeChange = (min: number, max: number) => {
    console.log(min, max)
  }
  const onRangeSliderChange = (values: number[]) => {
    console.log(values)
  }

  return (
    <Container className="p-6">
      👇 Atoms
      <BaseInput label="First Name" />
      <Grid spacing={2} container direction="column">
        <Radio label="Option 1" />
        <Checkbox label="Check me" />
        <Switch
          label="Toggle me"
          checked={checked}
          onClick={() => setChecked(!checked)}
        />
        <InputDescription text="Input Description">
          <TextInput value="Hello World!" />
        </InputDescription>
        <EmailInput value="johndoe@gmail.com" />
        <NumberInput value="123" />
        <PasswordInput value="password" />
        <RegexInput value="123" pattern="\d+" />
        <TextAreaInput />
        <TypeAhead />
        <SearchBar value="Search" />
        <NumericRangeInput min={0} max={0} onRangeChange={onRangeChange} />
        <NumericRangeSliderInput
          min={0}
          max={0}
          value={[0, 0]}
          onRangeChange={onRangeSliderChange}
        />
        <DateInput value="2021-09-01" openNext={false} />
        <TimeInput value="12:00" />
        <DateTimeInput value="2021-09-01T12:00" />
        <DateRangeInput
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={(e) => setStartDate(e.target.value)}
          onEndDateChange={(e) => setEndDate(e.target.value)}
          minDate="2021-09-01"
          maxDate="2021-09-30"
        />
        <DateTimeRangeInput
          startDate="2021-09-01T12:00"
          endDate="2021-09-30T12:00"
          onStartDateChange={(e) => console.log(e.target.value)}
          onEndDateChange={(e) => console.log(e.target.value)}
          minDate="2021-09-01"
          maxDate="2021-09-30"
          startDateTime={''}
          endDateTime={''}
        />
        <ImageUpload />
        <SingleFileUpload />
        <MultiImageUpload />
        <Badge badgeContent="10" />
        <Button btnType="primary" />
        <ButtonWithIcon btnType="primary" Icon={() => <FaSave />} />
        <FloatingButton btnType="primary" Icon={() => <FaSave />} />
        <Chip label="This is a Chip" />
        <ChipGroup chips={['One', 'Two']} />
        <Label text="This is Label" />
        <Link to="#" children={<Container>This is a Link</Container>} />
        <Logo src="" alt="Logo" />
        <Tooltip text="This is a Tooltip">
          <Container>This is a Tooltip</Container>
        </Tooltip>
        <Loader />
        <LinearLoader />
        <CircularLoader />
      </Grid>
      👇 Molecules
      <Grid spacing={2} container direction="column">
        <Card
          title="Image Card"
          content="This card has an image at the top."
          img="https://via.placeholder.com/400"
          size="medium"
        />
        <CheckboxGroup options={options} />
        <ChipGroup
          color="neutral"
          chips={['primary', 'secondary', 'tertiary', 'neutral']}
        />
        <Dropdown options={options} />
        <MultiSelect displayKey="value" options={options} />
        <MultiSelectDropdown
          placeholder="Select an option"
          label="Select an option"
          options={options}
        />
        <SelectWithIcon options={options} icon={FaSave} />
      </Grid>
    </Container>
  )
}

export default App
