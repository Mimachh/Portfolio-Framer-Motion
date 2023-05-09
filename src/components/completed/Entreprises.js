import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

import AnimatedText from '@/components/AnimatedText'

import EntrepriseCard from '../EntrepriseCard'
import Layout from '@/components/Layout'

import entreprise1 from '../../../public/images/entreprises/jean.jpg'
import entreprise2 from '../../../public/images/entreprises/kokuban.jpg'
import entreprise3 from '../../../public/images/entreprises/nutrimeaLogo.jpg'
import entreprise4 from '../../../public/images/entreprises/vdf.png'





const FramerImage = motion(Image);

const animationOrder = {
    initial: 0,
    midAnimation: 0.35,
    endAnimation: 0.55,
    finish: 0.7,

    mobileFirstSlide: 0.20,
    mobileSecondSlide: 0.40,
    mobileThirdSlide: 0.60,
    mobileLastSlide: 0.80,
    mobileEnd: 1,
};


const Entreprise = ({title, type, img, link, github}) => {

    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border
        border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        '>
            {/* <div className='absolute top-1 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' /> */}
            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.08}}
                transition={{duraction:0.2}}
                priority
                />
            </Link>
                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                    <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                    </Link>
                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href={link} target="_blank"
                        className='text-lg font-semibold underline dark:text-light md:text-base hover:text-primary dark:hover:text-primaryDark'
                        >Lien pour voir l'entreprise
                        </Link>
                        <Link href="/" className='w-8 dark:text-light md:w-6' target="_blank">Logo de l'entreprise</Link>
                    </div>
                </div>
        </article>
    )
}



