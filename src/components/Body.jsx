import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Body() {
  return (
    <div className="font-montserrat">
      <div className="flex flex-row justify-between gap-1 mt-7">
        <div className="mt-35 ml-16">
          <button className="whitespace-nowrap mr-12 hover:cursor-pointer rounded-[20px] bg-linear-to-r from-sky-300 to-cyan-100 py-3 px-10 text-cyan-950 font-semibold opacity-90">
            Get Started
          </button>
          <h1 className="text-white pt-5 font-bold text-[62px] text-balance">
            Borderless Money for a{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-100 to-sky-300">
              Connected
            </span>{" "}
            World.
          </h1>
          <p className="text-cyan-100 pt-4 text-balance pr-8">
            Send, spend, and hold over 40 currencies at real interbank exchange
            rates. Built with institutional-grade encryption for global citizens
            and teams.
          </p>
        </div>
        <div className="mt-6 ml-8">
          <img src="src/assets/robot.png" alt=":D" />
        </div>
      </div>
      <div className="flex flex-row justify-between mt-20">
        <div className="flex items-align">
          <h1 className="text-white font-bold text-[45px] flex items-center justify-center mx-15">
            180+
            <span className="text-sm font-normal px-4 bg-clip-text text-transparent bg-linear-to-r from-cyan-100 to-sky-200">
              COUNTRIES SUPPORTED
            </span>
          </h1>
        </div>
        <div className="flex items-align">
          <h1 className="text-white font-bold text-[44px] flex items-center justify-center mx-15">
            $1.2B+
            <span className="text-sm font-normal px-4 bg-clip-text text-transparent bg-linear-to-r from-cyan-100 to-sky-200">
              TOTAL VOLUME
            </span>
          </h1>
        </div>
        <div className="flex items-align">
          <h1 className="text-white font-bold text-[44px] flex items-center justify-center mx-15">
            4.9★
            <span className="text-sm font-normal px-4 bg-clip-text text-transparent bg-linear-to-r from-cyan-100 to-sky-200">
              APP STORE RATING
            </span>
          </h1>
        </div>
      </div>
      <div className="mt-35 mb-16 mx-2 grid grid-cols-2">
        <div className="text-balance">
          <h1 className="text-white font-bold text-[44px] flex items-center justify-center ml-20">
            You build the vision, we'll power the capital.
          </h1>
          <p className="text-white py-9 ml-20 text-balance">
            With PlutoFunds, scaling your business finances is effortless.
            Manage treasury, automate corporate payouts, and earn high-yield
            returns—all from a single, intuitive dashboard.
          </p>
          <button className="hover:cursor-pointer rounded-[10px] bg-linear-to-r from-cyan-100 to-sky-300 py-3 px-10 ml-20 text-cyan-950 font-semibold">
            Join Now
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="group">
            <div className="flex flex-row group-hover:bg-linear-to-r from-slate-950/70 to-cyan-900/70 group-hover:rounded-xl">
              <div className="w-9 h-9 flex items-center justify-center m-7 ml-20">
                <img src="src/assets/Star.svg" />
              </div>
              <ul>
                <li className="text-white font-bold text-[18px] flex items-center">
                  Smart Yield & Rewards
                </li>
                <p className="text-white py-2 text-balance">
                  Earn competitive yields on reserve balances and up to 3% cash
                  back on all commercial spend.
                </p>
              </ul>
            </div>
          </div>
          <div className="group">
          <div className="flex flex-row group-hover:bg-linear-to-r from-slate-950/70 to-cyan-900/70 group-hover:rounded-xl">
            <div className="w-9 h-9 flex items-center justify-center m-7 ml-20">
              <button className="">
                <img src="src/assets/Shield.svg" />
              </button>
            </div>
            <ul>
              <li className="text-white pb-2 font-bold text-[18px] flex items-center">
                Institutional-Grade Security
              </li>
              <p className="text-white text-balance pb-2">
                Multi-factor authentication, customizable authorization tiers,
                and 256-bit data encryption protect every dollar.
              </p>
            </ul>
          </div>
          </div>
          <div className="group">
          <div className="flex flex-row group-hover:bg-linear-to-r from-slate-950/70 to-cyan-900/70 group-hover:rounded-xl">
            <div className="w-9 h-9 flex items-center justify-center m-7 ml-20">
              <img src="src/assets/Send.svg" />
            </div>
            <ul>
              <li className="text-white pb-2 font-bold text-[18px] flex items-center">
                Instant Global Transfers
              </li>
              <p className="text-white text-balance">
                Move funds across 180+ countries with sub-second settlements and
                zero hidden exchange markup.
              </p>
            </ul>
          </div>
          </div>
        </div>
        <div className="pl-25 py-25">
          <img src="src/assets/bill.png" />
        </div>
        <div className="mt-40 ml-25">
          <h1 className="text-white font-bold text-[38px] flex items-center justify-center mr-25">
            Easily control your billing & invoicing.
          </h1>
          <p className="text-white pt-6 mr-35 text-balance">
            PlutoFunds unifies recurring subscriptions, vendor payouts, and
            incoming settlements in one clean timeline. Track cash flow
            real-time and automate payments with zero stress.
          </p>
          <div className="flex flex-row justify-between mr-65">
            <img
              src="src/assets/apple.svg"
              className="w-28 h-22 pt-2 opacity-80"
            />
            <img src="src/assets/google.svg" className="w-30 h-24 opacity-80" />
          </div>
        </div>
        <div className="mt-20 mr-15">
          <h1 className="text-white font-bold text-[38px] flex items-center justify-center ml-25">
            Easily control your billing & invoicing.
          </h1>
          <p className="text-white pt-6 ml-25 text-balance pb-10">
            PlutoFunds unifies recurring subscriptions, vendor payouts, and
            incoming settlements in one clean timeline. Track cash flow
            real-time and automate payments with zero stress.
          </p>
          <button className="hover:cursor-pointer rounded-[10px] bg-linear-to-r from-cyan-100 to-sky-300 py-3 px-10 ml-25 text-cyan-950 font-semibold">
            Let's Go
          </button>
        </div>
        <div className="pr-35">
          <img src="src/assets/card.png" />
        </div>
        <div className="pt-35">
          <h1 className="text-white font-bold text-[38px] flex items-center justify-center ml-25">
            What leaders are saying about PlutoFunds
          </h1>
        </div>
        <div className="pt-30">
          <p className="text-white pt-10 ml-25 text-balance pb-10">
            Everything you need to accept global payouts, scale your treasury,
            and grow your business anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-8 mx-25 items-stretch">
        <div className="flex-1 flex flex-col p-6 bg-linear-to-r from-sky-300/40 rounded-xl">
          <img src="src/assets/quotes.svg" className="w-8 h-8 mx-6 mt-3" />
          <p className="text-white pt-6 px-6 flex-1">
            "PlutoFunds completely eliminated the friction of our cross-border
            payments. The yield on our idle capital covers our entire cloud
            hosting bill every month."
          </p>
          <div className="flex flex-row items-center gap-3 mt-7 px-6">
            <img src="src/assets/11.jpg" className="rounded-full w-10 h-10" />
            <div>
              <h1 className="text-white font-semibold text-sm">Marcus Vance</h1>
              <p className="text-white font-normal text-xs">
                Founder & CEO, Kova AI
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col p-6 bg-linear-to-r from-sky-300/40 rounded-xl">
          <img src="src/assets/quotes.svg" className="w-8 h-8 mx-6 mt-3" />
          <p className="text-white pt-6 flex-1 px-6">
            "Managing multi-currency payroll used to take us days. With
            PlutoFunds' automated routing, it happens in seconds with zero
            hidden conversion markup."
          </p>
          <div className="flex flex-row items-center gap-3 mt-7 px-6">
            <img src="src/assets/12.jpg" className="rounded-full w-10 h-10" />
            <div>
              <h1 className="text-white font-semibold text-sm">
                Elena Rostova
              </h1>
              <p className="text-white font-normal text-xs">
                Head of Finance, NextWave Labs
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col p-6 bg-linear-to-r from-sky-300/40 rounded-xl">
          <img src="src/assets/quotes.svg" className="w-8 h-8 mx-6 mt-3" />
          <p className="text-white pt-6 flex-1 px-6">
            "The real-time spend analytics and instant virtual card provisioning
            have given our distributed team unmatched financial agility."
          </p>
          <div className="flex flex-row items-center gap-3 mt-7 px-6">
            <img src="src/assets/13.jpg" className="rounded-full w-10 h-10" />
            <div>
              <h1 className="text-white font-semibold text-sm">David Chen</h1>
              <p className="text-white font-normal text-xs">
                Co-Founder & CTO, HyperScale
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-20 mx-25 py-6 gap-30 items-center bg-linear-to-r from-sky-800/50 to-sky-300/50 rounded-[20px]">
        <div className="pt-6">
          <h1 className="text-white mr-12 font-bold text-[38px] flex items-center justify-center">
            Let's try our service now!
          </h1>
          <p className="text-white px-22 py-4 mr-30 text-balance">
            Everything you need to accept global payouts, optimize cash flow,
            and scale your business effortlessly.
          </p>
        </div>
        <button className="whitespace-nowrap mr-12 hover:cursor-pointer rounded-[10px] bg-linear-to-r from-cyan-100 to-sky-300 py-3 px-15 text-cyan-950 font-semibold">
          Explore Now
        </button>
      </div>
      <div className="flex flex-row justify-between text-white mt-30 mx-15 pb-10 items-start">
        <div className="py-10">
          <Link className="py-5 px-6">
            <div className="flex flex-row justify-between items-center">
              <img
                src="src/assets/logo.png"
                className="w-7 h-7 mr-3 rounded-full"
              />
              <span className="tracking-[5px] font-semibold text-lg">
                 PLUTO<span className='bg-clip-text text-transparent bg-linear-to-r from-cyan-100 to-sky-300'>FUNDS</span>
              </span>
            </div>
          </Link>
          <p className="text-wrap text-sm max-w-50 opacity-80">
            A smarter way to grow, manage, and move your money globally. Safe,
            intelligent, and seamless.
          </p>
        </div>
        <div className="py-6">
          <h1 className="font-semibold text-md pb-6">Platform</h1>
          <ul className="text-md opacity-80">
            <li className="pb-3">Overview</li>
            <li className="pb-3">How It Works</li>
            <li className="pb-3">Smart Cards</li>
            <li className="pb-3">Treasury</li>
            <li className="pb-3">Security & Compliance</li>
          </ul>
        </div>
        <div className="py-6">
          <h1 className="font-semibold text-md pb-6">Resources</h1>
          <ul className="text-md opacity-80">
            <li className="pb-3">Help Center</li>
            <li className="pb-3">API Docs</li>
            <li className="pb-3">Community Forum</li>
            <li className="pb-3">Blog</li>
            <li className="pb-3">Product Updates</li>
          </ul>
        </div>
        <div className="py-6">
          <h1 className="font-semibold text-md pb-6">Company</h1>
          <ul className="text-md opacity-80">
            <li className="pb-3">About Us</li>
            <li className="pb-3">Careers</li>
            <li className="pb-3">Become a Partner</li>
            <li className="pb-3">Privacy Policy</li>
            <li className="pb-3">Terms of Service</li>
          </ul>
        </div>
      </div>
      <hr className="border-t border-white/20 mx-15 mb-8" />
      <div className="flex flex-row justify-between">
        <div className="text-white mx-9 opacity-40 mt-4">
          <h1>Copyright: © 2026 PlutoFunds. All Rights Reserved.</h1>
        </div>
        <div className="pb-5">
          <div className="flex flex-row gap-4 mt-5 px-10 text-white opacity-80">
            <a href="#" className="hover:opacity-70 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:opacity-70 transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:opacity-70 transition">
              <FaLinkedin size={18} />
            </a>
            <a href="#" className="hover:opacity-70 transition">
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
