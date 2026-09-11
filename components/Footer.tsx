export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs font-medium text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} NOVA TEC. Todos los derechos reservados.</p>
        <p>Especialistas en AirPods & Smartwatches · Pagos por Nequi y Bre-B (3012734903)</p>
      </div>
    </footer>
  );
}
