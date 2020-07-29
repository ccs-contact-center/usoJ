import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la S</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">
            <Col xs="12">
              <p>
                En el pasado de indicativo y de subjuntivo de los <b>verbos</b>
                 terminados en <b>ducir</b>, así como de los verbos <b>decir</b>
                 y <b>traer</b>.
              </p>
              <p>
                <span className="pAmarillo">Ejemplos</span>:&nbsp; con
                <b>ducir</b> – con<b>duje</b> – con<b>dujeron</b> – con
                <b>dujera</b>
              </p>
              <p>
                <span style={{ visibility: 'hidden' }}>Ejemplos</span>&nbsp;&nbsp; pro<b>ducir</b> –
                pro<b>dujiste</b> – pro<b>dujo</b> – pro<b>dujeran</b>
              </p>
              <p>
                <span style={{ visibility: 'hidden' }}>Ejemplos</span>&nbsp;&nbsp; <b>decir</b> – 
                <b>dije</b> – <b>dijeron </b> – <b>dijera</b>
              </p>
              <p>
                <span style={{ visibility: 'hidden' }}>Ejemplos</span>&nbsp;&nbsp; <b>traer</b> – 
                <b>traje</b> – <b>trajiste</b> – <b>trajeran</b>
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
