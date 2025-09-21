
import React from 'react';
import { Link } from 'react-router-dom';
import { Tool } from '../types';
import Button from './ui/Button';
import Card from './ui/Card';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <Card className="p-6 flex flex-col h-full" hoverEffect>
      {tool.icon && React.isValidElement(tool.icon) && (
        <div className="mb-4 text-[#5468FF]"> {/* Ensures icon color is new blue */}
           {React.cloneElement(tool.icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10" })}
        </div>
      )}
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{tool.name}</h3>
      <p className="text-slate-600 text-sm mb-4 flex-grow">{tool.description}</p>
      <Link to={tool.path} className="mt-auto">
        <Button variant="secondary" size="md" className="w-full">
          {tool.ctaText}
        </Button>
      </Link>
    </Card>
  );
};

export default ToolCard;