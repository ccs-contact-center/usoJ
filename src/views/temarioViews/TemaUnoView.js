import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Uso de correcto de la S</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>Reglas ortográficas de la S</b>
              </h2>
            </Col>
            <Col xs="12" className="text-justify">
              <p>
                Su sonido se puede confundir con el que, en algunos casos, tiene
                la letra “g”, por ello es importante conocer las reglas
                ortográficas que diferencian el uso entre una y otra.
              </p>
              <p>
                Se usa <b>j</b> en los siguientes casos:
              </p>
              <p>
                En todas las palabras en que aparece el sonido representado por
                el fonema <b>j</b> seguido de <b>a</b>, <b>o</b>, <b>u</b> y en
                muchas palabras en que a este sonido sigue <b>e</b> o <b>i</b>:
              </p>
              <p>
                <span className="pAmarillo">Ejemplos</span>: ce<b>ja</b>, 
                <b>jo</b>ven, <b>ju</b>dío; <b>je</b>fe, 
                <b>ji</b>rafa.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
