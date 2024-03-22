import  logo  from '../assets/logo.svg'
import {FaFacebookF, FaInstagram, FaBehance, FaDribbble, FaLinkedinIn} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md: max-w-[1480px] m-auto grid md:grid-colos-5 max-[780px]:grid-cols-2 gap-8 max-w-[600px] px-4 md:px-0'>
            <img src={logo} className='h-[25px]' />
            <h3 className='text-2x1 font-bold mt-10'>Contact US</h3>
            <h3 className='py-2 text-[#6D737A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla vel omnis.<br></br> Ducimus soluta voluptatibus inventore molestias voluptatum illum mollitia officia dicta odit labore ullam eos, necessitatibus nisi recusandae itaque?</h3>
            <h3 className='py-2 text-[#6D737A]'>Call : +234 500 600</h3>
            <h3 className='py-2 text-[#363A3D}'>Email: example@mail.com</h3>
            <div className='flex gap-4 py-4'>
                <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaFacebookF size={25} style={{color: '#4DC39E'}} /></div>
                <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaDribbble size={25} style={{color: '#4DC39E'}} /></div>
                <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaInstagram size={25} style={{color: '#4DC39E'}} /></div>
                <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaLinkedinIn size={25} style={{color: '#4DC39E'}} /></div>
                <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaBehance size={25} style={{color: '#4DC39E'}} /></div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
