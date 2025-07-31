import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <nav className="max-w-[1280px] mx-auto p-3 flex items-center justify-between border-b-1 border-gray-100">
        <div className="text-2xl font-semibold">LOA</div>
        <ul className="flex items-center gap-5">
          <li>
            <a href="#" className="hover:text-red-900">
              Home
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a href="#" className="hover:text-red-900 flex items-center gap-2">
              Accounting Subjects <FaChevronDown />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-900">
              Books
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-900">
              Past Papers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-900">
              Paper Pattern
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-900">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-900">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div className="max-w-[1280px] mx-auto p-2 flex items-center justify-center">
        <ul className="flex items-center gap-5 text-gray-600 text-sm">
          <li>
            <a href="#" className="hover:text-red-900">
              Link 1
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-900">
              Link 2
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-900">
              Link 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
