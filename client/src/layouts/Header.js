import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup  from 'react-bootstrap/InputGroup';
import logo from '../img/header.png'
import { IoIosSearch, IoMdMenu , IoMdClose} from "react-icons/io";
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state ={
            scrolled:false,
            isNavbarCollapsed:false,
            hover: false,
            disabled:false,
            isSearch:false,
            searchField:false,
            isToggleOn:false
        };
        this.handleClick = this.handleClick.bind(this);
        this.searchToogle = this.searchToogle.bind(this);
      }


    componentDidMount(){
        window.addEventListener('scroll',() => {
            const isScroll = window.scrollY < 100;
            if(isScroll !== true){
                this.setState({ scrolled:true});
            }else{
                this.setState({ scrolled:false});
            }

        });
    }
    componentWillUnmount(){
        window.removeEventListener('scroll');
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
     }

    _getNavbarToggleIcon() {
        return this.state.isToggleOn ? (
         <span><IoMdClose/></span>
        ) : (
      <span><IoMdMenu/></span>
        );
    }
        hoverOn = (e) =>{
            this.setState({ hover: true, disabled:true });
        }
            
      hoverOff = () => { 
        this.setState({ hover: false });    
      }
      searchToogle = () =>{
        this.setState(state => ({
            isSearch: !state.isSearch
          }));

          if(this.state.isSearch== false){
             this.setState({
                searchField:true
             })
          }else{
            this.setState({
                searchField:false
             })
          }
      }

      searchIconChange = () =>{
        return this.state.isSearch ? (
           <IoMdClose/>
           ) : (
           <IoIosSearch/>
           );
      }


    render() {
        return (
          <header className={this.state.scrolled ? 'header-area sticky-menu ': 'header-area '}>
          
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  children={this._getNavbarToggleIcon()} onClick={this.handleClick}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                    
                        <Link
                        className='nav-link'
                         activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        >Home</Link>
               
                        <Link
                        className='nav-link'
                         activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        >About</Link>

                        <Link
                        className='nav-link'
                         activeClass="active"
                        to="service-area"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        >Service</Link>

                        
                        <Link
                        className='nav-link'
                         activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        >Portfolio</Link>
                 
                       

                        <NavDropdown title="Blog" id="basic-nav-dropdown"  className={ this.state.hover ? "show" : " "}   onMouseEnter={this.hoverOn} 
            onMouseLeave={this.hoverOff}  disabled={this.state.hover ? "disabled" : " "}>
                     
                            <NavDropdown.Item href="#action/3.1">Messonary</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Two Column</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Slider</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        
                        </NavDropdown>
                      
                 
                        </Nav>
                        <Form inline>
                       
                        <InputGroup className={this.state.searchField ? " w-100" : "serach-box"}>
                        <a href="#" className="btn request-btn  rounded mr-30">Request demo</a>
                        <FormControl 
                        placeholder="Search"
                        aria-label="search"
                        aria-describedby="search"
                        className={this.state.searchField ? "d-flex search-in" : "d-none"}
                        />
                        <Button children={this.searchIconChange()} className='search-btn left-border' onClick={this.searchToogle}>
                        </Button>
                        </InputGroup>
                       
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
    
            </header>
           
        );
    }
}