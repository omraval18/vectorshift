import React from 'react'
import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
      <footer className="px-8 w-full">
          <div className="w-full flex flex-col md:items-start items-center  gap-6 border-t py-8">
              <div className="flex w-full justify-between items-center">
                  <div className="flex items-center gap-2 font-normal text-sm font-bricolage tracking-tight text-stone-300 hover:*:text-stone-400 ">
                      <p>© 2023 VectorShift Inc.</p>
                      <span className="hidden md:block">
                          <a href="/legal/privacy">Privacy Policy</a>
                      </span>
                      <span className="hidden md:block">
                          <a href="/legal/terms">Terms of Use</a>
                      </span>
                  </div>
                  <div className="flex items-center gap-4 *:text-lg *:text-stone-500 hover:*:text-stone-300">
                      <FaXTwitter />
                      <FaFacebook />
                      <FaLinkedin />
                  </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-4 text-base font-bricolage tracking-tight text-stone-300 font-base hover:*:text-stone-400">
                      <p className="text-sm  text-stone-300 ">
                          <a href="/legal/privacy">Docs</a>
                      </p>
                      <p className="text-sm  text-stone-300 ">
                          <a href="/legal/terms">Tutorials</a>
                      </p>
                      <p className="text-sm  text-stone-300 ">
                          <a href="/legal/terms">Blog</a>
                      </p>
                      <p className="text-sm  md:hidden text-stone-300 ">
                          <a href="/legal/terms">Terms of Use</a>
                      </p>
                  </div>
                  <div className="flex items-center gap-4 text-base font-bricolage tracking-tight text-stone-300 font-base hover:*:text-stone-400 ">
                      <p className="text-sm  text-stone-300 ">
                          <a href="/legal/privacy">Discord</a>
                      </p>
                      <p className="text-sm  text-stone-300 ">
                          <a href="/legal/terms">Contact Us</a>
                      </p>
                      <p className="text-sm  md:hidden text-stone-300 ">
                          <a href="/legal/terms">Privacy Policy</a>
                      </p>
                  </div>
              </div>
          </div>
      </footer>
  );
}
