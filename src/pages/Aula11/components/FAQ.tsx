import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Existem planos com velocidades maiores?",
    answer: "Sim, possuímos planos com velocidade dedicada, entre em contato conosco para saber mais detalhes.",
  },
  {
    question: "Qual o prazo de fidelidade?",
    answer: "Nossos planos possuem período de fidelidade de apenas 12 meses.",
  },
  {
    question: "O roteador Wi-Fi está incluso?",
    answer: "Sim, em todos nossos planos o roteador Wi-Fi está incluso em comodato.",
  },
  {
    question: "Como posso ser atendido?",
    answer: "Através do nosso atendimento digital via chat (WhatsApp), também fora do horário de expediente, que o auxilia com procedimentos de resolução de problemas simples na conexão. Os não resolvidos são encaminhados imediatamente para um técnico plantonista.",
  },
  {
    question: "Como faço para retirar meu boleto?",
    answer: "Retire você mesmo seu boleto via central do assinante ou WhatsApp, de forma simples e descomplicada.",
  },
  {
    question: "O que faço para liberar minha internet?",
    answer: "Liberação de internet, redução ou desbloqueio a qualquer hora. Em caso de problemas de pagamento com boletos, você pode liberar sua internet de forma emergencial por 72 horas, para não ficar sem. Este benefício é muito utilizado quando o cliente esquece da pagar o boleto e o paga muitos dias depois da data de vencimento sem que haja tempo hábil para integração entre os sistemas das agências bancárias e o da WipTelecom.",
  },
  {
    question: "Consigo fazer meu cadastro sem ir até a empresa?",
    answer: "Sim! Faça seu cadastro por telefone ou site e seja nosso cliente sem sair de casa, nós levamos o contrato até você.",
  },
]

export default function FAQ() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Perguntas frequentes</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-300">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
