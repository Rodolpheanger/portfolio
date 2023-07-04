import Image from 'next/image';
import Link from 'next/link';
import linkedInIcon from '~/public/icons/linkedin_small.png';
import mailIcon from '~/public/icons/mail_small.png';
import gitHubIcon from '~/public/icons/github_small.png';

const Footer = () => (
  <footer className="flex flex-col items-center justify-center gap-6 bg-text-dark p-4 sm:p-10">
    <div className="flex w-full justify-center gap-12">
      <Link href="https://www.linkedin.com/in/rodolphe-anger/" target="_blank">
        <Image
          src={linkedInIcon}
          alt="LinkedIn"
          width={96}
          height={96}
          className="h-7 w-7 sm:h-12 sm:w-12"
        />
      </Link>
      <Link href="mailto:rodolphe.anger.dev@gmail.com" target="_blank">
        <Image
          src={mailIcon}
          alt="Mail"
          width={96}
          height={96}
          className="h-7 w-7 sm:h-12 sm:w-12"
        />
      </Link>
      <Link href="https://github.com/Rodolpheanger" target="_blank">
        <Image
          src={gitHubIcon}
          alt="GitHub"
          width={96}
          height={96}
          className="h-7 w-7 sm:h-12 sm:w-12"
        />
      </Link>
    </div>
    <p className="text-center text-xs text-white sm:text-base">
      🤘 © 2023 Rodolphe ANGER 🤘
    </p>
  </footer>
);

export default Footer;
