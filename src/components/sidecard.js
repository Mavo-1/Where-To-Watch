import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from "reactstrap";





const SideCard = () => {
 
 return (
  <div>
    <Card className="my-1" color="info" outlinestyle={{width: '18rem'}}
  >
    <CardBody className="">
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
    </CardBody>
    <img
      alt="Card cap"
      src="https://picsum.photos/318/180"
      width="100%"
    />
    <CardBody>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card‘s content.
      </CardText>
      <CardLink href="#">
        Card Link
      </CardLink>
      <CardLink href="#">
        Another Link
      </CardLink>
    </CardBody>
  </Card>
  </div>
 )
 }
export default SideCard;
