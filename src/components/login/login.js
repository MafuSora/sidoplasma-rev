
import './login.css'
// import sido from '../img/Sidoplasma.png';

const Login=()=>{
    
    return(
    <div id="loginform">
        <h2 id="headerTitle" classname= "fontlogin">L O G I N</h2>
          
        <div>
            <FormInput description="Username" placeholder="Enter your username" type="text" />
            <FormInput description="Password" placeholder="Enter your password" type="password"/>
            <FormButton title="Log in"/>
        </div>
    </div>
    
    );
}


const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

export default Login