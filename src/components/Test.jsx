import React, { useState, useEffect } from 'react';

// ✨ Minimal testimonial card
const TestimonialCard = ({ img, name, title, text }) => (
  <div className="shrink-0 w-[320px] bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center text-center p-4 transition-transform duration-500">
    <img 
      src={img} 
      alt={name} 
      className="h-20 w-20 rounded-full object-cover mb-3 border border-emerald-200"
    />
    <h4 className="font-medium text-gray-900 text-sm">{name}</h4>
    <p className="text-gray-500 text-xs mb-2">{title}</p>
    <p className="text-gray-600 text-xs leading-snug">{text}</p>
  </div>
);

// ✨ Smooth auto-scrolling testimonial row
const TestimonialRow = ({ testimonials, speed = 50, reverse = false }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId;
    const cardWidth = 320 + 32; // card width + gap
    const totalWidth = cardWidth * testimonials.length;

    const animate = () => {
      setOffset((prev) => {
        const newOffset = reverse ? prev + 0.5 : prev - 0.5;
        // Reset when one full set has scrolled
        if (newOffset <= -totalWidth) return 0;
        if (newOffset >= 0) return -totalWidth;
        return newOffset;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [reverse, testimonials.length]);

  return (
    <div className="overflow-hidden mb-6">
      <div
        className="flex gap-8"
        style={{
          transform: `translateX(${offset}px)`,
          transition: "none",
        }}
      >
        {[...testimonials, ...testimonials].map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </div>
    </div>
  );
};

// ✨ Testimonials section wrapper
export default function TestimonialsSection() { 

  const row1Testimonials = [
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      name: "Suman Pal",
      title: "SRM | EY Consultant ",
      text: "This application is awesome, I really like this application. Today, I am a Business Consultant @EY, and I am really thankful to Team Edstack for making me aware of the latest job opening."
    },
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      name: "Anurag Patra",
      title: "VIT Bhopal | Uber",
      text: "I am Software Engineer 2 @Uber. Very few companies come to my college, and they offer very low CTC. Then my friend suggested the Edstack application, and I applied to 50+ companies through this application and finally got a job at Uber."
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      name: "Kaustav Modak",
      title: "NIT Silchar | LTI Mindtree",
      text: "Coming from a Mechanical branch, I had limited placement opportunities as most companies didn’t allow Non-Tech students. Thanks to this domain-neutral application, I successfully switched to a top company as a Senior Data Analyst."
    },
    {
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      name: "Nabodita",
      title: "NIT Patna, Bihta | HSBC",
      text: "I was continuously applying for off-campus placements and finally got a job in System Testing at HSBC."
    },
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      name: "Ritwika Rupal",
      title: "CV Raman | Microsoft",
      text: "Many big tech companies rarely visit our college for recruitment. Then, my senior told me about Edstack. She got placed in JP Morgan Chase, and I got placed in Microsoft."
    },
    {
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      name: "Jaspreet Singh",
      title: "IIIT Una | Qualcomm",
      text: "I am very happy I got a job at Qualcomm. This company has never visited my college for placements, but it was my dream company. Thanks to Edstack and the team for making my dream come true."
    }
  ];

  const row2Testimonials = [
    {
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      name: "Purvi Mondal",
      title: "SOA Bhubaneshwar | American Express",
      text: "I am from a Tier 3 local college, and good companies rarely visit my college. I am really grateful to Edstack for notifying me about my dream company at the earliest."
    },
    {
      img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
      name: "Chiranjeet",
      title: "NIT Jalandar | Dolby",
      text: "I hadn't prepared anything until my 3rd year, but by following the roadmap of Edstack for Data Scientist, I was able to crack an internship + PPO-based offer from Dolby in my 7th semester."
    },
    {
      img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop",
      name: "Vansh Agrawal",
      title: "KIIT University | Amazon",
      text: "This application is really amazing and has lots of best-in-class features for those who are confused about career options. Today, I am a Cyber Security Specialist @Amazon, thanks to Edstack and their team!"
    },
    {
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
      name: "Isha Gupta",
      title: "DTU Delhi | HPE",
      text: "I have recently graduated from DTU Delhi, and unfortunately, I was left unplaced. But then I started applying for off-campus placements. The Edstack job application is really fast and provides the best and fastest industry exposure."
    },
    {
      img: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=400&fit=crop",
      name: "Shreyashree",
      title: "LPU Phagwara | Hexaware",
      text: "Hexaware is my dream company, but unfortunately I was not able to make it through my on-campus placement. However, I was consistent in applying through Edstack referrals and finally placed myself. Thanks a lot to the Edstack team!"
    },
    {
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop",
      name: "Madhusudan Anwar",
      title: "Silicon University Bhubaneshwar | Oracle",
      text: "Very few companies visit my college for on-campus placements, and their CTC is very low. But luckily, I got myself placed in Oracle, Thanks to the Edstack team for the fastest job updates!"
    }
  ];


  return (
    <div className="py-12 bg-gradient-to-b from-emerald-50 via-white to-emerald-50 rounded-4xl">
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-semibold text-gray-900">Join the community</h3>
        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          By developers, for developers
        </p>
              {/* Telegram Button */}
      <div className="flex justify-center mt-5 gap-6">
        <a
          href="https://t.me/EdstackUpdates" // 👈 replace with your actual Telegram link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-100 border-blue-400 border-2 text-sm font-medium px-5 py-2 rounded-xl shadow-md hover:bg-blue-600/25 transition-all duration-200"
        >
          
          Telegram
          <img
            src="https://img.logo.dev/telegram.org?token=pk_djKZ3gIOQqyja8btgxBpBA"
            alt="Telegram"
            className="w-5 h-5 rounded-3xl"
          />
          </a>

          <a
          href="https://x.com/AayushKGupta?t=xpNTqcvOB-LHa7DyuFoqZA&s=09" // 👈 replace with your actual Telegram link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-600/20 border-gray-800 border-2 text-sm font-medium px-5 py-2 rounded-xl shadow-md hover:bg-gray-400 transition-all duration-200"
        >
          
          Follow us
          <img
            src="https://img.logo.dev/x.com?token=pk_djKZ3gIOQqyja8btgxBpBA"
            alt="Telegram"
            className="w-5 h-5 rounded-3xl"
          />
          </a>
      </div>

      </div>

      <div className="relative overflow-hidden">
        {/* subtle fade edges */}
        <div className="absolute top-0 bottom-0 left-0 z-25 w-15 bg-gradient-to-r from-emerald-50 to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 z-25 w-15 bg-gradient-to-l from-emerald-50 to-transparent"></div>

        <TestimonialRow testimonials={row1Testimonials} speed={25} />
        <TestimonialRow testimonials={row2Testimonials} speed={45} />
      </div>
    </div>
  );
}

