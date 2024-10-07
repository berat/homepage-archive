import classNames from 'classnames';

interface SeparateTitleProps {
  title: string;
  isDisplayFont?: boolean;
}

const SeparateTitle: React.FC<SeparateTitleProps> = ({
  title,
  isDisplayFont = false
}) => {
  return (
    <h3
      className={classNames('separete-title', {
        'display-font': isDisplayFont
      })}
    >
      {title}
    </h3>
  );
};

export default SeparateTitle;
