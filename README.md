# Dövlət müəsisələri üçün vahid web sayt şablonu

WCAG təlimatlarına uyğun şəkildə hazırlanmış, dövlət müəsisələri üçün nəzərdə tutulmuş vahid web sayt şablonu.

## Prereqvizitlər

Saytı development mühitində işlətmək, SASS fayllarını build etmək və sayta baxa bilmək üçün, sisteminizdə [NodeJS](https://nodejs.org/en/) quraşdırılmış olmalıdır.

## Təlimatlar

İlk öncə dependency-lər yüklənməlidir: `npm install`.

Saty development mühitində işlətmək üçün `npm start` komandasını işə salın.

SASS fayllarını build etmək üçün `npm run build:css` komandasını işə salın.

## Deployment

Production mühitində sadəcə static HTML, CSS və JavaScript fayllarını serve edə bilən Apache HTTP Server və ya Nginx kimi web serverə ehtiyacınız var.
