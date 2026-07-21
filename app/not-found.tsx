import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section tone="soft" className="min-h-[60vh]">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-brand">ページが見つかりません。</h1>
        <p className="mt-5 leading-8 text-muted">
          URLが変更されたか、ページが削除された可能性があります。
        </p>
        <div className="mt-8">
          <ButtonLink href="/">トップへ戻る</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
