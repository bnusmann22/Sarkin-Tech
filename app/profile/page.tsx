export const dynamic = 'force-dynamic';

export default function ProfilePage() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-30"></div>
        <span className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 text-sm font-semibold rounded-full mb-4">
          About me
        </span>
        <h1 className="text-4xl font-bold text-primary mb-4">Just Jamil</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Ko DA ME KA ZO ANFIKA👑🍾
        </p>
    </section>
  );
}
