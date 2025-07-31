import Button from "@/components/Button";
import Image from "next/image";
import GroupDiscussion from "@/../public/images/group-discussion.png";
import AboutImage from "@/../public/images/a-man-with-white-shirt-sit-front-on-laptop.jpeg";
import CourseCard from "@/components/CourseCard";
import CoachingMode from "@/components/CoachingMode";
import { Abhaya_Libre } from "next/font/google";
import { courses } from "@/data/coursesData";
import { modes } from "@/data/modesData";
import ExpandableText from "@/components/ExpandableText";

const abhayaLibre = Abhaya_Libre({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="w-full py-24 bg-primary">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between items-center gap-12">
            {/* Left side */}
            <div className="flex flex-col gap-5 w-3/5 text-white">
              <h1 className="font-bold text-4xl">
                Master Accounting & Finance — <br />
                Join Our Free Demo Class!
              </h1>
              <p>
                Get a taste of expert-led coaching designed exclusively for A/O
                Level students. Understand complex topics with clarity, boost
                your grades, and build confidence
              </p>
              <Button className="bg-secondary">Enroll Now</Button>
            </div>

            {/* Right side */}
            <div className="flex justify-end w-2/5">
              <Image
                src={GroupDiscussion}
                alt=""
                className="rounded-3xl object-cover object-center w-[550px] h-[300px]"
              ></Image>
            </div>
          </div>
        </div>
      </section>
      {/* Status Section */}
      <section className="w-full py-8 bg-secondary">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div className="bg-white rounded-full">
                <svg
                  viewBox="0 0 63 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 p-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43.5312 15.9688C44.4429 15.9688 45.3173 15.6066 45.9619 14.9619C46.6066 14.3173 46.9688 13.4429 46.9688 12.5312C46.9688 11.6196 46.6066 10.7452 45.9619 10.1006C45.3173 9.45591 44.4429 9.09375 43.5312 9.09375C42.6196 9.09375 41.7452 9.45591 41.1006 10.1006C40.4559 10.7452 40.0938 11.6196 40.0938 12.5312C40.0938 13.4429 40.4559 14.3173 41.1006 14.9619C41.7452 15.6066 42.6196 15.9688 43.5312 15.9688ZM43.5312 21.125C45.8105 21.125 47.9963 20.2196 49.6079 18.6079C51.2196 16.9963 52.125 14.8105 52.125 12.5312C52.125 10.252 51.2196 8.06619 49.6079 6.45455C47.9963 4.84291 45.8105 3.9375 43.5312 3.9375C41.252 3.9375 39.0662 4.84291 37.4546 6.45455C35.8429 8.06619 34.9375 10.252 34.9375 12.5312C34.9375 14.8105 35.8429 16.9963 37.4546 18.6079C39.0662 20.2196 41.252 21.125 43.5312 21.125ZM40.9531 25.4219C40.9531 24.7381 41.2248 24.0824 41.7082 23.5989C42.1917 23.1154 42.8475 22.8438 43.5312 22.8438C47.7869 22.8438 51.6541 24.1672 54.4556 26.1506C57.2675 28.1375 59 30.7844 59 33.4209C59 34.289 58.829 35.1486 58.4968 35.9506C58.1646 36.7526 57.6777 37.4813 57.0639 38.0951C56.4501 38.709 55.7213 39.1959 54.9193 39.5281C54.1173 39.8603 53.2578 40.0312 52.3897 40.0312H51.2656C50.5819 40.0312 49.9261 39.7596 49.4426 39.2761C48.9591 38.7926 48.6875 38.1369 48.6875 37.4531C48.6875 36.7694 48.9591 36.1136 49.4426 35.6301C49.9261 35.1466 50.5819 34.875 51.2656 34.875H52.3897C53.1941 34.875 53.8438 34.2219 53.8438 33.4209C53.8438 33.06 53.5034 31.7916 51.4788 30.3616C49.5709 29.0072 46.7522 28 43.5312 28C42.8475 28 42.1917 27.7284 41.7082 27.2449C41.2248 26.7614 40.9531 26.1056 40.9531 25.4219ZM11.5212 30.3581C13.4291 29.0106 16.2478 28 19.4688 28C20.1525 28 20.8083 27.7284 21.2918 27.2449C21.7753 26.7614 22.0469 26.1056 22.0469 25.4219C22.0469 24.7381 21.7753 24.0824 21.2918 23.5989C20.8083 23.1154 20.1525 22.8438 19.4688 22.8438C15.2131 22.8438 11.3459 24.1672 8.54437 26.1506C5.7325 28.1375 4 30.7844 4 33.4209C4 37.0716 6.95969 40.0312 10.6103 40.0312H11.7344C12.4181 40.0312 13.0739 39.7596 13.5574 39.2761C14.0409 38.7926 14.3125 38.1369 14.3125 37.4531C14.3125 36.7694 14.0409 36.1136 13.5574 35.6301C13.0739 35.1466 12.4181 34.875 11.7344 34.875H10.6103C10.4194 34.875 10.2303 34.8374 10.0539 34.7643C9.87745 34.6912 9.71716 34.5841 9.58214 34.4491C9.44711 34.3141 9.34001 34.1538 9.26693 33.9774C9.19386 33.801 9.15625 33.6119 9.15625 33.4209C9.15625 33.06 9.49656 31.7916 11.5212 30.3616M19.4688 15.9688C20.3804 15.9688 21.2548 15.6066 21.8994 14.9619C22.5441 14.3173 22.9062 13.4429 22.9062 12.5312C22.9062 11.6196 22.5441 10.7452 21.8994 10.1006C21.2548 9.45591 20.3804 9.09375 19.4688 9.09375C18.5571 9.09375 17.6827 9.45591 17.0381 10.1006C16.3934 10.7452 16.0312 11.6196 16.0312 12.5312C16.0312 13.4429 16.3934 14.3173 17.0381 14.9619C17.6827 15.6066 18.5571 15.9688 19.4688 15.9688ZM19.4688 21.125C21.748 21.125 23.9338 20.2196 25.5454 18.6079C27.1571 16.9963 28.0625 14.8105 28.0625 12.5312C28.0625 10.252 27.1571 8.06619 25.5454 6.45455C23.9338 4.84291 21.748 3.9375 19.4688 3.9375C17.1895 3.9375 15.0037 4.84291 13.3921 6.45455C11.7804 8.06619 10.875 10.252 10.875 12.5312C10.875 14.8105 11.7804 16.9963 13.3921 18.6079C15.0037 20.2196 17.1895 21.125 19.4688 21.125ZM40.9531 33.1562H40.0938V31.4375C40.0938 29.1583 39.1883 26.9724 37.5767 25.3608C35.9651 23.7492 33.7792 22.8438 31.5 22.8438C29.2208 22.8438 27.0349 23.7492 25.4233 25.3608C23.8117 26.9724 22.9062 29.1583 22.9062 31.4375V33.1562H22.0469C19.675 33.1562 17.75 35.0812 17.75 37.4531V47.7656C17.75 50.1375 19.675 52.0625 22.0469 52.0625H40.9531C43.325 52.0625 45.25 50.1375 45.25 47.7656V37.4531C45.25 35.0812 43.325 33.1562 40.9531 33.1562ZM34.9375 31.4375V33.1562H28.0625V31.4375C28.0625 30.5258 28.4247 29.6515 29.0693 29.0068C29.714 28.3622 30.5883 28 31.5 28C32.4117 28 33.286 28.3622 33.9307 29.0068C34.5753 29.6515 34.9375 30.5258 34.9375 31.4375ZM22.9062 38.3125V46.9062H40.0938V38.3125H22.9062Z"
                    fill="#0F1C44"
                  />
                </svg>
              </div>
              <div className="flex flex-col text-white">
                <div className="font-bold text-4xl">+1000</div>
                <div className="text-2xl">Successfully Trained</div>
              </div>
            </div>
            {/* Line */}
            <div>
              <svg
                width="3"
                height="100"
                viewBox="0 0 3 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.25"
                  y1="-4.37114e-08"
                  x2="1.25"
                  y2="100"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-white rounded-full">
                <svg
                  viewBox="0 0 64 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 p-2"
                >
                  <path
                    d="M34.9837 50.3438L32 48.625L38.875 36.5938H49.1875C49.6391 36.5944 50.0864 36.506 50.5038 36.3335C50.9211 36.161 51.3004 35.9078 51.6197 35.5884C51.939 35.2691 52.1922 34.8899 52.3647 34.4725C52.5372 34.0552 52.6257 33.6079 52.625 33.1562V12.5312C52.6257 12.0796 52.5372 11.6323 52.3647 11.215C52.1922 10.7976 51.939 10.4184 51.6197 10.0991C51.3004 9.77972 50.9211 9.52654 50.5038 9.35403C50.0864 9.18152 49.6391 9.09307 49.1875 9.09375H14.8125C14.3609 9.09307 13.9136 9.18152 13.4962 9.35403C13.0789 9.52654 12.6996 9.77972 12.3803 10.0991C12.061 10.4184 11.8078 10.7976 11.6353 11.215C11.4628 11.6323 11.3743 12.0796 11.375 12.5312V33.1562C11.3743 33.6079 11.4628 34.0552 11.6353 34.4725C11.8078 34.8899 12.061 35.2691 12.3803 35.5884C12.6996 35.9078 13.0789 36.161 13.4962 36.3335C13.9136 36.506 14.3609 36.5944 14.8125 36.5938H30.2812V40.0312H14.8125C12.9891 40.0312 11.2405 39.3069 9.95114 38.0176C8.66183 36.7283 7.9375 34.9796 7.9375 33.1562V12.5312C7.9375 10.7079 8.66183 8.9592 9.95114 7.66989C11.2405 6.38058 12.9891 5.65625 14.8125 5.65625H49.1875C51.0109 5.65625 52.7595 6.38058 54.0489 7.66989C55.3382 8.9592 56.0625 10.7079 56.0625 12.5312V33.1562C56.0625 34.9796 55.3382 36.7283 54.0489 38.0176C52.7595 39.3069 51.0109 40.0312 49.1875 40.0312H40.8773L34.9837 50.3438Z"
                    fill="#0F1C44"
                  />
                  <path
                    d="M32 14.25L35.7643 20.6145L43.8125 21.6355L37.9062 26.2812L39.875 33.1562L32 29.2891L24.125 33.1562L26.0938 26.2812L20.1875 21.6355L28.4562 20.6145L32 14.25Z"
                    fill="#0F1C44"
                  />
                </svg>
              </div>
              <div className="flex flex-col text-white">
                <div className="font-bold text-4xl">+500</div>
                <div className="text-2xl">Positive Reviews</div>
              </div>
            </div>
            {/* Line */}
            <div>
              <svg
                width="3"
                height="100"
                viewBox="0 0 3 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.25"
                  y1="-4.37114e-08"
                  x2="1.25"
                  y2="100"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-white rounded-full">
                <svg
                  viewBox="0 0 63 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 p-2"
                >
                  <path
                    d="M9.0084 25.8364C8.98154 25.5094 9.01927 25.1801 9.1192 24.8693C9.21912 24.5585 9.37905 24.2731 9.58885 24.0311C9.79865 23.7892 10.0537 23.596 10.3379 23.4638C10.6221 23.3315 10.9291 23.2632 11.2396 23.2632H15.5172C16.1113 23.2632 16.6811 23.5127 17.1012 23.9568C17.5213 24.401 17.7574 25.0034 17.7574 25.6316V48.1316C17.7574 48.7597 17.5213 49.3621 17.1012 49.8063C16.6811 50.2505 16.1113 50.5 15.5172 50.5H13.0911C12.5304 50.5001 11.9901 50.278 11.5768 49.8774C11.1635 49.4769 10.9073 48.927 10.8588 48.3364L9.0084 25.8364ZM24.4779 24.8914C24.4779 23.9014 25.0603 23.0157 25.906 22.5941C27.753 21.6728 30.8993 19.8218 32.3184 17.3196C34.1475 14.0938 34.4925 8.26631 34.5485 6.9317C34.5564 6.7446 34.5519 6.55749 34.5754 6.37276C34.8789 4.05999 39.1005 6.76118 40.719 9.61749C41.5983 11.1664 41.7103 13.2021 41.6185 14.7925C41.5188 16.493 41.0472 18.1355 40.5846 19.7674L39.599 23.2454H51.7597C52.1058 23.2454 52.4472 23.3301 52.7571 23.493C53.0671 23.656 53.3371 23.8926 53.546 24.1843C53.7549 24.4761 53.897 24.8151 53.9612 25.1747C54.0253 25.5342 54.0098 25.9047 53.9159 26.2568L47.901 48.7758C47.7682 49.2724 47.4856 49.7096 47.0962 50.0209C46.7068 50.3321 46.2319 50.5004 45.7437 50.5H26.718C26.1239 50.5 25.5541 50.2505 25.134 49.8063C24.7139 49.3621 24.4779 48.7597 24.4779 48.1316V24.8914Z"
                    fill="#0F1C44"
                    stroke="#0F1C44"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col text-white">
                <div className="font-bold text-4xl">100%</div>
                <div className="text-2xl">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Choose Level Section */}
      <section className="w-full py-8">
        <div className="max-w-[1280px] mx-auto mb-28">
          <h2
            className={`font-bold text-5xl text-center mt-28 mb-20 ${abhayaLibre.className}`}
          >
            Choose Your Level, Start Your Journey
          </h2>
          <div className="flex justify-between">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                image={course.image}
                tag={course.tag}
                title={course.title}
                description={course.description}
                features={course.features}
                buttonText={course.buttonText}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Coaching Modes */}
      <section className="w-full py-8 bg-primary">
        <div className="max-w-[1280px] mx-auto">
          <h2
            className={`text-7xl text-white text-center mt-20 rounded-2xl px-2.5 bg-secondary py-2.5 ${abhayaLibre.className}`}
          >
            7-Modes to Learn Accounting Online
          </h2>
          <p
            className={`text-white text-3xl text-center mt-5 mb-5 ${abhayaLibre.className}`}
          >
            Choose the Coaching Style That Fits You Best
          </p>
          <ExpandableText />
          <div className="flex flex-col gap-5 mb-20">
            {modes.map((mode, index) => (
              <CoachingMode
                key={index}
                image={mode.image}
                title={mode.title}
                subTitle={mode.subTitle}
                description={mode.description}
                buttonText={mode.buttonText}
              />
            ))}
          </div>
        </div>
      </section>
      {/* About */}
      <section className="w-full py-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col">
            <h2 className="font-bold text-4xl text-center mt-28">
              About the Trainer
            </h2>
            <div className="mb-20 self-center">
              <svg
                width="100"
                height="31"
                viewBox="0 0 100 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 15.6104C5 15.2125 5.52678 14.831 6.46447 14.5497C7.40215 14.2684 8.67392 14.1104 10 14.1104H90C91.3261 14.1104 92.5979 14.2684 93.5355 14.5497C94.4732 14.831 95 15.2125 95 15.6104C95 16.0082 94.4732 16.3897 93.5355 16.671C92.5979 16.9523 91.3261 17.1104 90 17.1104H10C8.67392 17.1104 7.40215 16.9523 6.46447 16.671C5.52678 16.3897 5 16.0082 5 15.6104Z"
                  fill="#8B0D0F"
                />
              </svg>
            </div>
          </div>
          <div className="flex gap-12 mb-20">
            <div className="h-full w-full">
              <Image
                src={AboutImage}
                alt="a-man-with-white-shirt-sit-front-on-laptop"
                className="rounded-2xl h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2.5">
                <h2 className="font-bold text-4xl">Dr. Omar, A.B</h2>
                <b>
                  PhD | Assistant Professor | Expert Accounting Tutor for O/A
                  Level & IGCSE
                </b>
              </div>
              <div className="flex flex-col gap-5">
                <p>
                  Are you struggling to make sense of debits and credits?
                  Confused by income statements or financial ratios? You&apos;re
                  not alone — and you&apos;re in the right place.
                </p>
                <p>
                  I&rsquo;m Dr. Omar, a seasoned academician with over 15 years
                  of teaching experience in Accounting, both at university level
                  and in prestigious school systems (such as Bloomfield Hall
                  School). I hold a PhD degree from an internationally
                  accredited Malaysian university, and currently serving as an
                  Assistant Professor Accounting & Finance and also teaching
                  Accounting subject to O/A-Level & IGCSE student, giving me
                  first-hand insight into the exact challenges faced by
                  Cambridge and IGCSE learners.
                </p>
                <p>
                  Through this platform, I provide high-quality, exam-focused,
                  and concept-driven Accounting instruction tailored
                  specifically for O-Level, A-Level, and IGCSE students. My
                  teaching style is designed to simplify complex accounting
                  principles, build confidence, and most importantly — produce
                  results.
                </p>
                <p>
                  I don&rsquo;t just teach Accounting — I solve your Accounting
                  problems. If you&apos;re looking for clarity, structure, and
                  the kind of guidance that turns confusion into confidence,
                  you&apos;re exactly where you need to be. Let&rsquo;s work
                  together to make Accounting your strongest subject.{" "}
                  <b>
                    Don&apos;t be late — Book an appointment and have a
                    one-to-one meeting.
                  </b>
                </p>
              </div>
              <Button className="bg-secondary">
                Schedule a Free Consultation with Trainer
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
