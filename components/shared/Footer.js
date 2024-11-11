// import Link from 'next/link'
// import { FaGithub } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <div className='mt-12 w-full flex p-4 bg-black '>
//         <div className='max-w-6xl w-full flex justify-between items-center mx-auto max-md:justify-center max-md:flex-col gap-5'>
//             <p className='max-sm:justify-center text-white'>2024 © SOLVEIT</p>
//             <div className='flex gap-1 items-end max-sm:justify-center text-white'>
//                 <p>Developed by <b>AG</b></p>
//                 <Link href='https://github.com/2121139/solveit' target="_blank" rel="noopener noreferrer">
//                     <FaGithub className="w-5 h-5 text-white text-gray-700 hover:text-green-700 cursor-pointer" />
//                 </Link>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer


import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='mt-12 w-full flex justify-center p-4 bg-black'>
      <div className='max-w-6xl w-full flex flex-col items-center gap-5'>
        <p className='text-white'>2024 © SOLVEIT</p>
        <div className='flex gap-3 items-center text-white'>
          <p>Developed by <b>AG</b></p>
          <Link href='https://github.com/2121139/solveit' target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-5 h-5 text-white text-gray-700 hover:text-green-700 cursor-pointer" />
          </Link>
          <Link href='https://www.linkedin.com/in/your-linkedin-id/' target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-5 h-5 text-white text-gray-700 hover:text-blue-700 cursor-pointer" />
          </Link>
          <Link href='https://twitter.com/your-twitter-id' target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-5 h-5 text-white text-gray-700 hover:text-blue-500 cursor-pointer" />
          </Link>
          <Link href='mailto:your-email@example.com' target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="w-5 h-5 text-white text-gray-700 hover:text-red-700 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
