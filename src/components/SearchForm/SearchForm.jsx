import React from "react";
import { Form, Button, Input, Card } from "semantic-ui-react";

const SearchForm = (props) => (
  <Card>
    <Form onSubmit={props.getPlants}>
      <Input type="text" name="plantSearch" />
      <Button>S E A R C H</Button>
    </Form>
  </Card>
);

export default SearchForm;
