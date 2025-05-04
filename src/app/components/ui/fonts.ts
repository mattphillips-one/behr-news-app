import { Ovo, Merriweather, Lora, Inter, Nunito_Sans, Lato, Outfit, Noto_Sans } from 'next/font/google';

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
    weight: ["300", "400"]
});

export const fonts = {
    ovo: ovo.className,
    merriweather: merriweather.className,
    lora: lora.className,
    inter: inter.className,
    nunito_sans: nunito_sans.className,
    lato: lato.className,
    outfit: outfit.className,
    noto_sans: noto_sans.className
}