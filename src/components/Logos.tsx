import Image from 'next/image';

const clientLogos = [
    { src: '/images/wuerth.svg', alt: 'Würth', width: 120 },
    { src: '/images/waltdisney.svg', alt: 'Walt Disney', width: 100 },
    { src: '/images/pepsi.svg', alt: 'Pepsi', width: 50 },
    { src: '/images/microsoft.svg', alt: 'Microsoft', width: 130 },
    { src: '/images/lbbw.svg', alt: 'LBBW', width: 100 },
    { src: '/images/adac.svg', alt: 'ADAC', width: 80 },
    { src: '/images/mcdonalds.svg', alt: "McDonald's", width: 45 },
    { src: '/images/hilton.svg', alt: 'Hilton', width: 90 },
    { src: '/images/europapark.svg', alt: 'Europa-Park', width: 50 },
    { src: '/images/kia.svg', alt: 'Kia', width: 70 },
];

const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-16 px-5 bg-white">
            <p className="text-base text-gray-500 text-center mb-10">
                Von <span className="font-semibold">20.000+</span> Unternehmen weltweit genutzt
            </p>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    {clientLogos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center h-10">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={40}
                                className="object-contain max-h-8 md:max-h-10 w-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;
