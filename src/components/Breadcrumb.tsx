// BreadcrumbComponent.tsx
import React from 'react';
// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Define types for breadcrumb items
interface BreadcrumbItem {
  label: string;
  href: string;
}

// Define props interface
interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items = [] }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4">
      <ol className="flex items-center flex-wrap">
        <li className="inline-flex items-center">
          <a href="/" className="text-gray-600 hover:text-blue-500 flex items-center">
            <FontAwesomeIcon icon={faHome} />
            <span className="ml-2">Home</span>
          </a>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <FontAwesomeIcon icon={faChevronRight} className="mx-2 text-gray-400" />
            {index === items.length - 1 ? (
              <span className="text-blue-600" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a 
                href={item.href} 
                className="text-gray-600 hover:text-blue-500"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;