import React from 'react';

function Footer() {
  return (
<footer className="max-h-[70vh]  bg-[#161818] fixed bottom-0 left-0 w-full text-white py-16 px-4 md:px-16">
      <h1 className='font-black text-[4rem] sm:text-[4rem] md:text-[6rem] lg:text-[12rem] leading-none'>JU VERSE.</h1>
      <div className="min-h-[20vh] flex items-center gap-5 mt-16 ">

        <div className=" w-full min-h-[20vh] ">
          <h2 className='text-[#4db6ac95]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt provident aperiam quas cum hic necessitatibus perferendis  </h2>
        </div>
        <div className=" w-[50%] min-h-[20vh]  text-right">

          <ol>Home</ol>
          <ol>About</ol>
          <ol>Event</ol>
          <ol>Project</ol>
          <ol>Team</ol>


        </div>
        <div className=" w-[50%] min-h-[20vh]">
          <ol>Insta</ol>
          <ol>twitter</ol>
          <ol>likdin</ol>
          <ol>telegram</ol>

        </div>
        <div className="w-0 hidden sm:flex sm:w-full min-h-[20vh] justify-end">

          <div className="border border-[#ffffff57] w-[80%] rounded-2xl overflow-hidden ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.097329012138!2d75.87261508346361!3d26.775533916727163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc892b8f05399%3A0x43fbca7105eca800!2sJECRC%20University!5e1!3m2!1sen!2sin!4v1738243665873!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>

          </div>


        </div>

      </div>
    </footer>
  );
}

export default Footer;

