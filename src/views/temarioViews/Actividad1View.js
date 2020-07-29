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
import actividad1 from '../../assets/img/usoJ/actividad1.png'
//importamos el AuthService para poder traernos el perfil de usuario
import AuthService from '../../services/AuthService'
import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(state) {
    super(state)
    //instanciamos el Authservice
    this.Auth = new AuthService()
    this.state = {
      palabra1: '',
      palabra2: '',
      palabra3: '',
      palabra4: '',
      palabra5: '',
      palabra6: '',
      palabra7: '',
      palabra8: '',
      palabra9: '',
      palabra10: '',
      //asignamos un state con el id_ccs
      id_ccs: this.Auth.getProfile().id_ccs,
      //asignamos un state con el nombre del form
      form: 'usoJ',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.checked,
    })
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state)
      alert('Se guardo actividad: 1, con id: ' + respuesta[0].id)
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
              <h2>Evaluación 1: </h2>
            </CardHeader>
            <CardBody className="">
              <Row>
                <Col xs="12">
                  <p>
                    1.- Atrévete y tacha las palabras que contengan la letra J
                    mal escrita.
                  </p>
                </Col>
                <Col xs="12">
                  <Row className="centrado-fila">
                    <Col xs="12" sm="9" md="8">
                      <Form>
                        <div
                          className="cajaA2 centrado-fila"
                          style={{ backgroundColor: '#d5d4d8' }}
                        >
                          <img
                            src={actividad1}
                            style={{ width: 260 }}
                            alt="actividad1 "
                            className="img-fluid animated  bounceInRight delay-1s"
                          />
                          <FormGroup
                            tag="fieldset"
                            style={{ marginBottom: '0px' }}
                          >
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Conejo</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="palabra1"
                                      id="palabra1"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Vijilantes</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="palabra2"
                                      id="palabra2"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Espego</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="palabra3"
                                      id="palabra3"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Anteojos</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="palabra4"
                                      id="palabra4"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Recojer</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="palabra5"
                                      id="palabra5"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Jigantesco</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="palabra6"
                                      id="palabra6"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Obeja</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="palabra7"
                                      id="palabra7"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Gentil</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="palabra8"
                                      id="palabra8"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>

                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Garantía</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="palabra9"
                                      id="palabra9"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>

                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Viejo</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="palabra10"
                                      id="palabra10"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: '-12px' }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                          </FormGroup>
                        </div>
                        <div className="centrado-fila mt-3">
                          <Button
                            color="primary"
                            onClick={this.onSave.bind(this)}
                          >
                            Enviar
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {/* <p>{JSON.stringify(this.state)}</p> */}
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default ActividadView
