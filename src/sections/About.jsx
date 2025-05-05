import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('enqinsel@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-cover rounded-[19px]" />

            <div>
              <p className="grid-headtext">Engin İnsel</p>
              <p className="grid-subtext">
              2+ yıllık deneyimimle, React ve Vue.js projelerinde yer aldım. Figma ile kullanıcı arayüzleri tasarladım. Modern teknolojilerle kullanıcı dostu, ilgi çekici deneyimler sunan arayüzler geliştiriyorum.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-cover rounded-[19px]" />

            <div>
              <p className="grid-headtext">Kullandığım Teknolojiler</p>
              <p className="grid-subtext">
                Çeşitli dil, framework ve araçlarla çalışarak sağlam ve ölçeklenebilir uygulamalar geliştiriyorum.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Uzaktan veya farklı lokasyonlarda çalışmaya açığım</p>
              <p className="grid-subtext">Bursa'da yaşıyor olsam da, farklı şehirlerde veya uzaktan çalışmaya açığım. Global projelerde yer almayı veya farklı zaman dilimlerine uyum sağlama konusunda esnek olmayı seviyorum. Yerinde ya da uzaktan, verimli ve etkili bir çalışma ortamı yaratmayı hedefliyorum.</p>
              <Button name="Bana Ulaşın" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tasarıma olan tutkum</p>
              <p className="grid-subtext">
              Tasarıma olan ilgimi yazılımla birleştirerek, frontend geliştirme ve kullanıcı deneyimi tasarımı alanında kariyer yapmayı seçtim. Bu yolculukta, kariyerimin başından itibaren ve öncesinde farklı teknoloji ve disiplinlerde çalışma fırsatı buldum. Her yeni projede kendimi geliştiriyor ve tutkumu işe yansıtmaya devam ediyorum.
             <br /> <b>Hedefim;</b> Deneyimlerimi, profesyonel ve dinamik iş ortamlarında değerlendirerek hem bireysel gelişimime hem de ekibin başarısına katkı sağlamaktır.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container justify-center">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Bana Ulaşın</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">enqinsel@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
