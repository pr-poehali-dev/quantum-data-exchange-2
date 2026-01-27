import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Lightbulb",
    title: "Стратегия как навык",
    description:
      "Не теория, а методики принятия решений в неопределённости.",
  },
  {
    icon: "PlayCircle",
    title: "Практика встроена",
    description:
      "Бонусные цифровые активы для отработки навыков (бесплатно).",
  },
  {
    icon: "DollarSign",
    title: "Гибкая оплата",
    description:
      "От 490 ₽. Вы сами выбираете сумму — система подберёт курс.",
  },
  {
    icon: "ShieldCheck",
    title: "Без рисков",
    description:
      "Только образовательные услуги, никакого азарта или обмена.",
  },
  {
    icon: "Zap",
    title: "Автоматизация",
    description:
      "Доступ к материалам мгновенно после оплаты.",
  },
  {
    icon: "Award",
    title: "Экспертность",
    description:
      "Методики от профессионалов с опытом в аналитике и принятии решений.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша экспертиза
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чем мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Образовательная платформа для развития аналитического мышления через практику принятия решений.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}