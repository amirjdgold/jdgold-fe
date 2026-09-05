import { ContactIcon } from '@/components/about/AboutIcons';

export type AboutContactInfo = {
  phone?: string;
  whatsapp?: string;
  email?: string;
  website?: string;
  address?: string;
};

function isPlaceholder(value?: string) {
  if (!value) return true;
  return value.trim().startsWith('[PLACEHOLDER');
}

export default function AboutContactBar({ contact }: { contact?: AboutContactInfo }) {
  if (!contact) return null;

  const items: { type: 'phone' | 'whatsapp' | 'email' | 'web' | 'pin'; value: string }[] = [];

  if (contact.phone && !isPlaceholder(contact.phone)) {
    items.push({ type: 'phone', value: contact.phone });
  }
  if (contact.whatsapp && !isPlaceholder(contact.whatsapp)) {
    items.push({ type: 'whatsapp', value: contact.whatsapp });
  }
  if (contact.email && !isPlaceholder(contact.email)) {
    items.push({ type: 'email', value: contact.email });
  }
  if (contact.website && !isPlaceholder(contact.website)) {
    items.push({ type: 'web', value: contact.website });
  }
  if (contact.address && !isPlaceholder(contact.address)) {
    items.push({ type: 'pin', value: contact.address });
  }

  if (!items.length) return null;

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
