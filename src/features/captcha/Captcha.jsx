
import { Component } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';



class Captcha extends Component {

   componentDidMount () {
      loadCaptchaEnginge(6); 
   }

   doSubmit = () => {
       let user_captcha = document.getElementById('user_captcha_input').value;

       if (validateCaptcha(user_captcha)===true) {
           alert('Captcha Matched');
           loadCaptchaEnginge(6); 
           document.getElementById('user_captcha_input').value = "";
       }

       else {
           alert('Captcha Does Not Match');
    
           document.getElementById('user_captcha_input').value = "";
       }
   };

   render() {
        

       return (<div>
           <div className="container ">
               <div className="form-group mt-4 w-full ">

                   <div className="col mt-2  ">
                       <LoadCanvasTemplate />
                   </div>

                  <span className='flex mb-2 gap-x-2 '>
                  <div className="col mt-3 text-sm  ">
                       <div><input className='pr-2  rounded-md hover:shadow-md textFiled__input'  placeholder="کد امنیتی را وارد کنید" id="user_captcha_input" name="user_captcha_input" type="text"></input>
          
                       </div>
                   </div>

                   <div className="col mt-3 ">
                       <div><button className="btn btn-primary py-1  hover:transition-all hover:shadow-lg hover:shadow-primary-400 
              cursor-pointer " onClick={() => this.doSubmit()}>تایید کد</button>
              
              </div>
                   </div>
                  </span>
                     
               </div>

           </div>
       </div>);
   }
}

export default Captcha;