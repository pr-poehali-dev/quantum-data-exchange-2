import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "FileText",
    title: "Аналитические разборы",
    subtitle: "Глубокий анализ ситуаций",
    description:
      "Получаете письменные аналитические материалы по запросу — разбор паттернов, стратегий и подходов к принятию решений.",
  },
  {
    icon: "MessageSquare",
    title: "Консультационное сопровождение",
    subtitle: "Письменные ответы на вопросы",
    description:
      "Асинхронный формат: задаёте вопрос — получаете письменную консультацию в установленный срок. Без обязательных звонков.",
  },
  {
    icon: "BookOpen",
    title: "Методические материалы",
    subtitle: "Информационное сопровождение",
    description:
      "Дополнительные информационные материалы к консультациям: чек-листы, типовые рекомендации, справочные документы.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши услуги
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Информационно-консультационные <span className="text-primary">услуги</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Оказываем консультационные и аналитические услуги в асинхронном формате. Письменные ответы, методические материалы, типовые рекомендации.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">{service.title}</CardTitle>
                <p className="text-sm font-semibold text-foreground mb-3">{service.subtitle}</p>
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