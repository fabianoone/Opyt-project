import Header from './components/Header'
import LeadForm from './components/LeadForm'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="pt-4 font-arial dark:bg-slate-800">
      <div className="container mx-auto">
        <section className="z-10 max-w-5xl w-full items-center justify-between font-arial text-sm lg:flex">
          <Header />
        </section>
        <section className='flex  py-12'>
          <div className='w-1/2 px-2'>
            <p className='px-0.5 dark:text-white text-xl font-[100]'>
            Procurando o <span className='text-gr-orange font-bold'>melhor plano de internet</span>, com maior velocidade e estabilidade na conexão? Com o nosso COMBO você vai ter acesso aos melhores filmes e séries utilizando a melhor internet da região.
            </p>
            <div className='banners mt-5 flex flex-col gap-5'>
              <div>
                <Image
                  className="mx-auto"
                  src="/images/banner-1.png"
                  alt="Opyt Banner"
                  width={402}
                  height={220}
                  priority
                />
              </div>
              <div>
                <Image
                  className="mx-auto"
                  src="/images/banner-2.png"
                  alt="Opyt Banner"
                  width={402}
                  height={220}
                  priority
                />
              </div>
            </div>
          </div>
          <div className='form-div w-1/2 pt-14'>
            <h2 className='text-center'><span className='text-gr-orange'>Preencha os seus dados ou</span> chama no zap!</h2>
            <div className='py-2'>
              <LeadForm />
            </div>
          </div>
        </section>
      </div>
        <section className='gr-features mx-auto flex flex-col'>
          <div className='mx-auto'>
            <h2 className='text-white font-bold mb-10'>A Opyt não para de crescer e já somos mais de:</h2>
          </div>
            <div className='container mx-auto'>
              <ul className='flex gap-28'>
                <li className='text-center p-8 pb-6'>
                  <Image className='mx-auto' src="/images/icons/trofeu.svg" alt="Trofeu" width={62} height={62} />
                  <h3 className='text-white uppercase text-center font-bold text-2xl pt-5'>18.000 mil clientes ativos</h3>
                </li>
                <li className='text-center p-8 pb-6'>
                  <Image className='mx-auto' src="/images/icons/estrela.svg" alt="Trofeu" width={62} height={59} />
                  <h3 className='text-white uppercase text-center font-bold text-2xl pt-5'>4.000 km de fibra</h3>
                </li>
                <li className='text-center p-8 pb-6'>
                  <Image className='mx-auto' src="/images/icons/casa.svg" alt="Trofeu" width={89} height={39} />
                  <h3 className='text-white uppercase text-center font-bold text-2xl pt-5'>7 cidades atendidas</h3>
                </li>
              </ul>
            </div>
          <div className='mx-auto pt-10 pb-8'>
            <a href="https://api.whatsapp.com/send?phone=+5562994066070&text=Oi,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20planos%20Opyt" className='btn-whatsapp rounded-full uppercase font-bold' target="_blank" rel="noopener noreferrer">Chama no Zap!</a>
          </div>
        </section>

        <section className='gr-cta container mx-auto py-6'>
          <Image className='mx-auto' src={'/images/guy.svg'} width={840} height={512} alt='CTA Opyt' />
          <div className='mx-auto flex pt-5'>
          <a href="https://api.whatsapp.com/send?phone=+5562994066070&text=Oi,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20planos%20Opyt" className='btn-whatsapp-block rounded-e uppercase font-normal w-full text-center text-3xl' target="_blank" rel="noopener noreferrer">Chama no Zap!</a>
          </div>
        </section>

        <section className='gr-depoiments container mx-auto py-6'>
          <div>
            <ul className='grid grid-cols-3'>
              <li>
                <Image src={'/images/ana.svg'} width={320} height={470} alt='' />
              </li>
              <li>
                <Image src={'/images/rulio.svg'} width={320} height={470} alt='' />
              </li>
              <li>
                <Image src={'/images/luiz.svg'} width={320} height={470} alt='' />
              </li>
            </ul>
          </div>
        </section>
        <section className='gr-copywright bg-black py-5'>
          <div className="container mx-auto flex">
            <div className='w-2/3 flex items-center'>
              <Image
                className="gr-logo ml-28"
                src="/images/logo.svg"
                alt="Opyt Logo"
                width={72}
                height={36}
                priority
              />
              <p className='text-white text-xs mx-3 font-normal'>© 2023 Opyt LTDA. Todos os direitos reservados</p>
            </div>
            <div className='w-2/5 flex items-center justify-center'>
              <ul className='grid grid-cols-3 gap-4'>
                <li>
                  <a href="https://web.facebook.com/OPYTnet" target="_blank" rel="noopener noreferrer">
                    <Image 
                      className=""
                      src="/images/icons/facebook_circle_dark.svg"
                      alt="Opyt Logo"
                      width={24}
                      height={24}
                      priority
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/opytnet/" target="_blank" rel="noopener noreferrer">
                    <Image 
                      className=""
                      src="/images/icons/instagram_circle_dark.svg"
                      alt="Opyt Logo"
                      width={24}
                      height={24}
                      priority
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/opyt" target="_blank" rel="noopener noreferrer">
                    <Image 
                      className=""
                      src="/images/icons/linkedin_circle_dark.svg"
                      alt="Opyt Logo"
                      width={24}
                      height={24}
                      priority
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </main>
  )
}
