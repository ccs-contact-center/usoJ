import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import actividad2 from '../../assets/img/usoJ/actividad2.png'
import AuthService from '../../services/AuthService'
import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.state = {
      ducir1: '',
      ducir2: '',
      ducir3: '',
      aje1: '',
      aje2: '',
      aje3: '',
      jera1: '',
      jera2: '',
      jera3: '',
      jero1: '',
      jero2: '',
      jero3: '',
      id_ccs: this.Auth.getProfile().id_ccs,
      form: 'usoJ',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state)
      alert('Se guardo la actividad, con id: ' + respuesta[0].id)
    } catch (err) {
      console.log('loggea si hay un error')
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2> Evaluación 2: </h2>
            </CardHeader>
            <CardBody className="">
              <Row className="centrado-fila">
                <Col xs="9">
                  <p>
                    2.- Sabrías escribir palabras que terminen en <b>ducir</b> y
                    otras palabras que terminen en <b>aje</b>, <b>jera</b> y 
                    <b>jero</b>. Pon tres ejemplos de cada una.
                  </p>
                </Col>
                <Col xs="3">
                  <img
                    src={actividad2}
                    style={{ width: 150 }}
                    alt="actividad2 "
                    className="img-fluid animated  bounceInRight delay-1s"
                  />
                </Col>
              </Row>

              <Form>
                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="ducir">
                          <b>ducir</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="ducir1"
                          id="ducir1"
                          value={this.state.ducir1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="ducir2">
                          <b>ducir</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="ducir2"
                          id="ducir2"
                          value={this.state.ducir2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="ducir3">
                          <b>ducir</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="ducir3"
                          id="ducir3"
                          value={this.state.ducir3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="aje1">
                          <b>aje</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="aje1"
                          id="aje1"
                          value={this.state.aje1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="aje2">
                          <b>aje</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="aje2"
                          id="aje2"
                          value={this.state.aje2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="aje3">
                          <b>aje</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="aje3"
                          id="aje3"
                          value={this.state.aje3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="jera1">
                          <b>jera</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="jera1"
                          id="jera1"
                          value={this.state.jera1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="jera2">
                          <b>jera</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="jera2"
                          id="jera2"
                          value={this.state.jera2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="jera3">
                          <b>jera</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="jera3"
                          id="jera3"
                          value={this.state.jera3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="jero1">
                          <b>jero</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="jero1"
                          id="jero1"
                          value={this.state.jero1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="jero2">
                          <b>jero</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="jero2"
                          id="jero2"
                          value={this.state.jero2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="jero3">
                          <b>jero</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="jero3"
                          id="jero3"
                          value={this.state.jero3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div className="centrado-fila mt-3">
                  <Button color="primary" onClick={this.onSave.bind(this)}>
                    Enviar
                  </Button>
                </div>
              </Form>

              <div>{/* <p>{JSON.stringify(this.state)}</p> */}</div>
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default ActividadView
