import logoFooter from '../../../assets/logo-footer.png'
const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className=" bg-black pb-5">

{/* footer 1 */}
<div className='relative'>

<footer className=" bg-transparent absolute -top-32 md:left-[10%] md:-top-32 footer bg-base-200 text-base-content p-4 rounded-xl md:w-10/12 border border-gray-500 ">

  <form className='mx-auto rounded-xl max-w-11/12 p-10 md:w-full md:p-14 bg-gradient-to-tr from-blue-950 via-white to-red-400 '>
  <h6 className="text-2xl font-bold mx-auto">Subscribe to our Newsletter</h6>
                    <fieldset className="form-control md:w-80 mx-auto">
                        <label className="label ">
                            <span className="label-text text-sm text-[rgba(19,19,19,0.7)]">Subscribe to our newsletter for the latest updates.</span>
                        </label>
                        <div className=" mx-auto text-center md:join">
                            <input 
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered md:join-item text-center mx-auto" />
                            <button className="  btn bg-gradient-to-tr from-white via-amber-500 to-red-400 join-item">Subscribe</button>
                        </div>
                    </fieldset>
  </form>
</footer>


</div>




{/* footer 2 */}

            <div className='  pt-72  bg-black '>
                <img className='mx-auto border border-dashed' src={logoFooter} alt="" />


            </div>
            <footer className="footer bg-black text-white text-center p-2 md:p-10 ">

                <nav className='mx-auto text-center'>
                    <h6 className="text-xl font-bold text-white mx-auto text-center ">About Us</h6>
                    <p className="text-[rgba(255,255,255,0.6)] max-w-[200px]"><small>We are a passionate team dedicated to providing the best services to our customers.</small></p>
                </nav>
                <nav className="text-[rgba(255,255,255,0.6)] mx-auto text-center">
                    <h6 className="text-xl font-bold text-white ">Quick Links</h6>
                <ul>
                    <li className="link link-hover mx-auto text-center"> <span className='text-5xl'>. </span>Home</li>
                    <li className="link link-hover mx-auto text-center"><span className='text-5xl'>. </span>Service</li>
                    <li className="link link-hover mx-auto text-center"><span className='text-5xl'>. </span>About</li>
                    <li className="link link-hover mx-auto text-center"><span className='text-5xl'>. </span>Contact</li>

                </ul>
                </nav>

                <form>
                    <h6 className="text-xl font-bold text-white mx-auto text-center ">Subscribe</h6>
                    <fieldset className="form-control">
                        <label className="label">
                            <span className="label-text text-[rgba(255,255,255,0.6)] ">Subscribe to our newsletter for the latest updates.</span>
                        </label>
                        <div className="md:join  mx-auto">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item" />
                            <button className=" btn bg-gradient-to-tr from-white via-amber-500 to-red-400 join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>


                
            </footer>

                    <hr className='py-4' />

                    <p className='text-center p-2'>&copy; {currentYear} Fake-BPL.BD- All rights reserved.</p>


        </div>
    );
};

export default Footer;