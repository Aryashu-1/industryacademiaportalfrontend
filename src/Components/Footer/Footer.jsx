import React from 'react'
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
        <div className='flex'>
            <div className='bg-[#82001a] w-[30%] pt-9 pl-5 pb-16'>
                <div>
                    <img src="https://vnrvjiet.ac.in/assets/images/Footer Logo.png" alt=""/>
                </div>
                <h3 className='text-[#ffcd29] text-2xl mt-9'>Address</h3>
                <p className='text-white font-mono mt-4'>
                    Vignana Jyothi Nagar, Pragathi Nagar, Nizampet (S.O), Hyderabad,
                    Telangana, India - 500 090
                </p>
                <div class="my-4" className =" bg-white p-2 text-center rounded-full mt-4 hover:bg-[#ffcd29] cursor: pointer w-[150px]">
                    
                <NavLink className="" to={"https://www.google.com/maps?ll=17.538882,78.386293&amp;z=14&amp;t=m&amp;hl=en&amp;gl=IN&amp;mapclient=embed&amp;cid=8864362971979968148"} target="_blank">
                  Get Directions

                </NavLink>
                </div>
                <div>
                    <p className='text-white font-mono mt-4'>Ph. No. : 91-040-230427 58/59/60</p>
                    <p className='text-white font-mono mt-4'>Fax : 91-040-23042761</p>
                    <p className='text-white font-mono mt-4'>E-mail : postbox@vnrvjiet.ac.in</p>
                </div>
            </div>
            <div className='bg-[#1a1a1a] w-[70%]  pb-16'>
                <div className='flex justify-evenly mt-5'>
                    <div class="my-4" className =" border border-white text-white p-2 text-center rounded-full mt-4 hover:bg-[#ffcd29] cursor: pointer w-[180px]">
                    
                    <NavLink className="" to={"https://vnrvjiet.ac.in/contact-us"} target="_blank">
                      Visit Us
    
                    </NavLink>
                    </div>
                    <div class="my-4" className =" border border-white text-white p-2 text-center rounded-full mt-4 hover:bg-[#ffcd29] cursor: pointer w-[180px]">
                    
                        <NavLink className="" to={"https://vnrvjiet.ac.in/contact-us"} target="_blank">
                        Enquire

                        </NavLink>
                    </div>
                    <div class="my-4" className =" border border-white text-white p-2 text-center rounded-full mt-4 hover:bg-[#ffcd29] cursor: pointer w-[180px]">
                    
                        <NavLink className="" to={"https://www.google.com/maps?ll=17.538882,78.386293&amp;z=14&amp;t=m&amp;hl=en&amp;gl=IN&amp;mapclient=embed&amp;cid=8864362971979968148"} target="_blank">
                        Apply

                        </NavLink>
                    </div>
                </div>
                <div className=' mt-12 ml-10'>
                    <h1 className='text-[20px] text-white'>Approvals and Accreditations</h1>
                    <hr class="border-[1.5px] rounded-lg border-white my-1 w-[70px] "/>
                    <div className='flex justify-evenly'>
                        <div className='w-[33%] flex flex-col space-y-5 text-white pt-6'>
                            <a  href="https://vnrvjiet.ac.in/aicte-approvals">AICTE Approvals </a>
                            <a href="https://vnrvjiet.ac.in/assets/pdfs/home/AicteMandatory.pdf">AICTE Mandatory Disclosure</a>
                            <a href="https://vnrvjiet.ac.in/accreditation-status">Accreditation Status</a>
                            <a href="https://vnrvjiet.ac.in/assets/pdfs/20-12-23/JNTUH-Affiliation-Order-2023-24.pdf">JNTUH Affiliation Order 2023-24</a>
                            <a href="https://vnrvjiet.ac.in/assets/pdfs/home/ugcu.pdf">UGC Undertaking</a>
                        </div>
                        <div className='w-[33%] flex flex-col space-y-5 text-white pt-6'>
                            <a href="https://vnrvjiet.ac.in/assets/pdfs/home/NBA-letters.pdf" target="_blank">NBA</a>
                            <a href="https://vnrvjiet.ac.in/naac-details">NAAC</a>
                            <a href="https://vnrvjiet.ac.in/nirf.php/">NIRF</a>
                            <a href="https://vnrvjiet.ac.in/ariia-report">ARIIA Report</a>
                            <a href="https://vnrvjiet.ac.in/qs-i-gauge-rating-2019">QS I-Guage Rating</a>
                        </div>
                        <div className='w-[33%] flex flex-col space-y-5 text-white pt-6'>
                        <a href="https://vnrvjiet.ac.in/minutes-of-statutory-bodies">Minutes of Statutory Bodies</a>
                            <a href="https://vnrvjiet.ac.in/assets/pdfs/home/dap.xlsx">DAP-DATA-JNTUH</a>
                            <a href="https://vnrvjiet.ac.in/assets/pdfs/home/jntudept.pdf">JNTUH-Principal and Faculty details</a>
                            <a href="https://vnrvjiet.ac.in/teqip-ii-activities">TEQIP-II Activities</a>
                            <a href="https://vnrvjiet.ac.in/assets/pdfs/iqac/TSCOGN80327.pdf" target="”_blank”">SSR Cycle - 3</a>
                        </div>
            

                    </div>
                </div>
                <div className=' mt-12 ml-10'>
                    <h1 className='text-[20px] text-white'>Spotlight</h1>
                    <hr class="border-[1.5px] rounded-lg border-white my-1 w-[40px] "/>
                    <div className='flex justify-evenly'>
                        <div className='w-[33%] flex flex-col space-y-5 text-white pt-6'>
                            <a href="https://vnrvjiet.ac.in/payment">Fee Payment</a>
                            <a href="#">Alumni</a>
                            <a href="#">Hostel</a>
                            <a href="https://vnrvjiet.ac.in/ict">ICT</a>
                        </div>
                        <div className='w-[33%] flex flex-col space-y-5 text-white pt-6'>
                            <a href="#">Academic Regulations </a>
                            <a href="https://vnrvjiet.ac.in/circulars-and-notices">Circulars &amp; Notices</a>
                            <a href="#">Training &amp; Placement</a>
                        </div>
                        <div className='w-[33%] flex flex-col space-y-5 text-white pt-6'>
                            <a href="#">Examination Cell </a>
                            <a href="#">Media</a>
                            <a href="#">Events</a>
                        </div>
            

                    </div>
                </div>
            </div>
        </div>
        <div className='flex '>
            <div className='w-[30%] bg-[#82001a] text-white'>
                <p class="copyright-text">
                    Copyrights ©1995-22 VNRVJIET. All Rights Reserved
                </p>
            </div>
            <div className='w-[70%] bg-[#495057]'>
                <div className='flex'>
                    <div className='w-[40%] flex justify-center items-center'><p className="text-white ">Made with Love <span>Socialight</span></p></div>
                    <div className='w-[60%] flex justify-center items-center'><p className='text-white'>Careers | Disclaimer | Privacy Policy | Sitemap  | <NavLink to={"https://vnrvjiet.ac.in/screen-reader"} className="text-[#ffffff]">Screen Reader</NavLink></p></div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Footer