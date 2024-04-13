import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5"
<div class="flex justify-between items-center px-4 py-2 bg-gray-800 text-white fixed top-0 left-0 w-full z-50">
  <a href="#" class="text-xl font-bold">My Website</a>

  <button id="menu-toggle" class="md:hidden focus:outline-none">
    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </button>
  <div className="w-[]">
              {nav ? <MdOutlineMenu className="flex justify-end" />  : <IoCloseSharp className="flex justify-end"/> }

            </div>
  <nav id="menu-content" class="hidden md:flex md:flex-col md:gap-4 md:text-base md:font-medium">
    <a href="#" class="hover:text-gray-400">Home</a>
    <a href="#" class="hover:text-gray-400">About</a>
    <a href="#" class="hover:text-gray-400">Services</a>
    <a href="#" class="hover:text-gray-400">Contact</a>
  </nav>
</div>
const menuToggle = document.getElementById('menu-toggle');
const menuContent = document.getElementById('menu-content');

menuToggle.addEventListener('click', () => {
  menuContent.classList.toggle('hidden');
});
