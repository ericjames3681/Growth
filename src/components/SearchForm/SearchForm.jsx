import React from "react";
import { Form, Button } from "semantic-ui-react";

const SearchForm = (props) => (
  <Form onSubmit={props.getPlant}>
    <input type="text" name="plantName" />
    <Button>S E A R C H</Button>
  </Form>
);

export default SearchForm;
