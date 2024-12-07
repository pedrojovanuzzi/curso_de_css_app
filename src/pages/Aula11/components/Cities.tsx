import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import town from "../imgs/town.svg"
import SelectLocation from './SelectLocation'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Cities() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-400">Veja abaixo a lista de localidades atendidas</h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
              Somos a empresa com a maior rede e cobertura de Internet em fibra óptica e 
              possuímos o compromisso de oferecer a melhor qualidade em telecomunicações.
              </p>
              <SelectLocation/>
            </div>
          </div>
          <div className="flex items-start justify-center sm:justify-end lg:order-first">
            <img
              alt="Product screenshot"
              src={town}
              width={2432}
              height={1442}
              className="w-[28rem] max-w-none rounded-xl sm:w-[45rem]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
