import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Card, CardTitle, CardBody, CardText, Container, CardHeader
} from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { requestApiData } from "../actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestApiData();

  }

  render() {
    return (

      <div>
        <Container>

          <Form>
            <FormGroup>
              <Label for="exampleEmail">Enter employee id</Label>
              <Input onChange={e => onInputChange(e, this.props)} type="text" name="empid" id="empid" placeholder="with a placeholder" />
            </FormGroup>


          </Form>
        </Container>
        <Container>
          <Card className="card bg-info text-white" style={{ width: '18rem' }}>
            <CardHeader>Employee Salary Details</CardHeader>
            <CardBody>
              <CardTitle>Employee id :{this.props.data.employeeId}</CardTitle>
              <CardText>Full Name :
{this.props.data.fullName}
              </CardText>
              <CardText>
                Branch :{this.props.data.branch}
              </CardText>
              <CardText>
                Salary :{this.props.data.salary}
              </CardText>
              <CardText>
                PATE Tax Amount :{this.props.data.pateTaxAmount}
              </CardText>

              <CardText>
                Net Pay Amount :{this.props.data.netPayAmount}
              </CardText>
            </CardBody>
          </Card>

        </Container>
      </div>
    );
  }
}

async function onInputChange(e, props) {

  props.requestApiData(e.target.value);

};

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
