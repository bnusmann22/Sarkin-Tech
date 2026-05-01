export const dynamic = 'force-dynamic';

import ProfileHero from '@/components/Sections/Profile/ProfileHero';

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <ProfileHero />
      {/* <ProfileAbout />
      <Collabs /> */}
    </div>
  );
}
