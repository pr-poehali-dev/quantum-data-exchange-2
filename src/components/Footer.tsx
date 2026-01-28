import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AXIOM</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Информационно-консультационные и аналитические услуги<br />
              ИП Павлушко Владислав Сергеевич<br />
              ХМАО, г. Нижневартовск<br />
              2025 AXIOM. Все права защищены.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Наш подход
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#formats" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Форматы
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Стоимость
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Документы</h4>
            <ul className="space-y-2">
              <li>
                <a href="#oferta" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Оферта
                </a>
              </li>
              <li>
                <a href="#policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                ИНН: по запросу
              </li>
              <li className="text-sm text-muted-foreground">
                УСН «Доходы» 1%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}