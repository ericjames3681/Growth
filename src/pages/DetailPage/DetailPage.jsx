import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const DetailPage = (props) => {
  const plant = props.getPlant(props.match.params.i);
  return (
    <>
      <div className="DisplayPage"></div>
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      {plant ? (
        <Card centered>
          <Card.Content>
            <span>C O M M O N &nbsp; N A M E :</span>
            <span>plant.common_name</span>
            <Link to="/">R E T U R N</Link>
          </Card.Content>
        </Card>
      ) : (
        <h3> L O A D I N G . . .</h3>
      )}
    </>
  );
};
export default DetailPage;
