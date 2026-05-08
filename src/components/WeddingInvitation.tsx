
import coupleHero from "@/assets/couple-hero.jpg";
import locationImg from "@/assets/location.jpg";

function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${coupleHero})`,
        }}
      />

      {/* Atmospheric Overlays - Layered for Cinematic Effect */}
      
      {/* Dark warm overlay base */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Warm golden-brown gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-amber-900/30 to-amber-950/50" />
      
      {/* Warm vignette edges */}
      <div className="absolute inset-0 bg-radial-vignette opacity-40" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 100%)'
      }} />
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2"/%3E%3C/filter%3E%3Crect width="400" height="400" fill="%23000" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
        backgroundSize: '400px 400px'
      }} />

      {/* Radial glow behind text - golden */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-200/10 via-orange-300/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Elegant floating leaves - minimal and refined */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Leaf 1 - top left */}
        <svg className="absolute animate-float-slow left-[8%] top-[12%] w-12 h-12 opacity-40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5C50 5 35 20 35 40C35 55 40 65 50 70C60 65 65 55 65 40C65 20 50 5 50 5Z" fill="#d4a574" opacity="0.7"/>
          <path d="M50 15C50 15 45 22 45 32C45 40 48 45 50 48C52 45 55 40 55 32C55 22 50 15 50 15Z" stroke="#8b6f47" strokeWidth="0.5"/>
        </svg>

        {/* Leaf 2 - right side */}
        <svg className="absolute animate-float-medium right-[10%] top-[20%] w-10 h-10 opacity-35" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5C50 5 35 20 35 40C35 55 40 65 50 70C60 65 65 55 65 40C65 20 50 5 50 5Z" fill="#c9975d" opacity="0.6"/>
          <path d="M50 15C50 15 45 22 45 32C45 40 48 45 50 48C52 45 55 40 55 32C55 22 50 15 50 15Z" stroke="#8b6f47" strokeWidth="0.5"/>
        </svg>

        {/* Leaf 3 - bottom left */}
        <svg className="absolute animate-float-fast left-[12%] bottom-[15%] w-11 h-11 opacity-30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5C50 5 35 20 35 40C35 55 40 65 50 70C60 65 65 55 65 40C65 20 50 5 50 5Z" fill="#d4a574" opacity="0.5"/>
          <path d="M50 15C50 15 45 22 45 32C45 40 48 45 50 48C52 45 55 40 55 32C55 22 50 15 50 15Z" stroke="#8b6f47" strokeWidth="0.5"/>
        </svg>

        {/* Leaf 4 - right bottom */}
        <svg className="absolute animate-float-slow right-[15%] bottom-[12%] w-9 h-9 opacity-25" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5C50 5 35 20 35 40C35 55 40 65 50 70C60 65 65 55 65 40C65 20 50 5 50 5Z" fill="#c9975d" opacity="0.4"/>
          <path d="M50 15C50 15 45 22 45 32C45 40 48 45 50 48C52 45 55 40 55 32C55 22 50 15 50 15Z" stroke="#8b6f47" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* Foreground blur glow elements for depth */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-amber-900/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-radial from-orange-800/3 to-transparent blur-3xl pointer-events-none" />

      {/* Main Content - Premium Editorial Composition */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Top spacing for cinematic composition */}
        <div className="mb-4" />

        {/* Bride Name - Editorial Scale */}
        <h1 className="text-white leading-none font-script text-[clamp(3.5rem,10vw,8rem)] drop-shadow-2xl tracking-wider">
          Александра
        </h1>

        {/* Elegant decorative divider */}
        <div className="my-4 sm:my-6 flex items-center gap-3 opacity-80">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-100" />
          <span className="text-white text-2xl font-script leading-none">&</span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-100" />
        </div>

        {/* Groom Name - Editorial Scale */}
        <h1 className="text-white leading-none font-script text-[clamp(3.5rem,10vw,8rem)] drop-shadow-2xl tracking-wider mb-6">
          Максим
        </h1>

        {/* Small elegant metadata */}
        <div className="space-y-2 text-amber-50 tracking-[0.2em] text-xs sm:text-sm">
          <p className="uppercase opacity-90">20 July 2025</p>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-100 to-transparent mx-auto opacity-60" />
        </div>
      </div>
    </section>
  );
}
// ...existing code...

function GreetingSection() {
  return (
    <section className="py-20 px-6 text-center max-w-3xl mx-auto">
      <h2 className="uppercase tracking-[0.3em] text-sm mb-6">
        Дорогие друзья и родные
      </h2>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Мы будем рады видеть Вас в кругу наших гостей
      </p>
    </section>
  );
}
// ...existing code...

function LocationSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src={locationImg}
          alt="Location"
          className="w-full h-[350px] object-cover rounded-xl"
        />

        <div>
          <h2 className="uppercase tracking-[0.3em] mb-4">Location</h2>
          <p className="text-muted-foreground mb-2">Банкетный зал</p>
          <p className="text-muted-foreground">
            Подробности будут доступны после подтверждения участия
          </p>
        </div>
      </div>
    </section>
  );
}

function DressCodeSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="uppercase tracking-[0.35em] mb-6">Dress Code</h2>
        <p className="text-muted-foreground mb-6">Банкетный вид</p>
        <p className="text-muted-foreground mb-10">Мы будем признательны, если Вы придержитесь цветовой гаммы</p>
        <p className="uppercase tracking-[0.25em] mb-6">Total Black</p>
        <div className="flex justify-center gap-4">
          <div className="w-10 h-10 rounded-full bg-black" />
          <div className="w-10 h-10 rounded-full bg-zinc-800" />
          <div className="w-10 h-10 rounded-full bg-zinc-600" />
        </div>
      </div>
    </section>
  );
}
  // ...existing code...

const schedule = [
  { time: "15:30", title: "Сбор гостей" },
  { time: "16:00", title: "Церемония" },
  { time: "17:30", title: "Ужин" },
  { time: "23:30", title: "Завершение" },
];

function TimingSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="uppercase tracking-[0.35em] mb-16">Timing</h2>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {schedule.map((item, i) => (
              <div key={i} className="relative flex items-center justify-between">
                {/* left */}
                <div className="w-1/2 pr-8 text-right">
                  <p className="text-lg font-semibold">{item.time}</p>
                </div>

                {/* dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-foreground bg-background" />

                {/* right */}
                <div className="w-1/2 pl-8 text-left">
                  <p className="text-muted-foreground">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RSVPSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="uppercase tracking-[0.3em] mb-6">RSVP</h2>

        <p className="text-muted-foreground mb-8">
          Пожалуйста, подтвердите ваше присутствие
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full border px-4 py-3 rounded-md"
          />

          <select className="w-full border px-4 py-3 rounded-md">
            <option>Буду присутствовать</option>
            <option>Не смогу прийти</option>
          </select>

          <button className="w-full bg-black text-white py-3 rounded-md hover:opacity-90">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section className="py-16 text-center">
      <p className="font-script text-3xl">С любовью</p>
      <p className="font-script text-5xl mt-2">B & D</p>
    </section>
  );
}

export default function WeddingInvitation() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <GreetingSection />
      <LocationSection />
      <DressCodeSection />
      <TimingSection />
      <RSVPSection />
      <Footer />
    </div>
  );
}
