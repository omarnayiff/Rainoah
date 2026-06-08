import Container from "@/components/ui/Container";
import Logo from "@/components/Logo";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { PRODUCT } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/5 bg-gradient-to-b from-white to-slate-50 py-10">
      <Container>
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <Logo className="text-brand-deep" size={30} />
            <p className="text-xs text-ink/50 sm:text-sm">
              © {year} {PRODUCT.brand}. Todos os direitos reservados.
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </footer>
  );
}
