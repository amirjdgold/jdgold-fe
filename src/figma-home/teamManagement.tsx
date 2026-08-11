import type { TeamMember } from '@/hooks/useSiteContent';

export const MAX_TEAM_MEMBERS = 7;

export const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Syed Abdi Hussain',
    designation: 'Designation',
    image: '/images/management-lead-1.png',
    imageAlt: 'Syed Abdi Hussain',
  },
  {
    id: 'member-2',
    name: 'Syed Amir Abdi Bukhari',
    designation: 'Designation',
    image: '/images/management-lead-2.png',
    imageAlt: 'Syed Amir Abdi Bukhari',
  },
  {
    id: 'member-3',
    name: "Ma'am Dilara Ahmad",
    designation: 'Designation',
    image: '/images/management-lead-3.png',
    imageAlt: "Ma'am Dilara Ahmad",
  },
  {
    id: 'member-4',
    name: 'Rana Nazar',
    designation: 'Designation',
    image: '/images/management-lead-4.png',
    imageAlt: 'Rana Nazar',
  },
  {
    id: 'member-5',
    name: 'Malik Ijaz Ahmad',
    designation: 'Designation',
    image: '/images/management-lead-5.png',
    imageAlt: 'Malik Ijaz Ahmad',
  },
];

function isValidMember(m: TeamMember): boolean {
  return Boolean(
    m?.id?.trim() && m?.name?.trim() && m?.designation?.trim() && m?.image?.trim()
  );
}

export function resolveTeamMembers(cms?: TeamMember[]): TeamMember[] {
  const fromCms = (cms ?? []).filter(isValidMember).slice(0, MAX_TEAM_MEMBERS);
  if (fromCms.length > 0) return fromCms;
  return DEFAULT_TEAM_MEMBERS.slice(0, MAX_TEAM_MEMBERS);
}

function TeamMemberOverlay({
  name,
  designation,
}: {
  name: string;
  designation: string;
}) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-[1] bg-black/50">
      <div className="flex flex-col items-center justify-center overflow-clip px-[12px] py-[8px] text-center leading-[normal] not-italic text-[#c09038]">
        <p className="font-['Alice:Regular',sans-serif] relative w-full shrink-0 text-[26px] leading-tight">
          {name}
        </p>
        <p className="font-['Aeonik:Regular',sans-serif] relative mt-[2px] w-full shrink-0 text-[16px] leading-tight">
          {designation}
        </p>
      </div>
    </div>
  );
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const alt = member.imageAlt?.trim() || member.name;
  return (
    <div className="relative h-full min-h-0 w-full overflow-hidden rounded-[16px] border-2 border-solid border-[#c09038] bg-[#010100]">
      <img
        alt={alt}
        className="absolute inset-0 size-full max-w-none object-cover object-center pointer-events-none"
        src={member.image}
      />
      <TeamMemberOverlay name={member.name} designation={member.designation} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] rounded-[16px] border-2 border-solid border-[#c09038]"
      />
    </div>
  );
}

export function TeamMemberColumn({ members }: { members: TeamMember[] }) {
  const visible = members.slice(0, MAX_TEAM_MEMBERS);
  const count = visible.length;
  return (
    <div
      className="grid w-[320px] shrink-0 gap-[12px] self-stretch bg-[#010100]"
      style={{
        gridTemplateRows:
          count > 0 ? `repeat(${count}, minmax(180px, 1fr))` : undefined,
      }}
    >
      {visible.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}
