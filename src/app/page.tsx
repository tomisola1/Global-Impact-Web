"use client"

import Footer from "@/components/Footer";
import Navigation from "@/components/Navbar";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const delay = 10000;
export default function Home() {
  const [index, setIndex] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
   
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    
  const cardInfo = [
    {
      image: "/assets/images/LandingImage.svg",
      title: "Business Directory",
      description: "Get listed and increase your visibility to attract new customers and partners.",
      link: "Join"
    },
    {
      image: "/assets/images/LandingImage2.svg",
      title: "Networking Tools",
      description: "Stay updated with industry events, webinars, and job opportunities tailored to your interests.",
      link: "Explore"
    },
    {
      image: "/assets/images/LandingImage3.svg",
      title: "Community Support",
      description: "Connect with entrepreneurs, share ideas, collaborate on projects, and grow your career.",
      link: "Connect"
    },

  ]

  const steps = [
    {
      step: "Step 1: Sign Up",
      description: "Create your account, set up your business profile and join our community of entrepreneurs"
    },
    {
      step: "Step 2: Connect",
      description: "Network with potential partners, customers, and collaborators, and drive business results"
    },
    {
      step: "Step 3: Grow",
      description: "Achieve your business goals with our supportive community and resources"
    },
  ]

  const testimonials = [
    {
      review: "This platform has helped me grow my business significantly, I am excited to see all the new things they have to offer.",
      image: "/assets/images/Testimonial1.svg",
      name: "Maryann Obi",
      occupation: "DMZ Marketing"
    },
    {
      review: "Our app has completely transformed the way I network. It's made connecting with professionals in my industry so much easier.",
      image: "/assets/images/Testimonial2.svg",
      name: "David Ezra",
      occupation: "DMZ Marketing"
    },
    {
      review: "I have met so many great connections here and maximized my business growth!",
      image: "/assets/images/Testimonial3.svg",
      name: "Chika Eze",
      occupation: "DMZ Marketing"
    },
 
  ]

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
        (prevIndex + 1) % testimonials.length
        
        ),
        delay
        );   
    return () => {};
  }, [index]);
  
  return (
    <main>
      <Navigation/>
      {/* <section className="h-screen flex">
        <div>

        </div>
        <div>
          <Image src={"/assets/images/hero-image.png"} alt="hero-image" width={918} height={100} className=""/>
        </div>
      </section> */}
      <section className="py-[112px] px-16 bg-primary flex flex-col gap-20">
        <div className="text-textColorLight flex xl:gap-4">
          <h3 className="text-[40px] leading-[48px] font-bold">Connect and network with professionals in your industry</h3>
          <p className="text-lg leading-[27px]">Tap into new opportunities, exchange insights, and foster valuable connections with our platform for meaningful networking.</p>
        </div>
        <div className="grid grid-cols-3 gap-[82px]">
          {
            cardInfo.map((card, index)=> (
              <div className="text-textColorLight flex flex-col gap-4 justify-between" key={index}>
                <Image src={card.image} alt="image" width={406} height={240}/>
                <h3 className="text-2xl font-bold leading-[33.6px] mt-4">{card.title}</h3>
                <p className="text-base">{card.description}</p>
                <Link className="flex mt-2 text-base gap-2 items-center" href={"#"}>
                    <p>{card.link}</p>  
                    <Image src={"/assets/chevron-right.svg"} alt="icon" width={24} height={24}/>
                </Link>
              </div>
            ))
          }
        </div>
      </section>
      <section className="py-[112px] px-16 bg-backgroundColor flex flex-col gap-12 justify-center items-center">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-base font-semibold">How It Works</span>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D338F] via-[#236E98D4] to-[#17B2A217] text-[48px] font-bold leading-[57.6px]">Simple, Effective, and Powerful Networking</h2>
          <p className="mt-2 text-lg leading-[27px]">Connect with the right people, at the right time. Follow these simple steps to get started:</p>
        </div>
        <div className="grid grid-cols-3 gap-12">
          {
            steps.map((step, index) => (
              <div className="text-textColorDark flex flex-col mt-8 gap-6 justify-between items-center text-center" key={index}>
                <Image src="/assets/cube-icon.svg" alt="image" width={48} height={48}/>
                <h3 className="text-[32px] font-bold leading-[41.6px]">{step.step}</h3>
                <p className="text-base">{step.description}</p>
              </div>
            ))
          }
        </div>
        <div className="flex gap-6 items-center">
          <span className="bg-gradient-to-r from-[#2D338F66] to-[#17B2A21A] rounded-[16px] p-px">
            <Button as={Link} className="text-black w-[303px] h-12 text-base bg-backgroundColor rounded-[15px]" href="/auth/signup">
              Sign Up for Free
            </Button>
          </span>
        </div>
      </section>
      <section className="relative w-full h-auto overflow-hidden">
        <div className="whitespace-nowrap transition ease-in duration-1000 relative"  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {
          testimonials.map((testimonial, index)=> (
            <div className="bg-gradient-to-r from-[#CFD2E2] to-[#E0EEED] py-[112px] px-16 inline-block w-full">
              <div className="flex flex-col gap-8 items-center " key={index}>
                <span className="flex">
                  <Image src={"/assets/Star-icon.svg"} alt="icon" width={20} height={18} />
                  <Image src={"/assets/Star-icon.svg"} alt="icon" width={20} height={18} />
                  <Image src={"/assets/Star-icon.svg"} alt="icon" width={20} height={18} />
                  <Image src={"/assets/Star-icon.svg"} alt="icon" width={20} height={18} />
                  <Image src={"/assets/Star-icon.svg"} alt="icon" width={20} height={18} />
                </span>
                <span className="flex justify-center items-center">
                  <p className="text-textColorDark text-2xl leading-[34px] font-bold w-[700px]">{testimonial.review}</p>
                </span>
                <span className="flex gap-5">
                  <Image src={testimonial.image} alt="icon" width={56} height={56} />
                  <span className="text-textColorDark">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p>{testimonial.occupation}</p>
                  </span>
                </span>
              </div>
      </div>
          ))
        }
        </div>
      </section>
      <Footer/>
    </main>
  );
}
