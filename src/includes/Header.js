import logo from '../logo1.svg';
export default function Header() {
    return (
     <>
     <nav class="navbar navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="" />
    </a>
    
    <div class="d-flex">
    <a class="nav-link" href="#"><b style={{ color:'black'}}>Menu</b></a> 
    <a class="nav-link" href="#"><b style={{ color:'black'}}>Post ads</b></a> 
    <a class="nav-link" href="#"><b style={{ color:'black'}}>Membership</b></a> 
    <a class="nav-link" href="#"><b style={{ color:'black'}}>Register</b></a> 
    <a class="nav-link" href="#"><b style={{ color:'black'}}>Login<i class="fa fa-user-o" aria-hidden="true"></i></b></a> 
    
    </div>
  
  </div>
</nav>

     </>)
     }