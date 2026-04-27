/**
 * sample voice notes that drive the live preview. each one is a short clip in
 * a different language, with a tl;dr the bot would surface back to the user.
 */
export type TranscriptSample = {
  flag: string;
  confidence: number;
  duration: string;
  text: string;
  tldr: string;
};

export const TRANSCRIPT_SAMPLES: Record<string, TranscriptSample> = {
  Português: {
    flag: "🇧🇷",
    confidence: 98,
    duration: "0:34",
    text: "Oi! Só pra te avisar que o voo atrasou uma hora, então vou chegar tipo nove e meia. Se quiser, janta sem mim e me guarda um prato. Te amo, até mais!",
    tldr: "Flight delayed an hour — arriving ~9:30. Eat without them, save a plate.",
  },
  Español: {
    flag: "🇪🇸",
    confidence: 99,
    duration: "0:22",
    text: "Hola cariño, oye al final sí podemos ir a cenar el sábado con mis padres, pero habría que salir antes porque mi madre quiere pasar por la tienda primero.",
    tldr: "Saturday dinner with parents is on — leave earlier to stop at the store.",
  },
  हिन्दी: {
    flag: "🇮🇳",
    confidence: 96,
    duration: "0:18",
    text: "अरे सुनो, कल की मीटिंग थोड़ी देर से शुरू होगी, करीब दस बजे। और प्लीज़ वो फाइल लेकर आना जो मैंने कल भेजी थी।",
    tldr: "Tomorrow's meeting pushed to ~10am — bring yesterday's file.",
  },
  العربية: {
    flag: "🇸🇦",
    confidence: 95,
    duration: "0:12",
    text: "مرحبا حبيبي، وصلت البيت ونسيت المفتاح في السيارة. ممكن تمر عليّ وتجيبه لو سمحت؟ شكرا.",
    tldr: "Home without keys — left them in the car. Please bring them.",
  },
  中文: {
    flag: "🇨🇳",
    confidence: 97,
    duration: "0:15",
    text: "喂，我刚刚到机场了，但是我的行李还没出来，可能还要等二十分钟，你先去吃饭吧，不用等我。",
    tldr: "Just landed — luggage delayed ~20 min. Go eat, don't wait.",
  },
  Français: {
    flag: "🇫🇷",
    confidence: 98,
    duration: "0:14",
    text: "Salut, dis donc, j'ai oublié de te dire que demain je peux pas te récupérer au boulot, j'ai un rendez‑vous chez le dentiste. Tu peux prendre le bus?",
    tldr: "Can't pick you up tomorrow — dentist. Take the bus.",
  },
};

export const LANGUAGE_PILLS = [
  "🇺🇸 English",
  "🇪🇸 Español",
  "🇫🇷 Français",
  "🇩🇪 Deutsch",
  "🇧🇷 Português",
  "🇮🇹 Italiano",
  "🇳🇱 Nederlands",
  "🇵🇱 Polski",
  "🇷🇺 Русский",
  "🇹🇷 Türkçe",
  "🇸🇦 العربية",
  "🇮🇳 हिन्दी",
  "🇨🇳 中文",
  "🇯🇵 日本語",
  "🇰🇷 한국어",
  "🇸🇪 Svenska",
  "🇳🇴 Norsk",
  "🇮🇩 Bahasa",
  "🇻🇳 Tiếng Việt",
  "🇹🇭 ไทย",
  "🇬🇷 Ελληνικά",
  "🇭🇺 Magyar",
  "🇨🇿 Čeština",
  "🇺🇦 Українська",
  "+ 24 more",
];
