import { useSiteContent } from '@/hooks/useSiteContent';
import { resolveTeamMembers, TeamMemberCard } from '@/figma-home/teamManagement';
import { HomeRightGalleryColumn } from '@/figma-home/homeRightGallery';
import PageLayout from './PageLayout';

export default function ManagementPage() {
  const content = useSiteContent();
  const members = resolveTeamMembers(content?.teamManagement?.members);

  return (
    <PageLayout
      title="Management Gallery"
      intro="Meet our leadership team and browse our management gallery."
    >
      <section className="mx-auto w-full max-w-[1400px] px-[20px]">
        <div className="grid grid-cols-2 gap-[12px] sm:grid-cols-3 lg:grid-cols-4">
          {members.map((member) => (
            <div key={member.id} className="h-[260px]">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[1400px] flex-col gap-[12px] px-[20px]">
        <HomeRightGalleryColumn gallery={content?.homeRightGallery} />
      </section>
    </PageLayout>
  );
}
