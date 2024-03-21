import './App.css';
import { Container, Row, Col, } from 'reactstrap';
import Header from './components/MovieHeader';
import Post from './components/Post';
import SideCard from './components/Sidecard';


function App() {
  return (
    <div className="page">


      <Header className="w-100"></Header>
      <main className="my-3 py-5">
       

        <Container fluid className="max-width-container">
          <Row>
            <Col
              xs={12}
              md={12}
              lg={5}
              className="py-5 pb-md-0 custom-center">

              <SideCard/>

            </Col>

            <Col
              xs={12}
              md={5}
              lg={6}
              className="py-5 pb-md-0 custom-center"
            >

              <Post />
            </Col>


          </Row>
        </Container>

      </main>

    </div>
  );
}

export default App;
