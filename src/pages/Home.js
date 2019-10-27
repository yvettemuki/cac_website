import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Jumbotron, Nav, Container, Row, Col, Card, Button, NavbarCollapse} from 'react-bootstrap';
import styles from '../stylesheet/Home.css';
import cac_home_logo from '../assets/cac_home_logo.png';
import thoughtworks_logo from '../assets/thoughtworks_logo.png'
import training_model from '../assets/training_model.png'
import sub_brand_green from '../assets/sub_brand_green.png'
import sub_brand_blue from '../assets/sub_brand_blue.png'
import sub_brand_purple from '../assets/sub_brand_purple.png'

class Home extends Component {
    render() {
      return(
        <div className="home">
          <Navbar collapseOnSelect expand="lg" bg="transparents" variant="dark" Style="border-radius:0">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={cac_home_logo}
                height="40px"
                Style="position:relative;bottom:5px"
                className="d-inline-block"
              />{'  '}
              <span Style="font-size:20px"><strong>C</strong>hina <strong>A</strong>gile <strong>C</strong>oach</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto nav-link">
                <Nav.Link href="#home">首页</Nav.Link>
                <Nav.Link href="#features">课程体系</Nav.Link>
                <Nav.Link href="#pricing">认证体系</Nav.Link>
                <Nav.Link href="#pricing">认证讲师</Nav.Link>
                <Nav.Link href="#pricing">证书查询</Nav.Link>
                <Nav.Link href="#pricing">CAC动态</Nav.Link>
                <Nav.Link href="#pricing">加入我们</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Jumbotron fluid>
            <Container className="home-jumbotron">
              <img src={cac_home_logo} className="home-logo-img"/>
              <Row>
                <Col className="cac-home-title">
                <span className="red-font">C</span>hina <span className="red-font">A</span>gile <span className="red-font">C</span>oach
                </Col>
              </Row>
              <img src={thoughtworks_logo} className="thoughtworks-logo"/>
              <div className="cac-home-subtitle">
              一个面向企业、社区和个人的敏捷教练认证培训系统<br/>包含敏捷教练培训系统和认证系统两个模块
              </div>
            </Container>
          </Jumbotron>
          <div className="home-contain">
            <Container>
            <Col className="course-model">
              <Row>
              <Col Style="color:#000000;text-align:center;font-size:20px;">课程模型</Col>
              </Row>
              <Row>
              <Col Style="color:#000000;text-align:center;font-size:10px">COURSE MODEL</Col>
              </Row>
              <Row className="course-model-content">
                <Col lg="4" md="12" sm="12" Style="color:#000000;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Col>
                <Col lg="8" md="12" sm="12" className="course-model-img">
                  <img src={training_model} Style="width:55%"/>
                </Col>
              </Row>
            </Col>
            <Col className="sub-brand">
              <Row>
                <Col Style="color:#000000;text-align:center;font-size:20px;">子品牌</Col>
              </Row>
              <Row>
                <Col Style="color:#000000;text-align:center;font-size:10px">SUB-BRAND</Col>
              </Row>
              <Row className = "sub-brand-content">
                <Col lg="3" md="12" sm="12" xs="12" className="sub-brand-col">
                  <img src={sub_brand_green} width="150px"/>
                  <div Style="margin:10px 0; font-size:15px;">面向企业，塑造「仪式感」</div>
                  <div>xxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </Col>
                <Col lg="3" md="12" sm="12" xs="12" className="sub-brand-col">
                  <img src={sub_brand_blue} width="150px"/>
                  <div Style="margin:10px 0; font-size:15px;">面向课堂，塑造「方向感」</div>
                  <div>xxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </Col>
                <Col lg="3" md="12" sm="12" xs="12" className="sub-brand-col">
                  <img src={sub_brand_purple} width="150px"/>
                  <div Style="margin:10px 0; font-size:15px;">面向社区，塑造「归属感」</div>
                  <div>xxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </Col>
              </Row>
            </Col>
            </Container>
            
          </div>
          
          
        </div>


      )
    }
}



export default Home;
