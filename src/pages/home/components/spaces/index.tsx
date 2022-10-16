import { useEffect, useState } from 'react'

import { Carousel } from 'components/carousel'
import { spacesApi } from 'pages/api'

import { SpaceCard } from './components/space-card'

import styles from './styles.module.scss'

interface ISpace {
  uuid: string,
  name: string,
  description: string,
}

const Spaces = () => {
    const [spaces, setSpaces] = useState<Array<ISpace> | undefined>(undefined)

    useEffect(() => { 
      const fetchSpace = async () => {
        try {
          const response = await spacesApi.getSpacesList()
  
          if(response) {
            setSpaces(response.spaces)
          }
  
        } catch(error) {
          console.error(error);
        };
      }
        
      fetchSpace();
    }, [setSpaces]);

    return (
        <div className={styles.spaces}>
            <div className={styles['spaces__content']}>
                <h2>Nossos espaços</h2>
                <Carousel
                  dots={false}
                  nav={false}
                  autoplay={false}
                  autoplayTimeout={2000}
                  autoplaySpeed={2000}
                  autoplayHoverPause={false}
                  margin={60}
                  autoWidth
              >
                  {spaces?.map((space: ISpace) => (
                      <SpaceCard 
                          key={space.uuid}
                          id={space.uuid}
                          name={space.name}
                          // img={space.img}
                          // alt={space.alt}
                          description={space.description}
                          quantity={20}
                      />
                    )
                  )}
              </Carousel>
            </div>
        </div>
    );
};

export { Spaces }