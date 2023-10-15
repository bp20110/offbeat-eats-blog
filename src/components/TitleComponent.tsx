import React from 'react';

type Position = 'absolute' | 'relative' | 'static' | 'fixed';

type TitleComponentProps = {
  title: string;
  textColor?: string;
};

const TitleComponent:React.FC<TitleComponentProps> = (props) => {
  const { title, textColor } = props;
  const titleStyle = {
    color: textColor || '#4d4336',
    fontSize: '1.5rem',
    textTransform: 'uppercase' as 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '2px',
    margin: '0px',
    position: 'relative' as Position,
    display: 'inline-block',
    padding: '1em 3em',
  };

  const lineStyle = {
    position: 'absolute' as Position,
    content: '',
    top: 'calc(50% - 1px)',
    width: '2.5em',
    height: '2px',
    backgroundColor: '#4d4336',
  };

  return (
    <header className="title-component">
      <h2 style={titleStyle}>
        {title}
        <span style={{ ...lineStyle, left: '0' }}></span>
        <span style={{ ...lineStyle, right: '0' }}></span>
      </h2>
    </header>
  );
};

export default TitleComponent;
