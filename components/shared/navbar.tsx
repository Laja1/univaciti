"use client";
// import { svgLinks } from "@/assets/assetLink";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { imgLinks } from "@/public/assetLinks";
import Image from "next/image";
import { useState } from "react";

export default function NavbarDemo({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //   const navigate = useNavigate();

  const handleHomeClick = () => {
    setIsMobileMenuOpen(false);
    // navigate("/");
  };
  const navItems = [
    {
      name: "Programmes",
      link: "/programmes",
    },
    {
      name: "Certifications",
      link: "/certification",
    },
    {
      name: "Recruiters",
      link: "/recruiters",
    },
    {
      name: "Community",
      link: "#contact",
    },
  ];

  return (
    <div className="relative w-full mt-5">
      <Navbar>
        {/* Desktop Nav */}
        <NavBody>
          <div
            onClick={() => handleHomeClick()}
            className="text-xl flex items-center gap-1  cursor-pointer font-bold hover:opacity-80 transition-opacity"
          >
            <Image
              src={imgLinks.logo}
              width={30}
              height={30}
              alt="graduation"
            />
            <p>UNIVACITI</p>
          </div>

          <NavItems items={navItems} />

          {/* <a href="#join-waitlist"> */}
          <div className="flex items-center gap-4">
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
            <NavbarButton variant="primary">Login</NavbarButton>
          </div>
          {/* </a> */}
        </NavBody>

        {/* Mobile Nav */}
        <MobileNav>
          <MobileNavHeader>
            <button
              onClick={handleHomeClick}
              className="text-xl font-bold hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="Go to homepage"
            >
              <Image
                src={imgLinks.logo}
                width={30}
                height={30}
                alt="graduation"
              />
            </button>

            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {/* {navRoutes.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                to={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))} */}
            <div className="flex w-full flex-col gap-4">
              <div
                // href="#join-waitlist"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <NavbarButton
                  // onClick={() => navigate("signin")}
                  //   onClick={() => NiceModal.show(ModalConstant.BookDemoModal)}
                  variant="primary"
                  className="text-red-600 dark:text-red-600 w-full"
                >
                  {/* Join Waitlist */}Book a demo
                </NavbarButton>
              </div>

              {/* <Link to={RouteConstant.auth.signup.path}>
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Sign Up
                </NavbarButton>
              </Link> */}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Content */}
      <div className="p-4 text-center">{children}</div>
    </div>
  );
}
