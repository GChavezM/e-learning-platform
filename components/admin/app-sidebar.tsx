'use client';

import { LayoutDashboard, LogOut, Rocket, User } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '../ui/sidebar';
import Link from 'next/link';
import { signOutAction } from '@/modules/auth/actions';
import { toast } from 'sonner';

export function AppSidebar() {
  const router = useRouter();
  const pathName = usePathname();

  const navItems = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      label: 'Profile',
      href: '/profile',
      icon: User,
    },
  ];

  const handleSignOut = async () => {
    const result = await signOutAction();
    if (!result.success) {
      toast.error(result.error);
    }

    router.push('/sign-in');
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="PyMission Control" asChild>
              <Link href="/">
                <div className="bg-primary/20 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
                  <Rocket className="h-4 w-4" />
                </div>
                <span className="text-lg">PyMission Control</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = pathName === item.href;
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.label}
                      className="group/nav"
                    >
                      <Link href={item.href}>
                        <Icon className="h-4 w-4 transition-transform duration-200 group-hover/nav:scale-110" />
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="bg-primary ml-auto h-1.5 w-1.5 animate-pulse rounded-full" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleSignOut}>
              <LogOut />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
