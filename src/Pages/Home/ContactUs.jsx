import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2va8yr9', 'template_0hi7g9j', form.current, '_dzfusUuJKpRjr6od')
    .then((result) => {
      console.log(result);
      if(result.text === "OK"){
          Swal.fire({
              title: "Successfully sent message",
              text: "To Home Healers",
              icon: "success",
              showConfirmButton: false,
              timer: 1500
            });
      }
  }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className="p-5 lg:p-0">
            <div className="hero lg:h-[650px] bg-[#e4eef4] rounded-lg lg:my-16">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ">
                  <img className="lg:h-[600px] md:h-[300px] md:w-[400px] lg:w-[800px]" src="https://i.ibb.co/Nn1GDZb/contact.jpg" alt="contact" />
                </div>               
                <div className="flex-shrink-0 w-full rounded-tl-[50px] rounded-br-[50px] max-w-sm  lg:m-14">
                  <form ref={form} onSubmit={sendEmail} className="card-body">
                    <h1 className="text-3xl mb-10 text-[#5f5fa3] font-semibold">Contact US</h1>
                    <div className="form-control">
                      <input type="text" placeholder="Name" name='user_name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <input type="email" placeholder="E-mail" name='user_email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <textarea type="text" placeholder="Message" name="message" className="input input-bordered pt-3 h-20" required />
                    </div>
                    <div className="form-control mt-6">
                      <button type='submit' value="send" className="btn bg-[#5f5fa3] text-white hover:text-black">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ContactUs;