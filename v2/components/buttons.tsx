import React, { ReactDOM, useContext } from 'react';
import Link from 'next/link';

import { GeneralContext } from 'context/general';

import Twitter from 'public/icons/twitter.svg';
import Facebook from 'public/icons/facebook.svg';
import Instagram from 'public/icons/instagram.svg';
import Linkedin from 'public/icons/linkedin.svg';
import Github from 'public/icons/github.svg';
import classNames from 'classnames';

export const OtherButton: React.FC<{ href: string; text: string }> = ({
  href,
  text
}) => {
  return (
    <Link href={href}>
      {text}
    </Link>
  );
};

export const CategoryButtons: React.FC<{ categories: string[] }> = ({
  categories
}) => {
  const { categoryFilter: selectedCategory, setCategoryFilter: onClick } =
    useContext(GeneralContext);

  return (
    <ul className="category-buttons">
      {categories.map((item: string, index: number) => (
        <li
          aria-hidden="true"
          className={selectedCategory === item ? 'active' : null}
          onClick={() => {
            onClick(item);
          }}
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export const SocialButtons: React.FC<{
  isPrimary?: boolean;
  isFollow?: boolean;
  url: string;
  which: string;
}> = ({ isPrimary = false, isFollow = false, which, url }) => {
  const label = isFollow ? 'Takip Et' : 'Paylaş';
  const className = classNames('social-button', {
    primary: isPrimary,
    [which]: true
  });

  let icon: JSX.Element;

  switch (which) {
    case 'twitter':
      icon = <Twitter height={isPrimary ? 23 : 25} />;
      break;
    case 'facebook':
      icon = <Facebook height={isPrimary ? 23 : 25} />;
      break;
    case 'instagram':
      icon = <Instagram height={isPrimary ? 23 : 25} />;
      break;
    case 'linkedin':
      icon = <Linkedin height={isPrimary ? 23 : 25} />;
      break;
    case 'github':
      icon = <Github height={isPrimary ? 23 : 25} />;
      break;

    default:
      icon = icon;
      break;
  }

  return (
    <div className={className}>
      <a
        href={url}
        target="_blank"
        className="normal"
        rel="noopener noreferrer"
      >
        {icon} {label}
      </a>
    </div>
  );
};
