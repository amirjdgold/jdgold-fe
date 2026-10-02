import { ContactIcon } from '@/components/about/AboutIcons';

export type AboutContactInfo = {
  phone?: string;
  whatsapp?: string;
  email?: string;
  website?: string;
  address?: string;
};

const FALLBACK_CONTACT: Required<AboutContactInfo> = {
  phone: '+92 300 1234567',
  whatsapp: '+86 18340320420',
  email: 'info@jdgold.com',
  website: 'www.jdgold.com',
  address: 'Suite #01, Gold Tower, Main Boulevard, Karachi, Pakistan',
};

function usableContactText(value?: string) {
  const text = String(value || '').trim();
  if (!text || text.startsWith('[PLACEHOLDER')) return '';
  return text;
}

export default function AboutContactBar({ contact }: { contact?: AboutContactInfo }) {
  const items: { type: 'phone' | 'whatsapp' | 'email' | 'web' | 'pin'; value: string }[] = [
    { type: 'phone', value: usableContactText(contact?.phone) || FALLBACK_CONTACT.phone },
    { type: 'whatsapp', value: usableContactText(contact?.whatsapp) || FALLBACK_CONTACT.whatsapp },
    { type: 'email', value: usableContactText(contact?.email) || FALLBACK_CONTACT.email },
    { type: 'web', value: usableContactText(contact?.website) || FALLBACK_CONTACT.website },
    { type: 'pin', value: usableContactText(contact?.address) || FALLBACK_CONTACT.address },
  ];

  return (
    <section className="border-t border-[#c09038]/40 bg-[#0a0502]">
      <div className="mx-auto grid w-full grid-cols-4 gap-4 px-6 py-6 text-sm text-[#e5e5e5]">
        {items.map((item) => (
          <div
            key={item.type + item.value}
            className={`flex gap-2 ${item.type === 'pin' ? 'items-start' : 'items-center'}`}
          >
            <ContactIcon type={item.type} />
            <span className="min-w-0 break-words">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
