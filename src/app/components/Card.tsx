import SpotCardProps from "@/interface/SpotCardProps"
  
  export default function Card({ imageUrl, title, type, location, rating }: SpotCardProps) {
    return (
      <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image container */}
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="space-y-2">
          {/* Title */}
          <h2 className="px-2 pt-2 text-xl font-bold">
            {title}
          </h2>
          <hr/>
          
          {/* Type */}
          <div className="px-2 flex items-center gap-2">
            <span className="font-semibold">Type:</span>
            <span>{type}</span>
          </div>
          <hr/>
          {/* Location */}
          <div className="px-2 flex items-center gap-2">
            <span>{location}</span>
          </div>
          {/* Rating */}
          <div className="flex items-center gap-2 bg-slate-200">
            <span className="px-2 py-2 font-semibold text-slate-700">Spot rating:</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
                >
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }