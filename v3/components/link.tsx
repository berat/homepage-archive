import Image from 'next/image';
import linkBlueIcon from '@/public/icons/link-blue.svg';
import linkBlackIcon from '@/public/icons/link-black.svg';
import linkGreenIcon from '@/public/icons/link-green.svg';
import Link from 'next/link';

interface ExternalLinkProps {
  text: string;
  href: string;
  type?: 'blank' | 'self';
  color?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  type = 'self',
  text,
  href,
  color
}) => {
  let icon = linkBlueIcon;
  let textColor = 'text-blue-600';

  if (color === 'black') {
    icon = linkBlackIcon;
    textColor = 'text-black';
  }
  if (color === 'green') {
    icon = linkGreenIcon;
    textColor = 'text-green-600';
  }
  return (
    <Link
      href={href}
      target={type === 'blank' ? '_blank' : undefined}
      rel={type === 'blank' ? 'noopener noreferrer' : undefined}
      className={
        'hover:underline underline-offset-[6px] inline-flex gap-1 items-center text-lg font-medium ' +
        textColor
      }
    >
      {text}
      <Image priority src={icon} alt="go to link" />
    </Link>
  );
};

export default ExternalLink;
