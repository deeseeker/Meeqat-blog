import { Facebook, Instagram, Linkedin, Twitter, X } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/app/assets/footer-logo.svg'

export default function Footer() {
  return (
    <div className="relative mt-auto">
      <footer className="bg-[#1a4a3a] rounded-2xl container mx-auto p-8 md:p-12 text-white relative overflow-hidden">
        
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          
          {/* Column 1: Logo */}
          <div className="lg:w-1/4">
            <Image 
              src={Logo} 
              alt='logo'
              className="w-20 h-auto"
            />
          </div>

          {/* Column 2: Get In Touch */}
          <div className="lg:w-1/4">
            <h3 className="text-[#FF9F43] font-bold text-lg mb-6">Get In Touch</h3>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="tel:+2348036613662" className="hover:text-[#FF9F43] transition-colors">+234 803 661 3662</a>
              <a href="tel:+2348173040688" className="hover:text-[#FF9F43] transition-colors">+234 817 304 0688</a>
              <a href="tel:+2348091397240" className="hover:text-[#FF9F43] transition-colors">+234 809 139 7240</a>
              <a href="mailto:info@meaqat.com" className="hover:text-[#FF9F43] transition-colors">info@meaqat.com</a>
            </div>
          </div>

          {/* Column 3: Features */}
          <div className="lg:w-1/4">
            <h3 className="text-[#FF9F43] font-bold text-lg mb-6">Features</h3>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="#" className="hover:text-[#FF9F43] transition-colors">Collaboration</a>
              <a href="#" className="hover:text-[#FF9F43] transition-colors">Networking</a>
              <a href="#" className="hover:text-[#FF9F43] transition-colors">Mentorship</a>
              <a href="#" className="hover:text-[#FF9F43] transition-colors">Live Q & A</a>
              <a href="#" className="hover:text-[#FF9F43] transition-colors">Brainstorming Session</a>
            </div>
          </div>

          {/* Column 4: About */}
          <div className="lg:w-1/4">
            <h3 className="text-[#FF9F43] font-bold text-lg mb-6">About</h3>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="#" className="hover:text-[#FF9F43] transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-[#FF9F43] transition-colors">Privacy And Policy</a>
              <a href="#" className="hover:text-[#FF9F43] transition-colors">FAQs</a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <p className="text-white text-sm opacity-90 font-medium">
                Copyright © 2025. All Rights Reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 bg-[#FF9F43] rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors text-black">
                <Facebook className="w-5 h-5 fill-current" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#FF9F43] rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors text-black">
                <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#FF9F43] rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors text-black">
                <Linkedin className="w-5 h-5 fill-current" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#FF9F43] rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors text-black">
                <X className="w-5 h-5" />
                </a>
            </div>
        </div>
      </footer>
    </div>
  );
}