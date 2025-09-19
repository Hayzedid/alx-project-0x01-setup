import React from "react";
import Button from "@/src/components/common/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Landing Page</h1>
      <div className="flex gap-4 mb-8">
        <Button shape="rounded-sm">Small Rounded</Button>
        <Button shape="rounded-md">Medium Rounded</Button>
        <Button shape="rounded-full">Full Rounded</Button>
      </div>
      <div className="space-y-4">
        <p className="text-gray-600">
          This page demonstrates buttons with different rounded shapes:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>rounded-sm - Small rounded corners</li>
          <li>rounded-md - Medium rounded corners (default)</li>
          <li>rounded-full - Fully rounded (pill shape)</li>
        </ul>
      </div>
    </div>
  );
};

export default Landing;
