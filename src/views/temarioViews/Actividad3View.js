import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
} from 'reactstrap'
import actividad1 from '../../assets/img/usoJ/actividad3.png'
import AuthService from '../../services/AuthService'
import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class Actividad3View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(state) {
    super(state)
    this.Auth = new AuthService()
    this.state = {
      letra1: '',
      letra2: '',
      letra3: '',
      letra4: '',
      letra5: '',
      letra6: '',
      letra7: '',
      letra8: '',
      letra9: '',
      letra10: '',
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
      alert('Se guardo actividad: 3, con id: ' + respuesta[0].id)
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
              <h2>Evaluación 3: </h2>
            </CardHeader>
            <CardBody className="">
              <Row>
                <Col xs="12">
                  <p>3.-  Completa con J o G las palabras siguientes:</p>
                </Col>
                <Col xs="12">
                  <Row className="centrado-fila">
                    <img
                      src={actividad1}
                      style={{ width: 260 }}
                      alt="actividad1 "
                      className="img-fluid animated  bounceInRight delay-1s"
                    />
                    <Col xs="12" sm="9" md="5">
                      <Form>
                        <div
                          className="cajaA2"
                          style={{ backgroundColor: '#d5d4d8' }}
                        >
                          <div className="centrado-fila">
                          
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="letra1"
                                id="letra1"
                                value={this.state.letra1}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            erente
                          </div>

                          <div className="centrado-fila">
                          Bru
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="letra2"
                                id="letra2"
                                value={this.state.letra2}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            ería

                          </div>
                          <div className="centrado-fila">
                          Co
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="letra3"
                                id="letra3"
                                value={this.state.letra3}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            ín
                          </div>
                          <div className="centrado-fila">
                          Reco
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="letra4"
                                id="letra4"
                                value={this.state.letra4}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            er
                          </div>
                          <div className="centrado-fila">
                          Ma
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="letra5"
                                id="letra5"
                                value={this.state.letra5}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            estad
                          </div>
                          <div className="centrado-fila">
                          Ca
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="letra6"
                                id="letra6"
                                value={this.state.letra6}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            ero
                          </div>
                          <div className="centrado-fila">
                          Re
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="letra7"
                                id="letra7"
                                value={this.state.letra7}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            ar 

                          </div>
                          <div className="centrado-fila">
                          Gran
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="letra8"
                                id="letra8"
                                value={this.state.letra8}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            a

                          </div>
                          <div className="centrado-fila">
                          Tatua
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="letra9"
                                id="letra9"
                                value={this.state.letra9}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            e 

                          </div>
                          <div className="centrado-fila">
                          Ras
                            <FormGroup
                              style={{
                                paddingTop: '15px',
                                paddingLeft: '3px',
                                paddingRight: '3px',
                              }}
                            >
                              <Input
                                type="text"
                                name="letra10"
                                id="letra10"
                                value={this.state.letra10}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: '20px',
                                  paddingRight: '0px',
                                  paddingLeft: '0px',
                                  textAlign: 'center',
                                }}
                              />
                            </FormGroup>
                            uñar 

                          </div>
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
export default Actividad3View
