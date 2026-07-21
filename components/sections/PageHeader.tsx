import type { LinkItem } from "@/types/content";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

interface PageHeaderProps {
  title: string;
  lead: string;
  breadcrumbs: LinkItem[];
  label?: string;
}

export function PageHeader({ title, lead, breadcrumbs, label }: PageHeaderProps) {
  return (
    <Section tone="soft" className="pb-14 pt-10">
      <Container>
        <Breadcrumb items={breadcrumbs} />
        {label ? <p className="text-sm font-bold text-teal">{label}</p> : null}
        <h1 className="mt-3 text-3xl font-bold leading-tight text-brand sm:text-4xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">{lead}</p>
      </Container>
    </Section>
  );
}
