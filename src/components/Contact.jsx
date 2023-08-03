import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Danger from './Danger';
import Succsess from './Succsess';

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
          document.querySelector('.succsess').classList.add('active')
          setTimeout(()=>{
            document.querySelector('.succsess').classList.remove('active')
          },5000)
      }, (error) => {
          alert(error.text , 'error');
      });
  };

  return (
   <div className="main-contact">
    <Succsess text = "Message succsessfull sent"/>
    <div className="bg">
      
    </div>
    <Danger />
     <form ref={form} onSubmit={sendEmail} className="filed">
      <label onClick={()=>{
       
      }}>Ism ?</label>
      <input type="text" name="user_name" id='input1' placeholder='Your name'/>
      <label>Email</label>
      <input type="email" name="user_email" id='input2' placeholder='Your email'/>
      <label>Telefon raqam</label>
      <input type="number" name="user_phone" id='input3' placeholder='Your Phone'/>
      <label>Telegram username</label>
      <input type="text" name="tg_user"  id='input4'placeholder='Your tg username'/>
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
      <textarea name="message" id='input5' placeholder='Your message'/>
      <input type="submit" value="Send" />
    </form>
   </div>
  );
};

export default ContactUs