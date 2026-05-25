'use client';

import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { useAuthStore } from '@/lib/store/authStore';
import { Clock, LogOut } from 'lucide-react';
import { authApi } from '@/lib/api/auth';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PendingApprovalPage() {
  const { user, setUser } = useAuthStore();
  const router = useRouter();

  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      setUser(null);
      router.push('/login');
    }
  });

  return (
    <ProtectedRoute allowedRoles={['VENDOR']}>
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-12">
        <Card className="w-full max-w-[480px] shadow-md border-border text-center">
          <CardHeader className="pb-6">
            <div className="mx-auto w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
              <Clock className="text-yellow-600 dark:text-yellow-500" size={32} />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight mb-2">Application Pending</CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Thank you for registering your business <strong className="text-foreground">{user?.email}</strong>. 
              Our administrative team is currently reviewing your application. You will be notified once your vendor account is approved.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pt-2">
            <Button
              variant="outline"
              onClick={() => logoutMutation.mutate()}
              className="gap-2"
            >
              <LogOut size={16} />
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
