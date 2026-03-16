import { AppSidebar } from '@/components/admin/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });
  const isGuestMode = headersList.get('x-guest-mode') === '1';

  if (!session && !isGuestMode) {
    redirect('/sign-in');
  }

  if (!session && isGuestMode) {
    return <main className="w-full">{children}</main>;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