const Entreprises = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    // Desktop Transform
    const opacity = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.midAnimation,
            animationOrder.endAnimation
        ],
        [0, 1, 0]
      );

    const opacityLastCardDesktop = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.midAnimation,
            animationOrder.endAnimation,
            animationOrder.finish
        ],
        [0, 1, 1, 1]
      );
    
    const scale = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.midAnimation,
            animationOrder.endAnimation
        ],
        [0, 0.8, 0]
    );

    const scaleCenter = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.midAnimation,
            animationOrder.endAnimation
        ],
        [0, 1, 0]
    );

    const scaleLastCard = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.midAnimation,
            animationOrder.endAnimation,
            animationOrder.finish
        ],
        [0, 0.3, 1, 0.3]
    );

    const xLeft = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.midAnimation,
            animationOrder.endAnimation
        ],
        ["-100%", "0%", "-100%"]
    );

    const xLastCard = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.midAnimation,
            animationOrder.endAnimation,
            animationOrder.finish
        ],
        ["0%", "0%", "0%", "0%"]
    );

    const xRight = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.midAnimation,
            animationOrder.endAnimation
        ],
        ["100%", "0%", "100%"]
    );

    // Tablet/Mobile Trasnform

    const opacityMobileFirstSlide = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.mobileFirstSlide,
            animationOrder.mobileSecondSlide,
            animationOrder.mobileThirdSlide
        ],
        [0, 1, 1, 0]
    );

    const xMobileFirstSlide = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.mobileFirstSlide,
            animationOrder.mobileSecondSlide,
            animationOrder.mobileThirdSlide
        ],
        ["100%", "0%", "0%", "-100%"]
    );

    const opacityMobileSecondSlide = useTransform(
        scrollYProgress,
        [
            animationOrder.mobileFirstSlide,
            animationOrder.mobileSecondSlide,
            animationOrder.mobileThirdSlide,
            animationOrder.mobileLastSlide
        ],
        [0, 1, 1, 0]
    );

    const xMobileSecondSlide = useTransform(
        scrollYProgress,
        [
            animationOrder.mobileFirstSlide,
            animationOrder.mobileSecondSlide,
            animationOrder.mobileThirdSlide,
            animationOrder.mobileLastSlide
        ],
        ["-100%", "0%", "0%", "100%"]
    );

    const opacityMobileThirdSlide = useTransform(
        scrollYProgress,
        [
            animationOrder.mobileSecondSlide,
            animationOrder.mobileThirdSlide,
            animationOrder.mobileLastSlide,
            animationOrder.mobileEnd
        ],
        [0, 1, 0.6, 0]
    );

    const xMobileThirdSlide = useTransform(
        scrollYProgress,
        [
            animationOrder.mobileSecondSlide,
            animationOrder.mobileThirdSlide,
            animationOrder.mobileLastSlide,
            animationOrder.mobileEnd
    
        ],
        ["100%", "0%", "-40%", "-100%"]
    );

    const opacityMobileLastSlide = useTransform(
        scrollYProgress,
        [
            animationOrder.mobileThirdSlide,
            animationOrder.mobileLastSlide,
            animationOrder.mobileEnd
        ],
        [0, 1, 0.4]
    );

    const xMobileLastSlide = useTransform(
        scrollYProgress,
        [
            animationOrder.mobileThirdSlide,
            animationOrder.mobileLastSlide,
            animationOrder.mobileEnd
    
        ],
        ["-100%", "0%", "0%"]
    );


  return (
    <section ref={targetRef} className='w-full mb-16 flex flex-col items-center justify-center dark:text-light min-h-screen mt-[10vh]'>
        
        <Layout className='pt-8'>
            {/* Desktop */}
            <div className='lg:hidden relative h-[180vh] '>
                <div className='z-10 sticky top-8 xl:top-10 lg:top-16 md:top-8 xs:top-4'>
                    <AnimatedText text="Mes entreprises" className='z-10 mb-16 lg:!text-7xl sm:!text-5xl xs:!text-4xl sm:mb-8' />
                </div>
                    <div  className='sticky top-1/2 -translate-y-1/2 row-slide grid grid-cols-12 gap-12 gap-y-32  xl:gap-x-0 lg:gap-x-8 md:gap-x-0 md:gap-y-24 sm:gap-x-0'
                    >
                        <motion.div className='col-span-4 text-dark dark:text-light   
                            translate-x-centered-offset -translate-y-1/2 scale-[var(--scale)] '
                            style={{
                                opacity, 
                                x: xLeft, 
                                scale: scale,
                            }}
                            >
                            <EntrepriseCard 
                                title="Vivre Français"
                                img={entreprise1}
                                link="/"
                                github="/"
                                type="Chef d’équipe numérique / Création de contenus sur Tik Tok (Institut Apollon)"
                            />
                        </motion.div>

                        <motion.div className='col-span-4 text-dark dark:text-light  
                            '
                            style={{
                                opacity,
                                scale: scaleCenter
                            }}
                            >
                            <EntrepriseCard 
                                title="Kokuban"
                                img={entreprise2}
                                link="/"
                                github="/"
                                type="Montage vidéo pour les réseaux sociaux"
                            />
                        </motion.div>

                        <motion.div className='col-span-4 text-dark dark:text-light 
                            translate-x-centered-offset -translate-y-1/2 scale-[var(--scale)]
                            '
                            style={{
                                opacity, 
                                x: xRight, 
                                scale: scale
                            }}
                            >
                            <EntrepriseCard 
                                title="Nutriméa"
                                img={entreprise3}
                                link="/"
                                github="/"
                                type="Montage vidéo pour les réseaux sociaux"
                            />
                        </motion.div>

                
                    </div>
                    <div  className='sticky top-1/2 -translate-y-1/2 row-slide grid grid-cols-12 gap-12 gap-y-32  xl:gap-x-0 lg:gap-x-8 md:gap-x-0 md:gap-y-24 sm:gap-x-0'
                    >
                        <motion.div className='col-start-5 col-span-4 text-dark dark:text-light   
                            translate-x-centered-offset -translate-y-1/2 scale-[var(--scale)] '
                            style={{
                                opacity: opacityLastCardDesktop, 
                                x: xLastCard, 
                                scale: scaleLastCard,
                            }}
                            >
                            <EntrepriseCard 
                                title="Vétérans de France"
                                img={entreprise4}
                                link="/"
                                github="/"
                                type="Gestion des réseaux sociaux /
                                Montage vidéo /
                                Miniatures YouTube / 
                                Gestion de projets"
                            />
                        </motion.div>
                    </div>
            </div>


          

            {/* Mobile */}
            <div className='hidden lg:block relative h-auto'>
                <AnimatedText text="Mes entreprises mobile" className='z-10 mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                <div  className='grid grid-cols-12 lg:gap-x-8 gap-y-4 sm:gap-x-4
               
                '
                >
                    <motion.div className='col-span-12 text-dark dark:text-light lg:mx-12 md:mx-6 sm:mx-0
                    translate-x-centered-offset -translate-y-1/2 scale-[var(--scale)] '
                    style={{
                        opacity: opacityMobileFirstSlide, 
                        x: xMobileFirstSlide, 
                        // scale: scale
                    }}
                    >
                        <Entreprise 
                            title="Entreprise 1"
                            img={entreprise1}
                            link="/"
                            github="/"
                            type="Type d'entreprise ? Ou type de Contrat ? Ou durée ?"
                        />
                    </motion.div>

                    <motion.div className='col-span-12 text-dark dark:text-light lg:mx-12 md:mx-6 sm:mx-0 
                    translate-x-centered-offset -translate-y-1/2 scale-[var(--scale)] 
                    '
                    style={{
                        opacity: opacityMobileSecondSlide, 
                        x: xMobileSecondSlide,
                    }}
                    >
                        <Entreprise 
                            title="Entreprise 2"
                            img={entreprise2}
                            link="/"
                            github="/"
                            type="Featured Project"
                        />
                    </motion.div>

                    <motion.div className='col-span-12 text-dark dark:text-light lg:mx-12 md:mx-6 sm:mx-0
                    translate-x-centered-offset -translate-y-1/2 scale-[var(--scale)]
                    '
                    style={{
                        opacity: opacityMobileThirdSlide, 
                        x: xMobileThirdSlide,
                    }}
                    >
                        <Entreprise 
                            title="Entreprise 3"
                            img={entreprise3}
                            link="/"
                            github="/"
                            type="Featured Project"
                        />
                    </motion.div>

                    <motion.div className='col-span-12 text-dark dark:text-light lg:mx-12 md:mx-6 sm:mx-0
                        translate-x-centered-offset -translate-y-1/2 scale-[var(--scale)] '
                            style={{
                                opacity: opacityMobileLastSlide, 
                                x: xMobileLastSlide,
                            }}
                            >
                            <EntrepriseCard 
                                title="Vétérans de France"
                                img={entreprise4}
                                link="/"
                                github="/"
                                type="Gestion des réseaux sociaux /
                                Montage vidéo /
                                Miniatures YouTube / 
                                Gestion de projets"
                            />
                        </motion.div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Entreprises