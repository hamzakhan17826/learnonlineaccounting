import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-28 bg-primary">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2.5 text-white w-2/5">
            <div className="text-2xl font-semibold">LOA</div>
            <div>
              Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
              diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
              muvåning, och pesask vyfisat. Viktiga poddradio har un mad och
              inde.
            </div>
            <div className="flex gap-2.5 text-2xl">
              <FaFacebook /> <FaLinkedin /> <FaInstagramSquare />
            </div>
          </div>
          <div className="flex flex-col gap-2.5 text-white">
            <div className="text-lg font-semibold">Pages</div>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#">Books</a>
              </li>
              <li>
                <a href="#">Past Papers</a>
              </li>
              <li>
                <a href="#">Paper Pattern</a>
              </li>
              <li>
                <a href="#">Accounting Subjects</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2.5 text-white">
            <div className="text-lg font-semibold">Services</div>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#">One to One Coaching</a>
              </li>
              <li>
                <a href="#">Exam Focused Preparation</a>
              </li>
              <li>
                <a href="#">Past Year Paper Practice</a>
              </li>
              <li>
                <a href="#">Accounting Subjects</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2.5 text-white">
            <div className="text-lg font-semibold">Contact Us</div>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#" className="flex items-center">
                  <FaPhone className="inline mr-2" />
                  +923006376466
                </a>
              </li>
              <li>
                <a href="" className="flex items-center">
                  <MdEmail className="inline mr-2" />
                  abo@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abdullah-bin-omar-557b8a98/"
                  className="flex items-center"
                >
                  <FaLinkedin className="inline mr-2" />
                  Dr. Omar, A.B
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
