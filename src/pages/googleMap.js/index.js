import React, { useState, useRef, useEffect, memo } from "react"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import { geocodeByPlaceId } from "react-google-places-autocomplete"

import HomeLayout from "@/components/layout/HomeLayout"

const GoogleMapAutoComplete = (props) => {
  const [value, setValue] = useState(null)

  useEffect(() => {
    console.log(value)
    if (value) {
      geocodeByPlaceId(value.value.place_id)
        .then((results) => console.log(results))
        .catch((error) => console.error(error))
    }
  }, [value])

  return (
    <HomeLayout>
      <p>API Key: AIzaSyB--wzBTOtKZtlXSY9QmLF4Ub5evrU6E8s</p>
      <h2>GoogleMapAutoComplete</h2>
      <div>
        <GooglePlacesAutocomplete
          apiKey="AIzaSyB--wzBTOtKZtlXSY9QmLF4Ub5evrU6E8s"
          selectProps={{
            value,
            onChange: setValue,
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
    </HomeLayout>
  )
}

export default GoogleMapAutoComplete
