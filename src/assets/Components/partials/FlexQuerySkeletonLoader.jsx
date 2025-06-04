import React from 'react';

const FlexQuerySkeletonLoader = () => {
  return (
    <div className="max-w-6xl mx-auto p-5 animate-pulse">
      {/* Navigation Skeleton */}
      <div className="h-10 bg-gray-200 rounded w-full mb-8"></div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Skeleton */}
        <div className="w-full md:w-64">
          <div className="h-7 bg-gray-200 rounded w-2/5 mb-6"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-5 bg-gray-200 rounded w-4/5 mb-4"></div>
          ))}
        </div>
        
        {/* Main Content Skeleton */}
        <div className="flex-1">
          {/* Featured Card */}
          <div className="h-48 sm:h-64 bg-gray-200 rounded w-full mb-6"></div>
          
          {/* Title */}
          <div className="h-6 bg-gray-200 rounded w-3/5 mb-4"></div>
          
          
          {/* Website Info Section */}
          <div className="mt-8">
            <div className="h-5 bg-gray-200 rounded w-2/5 mb-4"></div>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-4/5 mb-2"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Trending Section */}
      <div className="clear-both mt-10">
        <div className="h-7 bg-gray-200 rounded w-40 mb-6"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlexQuerySkeletonLoader;