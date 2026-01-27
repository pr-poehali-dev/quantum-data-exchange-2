import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const projects = [
  {
    title: "Стратегия через примеры",
    category: "Базовый курс",
    description:
      "Как принимать решения, когда нет данных. Методики для повседневных ситуаций и бизнес-задач.",
    price: "790 ₽",
    tags: ["Теория игр", "PDF", "Базовая практика"],
  },
  {
    title: "Решения под давлением",
    category: "Продвинутый",
    description:
      "Методики для кризисов и переговоров. Как сохранять хладнокровие и находить лучшие варианты.",
    price: "1 290 ₽",
    tags: ["Кризисное мышление", "Чек-листы", "Бонусы"],
  },
  {
    title: "Управление рисками",
    category: "Специализированный",
    description:
      "Оценка вероятностей и минимизация потерь. Инструменты для инвесторов и предпринимателей.",
    price: "1 790 ₽",
    tags: ["Вероятности", "EV-модель", "Кейсы"],
  },
  {
    title: "Психология контроля",
    category: "Прикладной",
    description:
      "Работа с импульсами и когнитивными искажениями. Как не поддаваться эмоциям в важные моменты.",
    price: "990 ₽",
    tags: ["Когнитивные ловушки", "Самоконтроль", "Упражнения"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши курсы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Выберите курс под вашу задачу — от базовых методик до профессиональных инструментов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">от {project.price}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button size="sm" className="w-full group/btn" asChild>
                  <a href="#pricing">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
