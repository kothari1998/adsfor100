import logo from '../logo1.svg';
export default function Footer() {
    return (
     <>
     
    <footer class="footer-bs">
        <div class="row">
        	<div class="col-md-3 footer-brand animated fadeInLeft">
            	<h2><img src={logo} alt="" /></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>+91-5485658954</p>
                <p><i class="fa fa-envelope-o" aria-hidden="true"></i>info@adsfor100.com</p>
                
            </div>
        	<div class="col-md-4 footer-nav animated fadeInUp">
            	<h4>About Company</h4>
            	<div class="col-md-6">
                    <ul class="pages">
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Post Ads</a></li>
                        <li><a href="#">Membership</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            
            </div>
        
        	<div class="col-md-3 footer-ns animated fadeInRight">
            	<h4>Reach Out Us!</h4>
                
                <p> <p>Name</p>
                    <div class="input-group">
                   
                    <input type="text" class="form-control" placeholder="Jhon doe" /></div><br/>
                    <p>Email</p> <div class="input-group">
                   
                    <input type="text" class="form-control" placeholder="Jhon.doe@company.com" />
                      </div>
                      <br/>
                      <div class="input-group">
                      
                      <button type="button" class="btn btn-warning">Get Started!</button>
                      
                    </div>
                 </p>
            </div>
        </div>
    </footer>

     </>)}