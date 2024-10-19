import { SemesterData } from "@/resources/SemesterData.type";

export const semesters: SemesterData[] = [
  {
    nameOfSemester: "2023/24 letni",
    classes: [
      {
        nameOfClass: "(Pracownia) Kurs: React",
        type: "laboratory",
        averagePrepTime: {
          overTwoDays: 0,
          twoDays: 3,
          oneDay: 12,
          twoHours: 3,
          lessThanHour: 1,
        },
        lectureHelpful: {
          definitelyNot: 0,
          probablyNot: 0,
          unsure: 1,
          probably: 3,
          definitely: 15,
        },
        lecturerHelpful: {
          definitelyNot: 0,
          probablyNot: 1,
          unsure: 0,
          probably: 1,
          definitely: 17,
        },
        technicalSolutions: {
          bad: 0,
          average: 1,
          good: 2,
          veryGood: 16,
        },
        technicalSolutionTestimonials: [
          {
            text: "Repo na GitHubie z materiałami z wykładu i z zadaniami zbazowane.",
            highlighted: false,
          },
          {
            text: "Świetne githubowe materiały i mimo, że nie trzeba było przychodzić stacjonarnie na oddanie pracowni to i tak to robiłem, bo ilekroć wychodziłem z zajęć odczuwałem jakąś wartość dodaną z tej obecności.",
            highlighted: true,
          },
        ],
        generalTestimonials: [
          {
            text: "Bardzo dobre zajęcia pod względem merytorycznym. Pozwoliły nie tylko opanować framework, ale też zrozumieć sposób myślenia współczesnego programisty FE.",
            highlighted: true,
          },
        ],
      },
      {
        nameOfClass: "(Wykład) Kurs: React",
        type: "lecture",
        lectureAttendance: {
          none: 5,
          rarely: 8,
          irregularly: 6,
          regularly: 12,
        },
        finalPrepTime: {
          overTwoWeeks: 0,
          week: 0,
          severalDays: 1,
          oneDay: 2,
          none: 28,
        },
        wouldRecommendLecture: {
          definitelyNot: 1,
          probablyNot: 1,
          unsure: 1,
          probably: 12,
          definitely: 16,
        },
        wouldRecommendLecturer: {
          definitelyNot: 1,
          probablyNot: 0,
          unsure: 3,
          probably: 8,
          definitely: 19,
        },
        ectsFeedback: {
          "+3": 0,
          "+2": 1,
          "+1": 3,
          "0": 27,
          "-1": 0,
          "-2": 0,
        },
        technicalSolutions: {
          bad: 0,
          average: 1,
          good: 11,
          veryGood: 18,
        },
        technicalSolutionTestimonials: [
          {
            text: "Trochę długie do ogarnięcia listy, robiłem je około 6-7h z pomocą gpt4, który generował mi dość dużo boilerplatu oraz pomagał rozwiązywać problemy, które normalnie musiałbym szukać w dokumentacji. Samemu poświęcałbym grubo ponad 10h na listę, co jest już raczej trochę dużą liczbą jak na przedmiot za 5 ECTS. Also niektóre listy były mozolne i denerwujące do robienia - np. refactoring css na tailwinda, to był po prostu ból i cierpienie, ale tak poza tym to generalnie mega spoko przedmiot. Przed nim nie miałem żadnej wiedzy z frontendu oprócz jakiegoś podstawowego HTML i CSS, a po przedmiocie frontend wydaje się ciekawy i raczej nie będę go dłużej unikał. Bardzo na plus, że dostajemy zadania które można sobie wrzucić do portfolio i użyć w potencjalnej rekrutacji do pracy, szkoda, że nie ma tego na większej ilości przedmiotów typu kurs.",
            highlighted: false,
          },
          {
            text: "Najlepsza organizacja ze wszystkich przedmiotów - repo na githubie i discord na którym można pytać się ćwiczeniowców/wykładowcy i uzyskać odpowiedź w minutę.",
            highlighted: true,
          },
          {
            text: "Progi punktowe zostały zaktualizowane bardzo późno i jedyne po czym będę pamiętał ten przedmiot to prześladująca mnie myśl, że muszę zrobić jeszcze jedną listę, chociaż miałem większość możliwych do uzbierania punktów. Ta stronka, codesandbox, była straszna, dlaczego nie mogliśmy od razu przejść do vite?",
            highlighted: false,
          },
          {
            text: "Wykłady i listy ćwiczeń na githubie to dobry pomysł, nie wiem czemu inne przedmioty tak nie robią.",
            highlighted: false,
          },
          {
            text: "Bardzo fajnie poprowadzony przedmiot. Pomógł mi się pozbyć kilku 'złych praktyk' z mojego reactowego warsztatu i rozszerzył wiedzę o frontendowych frameworkach. Oprócz tego bardzo dobre materiały wykładowe na githubie prowadzącego.",
            highlighted: true,
          },
        ],
        generalTestimonials: [
          {
            text: "Uważam, że prowadzący jest w stanie lepiej przygotować niektóre wykłady tak, aby nie opierały się na czytaniu dokumentacji a na jakimś jej opracowaniu (z linkami do źródła).",
            highlighted: false,
          },
          {
            text: "Przedmioty Kamila jak zwykle prowadzone z rigczem, chyba najprzydatniejsze kursy.",
            highlighted: true,
          },
          {
            text: "Moim zdaniem trochę za dużo wgłębialiśmy się w stylowanie, dużo bardziej interesowałoby mnie więcej 'mięsa' w Reactcie. Najgorzej wspominam refactoring kodu AI, co było mało przyjemne (chyba lepszym pomysłem byłby refactoring mojego własnego kodu).",
            highlighted: false,
          },
          {
            text: "Świetny kurs, bardzo dużo się nauczyłam :) dużo pokazanych możliwości Reacta, bibliotek, praktyczne podejście, ciekawe listy zadań. Przedmiot, który w końcu przekonał mnie do frontendu, a to było wyzwanie. Interesujący mógłby być projekt końcowy, wymagający np. dołączenia prostego backendu z użyciem Next.js, ale z drugiej strony czyniłoby to przedmiot bardziej czasochłonny, więc zostawiam to jako luźny pomysł.",
            highlighted: true,
          },
          {
            text: "Kurs bardzo dobrze pomaga zacząć swoją przygodę z Reactem, dodatkowo widać doświadczenie prowadzących, którzy zawsze byli w stanie dogłębnie odpowiedzieć na pytania. Niestety te kilka wykładów typu 'czytanie dokumentacji' bardzo mi się nie podobało, uważam też że powinny one odbyć się dopiero na samym końcu, a nie pomiędzy wykładami omawiającymi samego Reacta (czyli moim zdaniem tej ważniejszej części kursu).",
            highlighted: false,
          },
          {
            text: "Jeden z lepszych przedmiotów praktycznych, w końcu zrozumiałem jak działa React.",
            highlighted: true,
          },
          {
            text: "Naprawdę fajne listy zadań - krok po kroku zwiększały trudność, każda miała sens, wiedzę zdobytą na jednej liście szło wykorzystać na następnej - widać, że prowadzący świetnie przemyślał plan zagadnień :)",
            highlighted: true,
          },
        ],
      },
    ],
  },
  {
    nameOfSemester: "2023/24 zimowy",
    classes: [
      {
        nameOfClass:
          "Seminarium: Współczesne narzędzia do wytwarzania aplikacji webowych",
        type: "seminar",
        averagePrepTime: {
          overTwoDays: 0,
          twoDays: 0,
          oneDay: 4,
          twoHours: 2,
          lessThanHour: 7,
        },
        lectureHelpful: {
          definitelyNot: 0,
          probablyNot: 0,
          unsure: 2,
          probably: 5,
          definitely: 6,
        },
        lecturerHelpful: {
          definitelyNot: 0,
          probablyNot: 0,
          unsure: 0,
          probably: 6,
          definitely: 7,
        },
        technicalSolutions: {
          bad: 0,
          average: 0,
          good: 6,
          veryGood: 6,
        },
        technicalSolutionTestimonials: [],
        generalTestimonials: [
          {
            text: "Podoba mi się styl prowadzenia zajęć. Dyskusje pod koniec każdych zajęć bardzo poszerzały wyobrażenie na temat obecnych trendów w technologiach webowych.",
            highlighted: true,
          },
          {
            text: "Bardzo pouczające seminarium, poruszaną tematykę oceniłbym jako przydatną, szczególnie poza ramami uczelni. Uważam, że każdy student powinien wziąć udział w owym seminarium, 10/10 - z chęcią uczestniczyłbym ponownie.",
            highlighted: true,
          },
          {
            text: "Moim zdaniem za dużo tematów, które są zwyczajnie frameworkami JS'a lub narzędziami do CSSa. Mogłaby być większa różnorodność typu jakieś narzędzia, które są używane do deployowania, skalowania i zarządzania aplikacjami webowymi (takie troche devopsowe rzeczy) i ich deploymentem, bo mam wrażenie, że są mocno używane w wielu firmach, a niezwykle rzadko wspominane na studiach. Te zajęcia byłyby dobrą okazją by o nich wspomnieć.",
            highlighted: false,
          },
          {
            text: "Mogłoby być albo mniej JavaScriptu, albo JavaScript w nazwie przedmiotu.",
            highlighted: false,
          },
          {
            text: "Generalnie super seminarium, temat bardzo fajny i mający dużo do czynienia z rzeczywistością na rynku pracy. Prowadzący kompetentny i obeznany w temacie. Jedynie prelegenci mogliby być czasem lepiej przygotowani, bo miałem wrażenie, że niektórzy opowiadali o jakimś frameworku, z którego nigdy de facto nie korzystali, ale to już leży po stronie studentów.",
            highlighted: false,
          },
        ],
      },
      {
        nameOfClass: "(Ćwiczenia) Logika dla informatyków",
        type: "exercises",
        averagePrepTime: {
          overTwoDays: 0,
          twoDays: 3,
          oneDay: 8,
          twoHours: 0,
          lessThanHour: 0,
        },
        lectureHelpful: {
          definitelyNot: 0,
          probablyNot: 2,
          unsure: 1,
          probably: 5,
          definitely: 3,
        },
        lecturerHelpful: {
          definitelyNot: 1,
          probablyNot: 0,
          unsure: 1,
          probably: 4,
          definitely: 5,
        },
        technicalSolutions: {
          bad: 0,
          average: 5,
          good: 3,
          veryGood: 3,
        },
        technicalSolutionTestimonials: [
          {
            text: "Jestem wdzięczny za brak grzyba",
            highlighted: false,
          },
        ],
        generalTestimonials: [
          {
            text: "Profesor Matuszewski świetnie prowadził zajęcia, trafne uwagi, istotne dygresję, brak stresującej atmosfery mimo stresującego charakteru przedmiotu. Nic do zarzucenia.",
            highlighted: true,
          },
          {
            text: "Matuszewski wykazuje znaczące zaangażowanie w proces dydaktyczny, demonstrując chęć przekazania wiedzy w przystępny sposób, co pozytywnie wpływa na jakość nauki <3 imo polecam.",
            highlighted: true,
          },
          {
            text: "Lubiłam zajęcia z Panem KaMatem, mimo że był wymagający pod względem dowodzenia (jak to na logice), Tier A prowadzących razem z BBe.",
            highlighted: false,
          },
          {
            text: "Te filmiki były zdecydowanie najbardziej przydatne, kiedy jeszcze obejmowały materiał deklarowałem po 4-5 zadań na listę, po tym jak się skończyły po 1-3 zadania, bardzo przydałaby się jakaś kontynuacja.",
            highlighted: false,
          },
          {
            text: "Każdy prowadzący oprócz bbe miał problemy z jakimś zadaniem przez co go nie zrozumiałem lub go wogole nie zrobiliśmy. Przydałyby się odpowiedzi do niektórych zadań bo byłaby większa motywacja żeby przeanalizować odpowiedź i zrobić samemu.",
            highlighted: false,
          },
          {
            text: "Pan Matuszewski tłumaczy dość dobrze choć przy późniejszych tematach tj. klasy abstrakcji czy też równoliczności miałem wrażenie że nie czuje się zbyt pewnie w tych zadaniach oraz że jeśli ktoś nie rozumie przed zajęciami to po zajęciach raczej też nie. Ale może mój pogląd jest lekko stronniczy gdyż po chociażby jednych zajęciach czy konsultacjach z BBe wszystkie inne objaśnienia zadań czy tematów wydają się nieprzekonujące.",
            highlighted: false,
          },
          {
            text: "Filmiki na Youtube, natomiast to podstawa nauki tego przedmiotu, gdyby ich nie było nikt by nic nie rozumiał. Priorytetem, według mnie, powinno być ich dokończenie, aby pokrywały cały materiał przedmiotu. Podsumowując, BBe>>>>>>>>. Bez niego nikt by nie zdał tego przedmiotu.",
            highlighted: false,
          },
          {
            text: "Podobał mi się sposób prowadzenia zajęć, nawet jeśli nie umiałem samemu czegoś zrobić to w większości przypadków po ćwiczeniach rozumiałem to lepiej. Prowadzący byli wymagający, ale w dobrym sensie, myślę, że nauczyłem się wiele dzięki temu.",
            highlighted: false,
          },
          {
            text: "Uważam że ćwiczenia powinny być do ćwiczenia nabytej wiedzy, od jej sprawdzania są kolokwia i egzaminy. Przez to jak ćwiczenia z tego przedmiotu były prowadzone bardzo brakowało mi analizowania rozwiązań które mi osobiście bardzo pomaga w nauce.",
            highlighted: false,
          },
        ],
      },
      {
        nameOfClass: "(Pracownia) Kurs: Wstęp do programowania w języku Python",
        type: "laboratory",
        averagePrepTime: {
          overTwoDays: 0,
          twoDays: 1,
          oneDay: 3,
          twoHours: 2,
          lessThanHour: 0,
        },
        lectureHelpful: {
          definitelyNot: 0,
          probablyNot: 0,
          unsure: 0,
          probably: 2,
          definitely: 4,
        },
        lecturerHelpful: {
          definitelyNot: 0,
          probablyNot: 0,
          unsure: 0,
          probably: 3,
          definitely: 3,
        },
        technicalSolutions: {
          bad: 0,
          average: 1,
          good: 3,
          veryGood: 2,
        },
        technicalSolutionTestimonials: [
          {
            text: "Brak sposobu sprawdzenia ile się ma punktów za ćwiczenia sprawiał niepotrzebny stres i niepewność, której nie było przy innych przedmiotach.",
            highlighted: false,
          },
        ],
        generalTestimonials: [
          {
            text: "Świetny prowadzący, bardzo dobrze tłumaczy, śmieszek. Jak rozmawiałem z ludźmi z innych grup i porównałem to chyba najbardziej zasadne wprawki xD Wymagały pomyślenia jak napisać coś krócej ładniej i po pythonowemu. Lekkie podejście do żółwia (i bardzo dobrze). Doceniam bardzo włożoną pracę i sorka za spóźnienia.",
            highlighted: true,
          },
          {
            text: "Prowadzący zajęcia mówił w trakcie sprawdzania kodu o prawidłowych praktykach programistycznych gdy występowały nie rzadko odstępstwa od standardów, rzecz na pewno na +",
            highlighted: true,
          },
          {
            text: "Prowadzący był bardzo pomocny",
            highlighted: false,
          },
        ],
      },
    ],
  },
  {
    nameOfSemester: "2022/23 zimowy",
    classes: [
      {
        nameOfClass: "(Wykład) Kurs: Tworzenie aplikacji frontendowych",
        type: "lecture",
        lectureAttendance: {
          none: 7,
          rarely: 6,
          irregularly: 14,
          regularly: 23,
        },
        finalPrepTime: {
          overTwoWeeks: 0,
          week: 0,
          severalDays: 1,
          oneDay: 4,
          none: 43,
        },
        wouldRecommendLecture: {
          definitelyNot: 1,
          probablyNot: 0,
          unsure: 0,
          probably: 12,
          definitely: 37,
        },
        wouldRecommendLecturer: {
          definitelyNot: 0,
          probablyNot: 2,
          unsure: 2,
          probably: 12,
          definitely: 34,
        },
        ectsFeedback: {
          "+3": 0,
          "+2": 0,
          "+1": 2,
          "0": 48,
          "-1": 0,
          "-2": 0,
        },
        technicalSolutions: {
          bad: 1,
          average: 1,
          good: 20,
          veryGood: 28,
        },
        technicalSolutionTestimonials: [
          {
            text: "Prowadzący zawsze był rzetelnie przygotowany.",
            highlighted: false,
          },
          {
            text: "Bardzo fajnym rozwiązaniem było umieszczanie linków do materiałów z treścią wykładu.",
            highlighted: false,
          },
          {
            text: "Fajnie gdyby wykład był prowadzony online - obecność studentów na sali była zbędna. Do przesyłanego kodu warto by dodać komentarze, które pomogłyby opanować materiał w razie nieobecności. Czasem listy zadań opierały się na Pokemonach, Eliksirach itd. osobom, które nie znają 'tego' świata, było ciężej rozwiązywać te listy (ale to tylko taka mała uwaga ;)).",
            highlighted: false,
          },
          {
            text: "Wykłady można by nagrywać / przeprowadzać zdalnie.",
            highlighted: false,
          },
          {
            text: "Kurs 'Tworzenie aplikacji frontendowych' to zdecydowanie jedne z najlepszych zajęć, na jakie miałam okazję uczęszczać. Podczas zajęć poznałam najnowsze trendy w projektowaniu i tworzeniu aplikacji frontendowych, co z pewnością przyczyni się do mojego rozwoju w tej dziedzinie. Kurs ten przeprowadzony został przez bardzo kompetentnego wykładowcę, który ma nie tylko ogromną wiedzę teoretyczną, ale również wiele lat doświadczenia w pracy praktycznej. Dzięki temu studenci mają okazję nie tylko zdobywać wiedzę, ale również nabywać umiejętności rozwiązywania rzeczywistych problemów oraz kształtowania dobrych nawyków. Wszystkie narzędzia i technologie używane w trakcie kursu są aktualne i odpowiednio dobrane do potrzeb rynku pracy, co zwiększa wartość tej wiedzy i umiejętności. Chciałabym podziękować Panu Kamilowi Matuszewskiemu za kompleksowe przeprowadzenie mnie przez ten przedmiot ze zrozumieniem. Udało mi się wyciągnąć naprawdę wiele. Wiem, że zdobyta przeze mnie wiedza i umiejętności przydadzą mi się w przyszłości.",
            highlighted: true,
          },
          {
            text: "Może po pierwszej edycji warto sporządzić jakieś notatki do wykładu? Tzn zawsze dostawaliśmy kod, który powstawał podczas wykładu i to jest ok, ale mam wrażenie, że czasami na sali padały jakieś cenne komentarze prowadzącego, których kod już nie uwieczniał.",
            highlighted: false,
          },
          {
            text: "Myślę, że lepszą opcją byłoby mniej czasu poświęcać na vanilla javascript i więcej na frameworki różne i narzędzia, z którymi się pracuje na codzień (npm, vitejs, webpack, react itp).",
            highlighted: false,
          },
          {
            text: "Było OK.",
            highlighted: false,
          },
          {
            text: "Dobrze poprowadzony wykład. Mógłby powstać do niego jakiś skrypt jak na WEPPO, ale zasadniczo materiały były dobre i dowiezione.",
            highlighted: false,
          },
        ],
        generalTestimonials: [
          {
            text: "Przedmiot mi się podobał. Co mi się podobało? Prowadzący był zawsze przygotowany, wykład szedł jakąś wyznaczoną ścieżką, która była sensowna. Widać było wiedzę Pana Matuszewskiego. Ogólnie przedmiot był o wiele bardziej ciekawy i o wiele więcej rzeczy się dowiedziałem niż na kursie WWW (wiem, że to trochę inne przedmioty, ale myśle, że na tyle bliskie, że takie porównanie jest trafne). Jeśli coś bym zmienił to zrobił bym z tego przedmiotu przedmiot trochę mniej ogólny, wydaje mi się że podejście typu: 'Poświęcę 10 minut mówiąc o innych rozwiązaniach, a potem 2h skupimy się na jednym i zrobimy z niego listę zadań' jest lepsze niż pokazywanie miliona różnych rozwiązań. Fajnie jakby na końcu były minimum 3 listy z Reacta.",
            highlighted: false,
          },
          {
            text: "Prowadzący wprowadził przyjazną i miłą atmosferę na zajęciach.",
            highlighted: true,
          },
          {
            text: "Szkoda, że ten prowadzący nie prowadzi więcej przedmiotów. Listy zadań były względnie łatwe, ale jednocześnie można było dużo przy nich nauczyć.",
            highlighted: false,
          },
          {
            text: "Bardzo fajny przedmiot - ciekawe treściwe wykłady - chętnie pójdę na inne powiązane od tego prowadzącego.",
            highlighted: false,
          },
          {
            text: "Listy były moim zdaniem trochę za długie i trochę nudne, ale to zapewne przez to, że to była pierwsza edycja tego przedmiotu, generalnie było okej.",
            highlighted: false,
          },
          {
            text: "Wykłady p. Matuszewskiego zrobiły na mnie bardzo dobre wrażenie, prowadzący dobrze opowiadał o tematach i zawsze był otwarty na pytania od publiczności. Kurs: Tworzenie aplikacji frontendowych to bardzo rzetelne overview rozwiązań frontendowych. Może przydałby się również podobny kurs, mówiący dogłębnie o jednym z omawianych rozwiązań, np. o reakcje.",
            highlighted: true,
          },
          {
            text: "Wydaje mi się, że pierwsze kilka wykładów można było skondensować, szczególnie wykłady o JS i np. zrzucić większą część na studentów, żebyśmy sami poszukali informacji. Na pracowniach i tak dostawaliśmy indywidualne uwagi, więc dostawalibyśmy feedback na temat tego co nauczyliśmy się sami. Druga połowa wykładu była już w OK tempie.",
            highlighted: false,
          },
          {
            text: "Jedyny wykład (od początku studiów), na który chodziłem z własnej woli.",
            highlighted: true,
          },
          {
            text: "Widać wiedzę prowadzącego. Wykłady były często przeciągane przez co przedmiot kończył się później niż powinien. Czasem nad oczywistymi rzeczami siedzieliśmy przez 20-30 minut aby potem tylko przelecieć te trudniejsze bo brakowało czasu. Dodatkowo prowadzący wciąż jest i udziela się na grupkach/chatach studenckich - nie powinno być takich sytuacji, inni prowadzący gdy zaczynali doktorat / prowadzenie zajęć byli wyrzucani / sami odchodzili z tym grup. Powinny być one tylko studenckie.",
            highlighted: false,
          },
          {
            text: "Materiały umieszczane na skosie były bardzo pomocne, w ogóle przedmiot całkiem sporo mnie nauczył i uporządkował wcześniejszą wiedzę. Brakowało takiego przedmiotu w ofercie.",
            highlighted: false,
          },
          {
            text: "Trochę za późno wykład, no ale rozumiem czemu mi się spać już chciało po innych zajęciach.",
            highlighted: false,
          },
          {
            text: "Pojawiłem się tylko na pierwszych 7 wykładach, potem nie przychodziłem bo wykłady były bardzo późno (o 18), a wczesniej miałem wraz z upływem semestru coraz większe okienka. Ale wtedy kiedy byłem na wykładach to mi się bardzo podobały, dawały bardzo dobre pojęcia o przerabianych rzeczach. Dobry flow wykładu, nie było nudno, bardzo responsywny wykładowca, odpisywał w przeciągu kilku minut na moje wątpliwości a propos materiału i list. Polecam każdemu ten przedmiot, bardzo zróżnicowana i przydatna tematyka.",
            highlighted: false,
          },
          {
            text: "Podobał mi się ten przedmiot, choć wolałbym, gdyby pierwsze tematy zostały pominięte i przedmiot zaczynał się od bardziej zaawansowanych tematów. Zasady zaliczania były zrozumiałe i uczciwe.",
            highlighted: false,
          },
          {
            text: "Super, że powstał przedmiot prowadzony przez kogoś, kto robi to na codzień w pracy, ale jednocześnie jest to nasz człowiek. Więc mówi nie tylko językiem ludzi korpo, ale też naszym językiem ;)",
            highlighted: true,
          },
          {
            text: "Ten przedmiot to było to, czego oczekiwałem od kursu WWW, a czego kurs WWW nie osiągnął nawet w 30%.",
            highlighted: true,
          },
          {
            text: "Średnio mi się widzą zajęcia po 18, zwłaszcza że dojeżdżam. Wszystko było spoko, dużo się nauczyłem mimo że temat mnie wcześniej wcale nie interesował, fajnie że na listach byliśmy prowadzeni krok po kroku - to bardzo ułatwiało naukę (podobna konwencja była na Machine Learningu i też było super).",
            highlighted: false,
          },
          {
            text: "Dobrze wykładany przedmiot.",
            highlighted: false,
          },
          {
            text: "Sam przedmiot na pewno ciekawy dla początkujących frontendowców. Wykłady bywały lepsze i gorsze, pracownie z reguły ciekawe (w szczególności Pokedex), ale bywały też żmudne (typescript). Gdyby nie presja innych przedmiotów a co za tym idzie więcej czasu na ten przedmiot, być może miałbym lepsze odczucia.",
            highlighted: false,
          },
          {
            text: "Bardzo przyjemny wykład, przejrzysty i zawierający większość informacji potrzebnych do zrobienia list.",
            highlighted: false,
          },
          {
            text: "Bardzo ciekawy zajęcia. Omawiają różne praktyczne tematy związane z faktyczną pracą programisty. Jeden z tych przedmiotów, które mogę śmiało polecać innym. Brakuje więcej tego typu przedmiotów. Dobry poziom prowadzenia zajęć.",
            highlighted: false,
          },
        ],
      },
      {
        nameOfClass: "(Pracownia) Kurs: Tworzenie aplikacji frontendowych",
        type: "laboratory",
        averagePrepTime: {
          overTwoDays: 0,
          twoDays: 3,
          oneDay: 17,
          twoHours: 5,
          lessThanHour: 0,
        },
        lectureHelpful: {
          definitelyNot: 0,
          probablyNot: 1,
          unsure: 0,
          probably: 4,
          definitely: 20,
        },
        lecturerHelpful: {
          definitelyNot: 0,
          probablyNot: 1,
          unsure: 1,
          probably: 3,
          definitely: 20,
        },
        technicalSolutions: {
          bad: 1,
          average: 1,
          good: 8,
          veryGood: 15,
        },
        technicalSolutionTestimonials: [
          {
            text: "Pracownie mogłyby być w pełni zdalne lub asynchroniczne. Dodatkowo jak już trzeba było przychodzić to mogła być jakaś lista godzinowa jak na innych przedmiotach z pracowniami - przychodzenie i czekanie na swoją kolej jest bez sensu",
            highlighted: false,
          },
          {
            text: "Zajęcia zdecydowanie powinny być prowadzone zdalnie.",
            highlighted: false,
          },
          {
            text: "Prowadzący, zawsze patrzył na kod i starał się podpowiedzieć co można poprawić. Prowadzący był pomocny i przygotowany do zajęć. Myśle, że te pracownie powinny wyglądać właśnie tak jak wyglądały.",
            highlighted: true,
          },
          {
            text: "Wrzucone na githuba listy w markdownie to tak dużo wygodniejsza opcja niż pdfy na skosie. Bardzo mi się to podobało",
            highlighted: false,
          },
          {
            text: "Zajęcia prowadzone przez tego ćwiczeniowca są bardzo dobrej jakości. Jestem bardzo zadowolona z tego, że miałam okazję uczestniczyć w jego zajęciach, ponieważ pozwoliły mi one na zdobycie bardzo wartościowej wiedzy. Ćwiczeniowiec ten jest bardzo kompetentny oraz potrafi bardzo jasno i zrozumiale tłumaczyć skomplikowane zagadnienia. Co więcej, szybko wyłapuje błędy, które popełniamy, i potrafi je skutecznie wyjaśnić.",
            highlighted: true,
          },
          {
            text: "Nie podobało mi się, że niektóre listy zadań zakładały zrobienie poprzednich. Poza tym miło się pracowało przy ich rozwiązywaniu i fajnie, że były na gh.",
            highlighted: false,
          },
        ],
        generalTestimonials: [
          {
            text: "Prowadzący cierpliwy, merytoryczny i przyjazny. Zadania na pracownie nie były bardzo trudne, ale wymagały nakładu czasu i opanowania materiału. Dodam, że treść zadania do zrobienia wraz z punktacją były świetnie przygotowane (i pewnie wymagały sporo wysiłku ze strony prowadzącego).",
            highlighted: true,
          },
          {
            text: "Dobre listy zadań",
            highlighted: false,
          },
          {
            text: "Bardzo dobrze prowadzony przedmiot. Wiedza była przekazana bardzo przystępnie.",
            highlighted: false,
          },
          {
            text: "Ciekawe listy zadań",
            highlighted: false,
          },
          {
            text: "Dobrze wykładany przedmiot.",
            highlighted: false,
          },
          {
            text: "Fajnie, że zadania nie były trudne i łatwo się było za nie zabrać, ale wymaksowanie listy wymagało doczytania paru rzeczy i zrozumienia jak coś działa i dlaczego. Właściwie jedynym, co przeszkadzało mi w tych pracowniach był czas, który zajmowały w porównaniu z tym, ile czasu trwało oddawanie zadań. Spoko byłaby możliwość oddawania zadań przez np 2-3 tygodnie, żeby móc oddać kilka za jednym razem.",
            highlighted: true,
          },
        ],
      },
    ],
  },
];
