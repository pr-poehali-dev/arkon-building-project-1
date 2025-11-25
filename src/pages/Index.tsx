import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("main");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: "Ruler",
      title: "Проектирование",
      description: "Разработка архитектурных и конструктивных решений с применением BIM-технологий"
    },
    {
      icon: "Building2",
      title: "Строительство",
      description: "Возведение объектов гражданского и промышленного назначения под ключ"
    },
    {
      icon: "MapPin",
      title: "Изыскания",
      description: "Инженерно-геологические и геодезические изыскания для строительства"
    },
    {
      icon: "Zap",
      title: "Инженерные сети",
      description: "Проектирование и монтаж всех видов инженерных коммуникаций"
    }
  ];

  const projects = [
    {
      title: "ЖК «Северный»",
      category: "Жилой комплекс",
      area: "45 000 м²",
      year: "2023"
    },
    {
      title: "Производственный корпус",
      category: "Промышленное здание",
      area: "12 000 м²",
      year: "2023"
    },
    {
      title: "Бизнес-центр «Атлант»",
      category: "Офисное здание",
      area: "8 500 м²",
      year: "2022"
    }
  ];

  const stats = [
    { value: "15+", label: "Лет на рынке" },
    { value: "200+", label: "Реализованных проектов" },
    { value: "500+", label: "Специалистов" },
    { value: "2М+", label: "м² построено" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">А</span>
              </div>
              <span className="text-2xl font-bold text-secondary">АРКОН</span>
            </div>
            <div className="hidden md:flex gap-8">
              {[
                { id: "main", label: "Главная" },
                { id: "about", label: "О компании" },
                { id: "services", label: "Услуги" },
                { id: "projects", label: "Проекты" },
                { id: "career", label: "Карьера" },
                { id: "contacts", label: "Контакты" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="hidden md:block">Оставить заявку</Button>
          </div>
        </div>
      </nav>

      <section id="main" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
              <span className="text-primary font-semibold text-sm">Строим будущее с 2008 года</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-secondary mb-6 leading-tight animate-fade-in">
              Инженерные решения<br />полного цикла
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in">
              Проектируем и строим объекты любой сложности — от жилых комплексов до промышленных предприятий
            </p>
            <div className="flex gap-4 animate-fade-in">
              <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection("contacts")}>
                <Icon name="Phone" className="mr-2" size={20} />
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection("projects")}>
                Наши проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">О компании</div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Строим с умом и точностью
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                АРКОН — это команда профессионалов с 15-летним опытом в строительной индустрии. Мы специализируемся на комплексной реализации проектов: от инженерных изысканий до сдачи объекта под ключ.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Наш подход основан на применении передовых технологий проектирования (BIM), строгом контроле качества на всех этапах и соблюдении сроков строительства.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">СРО и лицензии</div>
                    <div className="text-sm text-muted-foreground">Все необходимые допуски</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">ISO сертификация</div>
                    <div className="text-sm text-muted-foreground">Контроль качества</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Услуги</div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Полный цикл строительства
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              От концепции до реализации — обеспечиваем комплексный подход к каждому проекту
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary/20">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={service.icon} className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Проекты</div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Реализованные объекты
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/30 to-accent/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/60 group-hover:bg-secondary/40 transition-all"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-semibold opacity-80">{project.category}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-4">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Maximize" size={16} />
                      {project.area}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      {project.year}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="career" className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Карьера</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Присоединяйтесь к команде профессионалов
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Ищем талантливых инженеров, архитекторов и строителей для работы над масштабными проектами
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-white/5 border-white/10 text-left">
                <Icon name="TrendingUp" className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Развитие</h3>
                <p className="text-white/70">Обучение и карьерный рост в компании</p>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10 text-left">
                <Icon name="Users" className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Команда</h3>
                <p className="text-white/70">Работа с лучшими специалистами отрасли</p>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10 text-left">
                <Icon name="Award" className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Проекты</h3>
                <p className="text-white/70">Участие в масштабных строительных проектах</p>
              </Card>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Mail" className="mr-2" size={20} />
              Отправить резюме
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Контакты</div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Обсудим ваш проект
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Оставьте заявку, и наш специалист свяжется с вами для обсуждения деталей
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">info@arkon-build.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Строителей, д. 15</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input type="email" placeholder="ivan@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте" rows={4} />
                </div>
                <Button className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">А</span>
                </div>
                <span className="text-xl font-bold">АРКОН</span>
              </div>
              <p className="text-white/70 text-sm">
                Строительная компания полного цикла
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Проектирование</li>
                <li>Строительство</li>
                <li>Изыскания</li>
                <li>Инженерные сети</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>О компании</li>
                <li>Проекты</li>
                <li>Карьера</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@arkon-build.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            © 2024 АРКОН. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
