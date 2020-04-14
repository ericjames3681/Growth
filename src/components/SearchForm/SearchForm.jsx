import React from "react";
import { Form, Button, Input } from "semantic-ui-react";

const SearchForm = (props) => (
  <Form onSubmit={props.getPlants}>
    <Input type="text" name="plantSearch" />
    <Button>S E A R C H</Button>
  </Form>
);

export default SearchForm;
