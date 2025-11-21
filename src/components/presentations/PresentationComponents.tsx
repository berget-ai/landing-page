import React from 'react';

// Basic slide components
export const SlideTitle: React.FC<{ 
  children: React.ReactNode; 
  center?: boolean;
  large?: boolean;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
}> = ({ 
  children, 
  center = false,
  large = false,
  color
}) => {
  const sizeClass = large ? 'text-5xl md:text-7xl' : 'text-4xl md:text-6xl';
  const alignClass = center ? 'text-center' : 'text-left';
  const colorMap = {
    blue: 'text-blue-600',
    green: 'text-green-600', 
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600',
  };
  const colorClass = color ? colorMap[color] : '';

  return (
    <h1 className={`${sizeClass} ${alignClass} ${colorClass} font-bold mb-8`}>
      {children}
    </h1>
  );
};

export const SlideHeading: React.FC<{ 
  children: React.ReactNode; 
  center?: boolean;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
}> = ({ 
  children, 
  center = false,
  color
}) => {
  const alignClass = center ? 'text-center' : 'text-left';
  const colorMap = {
    blue: 'text-blue-600',
    green: 'text-green-600', 
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600',
  };
  const colorClass = color ? colorMap[color] : '';

  return (
    <h2 className={`text-3xl md:text-5xl font-bold mb-8 ${alignClass} ${colorClass}`}>
      {children}
    </h2>
  );
};

export const SlideText: React.FC<{ 
  children: React.ReactNode; 
  large?: boolean;
  center?: boolean;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
}> = ({ 
  children, 
  large = false,
  center = false,
  color
}) => {
  const sizeClass = large ? 'text-xl md:text-2xl' : 'text-lg md:text-xl';
  const alignClass = center ? 'text-center' : '';
  const colorMap = {
    blue: 'text-blue-600',
    green: 'text-green-600', 
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600',
  };
  const colorClass = color ? colorMap[color] : '';

  return (
    <p className={`${sizeClass} ${alignClass} ${colorClass} mb-4 leading-relaxed`}>
      {children}
    </p>
  );
};

export const SlideList: React.FC<{ 
  children: React.ReactNode; 
  ordered?: boolean;
  className?: string;
}> = ({ children, ordered = false, className = '' }) => {
  const ListTag = ordered ? 'ol' : 'ul';
  return (
    <ListTag className={`space-y-3 mb-6 ${ordered ? 'list-decimal list-inside' : 'list-disc list-inside'} ${className}`}>
      {children}
    </ListTag>
  );
};

export const SlideListItem: React.FC<{ 
  children: React.ReactNode;
  icon?: string;
  className?: string;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
}> = ({ children, icon, className = '', color }) => {
  const colorMap = {
    blue: 'text-blue-600',
    green: 'text-green-600', 
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600',
  };

  return (
    <li className={`flex items-start ${className} ${color ? colorMap[color] : ''}`}>
      {icon && <span className="mr-3 text-xl">{icon}</span>}
      <span>{children}</span>
    </li>
  );
};

export const SlideCode: React.FC<{ 
  children: React.ReactNode;
  language?: string;
  className?: string;
}> = ({ children, language = 'text', className = '' }) => (
  <pre className={`bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm md:text-base mb-6 ${className}`}>
    <code className={`language-${language}`}>{children}</code>
  </pre>
);

export const SlideTable: React.FC<{ 
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
  className?: string;
}> = ({ headers, rows, className = '' }) => (
  <div className="overflow-x-auto mb-6">
    <table className={`min-w-full border-collapse border border-gray-300 ${className}`}>
      <thead>
        <tr className="bg-gray-100">
          {headers.map((header, index) => (
            <th key={index} className="border border-gray-300 px-4 py-2 text-left font-semibold">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const SlideTwoColumn: React.FC<{ 
  left: React.ReactNode;
  right: React.ReactNode;
  ratio?: '50-50' | '60-40' | '40-60' | '70-30' | '30-70';
}> = ({ left, right, ratio = '50-50' }) => {
  const ratioMap = {
    '50-50': 'grid-cols-1 md:grid-cols-2',
    '60-40': 'grid-cols-1 md:grid-cols-[60%_40%]',
    '40-60': 'grid-cols-1 md:grid-cols-[40%_60%]',
    '70-30': 'grid-cols-1 md:grid-cols-[70%_30%]',
    '30-70': 'grid-cols-1 md:grid-cols-[30%_70%]',
  };

  return (
    <div className={`grid ${ratioMap[ratio]} gap-6 mb-6`}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};

export const SlideHighlight: React.FC<{ 
  children: React.ReactNode; 
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
}> = ({ children, color = 'blue' }) => {
  const colorMap = {
    blue: 'text-blue-600 font-bold',
    green: 'text-green-600 font-bold',
    red: 'text-red-600 font-bold',
    yellow: 'text-yellow-600 font-bold',
    purple: 'text-purple-600 font-bold',
  };

  return <span className={colorMap[color]}>{children}</span>;
};

// Helper functions for creating slides
export const createTitleSlide = (title: string, subtitle?: string, author?: string) => ({
  id: 'title',
  center: true,
  content: (
    <>
      <SlideTitle>{title}</SlideTitle>
      {subtitle && <SlideText large>{subtitle}</SlideText>}
      {author && <SlideText>{author}</SlideText>}
    </>
  ),
});

export const createContentSlide = (title: string, content: React.ReactNode, center?: boolean) => ({
  id: title.toLowerCase().replace(/\s+/g, '-'),
  title,
  center,
  content,
});

export const createListSlide = (title: string, items: Array<{ text: string; icon?: string; color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' }>) => ({
  id: title.toLowerCase().replace(/\s+/g, '-'),
  title,
  content: (
    <SlideList>
      {items.map((item, index) => (
        <SlideListItem key={index} icon={item.icon} color={item.color}>
          {item.text}
        </SlideListItem>
      ))}
    </SlideList>
  ),
});

export const createCodeSlide = (title: string, code: string, language?: string) => ({
  id: title.toLowerCase().replace(/\s+/g, '-'),
  title,
  content: <SlideCode language={language}>{code}</SlideCode>,
});

export const createTableSlide = (title: string, headers: string[], rows: string[][]) => ({
  id: title.toLowerCase().replace(/\s+/g, '-'),
  title,
  content: (
    <SlideTable
      headers={headers}
      rows={rows}
    />
  ),
});

export const createTwoColumnSlide = (
  title: string, 
  left: React.ReactNode, 
  right: React.ReactNode,
  ratio?: '50-50' | '60-40' | '40-60'
) => ({
  id: title.toLowerCase().replace(/\s+/g, '-'),
  title,
  content: (
    <SlideTwoColumn left={left} right={right} ratio={ratio} />
  ),
});