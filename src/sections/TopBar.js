import React, {Component} from 'react'

// deklaracja
class TopBar extends Component {


  constructor(props){
    super(props)

    this.state = {
      menuIsOpen:false
    }

  }

  render(){

    const {menuIsOpen} = this.state
   
    return (
      <div className='navbar-fixed'>

      {menuIsOpen && <a 
        onClick={(event)=>{
          this.setState({
            menuIsOpen:!menuIsOpen
          })
        }}><div className='gray-fixed-bg'></div></a>}
        
        <nav>
          <div className='nav-wrapper container'>
            <a href='#' className='brand-logo'>
              Nazwa firmy
            </a>
  
            <a
              href='#'
              className='sidenav-trigger'

              onClick={(event)=>{
                this.setState({
                  menuIsOpen:!menuIsOpen
                })
              }}
            >
              <i className='material-icons'>menu</i>
            </a>
  
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a href='#'>O nas</a>
              </li>
              <li>
                <a href='#'>Oferta</a>
              </li>
              <li>
                <a href='#'>Kontakt</a>
              </li>
            </ul>
  
            <ul className='sidenav' style={menuIsOpen ? {transform:'translateX(0%)'} : {}}>
              <li>
                <a href='#'>O nas</a>
              </li>
              <li>
                <a href='#'>Oferta</a>
              </li>
              <li>
                <a href='#'>Kontakt</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}


export default TopBar
