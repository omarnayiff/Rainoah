# Rainoah — Landing Powerflex GO

Landing page estática (Next.js + TypeScript + Tailwind) do produto **Powerflex GO** da marca **Rainoah**. Build 100% estático (`output: 'export'`) para hospedagem na Hostinger.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

## Gerar build estático

```bash
npm run build    # gera a pasta /out (pronta para a Hostinger)
```

## Onde trocar a URL do checkout

Ponto **único** de verdade: [`src/lib/config.ts`](src/lib/config.ts)

```ts
export const CHECKOUT_URL = "#checkout"; // <-- troque aqui
```

Todos os botões de compra usam essa constante. Mude em um só lugar e todos os CTAs são atualizados.
No mesmo arquivo também ficam: `CHECKOUT_TARGET` (`_self`/`_blank`), `SUPPORT_URL` (botão "Falar com suporte") e o cupom.

## Estrutura

```
src/
  app/            layout.tsx · page.tsx · globals.css
  components/
    sections/     Hero · BadgesCoupon · BodySocorro · FourHeads · Results ·
                  WhyChoose · Testimonials · Guarantees · Faq · Footer
    ui/           CtaButton · Container
    Logo.tsx · icons.tsx
  lib/            config.ts
public/
  images/         hero.jpg · socorro.jpg · resultados.jpg
  icons/          google.png · arrow-outward.svg · accordion-toggle.svg
```

## Assets pendentes (TODO)

- **Logo oficial** da Rainoah (hoje é uma recriação aproximada em `Logo.tsx`).
- **Foto do produto** (gun rosa + 4 cabeças) na seção "4 Cabeças" — hoje há um placeholder.
- **Vídeo** da seção "Por que escolher" — hoje há um placeholder (a capa já existe, aguardando o vídeo).

## Deploy (Hostinger via FTP)

O workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builda e envia `/out` para o `public_html` a cada push na `main`.

Secrets necessários no GitHub (Settings → Secrets and variables → Actions):

- `FTP_SERVER` — host FTP (ex.: `ftp.seudominio.com`)
- `FTP_USERNAME` — usuário da conta FTP
- `FTP_PASSWORD` — senha da conta FTP
