/**
 * =============================================================
 *  PONTO ÚNICO DE VERDADE — Configuração da landing Rainoah
 * =============================================================
 *
 *  >>> CHECKOUT_URL <<<
 *  TODO: troque o valor abaixo pela URL real do checkout.
 *  TODOS os botões de compra da página usam esta constante.
 *  Mude aqui (um só lugar) e todos os CTAs são atualizados.
 */
export const CHECKOUT_URL = "https://pay.kiwify.com.br/6LA8PH2";

/**
 * Onde o checkout abre:
 *  - "_self"  => mesma aba (padrão)
 *  - "_blank" => nova aba
 */
export const CHECKOUT_TARGET: "_self" | "_blank" = "_blank";

/**
 * Link do botão "Falar com suporte" (seção FAQ).
 * TODO: troque pelo WhatsApp/contato real, ex.: "https://wa.me/55XXXXXXXXXXX".
 */
export const SUPPORT_URL = "#suporte";

/** Cupom de primeira compra exibido na página. */
export const COUPON_CODE = "PRIMEIRACOMPRA";
export const COUPON_DISCOUNT = "10% OFF";

/** Identidade do produto. */
export const PRODUCT = {
  brand: "Rainoah",
  name: "Powerflex GO",
} as const;

/** Prefixo de assets para GitHub Pages (basePath). */
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/Rainoah" : "";
