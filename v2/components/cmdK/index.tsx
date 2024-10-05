import React from 'react';
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
  KBarResults,
  useMatches,
  useKBar
} from 'kbar';

import ArrowRight from 'public/icons/arrow-right.svg';
import classNames from 'classnames';
import { useEffect } from 'react';

const CmdKMenu = () => {
  const { visualState } = useKBar(state => state);

  useEffect(() => {
    if (visualState === 'showing') {
      document.querySelector('html').style.overflow = 'hidden';
    }
    if (visualState === 'hidden') {
      document.querySelector('html').style.overflow = 'auto';
    }
  }, [visualState]);
  
  return (
    <KBarPortal>
      <KBarPositioner className="cmdk-positioner">
        <KBarAnimator className="cmdk-animator">
          <KBarSearch
            className="cmdk-search"
            defaultPlaceholder="Ufak bir gezintiye ne dersin?"
          />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
};

function RenderResults() {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        const className = classNames({
          'cmdk-item': true,
          'cmdk-item-active': active
        });
        return typeof item === 'string' ? (
          <div className="cmdk-group-name">{item}</div>
        ) : (
          <div className={className}>
            <span>{item.name}</span>
            {active && <ArrowRight />}
          </div>
        );
      }}
    />
  );
}

export default CmdKMenu;
