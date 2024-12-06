import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'



const frequencies = [
  { value: 'monthly' as const, label: 'Monthly', priceSuffix: '/mês' },
]
const tiers = [
  {
    name: 'BASICO',
    id: 'tier-basic',
    href: `'https://api.whatsapp.com/send/?phone=5514982332963&text=%22Ol%C3%A1,%20quero%20Contratar%20o%20Plano%20Basico%20de%20R$89,90!%22&type=phone_number&app_absent=0'`,
    price: { monthly: 'R$89,90'},
    description: 'Bom para até 7 Dispositivos',
    features: ['IPV6 incluso', 'Wi-Fi 5Ghz incluso', 'Jogue online e multiplayer com tranquilidade', 'Ideal para até 7 dispositivos distribuídos entre wifi e cabo simultâneos'],
    mostPopular: false,
  },
  {
    name: 'INTERMEDIÁRIO',
    id: 'tier-intermediare',
    href: 'https://api.whatsapp.com/send/?phone=5514982332963&text=%22Ol%C3%A1,%20quero%20Contratar%20o%20Plano%20Intermediario%20de%20R$99,90!%22&type=phone_number&app_absent=0',
    price: { monthly: 'R$99,90'},
    description: 'Bom para até 10 Dispositivos',
    features: ['IPV6 incluso', 'Wi-Fi 5Ghz incluso', 'Jogue online e multiplayer com tranquilidade', 'Ideal para até 10 dispositivos distribuídos entre wifi e cabo simultâneos'],
    mostPopular: true,
  },
  {
    name: 'MEGA AVANÇADO',
    id: 'tier-advanced',
    href: 'https://api.whatsapp.com/send/?phone=5514982332963&text=%22Ol%C3%A1,%20quero%20Contratar%20o%20Plano%20Avançado%20de%20R$109,90!%22&type=phone_number&app_absent=0',
    price: { monthly: 'R$109,90'},
    description: 'Bom para até 12 Dispositivos',
    features: ['IPV6 incluso', 'Wi-Fi 5Ghz incluso', 'Jogue online e multiplayer com tranquilidade', 'Ideal para até 12 dispositivos distribuídos entre wifi e cabo simultâneos'],
    mostPopular: false,
  },
  {
    name: 'TURBO',
    id: 'tier-turbo',
    href: 'https://api.whatsapp.com/send/?phone=5514982332963&text=%22Ol%C3%A1,%20quero%20Contratar%20o%20Plano%20Turbo%20de%20R$159,90!%22&type=phone_number&app_absent=0',
    price: { monthly: 'R$159,90'},
    description: 'Bom para até 15 Dispositivos',
    features: ['IPV6 incluso', 'Wi-Fi 5Ghz incluso', 'Jogue online e multiplayer com tranquilidade', 'Ideal para até 15 dispositivos distribuídos entre wifi e cabo simultâneos'],
    mostPopular: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div id='planos' className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">Preços</h2>
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Planos
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">
          Escolha o Plano que deseja
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-indigo-500' : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10',
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg/8 font-semibold text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs/5 font-semibold text-white">
                    Mais Popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm/6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-white">{tier.price[frequency.value]}</span>
                <span className="text-sm/6 font-semibold text-gray-300">{frequency.priceSuffix}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                )}
              >
                Contratar Plano
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
