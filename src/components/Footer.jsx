import { IoMail, IoLogoDiscord,IoNewspaperSharp, IoLockClosedSharp } from "react-icons/io5";
import { MdContactSupport, MdOutlineSecurity, MdOutlineScatterPlot } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";

const Footer = ({ darkTheme, setDarkTheme }) => {

  const sendEmail = () => {
    // Replace 'your_email@example.com' with your actual email address
    const emailAddress = 'adarshunofficial.1607@gmail.com';

    // Replace 'Subject' and 'Body' with your desired subject and body text
    const subject = 'Subject';
    const body = 'Hello,';

    // Create the mailto link
    const mailtoLink = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open default email client with pre-filled email
    window.location.href = mailtoLink;
  };
  
  return (
    <div className="w-full flex items-center justify-between" >
      <div className="flex items-center justify-center">
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKZRNGrHvPhcBtmNVwXhhtwLCNfSmBhfRNcmdRPlPxrpfRwQDhbRFDskfkzbMFCCFBsbSM" target="_blank">
        <div className="flex justify-center items-center text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <IoMail onClick={sendEmail} className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">Contact</h1>
        </div>
        </a>

        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <MdContactSupport className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">Support</h1>
        </div>

        <a href="https://github.com/Adarsh-Developer" target="_blank">
        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <FaCode className='text-[15px]'/>
          <h1 className="ml-[5px] text-[15px]">Github</h1>
        </div>
        </a>

        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <IoLogoDiscord className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">Discord</h1>
        </div>

        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <FaTwitter className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">Twitter</h1>
        </div>

        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <IoNewspaperSharp className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">Terms</h1>
        </div>

        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <MdOutlineSecurity className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">Security</h1>
        </div>

        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <IoLockClosedSharp className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">Privacy</h1>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500"
        onClick={() => setDarkTheme((prev) => !prev)}
        >
          <IoMdColorPalette className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">{darkTheme ? 'Light Theme' : 'Dark Theme'}</h1>
        </div>

        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <MdOutlineScatterPlot className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">v23.51.0</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer