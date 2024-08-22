import Joi from 'joi'
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
  FormGroupInputs,
  FormInput,
  FormProvider,
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
  StringListInput,
  Switch,
  TableComponent,
  TextAreaInput,
  TextInput,
  TimeInput,
  Tooltip,
  TypeAhead
} from './components'
import { FaSave } from 'react-icons/fa'
import { FILTER_TYPE, SORT_DIRECTION } from './types'

// types
interface IValidationDetails {
  type: string
  validationRules: Record<string, any>
}

interface IRowData {
  id: number
  name: string
  age: number
  location: string
}

const formValidationSchema = Joi.object({
  name: Joi.string().required(),
  city: Joi.string().required(),
  validationRules: Joi.object()
    .pattern(Joi.string(), Joi.any().required())
    .required()
})

// constants
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' }
]

const formInitialValues = {}
const validationDetails: IValidationDetails[] = [
  {
    type: 'string',
    validationRules: {
      maxLength: 10
    }
  }
]
const customValidationMessages = {
  name: "Name can't be empty",
  city: "City can't be empty"
}

const defaultSorts = [
  { columnId: 'name', direction: SORT_DIRECTION.ASC },
  { columnId: 'age', direction: SORT_DIRECTION.DESC }
]

const definedFilters = [
  { columnId: 'name', value: '', type: FILTER_TYPE.STRING },
  { columnId: 'age', value: '', type: FILTER_TYPE.BOOLEAN }
]

function App() {
  const [page, setPage] = React.useState(1)
  const [pageLimit, setPageLimit] = React.useState(10)
  const [searchedValue, setSearchedValue] = React.useState('')
  const [rowData, _setRowData] = React.useState([
    { id: 1, name: 'John Doe', age: 30, location: 'USA' },
    { id: 2, name: 'Jane Doe', age: 25, location: 'UK' }
  ])

  const [checked, setChecked] = React.useState(false)
  const [startDate, setStartDate] = React.useState('2021-09-01')
  const [endDate, setEndDate] = React.useState('2021-09-30')

  // DateRangeInput Components
  const onRangeChange = (min: number, max: number) => {
    console.log(min, max)
  }
  const onRangeSliderChange = (values: number[]) => {
    console.log(values)
  }

  // Form Component
  const handleFormSubmit = (values: Record<string, any>) => {
    console.log(values)
  }

  // TableComponent
  const handlePageChange = (page: number) => {
    setPage(page)
  }
  const handlePageLimitChange = (pageLimit: number) => {
    setPageLimit(pageLimit)
  }
  const handleSortChange = (sort: Record<string, any>) => {
    console.log(sort)
  }
  const handleFilterChange = (filters: Record<string, any>) => {
    console.log(filters)
  }
  const RenderRow = ({ id, name, age }: IRowData) => {
    return (
      <Container>
        <FaSave />
        <Container>{id}</Container>
        <Container>{name}</Container>
        <Container>{age}</Container>
      </Container>
    )
  }
  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    {
      id: 'location',
      label: 'Location',
      render: RenderRow
    }
  ]

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
        <FormProvider
          schema={formValidationSchema}
          validationDetails={validationDetails}
          initialValues={formInitialValues}
          customValidationMessages={customValidationMessages}
          onSubmit={handleFormSubmit}
        >
          <FormInput label="City" name="city" required>
            <TextInput placeholder="City" />
          </FormInput>
          <FormGroupInputs groupInputName="validationRules">
            <StringListInput
              notContainsList={[]}
              name="notContains"
              label="Add notContains"
            />
          </FormGroupInputs>
          <Button btnType="primary" btnText="Submit" type="submit" />
        </FormProvider>
      </Grid>
      👇 Organisms
      <TableComponent
        rowKey="id"
        page={page}
        rowData={rowData}
        columns={columns}
        pageLimit={pageLimit}
        showEditButton={true}
        definedSorts={defaultSorts}
        definedFilters={definedFilters}
        searchedValue={searchedValue}
        renderRow={RenderRow}
        handleSortChange={handleSortChange}
        getSearchedValue={setSearchedValue}
        handlePageChange={handlePageChange}
        handleFilterChange={handleFilterChange}
        handlePageLimitChange={handlePageLimitChange}
      />
    </Container>
  )
}

export default App
