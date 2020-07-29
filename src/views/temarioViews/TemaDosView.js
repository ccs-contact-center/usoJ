import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la S</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <p>
                En las palabras que <b>principian con adj o eje</b>
              </p>
              <p>
                <span className="pAmarillo">Ejemplos</span>:&nbsp; <b>adj</b>
                etivo – <b>eje</b>cución
              </p>
              <p>
                <span className="pAmarillo" style={{ visibility: 'hidden' }}>
                  <b>Eje</b>mplos
                </span>
                &nbsp;&nbsp; <b>adj</b>etivo – <b>eje</b>cución
              </p>
              <p>
                <span className="pAmarillo" style={{ visibility: 'hidden' }}>
                  <b>Eje</b>mplos
                </span>
                &nbsp;&nbsp; <b>adj</b>udicar – <b>eje</b>rcicio
              </p>
            </Col>
            <Col xs="12" className="mt-3">
              <p>
                En todas las formas de los <b>verbos</b> cuyos 
                <b>infinitivos</b> tengan <b>j</b>:
              </p>
              <p>
                <span className="pAmarillo">Ejemplos</span>:&nbsp; te<b>jer</b>
                 – t<b>ejes</b> – te<b>ji</b>mos
              </p>
              <p>
                <span className="pAmarillo" style={{ visibility: 'hidden' }}>
                  <b>Eje</b>mplos
                </span>
                &nbsp;&nbsp; traba<b>ja</b>r – traba<b>ja</b>mos – traba
                <b>ja</b>s     
              </p>
              <p>
                <span className="pAmarillo" style={{ visibility: 'hidden' }}>
                  <b>Eje</b>mplos
                </span>
                &nbsp;&nbsp; mane<b>ja</b>r – mane<b>jo</b> – mane<b>je</b>s
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
