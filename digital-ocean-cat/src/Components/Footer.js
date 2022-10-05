import React from "react";
import footerLogo from "./images/footerlogo.svg";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white pt-8 pb-8">
      <ul className="flex mx-auto max-w-screen-xl px-3 pb-8 md:gap-5 gap-20 md:flex-nowrap flex-wrap ">
        <li className="flex flex-col  font-bold cursor-auto gap-5 text-2xl ">
          Company
          <ul className="flex flex-col font-normal gap-3 items-start text-base">
            <li>About</li>
            <li>Leadership</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Customers</li>
            <li>Partners</li>
            <li>Referral Program</li>
            <li>Press</li>
            <li>Legal</li>
            <li>Trust Platform</li>
            <li>Investor Relations</li>
            <li>DO Impact</li>
          </ul>
        </li>
        <li className="flex flex-col  font-bold cursor-text gap-5 text-2xl">
          Products
          <ul className="flex flex-col font-normal gap-3 items-start text-base">
            <li>Products Overview</li>
            <li>Droplets</li>
            <li>Kubernetes</li>
            <li>App Platform</li>
            <li>Functions</li>
            <li>Managed Databases</li>
            <li>Spaces</li>
            <li>Marketplace</li>
            <li>Load Balancers</li>
            <li>Block Storage</li>
            <li>Tools & Integrations</li>
            <li>API</li>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Release Notes</li>
            <li>Uptime</li>
          </ul>
        </li>
        <li className="flex flex-col  font-bold cursor-text gap-5 text-2xl">
          Community
          <ul className="flex flex-col font-normal gap-3 items-start text-base">
            <li>Tutorials</li>
            <li>Q&A</li>
            <li>CSS-Tricks</li>
            <li>Write for DOnations</li>
            <li>Currents Research</li>
            <li>Hatch Startup Program</li>
            <li>deploy by DigitalOcean</li>
            <li>Shop Swag</li>
            <li>Research Program</li>
            <li>Open Source</li>
            <li>Code of Conduct</li>
            <li>Newsletter Signup</li>
            <li>Meetups</li>
          </ul>
        </li>
        <li className="flex flex-col  font-bold cursor-text gap-5 text-2xl">
          Solutions
          <ul className="flex flex-col font-normal gap-3 items-start text-base">
            <li>Website Hosting</li>
            <li>VPS Hosting</li>
            <li>Web & Mobile Apps</li>
            <li>Game Development</li>
            <li>Streaming</li>
            <li>VPN</li>
            <li>SaaS Platforms</li>
            <li>Cloud Hosting for Blockchain</li>
          </ul>
        </li>
        <li className="flex flex-col  font-bold cursor-text gap-5 text-2xl">
          Contanct
          <ul className="flex flex-col font-normal gap-3 items-start text-base">
            <li>Support</li>
            <li>Sales</li>
            <li>Report Abuse</li>
            <li>System Status</li>
            <li>Share your ideas</li>
          </ul>
        </li>
      </ul>
      <div className="flex mx-auto max-w-screen-xl justify-between px-3 items-center pt-8 border-t-2 border-dotted flex-wrap gap-10">
        <div className="flex gap-2 items-center ">
          <img src={footerLogo} alt="footerLogo " />
          <p>© 2022 DigitalOcean, LLC. All rights reserved.</p>
        </div>
        <ul className="flex footer-icon gap-4 flex-wrap justify-center">
          <li>
            <img
              src="https://www.digitalocean.com/_next/static/media/socialTwitch.a40b5940.svg"
              alt="twitch"
            />
          </li>
          <li>
            <img
              src="https://www.digitalocean.com/_next/static/media/socialTwitter.26ed7e61.svg"
              alt="twitter"
            />
          </li>
          <li>
            <img
              src="https://www.digitalocean.com/_next/static/media/socialFb.c716d8b2.svg"
              alt="fb"
            />
          </li>
          <li>
            <img
              src="https://www.digitalocean.com/_next/static/media/socialInstagram.5fb5ecbd.svg"
              alt="instagram"
            />
          </li>
          <li>
            <img
              src="https://www.digitalocean.com/_next/static/media/socialYoutube.3ea36203.svg"
              alt="youtube"
            />
          </li>
          <li>
            <img
              src="https://www.digitalocean.com/_next/static/media/socialLinkedin.7662d59b.svg"
              alt="linkedin"
            />
          </li>
          <li>
            <img
              src="https://www.digitalocean.com/_next/static/media/socialDev.c2375b02.svg"
              alt="dev"
            />
          </li>
          <li>
            <img
              src="https://www.digitalocean.com/_next/static/media/socialGlassdoor.b7323088.svg"
              alt="glassdoor"
            />
          </li>
          <li>
            <img
              src="https://www.digitalocean.com/_next/static/media/socialBuiltinnyc.39adf06d.svg"
              alt="builtinny"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}
