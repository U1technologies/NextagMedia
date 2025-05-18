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
    <div className='pt-2 py-4 bg-primary'>
        <section>
          <div className={styles.wrapper}>
            <div className="flex items-center font-semibold">
             <h3 className="mr-2 text-text_color_primary">{data?.H2_PARTNERS}</h3> 
                  <h3 className="text-gradient animate-gradient">Companies</h3>
                    </div>
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
    </div>
  );
};

export default WorkingWith;
