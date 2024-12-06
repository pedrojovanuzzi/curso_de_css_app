import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockOpenIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid'
  
  const features = [
    {
      name: '1-',
      description: 'WI-FI Dual Band 2.4 e 5.8 Ghz GRATIS na modalidade comodato',
      icon: CloudArrowUpIcon,
    },
    {
      name: '2-',
      description: 'BANDA ILIMITADA navegue a vontade sem surpresas na sua conta',
      icon: LockOpenIcon,
    },
    {
      name: '3-',
      description: 'APENAS 12 MESES DE FIDELIDADE',
      icon: ArrowPathIcon,
    },
    {
      name: '4-',
      description: 'TROCA DE SENHA GRÁTIS uma a cada 3 meses na modalidade remota',
      icon: FingerPrintIcon,
    },
  ]
  
  export default function Benefits() {
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base/7 font-semibold text-indigo-400">Beneficios</h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Roteador Wi-Fi grátis no comodato!
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
            Ao escolher qualquer um de nossos planos, você leva o roteador Wi-Fi em comodato, para navegar a vontade, 
            seja na sua TV, notebook ou smartphone. Obs. Planos sujeitos a aprovação cadastral !
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-500" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  