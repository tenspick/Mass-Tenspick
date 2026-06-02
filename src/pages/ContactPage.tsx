import Contact from '../components/sections/Contact';
import PageHeader from './PageHeader';

export default function ContactPage() {
  return (
    <div className="bg-[#050505]">
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you’re trying to achieve."
        subtitle="This page is separate from the homepage contact section, so you can add page-only context here without changing the home layout."
      />
      <div className="pt-0">
        <Contact />
      </div>
    </div>
  );
}

