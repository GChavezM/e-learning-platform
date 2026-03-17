import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-border border-t bg-[#0a0f0e] px-10 py-12">
      <div className="mx-auto flex max-w-240 flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Rocket className="text-primary h-5 w-5" />
            <span className="text-lg font-bold">PyMission Control</span>
          </div>
          <p className="text-muted-foreground max-w-70 text-sm">
            Una aventura de codigo gamificada. Aprende Python mientras exploras la galaxia.
          </p>
        </div>
        <div className="border-border mt-10 w-full border-t pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            &copy; 2026 PyMission Control. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
