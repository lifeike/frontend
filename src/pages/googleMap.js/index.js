import React, { useState, useRef, useEffect, memo } from "react"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import { geocodeByPlaceId } from "react-google-places-autocomplete"

import HomeLayout from "@/components/layout/HomeLayout"

const GoogleMapAutoComplete = (props) => {
  const [value, setValue] = useState()
  const [city, setCity] = useState()
  const [province, setProvince] = useState()

  const handleChange = async (defaultInputValue) => {
    console.log(value)
    setValue({ ...defaultInputValue, label: defaultInputValue.label.split(",")[0] })
    setCity(defaultInputValue.label.split(",")[1])
    setProvince(defaultInputValue.label.split(",")[2])

    if (value) {
      geocodeByPlaceId(value.value.place_id)
        .then((results) => console.log(results))
        .catch((error) => console.error(error))
    }
  }

  return (
    <HomeLayout>
      <p>API Key: AIzaSyB--wzBTOtKZtlXSY9QmLF4Ub5evrU6E8s</p>
      <br></br>
      <h2>Google Places AutoComplete</h2>
      <br></br>
      <div>
        <label className="text-red-500">Street Address</label>
        <GooglePlacesAutocomplete
          apiKey="AIzaSyB--wzBTOtKZtlXSY9QmLF4Ub5evrU6E8s"
          selectProps={{
            value,
            // onChange: (defaultInputValue) => console.log(defaultInputValue),
            onChange: (defaultInputValue) => handleChange(defaultInputValue),
          }}
          apiOptions={{ language: "ca", region: "ca" }}
          // selectProps={{
          //   styles: {
          //     input: (provided) => ({
          //       ...provided,
          //       color: "blue",
          //     }),
          //     option: (provided) => ({
          //       ...provided,
          //       color: "blue",
          //     }),
          //     singleValue: (provided) => ({
          //       ...provided,
          //       color: "blue",
          //     }),
          //   },
          // }}
        />
      </div>
      <br></br>
      <label className="text-red-500">City(disabled)</label>
      <div>
        <input value={city} className="border" disabled type="text" placeholder="" />
      </div>
      <br></br>
      <label className="text-red-500">Province(disabled)</label>
      <div>
        <input value={province} className="border bg-white" disabled type="text" placeholder="" />
      </div>
    </HomeLayout>
  )
}

export default GoogleMapAutoComplete
