'use client'

import { useEffect, useState } from "react";
import SpotPageProps from "@/interface/SpotPageProps"
import Breadcrumb from "@/components/Breadcrumb";
import Spinner from "@/components/Spinner";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function SpotPage({ id, slug }: SpotPageProps) {
    const items = [
        {label: 'Denmark', href: '/browse/Denmark'},
        {label: 'Vester strand', href: '#'}
    ]

    const [loading, setLoading] = useState(true)
    const [activeMediaTab, setActiveMediaTab] = useState('img');
    const [activeInfoTab, setActiveInfoTab] = useState('desc');
    const [activeEditTab, setActiveEditTab] = useState('edit');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    // Function to change displayed image
    const changeImage = (direction: number) => {
      const newIndex = currentImageIndex + direction;
      if (newIndex >= 0 && newIndex < currentSpot.images.length) {
        setCurrentImageIndex(newIndex);
      }
    };

    useEffect(() => {
        setInterval(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const currentSpot = {
        id: 132,
        title: "Bore surf senter",
        description: "71 skimpool at boresurfsenter.no\nAt Borestranda Norway",
        country: "Norway",
        images: [
          "/images/VesterStrand1.png",
          "/images/VesterStrand2.jpg" // Assuming there's a second image based on pagination
        ],
        rating: 3, // Out of 5
      };

      const nearbySpots = [
        {
          id: 7,
          title: "Klitmoeller",
          image: "/img/spots/klitmoeller.png",
          type: "wave",
          country: "Denmark",
          region: "Europe",
          rating: 0,
        },
        {
          id: 84,
          title: "Harre Vig",
          image: "/img/spots/HarreVig01.jpg",
          type: "flatland",
          country: "Denmark",
          region: "Europe",
          rating: 5,
        },
        {
          id: 112,
          title: "Nordre Skanse",
          image: "/img/spots/5f296c331d3dd7.91387107---2020-08-04---skimboarding-skimspots.com.jpg",
          type: "flatland",
          country: "Denmark",
          region: "Europe",
          rating: 0,
        },
        {
          id: 111,
          title: "Minibyen Sæby",
          image: "/img/spots/5f294e1519f925.89413136---2020-08-04---skimboarding-skimspots.com.jpg",
          type: "flatland",
          country: "Denmark",
          region: "Europe",
          rating: 0,
        },
      ];

    return (
        <div>
            <Breadcrumb items={items}/>
            <div className="bg-gray-100">
                <div className="w-full mx-auto grid grid-cols-6 gap-6 pt-20">
                    {/* Spot Title */}
                    <h1 className="col-span-6 md:col-span-4 text-2xl font-bold mb-4">
                    {currentSpot.title}
                    </h1>

                    {/* Rating System */}
                    <div className="col-span-6 md:col-span-3 text-right">
                    <form className="rating-system">
                        <input type="hidden" value={currentSpot.id} name="spotID" />
                        <input type="hidden" name="g-recapcha-response" id="g-recapcha-response" value="" />
                        {[5, 4, 3, 2, 1].map((value) => (
                        <button 
                            key={value}
                            className="bg-transparent border-none md:float-right ml-2"
                            name="rating" 
                            value={value}
                        >
                            <FontAwesomeIcon icon={faStar} />
                        </button>
                        ))}
                    </form>
                    </div>

                    {/* Image/Map Tab Card */}
                    <div className="col-span-6 md:col-span-7 overflow-hidden">
                    {/* Tabs */}
                    <div className="">
                        <ul className="flex">
                        <button 
                            onClick={() => setActiveMediaTab('img')}
                            className={`px-5 py-3 rounded-t ${activeMediaTab === 'img' ? 'bg-white' : 'hover:bg-gray-300'}`}
                        >
                            Images
                        </button>
                        <button 
                            onClick={() => setActiveMediaTab('map')}
                            className={`px-5 py-3 rounded-t ${activeMediaTab === 'map' ? 'bg-white' : 'hover:bg-gray-300'}`}
                        >
                            Map
                        </button>
                        </ul>
                    </div>
                    
                    {/* Tab Content */}
                    <div className="bg-white p-3">
                        {activeMediaTab === 'img' && (
                        <div>
                            <div className="w-full">
                            <img 
                                src={currentSpot.images[currentImageIndex]} 
                                alt={currentSpot.title}
                                className="spot-page-image"
                            />
                            </div>
                            <div className="flex justify-center items-center mt-3">
                            <button onClick={() => changeImage(-1)} className="bg-transparent border-none mx-3">
                                <span className="text-4xl">←</span>
                            </button>
                            <span className="mx-3">{currentImageIndex + 1}/{currentSpot.images.length}</span>
                            <button onClick={() => changeImage(1)} className="bg-transparent border-none mx-3">
                                <span className="text-4xl">→</span>
                            </button>
                            </div>
                        </div>
                        )}
                        {activeMediaTab === 'map' && (
                        <div className="w-full bg-gray-200 flex items-center justify-center">
                            <iframe src="https://www.google.com/maps/d/embed?mid=1OORORBnXUeaRw-yHIELeHRiqyjOZrNpf&ehbc=2E312F" height="600" width="100%"></iframe>
                        </div>
                        )}
                    </div>
                    </div>

                    {/* Spot Info Card */}
                    <div className="col-span-6 md:col-span-4 overflow-hidden">
                    {/* Tabs */}
                    <div className="">
                        <ul className="flex">
                        <button 
                            onClick={() => setActiveInfoTab('desc')}
                            className={`px-5 py-3 rounded-t ${activeInfoTab === 'desc' ? 'bg-white' : 'hover:bg-gray-300'}`}
                        >
                            Description
                        </button>
                        <button 
                            onClick={() => setActiveInfoTab('event')}
                            className={`px-5 py-3 rounded-t ${activeInfoTab === 'event' ? 'bg-white' : 'hover:bg-gray-300'}`}
                        >
                            Events
                        </button>
                        <button 
                            onClick={() => setActiveInfoTab('comments')}
                            className={`px-5 py-3 rounded-t ${activeInfoTab === 'comments' ? 'bg-white' : 'hover:bg-gray-300'}`}
                        >
                            Comments
                        </button>
                        </ul>
                    </div>
                    
                    {/* Tab Content */}
                    <div className="bg-white p-4">
                        {activeInfoTab === 'desc' && (
                        <div>
                            <h3 className="text-center text-xl">{currentSpot.title}</h3>
                            <p className="whitespace-pre-line">{currentSpot.description}</p>
                        </div>
                        )}
                        {activeInfoTab === 'event' && (
                        <div>
                            <p>No events available</p>
                        </div>
                        )}
                        {activeInfoTab === 'comments' && (
                        <div>
                            <p>No comments available</p>
                        </div>
                        )}
                    </div>
                    </div>

                    {/* Edit Spot Card */}
                    <div className="col-span-6 md:col-span-3 overflow-hidden">
                    {/* Tabs */}
                    <div className="">
                        <ul className="flex">
                        <button 
                            onClick={() => setActiveEditTab('edit')}
                            className={`px-5 py-3 rounded-t ${activeEditTab === 'edit' ? 'bg-white' : 'hover:bg-gray-300'}`}
                        >
                            Edit spot
                        </button>
                        <button 
                            onClick={() => setActiveEditTab('add')}
                            className={`px-5 py-3 rounded-t ${activeEditTab === 'add' ? 'bg-white' : 'hover:bg-gray-300'}`}
                        >
                            Add new spot
                        </button>
                        </ul>
                    </div>
                    
                    {/* Tab Content */}
                    <div className="bg-white p-4">
                        {activeEditTab === 'edit' && (
                        <div className="text-center">
                            <p>Wrong or missing information?</p>
                            <p>Edit this spot here:</p>
                            <form action="../edit-spot/" method="POST">
                            <button 
                                className="text-4xl text-gray-500" 
                                name="spotID" 
                                value={currentSpot.id} 
                                type="submit"
                            >
                                ✎
                            </button>
                            </form>
                        </div>
                        )}
                        {activeEditTab === 'add' && (
                        <div>
                            <p className="text-center">Add a new spot form would go here</p>
                        </div>
                        )}
                    </div>
                    </div>

                    {/* Content area with responsive order changes */}
                    <div className="col-span-6 md:col-span-4 lg:col-span-4 order-1 lg:order-1">
                    <div className="w-full grid grid-cols-2 gap-6">
                        <h3 className="col-span-2 text-xl font-bold">Spots nearby</h3>
                        
                        {nearbySpots.map((spot) => (
                        <Link 
                            href={`/spots/${spot.id}`}
                            key={spot.id} 
                            className="col-span-2 sm:col-span-1 border border-gray-300 rounded overflow-hidden hover:scale-105 transition duration-100 no-underline text-black"
                        >
                            <div className="relative w-full h-48">
                            <Image
                                src={spot.image}
                                alt={spot.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t"
                            />
                            </div>
                            <div className="p-4 text-left">
                            <p className="text-lg">{spot.title}</p>
                            </div>
                            <div className="px-4 py-2">
                            <p>Type: {spot.type}</p>
                            </div>
                            <div className="px-4 py-2">
                            <p>{spot.country}, {spot.region}</p>
                            </div>
                            <div className="border-t border-gray-300 bg-gray-100 flex justify-between items-center px-4">
                            <p className="py-3 text-gray-500">Spot rating:</p>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((value) => (
                                <FontAwesomeIcon key={value} icon={faStar} />
                                ))}
                            </div>
                            </div>
                        </Link>
                        ))}
                    </div>
                    </div>

                    {/* Support Tab */}
                    <div className="col-span-6 md:col-span-3 lg:col-span-3 order-2 lg:order-2 rounded overflow-hidden shadow">
                    <div className="">
                        <ul className="list-none p-0 m-0">
                        <li className="inline-block px-5 py-3 bg-white rounded-t">Support</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4">
                        <h4 className="text-lg font-bold">Support us</h4>
                        <p>
                        As long as this page do not have any ads are you more than welcome support the page. 
                        Every support is appreciated! <a href="https://www.patreon.com/skimspots" className="text-blue-600 underline">Go to patreon</a>
                        </p>
                        <a href="https://www.patreon.com/skimspots" className="block">
                        <div className="relative w-full h-24">
                            <Image
                            src="/img/about/patreon.png"
                            alt="Patreon"
                            layout="fill"
                            objectFit="contain"
                            />
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
}