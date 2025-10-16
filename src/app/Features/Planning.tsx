import Image from 'next/image';

const Planning: React.FC = () => {
    return <>
        <div className="min-h-screen overflow-hidden bg-background h-screen w-screen bg-background ">
            <h1 className='relative mt-10 text-center max-w-4xl mx-auto text-2xl md:text-5xl font-bold text-white drop-shadow-lg'>Planning</h1>
            <div className="flex flex-col md:flex-row mt-10 items-center justify-center px-5 max-w-7xl mx-auto px-5 md:px-5">
                 <div className="md:w-1/4 text-center space-y-6">
                  <h1 className="text-5xl font-bold text-foreground">
                    Gestion simplifiée
                  </h1>
                  <p className="text-xl text-highlight">
                    Optimisez votre établissement avec un PMS open source.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-primary text-background px-6 py-3 rounded-full hover:opacity-80 transition"
                  >
                    Découvrir
                  </a>
                </div>

                {/* Bloc image */}
                <div className="md:w-3/4 flex justify-center mt-10 md:mt-0">
                    <Image
                        src="/feature_images/planning.png"
                        alt="Hero"
                        width={1500}
                        height={600}
                        className="object-cover object-bottom rounded-xl"
                        priority
                    />
                </div>
            </div>
        </div>
    </>
};

export default Planning;