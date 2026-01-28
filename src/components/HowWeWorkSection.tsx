import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const workingSteps = [
  {
    icon: "Send",
    title: "Направляете запрос",
    description:
      "Описываете вашу ситуацию или задачу через форму обратной связи. Укажите детали, чтобы мы могли дать максимально точную консультацию.",
  },
  {
    icon: "FileEdit",
    title: "Мы анализируем и готовим ответ",
    description:
      "Наши специалисты изучают ваш запрос, готовят аналитические материалы и типовые рекомендации в письменном виде.",
  },
  {
    icon: "Mail",
    title: "Получаете письменную консультацию",
    description:
      "В установленный срок получаете развёрнутый письменный ответ с рекомендациями, чек-листами и дополнительными методическими материалами.",
  },
  {
    icon: "RotateCcw",
    title: "Задаёте уточняющие вопросы",
    description:
      "В рамках пакета можете направить дополнительные вопросы для уточнения или углубления анализа ситуации.",
  },
]

export function HowWeWorkSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Асинхронный формат
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Формат <span className="text-primary">работы</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Асинхронный формат: описываете задачу — получаете структурированный письменный анализ с рекомендациями. 
            Без обязательных звонков.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workingSteps.map((step, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-fit group-hover:scale-110">
                  <Icon name={step.icon} className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <div className="flex items-start gap-4 text-left">
              <Icon name="Info" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Важно знать</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  Все консультации предоставляются в письменном виде. Услуги носят информационно-консультационный и аналитический характер. Не являются образовательными, финансовыми или инвестиционными. 
                  Решения принимаете самостоятельно. Гарантии конкретных результатов не предоставляются.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}