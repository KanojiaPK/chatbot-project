"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import FlightIcon from "@mui/icons-material/Flight";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { H3Icon } from "@heroicons/react/16/solid";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-4 py-6 mx-auto max-w-[90%] lg:px-8"
      >
        <div className="flex lg:flex-1">
          <h3 href="#" className="-m-1.5 p-1.5 text-[#009688ff]  font-bold ">
            SkyPlane
          </h3>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-[5.5rem]">
          <a
            href="#"
            className="flex items-center text-sm font-semibold leading-6 text-gray-900 no-underline gap-x-2"
          >
            <HelpOutlineIcon
              aria-hidden="true"
              className="w-5 h-5 text-gray-400"
              sx={{ color: "black" }}
            />
            Help
          </a>
          <a
            href="#"
            className="flex items-center text-sm font-semibold leading-6 text-gray-900 no-underline gap-x-2"
          >
            <FlightIcon
              aria-hidden="true"
              className="w-5 h-5 text-gray-400"
              sx={{ color: "black" }}
            />
            My Trips
          </a>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="px-4 py-2 text-sm font-semibold leading-6 text-gray-900 no-underline bg-white border border-gray-300 rounded-lg hover:bg-gray-50 w-[110px]"
            >
              Sign up
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-semibold leading-6 text-white no-underline bg-black rounded-lg hover:bg-gray-800 w-[110px]"
            >
              Log in
            </a>
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full px-4 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="w-auto h-8"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <a
                  href="#"
                  className="flex items-center py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 no-underline rounded-lg hover:bg-gray-50"
                >
                  <HelpOutlineIcon
                    aria-hidden="true"
                    className="w-5 h-5 text-black"
                  />
                  Help
                </a>
                <a
                  href="#"
                  className="flex items-center py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 no-underline rounded-lg hover:bg-gray-50"
                >
                  <FlightIcon
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-400"
                  />
                  My Trips
                </a>
                <a
                  href="#"
                  className="flex items-center py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 no-underline rounded-lg hover:bg-gray-50"
                >
                  Watch demo
                </a>
                <a
                  href="#"
                  className="flex items-center py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 no-underline rounded-lg hover:bg-gray-50"
                >
                  Contact sales
                </a>
                <a
                  href="#"
                  className="flex items-center py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 no-underline border-2 rounded-lg hover:bg-gray-50"
                >
                  Sign up
                </a>
                <a
                  href="#"
                  className="flex items-center py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 no-underline rounded-lg hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
