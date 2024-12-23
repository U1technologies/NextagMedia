import Image from 'next/image';
import { useRef, useEffect, React } from 'react';
import { BTN_LETS_CONNECT, ROUTE_LETS_CONNECT } from '@/text';
import SectionHeading from '../SectionHeading';
import styles from './WorkingWith.module.css';
import Link from 'next/link';

const WorkingWith = ({ data }) => {
  const {partners} = data;
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null); 

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const startScrolling = () => {
      scrollIntervalRef.current = setInterval(() => {
        scrollContainer.scrollBy({ left: 1.5});
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }, 10);
    };
    const cloneChildren = () => {
      const children = Array.from(scrollContainer.children);
      children.forEach(child => {
        const clone = child.cloneNode(true);
        scrollContainer.appendChild(clone);
      });
    };

    cloneChildren();
    startScrolling();

    const handleMouseEnter = () => clearInterval(scrollIntervalRef.current);
    const handleMouseLeave = () => startScrolling();

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(scrollIntervalRef.current);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [partners]);
  return (
    <div className='py-4'>
    <div className={styles.main}>
      <div className={styles.container}>
        <section className={styles.container}>
          <div className={styles.wrapper}>
            <p className='font-semibold text-2xl text-text_color_secondary'>{data?.H2_PARTNERS}</p>
            <div className={styles.partners} ref={scrollContainerRef} >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <Image
                    className={styles.partnerImage}
                    width={partner.alt==='Tata AIG'?100:160}
                    height={60}
                    src={partner.image}
                    alt={partner.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div >
    </div >
    </div>
  );
};

export default WorkingWith;
