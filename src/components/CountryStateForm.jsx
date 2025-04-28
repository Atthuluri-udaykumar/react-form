import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

// Dummy countries and states
const countryStateMap = {
  USA: ['California', 'Florida', 'Texas'],
  India: ['Maharashtra', 'Karnataka', 'Tamil Nadu'],
  Canada: ['Ontario', 'Quebec', 'British Columbia'],
};

const CountryStateForm = () => {
  const [stateOptions, setStateOptions] = useState([]);

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Country & State Form</h2>

      <Formik
        initialValues={{ country: '', state: '' }}
        onSubmit={(values) => {
          console.log('Form submitted:', values);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="country">Country</label>
              <Field
                as="select"
                name="country"
                onChange={(e) => {
                  const selectedCountry = e.target.value;
                  setFieldValue('country', selectedCountry);
                  setFieldValue('state', ''); 
                  setStateOptions(countryStateMap[selectedCountry] || []);
                }}
              >
                <option value="">Select a country</option>
                {Object.keys(countryStateMap).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Field>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="state">State</label>
              <Field as="select" name="state">
                <option value="">Select a state</option>
                {stateOptions.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </Field>
            </div>

            <button type="submit">Submit</button>

            <div style={{ marginTop: '20px' }}>
              <strong>Selected Values:</strong>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CountryStateForm;
