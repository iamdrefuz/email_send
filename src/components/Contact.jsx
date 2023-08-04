import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Danger from './Danger';
import Succsess from './Succsess';
import Error from './Error';
import Img from '../assets/Drefuz_Team-2-removebg.png'
import {FaTelegram,FaInstagram,FaTwitter,FaGlobe} from 'react-icons/fa'
export const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    
    e.preventDefault();
    document.querySelector('.danger-alert').classList.add('active')
    emailjs.sendForm('service_2bcih0n', 'template_j179dsr', form.current, 'P_HilTmVcBuCFT6JI')
      .then((result) => {
          console.log(result.text);
          document.querySelector('#input1').value = "";
          document.querySelector('#input2').value = "";
          document.querySelector('#input3').value = "";
          document.querySelector('#input4').value = "";
          document.querySelector('#input5').value = "";
          document.querySelector('.danger-alert').classList.remove('active')
          document.querySelector('.wrapper-succsess').classList.add('active')
          document.querySelector('.wrapper-succsess').addEventListener("click", ()=>{
            document.querySelector('.wrapper-succsess').classList.remove('active')
          })
          setTimeout(()=>{
            document.querySelector('.wrapper-succsess').classList.remove('active')
          },5000)
      }, (error) => {
          console.log(error.text , 'error');
          document.querySelector('.wrapper-error').classList.add('active')
          document.querySelector('.wrapper-error').addEventListener("click", ()=>{
            document.querySelector('.wrapper-error').classList.remove('active')
          })
          setTimeout(()=>{
            document.querySelector('.wrapper-error').classList.remove('active')
          },5000)
      });
  };

  return (
   <div className="main-contact">
    <Succsess text = "Xabar muvaffaqiyatli yuborlidi"/>
    <Error text = "Xabar yuborilmadi"/>
    <div className="bg">
      
    </div>
    <Danger />
    
     <form ref={form} onSubmit={sendEmail} className="filed">
      <div className="drefuz-title">
        <div className="title">
        
        </div>
        <img src={Img} alt="" />
        <span>Contact</span>
        
      </div>
      
      <label onClick={()=>{
       
      }}>Ism</label>
      <input type="text" name="user_name" id='input1'autoCapitalize='on' placeholder='Your name' required/>
      <label>Email</label>
      <input type="email" name="user_email" id='input2' placeholder='Your email'required/>
      <label>Telefon raqam</label>
      <input autoComplete='on' type="number" name="user_phone" id='input3' placeholder='Your Phone'required/>
      <label>Telegram username</label>
      <input type="text" name="tg_user"  id='input4'placeholder='Your username'required/>
      <label>Sinf</label>
      <select name="user_class" id="">
        <option value="none" hidden selected >Sinf</option>
        <option value="5_class">5-sinf</option>
        <option value="6_class">6-sinf</option>
        <option value="7_class">7-sinf</option>
        <option value="8_class">8-sinf</option>
        <option value="9_class">9-sinf</option>
        <option value="10_class">10-sinf</option>
        <option value="11_class">11-sinf</option>
      </select>
      <label>Daraja</label>
      <select name="user_level" id="">
      <option value="none" hidden selected >Bilim daraja</option>
        <option value="yomon">Yomon</option>
        <option value="yaxshi">Yaxshi</option>
        <option value="alo">A`lo</option>
      </select>
      <label>Xabar</label>
      <textarea name="message" id='input5' placeholder='Your message'required/>
      <input type="submit" value="Send" />
    </form>
    <div className="links">
        <ul>
          <li><a href="/"><FaTelegram/></a></li>
          <li><a href="/"><FaInstagram/></a></li>
          <li><a href="/"><FaTwitter/></a></li>
          <li><a href="/"><FaGlobe/></a></li>
        </ul>
    </div>
   </div>
  );
};

export default ContactUs