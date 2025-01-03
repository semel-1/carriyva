import React from 'react'
import InstagramIcon from "../../Assets/Social/instagram.svg";
import FacebookIcon from "../../Assets/Social/facebook.svg";
import TwitterIcon from "../../Assets/Social/twitter.svg";
import LinkedInIcon from "../../Assets/Social/linkedin.svg";

const SocialIcons = () => {
    const icons = [
      { src: InstagramIcon, alt: "Instagram", link: "#" },
      { src: FacebookIcon, alt: "Facebook", link: "#" },
      { src: TwitterIcon, alt: "Twitter", link: "#" },
      { src: LinkedInIcon, alt: "LinkedIn", link: "#" },
    ];
  
    return (
      <div className="flex gap-8">
        {icons.map((icon, index) => (
          <a
            key={index}
            href={icon.link}
            aria-label={icon.alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icon.src} alt={icon.alt} className="h-10 w-10 cursor-pointer" />
          </a>
        ))}
      </div>
    );
  };
  
export default SocialIcons