import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-background  backdrop-blur-xl bg-gradient-to-br ">
        <header className="bg-background shadow-md sticky top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tight text-highlight">
                    <div className="flex items-center">
                        <Image
                          src="/bookalty.png"
                          alt="Hero Background"
                          width={70}
                          height={70}
                        />
                    </div>
                </Link>
            </div>
        </header>
        <div className="relative z-10 text-center text-black max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg">
                PMS Gratuit
            </h1>
            <h2 className="mt-4 text-2xl md:text-4xl text-highlight font-thin tracking-widest">
                Gestion de votre établissement simplifiée Open Source
            </h2>
            <a
                href="#skills"
                className="mt-8 inline-block bg-primary text-highlight px-6 py-3 rounded-full hover:bg-gray-900 transition"
            >
                Demo en ligne
            </a>
            <div className="scale-120 translate-y-40">
                <div className="rounded-3xl shadow-[0_0_100px_10px_highlight]">
                <Image
                    src="/capture.png"
                    alt="Hero"
                    width={2000}
                    height={1600}
                    className="object-cover object-bottom rounded-xl"
                    priority
                />
                </div>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-background z-10" />
    </section>
  );
};

export default Hero;
