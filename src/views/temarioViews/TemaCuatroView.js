import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> Uso de correcto de la S</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12">
              <p>
                En las palabras terminadas en <b>aje</b>, <b>jera</b> y 
                <b>jero</b>.
              </p>
              <p>
                <span className="pAmarillo">Ejemplos</span>: tr<b>aje</b>, cor
                <b>aje</b>, gar<b>aje</b>, abord<b>aje</b>, calle<b>jera</b>,{' '}
                <b><br/> excepto</b>: li<b>gera</b>, exa<b>gera</b>, refri<b>gera</b>
                 y ali<b>gera</b>; agu<b>jero</b>, relo<b>jero</b>,{' '}
                <b><br/> excepto</b>: li<b>gero</b>, exa<b>gero</b>, refri<b>gero</b>
                .
              </p>
              <h3 className="text-center">
                <b>REALIZAREMOS UNA ACTIVIDAD</b>
              </h3>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
