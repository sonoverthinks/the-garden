export default function FAB() {
  return (
    <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full flex items-center justify-center shadow-[0_12px_40px_rgba(25,28,26,0.15)] hover:scale-110 active:scale-95 transition-all duration-300 z-50">
      <span className="material-symbols-outlined text-3xl">add</span>
    </button>
  );
}
