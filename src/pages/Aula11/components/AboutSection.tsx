export default function AboutSection() {
    return (
      <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-4xl">
            <p className="text-base/7 font-semibold text-indigo-400">Sobre nós</p>
            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-200 sm:text-5xl">
            Por que escolher a Wip Telecom?
            </h1>
            <p className="mt-6 text-balance text-xl/8 text-gray-300">
            Compromisso em oferecer excelência em telecomunicações
            </p>
          </div>
          <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            <div className="lg:pr-8">
              <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-200">Nossa missão</h2>
              <p className="mt-6 text-base/7 text-gray-300">              
                Somos um provedor de Internet banda larga que, no ano de 2014,
                trouxe em primeira mão para a cidade de Arealva a tecnologia de conexão em Fibra Óptica, 
                oferecendo internet de qualidade, velocidade, segurança para os nossos clientes. 
                A agilidade e a excelência no atendimento das demandas de um mercado cada vez mais exigente e a 
                busca constante por superar expectativas fazem da Wip Telecom a escolha certa para quem precisa 
                realmente de um serviço eficiente.
              </p>
              <p className="mt-8 text-base/7 text-gray-300">
              Ao longo destes anos a nossa empresa vem conquistando a confiança, 
              fidelidade e credibilidade no mercado de trabalho, se preocupando 
              primeiramente com a qualidade de nosso serviço e produto. A nossa 
              família Wip Telecom tem sempre o maior prazer em atender a sua família, 
              venha fazer parte você também, sinta-se em casa. Wip Telecom sempre com você!
              </p>
            </div>
            <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
              <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                    className="block size-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                    className="block size-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="max-lg:mt-16 lg:col-span-1">
              <p className="text-base/7 font-semibold text-gray-200">Nossas Bases São</p>
              <hr className="mt-6 border-t border-gray-200" />
              <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-1">
                <div className="flex flex-col gap-y-2 border-b  border-gray-200 pb-4">
                  <dt className="text-sm/6 text-gray-300">Qualidade absoluta</dt>
                  <dd className="order-first text-4xl font-semibold tracking-tight">
                    <span className="text-gray-200">1-MISSÃO</span>
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2 border-b  border-gray-200 pb-4">
                  <dt className="text-sm/6 text-gray-300">Melhores tecnologias e novos desafios</dt>
                  <dd className="order-first text-4xl font-semibold tracking-tight">
                    <span className="text-gray-200">2-VISÃO</span>
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-gray-200 max-sm:pb-4">
                  <dt className="text-sm/6 text-gray-300">Respeito, responsabilidade e humildade</dt>
                  <dd className="order-first text-4xl font-semibold tracking-tight">
                    <span className="text-gray-200">3-VALORES</span>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </div>
    )
  }
  