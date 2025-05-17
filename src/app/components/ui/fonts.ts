import { Ovo, Merriweather, Lora, Inter, Nunito_Sans, Lato, Outfit, Noto_Sans, Newsreader, 
    Radley, STIX_Two_Text, Libre_Franklin, Open_Sans, Chonburi } from 'next/font/google';

const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"]
});

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["300", "400", "700"]
});

const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "500"]
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500"]
});

const nunito_sans = Nunito_Sans({
    subsets: ["latin"],
    weight: ["300", "400"]
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400"]
});

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400"]
});

const noto_sans = Noto_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500"]
});

const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ["300", "400"]
});

const radley = Radley({
    subsets: ["latin"],
    weight: ["400"]
});

const stix = STIX_Two_Text({
    subsets: ["latin"],
    weight: ["400", "700"]
});

const libre_franklin = Libre_Franklin({
    subsets: ["latin"],
    weight: ["300", "400", "500"]
});

const open_sans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400"]
});

const chonburi = Chonburi({
    subsets: ["latin"],
    weight: ["400"]
})

export const fonts = {
    ovo: ovo.className,
    merriweather: merriweather.className,
    lora: lora.className,
    inter: inter.className,
    nunito_sans: nunito_sans.className,
    lato: lato.className,
    outfit: outfit.className,
    noto_sans: noto_sans.className,
    newsreader: newsreader.className,
    radley: radley.className,
    stix: stix.className,
    libre_franklin: libre_franklin.className,
    open_sans: open_sans.className,
    chonburi: chonburi.className
}