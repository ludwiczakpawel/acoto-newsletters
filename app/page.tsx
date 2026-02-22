export default function Newsletter() {
  const events = [
    {
      id: 1,
      title: "Przedstawienie MYSZKI",
      emoji: "🐭",
      description:
        "Spektakl w wykonaniu Teatrzyku Pompon — pełen magii, humoru i interakcji z małą widownią. Dla dzieci od 1. roku życia.",
      date: "1 marca",
      day: "niedziela",
      time: "16:30",
    },
    {
      id: 2,
      title: "MINI Spa dla dziewczynek",
      emoji: "💅",
      description:
        "Z okazji Dnia Kobiet — wyjątkowe popołudnie pełne pielęgnacji, zabawy i dobrego nastroju. Dla dziewczynek w wieku 4–7 lat.",
      date: "6 marca",
      day: "piątek",
      time: "17:00",
    },
    {
      id: 3,
      title: "MAMY pytania. I dobrze.",
      emoji: "🗣️",
      description:
        "Pierwsze spotkanie z cyklu MAMY PYTANIA — logopedyczne SOS. Luźne rozmowy na dywanie dla rodziców i przyszłych rodziców z ekspertem. Bez oceniania, z kawą.",
      date: "9 marca",
      day: "poniedziałek",
      time: "12:00",
    },
    {
      id: 4,
      title: "KNOCK KNOCK · Warsztaty z majsterkowania",
      emoji: "🚜",
      description:
        "Zbudujemy razem koparkę! Warsztaty, podczas których dzieci własnoręcznie konstruują coś prawdziwego. Dla dzieci w wieku 2–6 lat.",
      date: "11 marca",
      day: "środa",
      time: "17:00",
    },
    {
      id: 5,
      title: "Chemiczne szaleństwo",
      emoji: "🧪",
      description:
        "Eksperymenty z Mama Pedagog Uczy — barwne reakcje, bąbelki i odkrycia naukowe dla ciekawskich. Dla dzieci w wieku 3–8 lat.",
      date: "19 marca",
      day: "czwartek",
      time: "17:00",
    },
    {
      id: 6,
      title: "Wielkanocne KOMPOZYCJE",
      emoji: "🌷",
      description:
        "Warsztaty florystyczne dla kobiet — stworzymy cudowne dekoracje na Wasze świąteczne stoły. Wieczór z kwiatami, rozmową i dobrą energią.",
      date: "20 marca",
      day: "piątek",
      time: "19:00",
    },
    {
      id: 7,
      title: "Bablanki",
      emoji: "👶",
      description:
        "Coś więcej niż zajęcia sensoryczne — czas dla Was i Waszego dziecka, pełen radości, kolorów i twórczego bałaganu. Dla dzieci 1,5–5 lat.",
      dates: ["14 marca · W wiosennym ogródku", "28 marca · Na łące"],
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Header */}
      <header className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-2">a co to</h1>
          <p className="text-xl opacity-90">kawa · zabawa</p>
        </div>
      </header>

      {/* Newsletter Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Co dzieje się u nas w marcu? 🌸
          </h2>
          <p className="text-lg text-dark mb-4">
            Wiosna puka do drzwi, a u nas pełno dobrego! Warsztaty, spektakle,
            spotkania dla dzieci i mam 🌿
          </p>
        </section>

        {/* Events Grid */}
        <section className="space-y-6 mb-12">
          {events.map((event) => (
            <article
              key={event.id}
              className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-accent hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">{event.emoji}</span>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {event.title}
                  </h3>
                  <p className="text-dark mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm font-semibold text-dark">
                    {event.dates ? (
                      event.dates.map((date, idx) => (
                        <span
                          key={idx}
                          className="bg-light px-3 py-1 rounded inline-block"
                        >
                          📅 {date}
                        </span>
                      ))
                    ) : (
                      <>
                        <span className="bg-light px-3 py-1 rounded">
                          📅 {event.date}
                        </span>
                        <span className="bg-light px-3 py-1 rounded">
                          {event.day}
                        </span>
                        <span className="bg-light px-3 py-1 rounded">
                          {event.time}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* CTA Section */}
        <section className="bg-accent text-white rounded-lg p-8 text-center mb-12">
          <p className="text-xl font-semibold mb-4">Zapisz się już dziś! ✨</p>
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Zapisz się →
          </button>
        </section>

        {/* Footer */}
        <footer className="text-center text-dark">
          <p className="font-bold text-lg mb-4">A Co To · kawa i zabawa</p>
          <div className="space-y-2 text-sm">
            <p>🏡 ul. Rzeczna 2, 62-030 Luboń</p>
            <p>📞 453 350 312</p>
            <p>✉️ lucy@acoto.ooo</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
