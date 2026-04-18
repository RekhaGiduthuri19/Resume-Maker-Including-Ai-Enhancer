import React from 'react'
import Title from './Title' 

const Testimonials = () => {
    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Briar Martin',
            handle: '@neilstellar',
            review: 'The AI suggestions helped me land my dream job interview in just two weeks!'
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Avery Johnson',
            handle: '@averywrites',
            review: 'As a writer, I was skeptical, but the phrasing tools are surprisingly good.'
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Jordan Lee',
            handle: '@jordantalks',
            review: 'Finally, a resume builder that doesn’t look generic. The templates are great.'
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Sam Wilson',
            handle: '@samcodes',
            review: 'Streamlined my process completely. This tool saved me hours of frustration.'
        },
    ];

    const CreateCard = ({ card }) => (
        <div className="p-2.5 rounded-md mx-2 bg-white shadow hover:shadow-md transition-all duration-200 w-48 shrink-0 border border-slate-100 text-left">
            <div className="flex gap-1.5 items-center">
                <img className="size-8 rounded-full object-cover" src={card.image} alt={`${card.name} image`} />
                <div className="flex flex-col">
                    <div className="flex items-center gap-0.5">
                        <p className="font-semibold text-xs text-gray-900">{card.name}</p>
                        <svg className="fill-blue-500" width="10" height="10" viewBox="0 0 12 12">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
                        </svg>
                    </div>
                    <span className="text-[10px] text-slate-500">{card.handle}</span>
                </div>
            </div>
            <p className="text-[11px] py-2 leading-relaxed text-gray-800 italic">"{card.review}"</p>
        </div>
    );

    return (
        // Changed 'max-w-full' to 'max-w-5xl' to reduce overall frame width
        <section className="pt-4 pb-12 mb-24 px-4 max-w-5xl mx-auto overflow-hidden flex flex-col items-center">
            <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-inner {
                    animation: marqueeScroll 30s linear infinite;
                }
                .marquee-reverse {
                    animation-direction: reverse;
                }
            `}</style>

            <div className="w-fit flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-800 bg-blue-50 border border-blue-100 rounded-full px-4 py-1 shadow-sm mb-2">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#1E4BAF"/>
                </svg>
                <span>Testimonials</span>
            </div>

            <Title 
                title="Don't just hear our words" 
                description="Hear what our users say about us. We are always looking for ways to improve."
            />

            {/* Row 1 */}
            <div className="marquee-row w-full mt-6 overflow-hidden relative rounded-xl">
                {/* Side Fades */}
                <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="marquee-inner flex w-max">
                    {[...cardsData, ...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={`row1-${index}`} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>

            {/* Row 2 */}
            <div className="marquee-row w-full mt-3 overflow-hidden relative rounded-xl">
                <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="marquee-inner marquee-reverse flex w-max">
                    {[...cardsData, ...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={`row2-${index}`} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>
        </section>
    );
}

export default Testimonials;