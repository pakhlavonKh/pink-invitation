
import coupleHero from "@/assets/couple-hero.jpg";
import locationImg from "@/assets/location.jpg";

function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100 overflow-hidden">
      {/* Decorative shapes or SVGs can be added here for more style */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Floating pink hearts */}
        <svg className="absolute animate-float-slow left-[10%] top-[15%] w-16 h-16" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5 2.5C21.0147 2.5 18.7616 3.94643 17.5 6.02941C16.2384 3.94643 13.9853 2.5 11.5 2.5C7.35786 2.5 4 5.85786 4 10C4 18.5 17.5 26.5 17.5 26.5C17.5 26.5 31 18.5 31 10C31 5.85786 27.6421 2.5 23.5 2.5Z" fill="#f472b6"/>
        </svg>
        <svg className="absolute animate-float-fast right-[12%] top-[25%] w-10 h-10 opacity-80" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5 2.5C21.0147 2.5 18.7616 3.94643 17.5 6.02941C16.2384 3.94643 13.9853 2.5 11.5 2.5C7.35786 2.5 4 5.85786 4 10C4 18.5 17.5 26.5 17.5 26.5C17.5 26.5 31 18.5 31 10C31 5.85786 27.6421 2.5 23.5 2.5Z" fill="#f472b6"/>
        </svg>
        <svg className="absolute animate-float-medium left-[25%] bottom-[18%] w-12 h-12 opacity-70" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5 2.5C21.0147 2.5 18.7616 3.94643 17.5 6.02941C16.2384 3.94643 13.9853 2.5 11.5 2.5C7.35786 2.5 4 5.85786 4 10C4 18.5 17.5 26.5 17.5 26.5C17.5 26.5 31 18.5 31 10C31 5.85786 27.6421 2.5 23.5 2.5Z" fill="#f472b6"/>
        </svg>
        <svg className="absolute animate-float-slow right-[20%] bottom-[10%] w-14 h-14 opacity-60" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5 2.5C21.0147 2.5 18.7616 3.94643 17.5 6.02941C16.2384 3.94643 13.9853 2.5 11.5 2.5C7.35786 2.5 4 5.85786 4 10C4 18.5 17.5 26.5 17.5 26.5C17.5 26.5 31 18.5 31 10C31 5.85786 27.6421 2.5 23.5 2.5Z" fill="#f472b6"/>
        </svg>
        {/* 4 more hearts */}
        <svg className="absolute animate-float-fast left-[40%] top-[10%] w-8 h-8 opacity-70" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5 2.5C21.0147 2.5 18.7616 3.94643 17.5 6.02941C16.2384 3.94643 13.9853 2.5 11.5 2.5C7.35786 2.5 4 5.85786 4 10C4 18.5 17.5 26.5 17.5 26.5C17.5 26.5 31 18.5 31 10C31 5.85786 27.6421 2.5 23.5 2.5Z" fill="#f472b6"/>
        </svg>
        <svg className="absolute animate-float-medium right-[30%] top-[5%] w-9 h-9 opacity-60" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5 2.5C21.0147 2.5 18.7616 3.94643 17.5 6.02941C16.2384 3.94643 13.9853 2.5 11.5 2.5C7.35786 2.5 4 5.85786 4 10C4 18.5 17.5 26.5 17.5 26.5C17.5 26.5 31 18.5 31 10C31 5.85786 27.6421 2.5 23.5 2.5Z" fill="#f472b6"/>
        </svg>
        <svg className="absolute animate-float-slow left-[15%] bottom-[8%] w-11 h-11 opacity-50" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5 2.5C21.0147 2.5 18.7616 3.94643 17.5 6.02941C16.2384 3.94643 13.9853 2.5 11.5 2.5C7.35786 2.5 4 5.85786 4 10C4 18.5 17.5 26.5 17.5 26.5C17.5 26.5 31 18.5 31 10C31 5.85786 27.6421 2.5 23.5 2.5Z" fill="#f472b6"/>
        </svg>
        <svg className="absolute animate-float-fast right-[8%] bottom-[20%] w-7 h-7 opacity-50" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5 2.5C21.0147 2.5 18.7616 3.94643 17.5 6.02941C16.2384 3.94643 13.9853 2.5 11.5 2.5C7.35786 2.5 4 5.85786 4 10C4 18.5 17.5 26.5 17.5 26.5C17.5 26.5 31 18.5 31 10C31 5.85786 27.6421 2.5 23.5 2.5Z" fill="#f472b6"/>
        </svg>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-gray-900 leading-none font-script text-[clamp(4rem,8vw,7rem)] drop-shadow-lg">Barbara</h1>
        <p className="text-gray-700 text-3xl my-2 font-script">&</p>
        <h1 className="text-gray-900 leading-none font-script text-[clamp(4rem,8vw,7rem)] drop-shadow-lg">Dilan</h1>
        <p className="mt-6 text-gray-700 tracking-[0.35em] uppercase text-sm">20 July 2025</p>
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
