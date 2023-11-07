const ContactUs = () => {
    return (
        <div>
            <div className="hero h-[650px] bg-[#e4eef4] rounded-lg my-16">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                  <img className="h-[600px] w-[800px]" src="https://i.ibb.co/Nn1GDZb/contact.jpg" alt="contact" />
                </div>               
                <div className="flex-shrink-0 w-full rounded-tl-[50px] rounded-br-[50px] max-w-sm  m-14">
                  <form className="card-body">
                    <h1 className="text-3xl mb-10 text-[#5f5fa3] font-semibold">Contact US</h1>
                    <div className="form-control">
                      <input type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <input type="email" placeholder="E-mail" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <textarea type="text" placeholder="Message" name="description" className="input input-bordered pt-3 h-20" required />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn bg-[#5f5fa3] text-white hover:text-black">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ContactUs;