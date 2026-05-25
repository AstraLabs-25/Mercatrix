'use client';

import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { CheckCircle, XCircle, Users } from 'lucide-react';
import { apiClient } from '@/lib/api/axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminDashboard() {
  const queryClient = useQueryClient();

  const { data: vendorData, isLoading } = useQuery({
    queryKey: ['admin', 'vendors'],
    queryFn: async () => {
      const { data } = await apiClient.get('/admin/vendors');
      return data.vendors;
    }
  });

  const approveMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiClient.put(`/admin/vendors/${id}/approve`);
    },
    onSuccess: () => {
      toast.success('Vendor approved');
      queryClient.invalidateQueries({ queryKey: ['admin', 'vendors'] });
    }
  });

  const blockMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiClient.put(`/admin/vendors/${id}/block`, { reason: 'Violated terms of service' });
    },
    onSuccess: () => {
      toast.success('Vendor blocked');
      queryClient.invalidateQueries({ queryKey: ['admin', 'vendors'] });
    }
  });

  return (
    <ProtectedRoute allowedRoles={['SUPER_ADMIN']}>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
          <p className="text-muted-foreground">Manage your platform's vendors and settings.</p>
        </div>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between border-b border-border/40 bg-muted/20 pb-4">
            <div className="space-y-1">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users size={18} className="text-primary" />
                Vendor Management
              </CardTitle>
              <CardDescription>Review and manage vendor applications</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead className="w-[300px]">Email</TableHead>
                  <TableHead>Business Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  Array.from({ length: 3 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell><Skeleton className="h-5 w-[200px]" /></TableCell>
                      <TableCell><Skeleton className="h-5 w-[150px]" /></TableCell>
                      <TableCell><Skeleton className="h-5 w-[80px]" /></TableCell>
                      <TableCell className="text-right"><Skeleton className="h-8 w-16 ml-auto" /></TableCell>
                    </TableRow>
                  ))
                ) : vendorData?.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                      No vendors found.
                    </TableCell>
                  </TableRow>
                ) : (
                  vendorData?.map((vendor: any) => (
                    <TableRow key={vendor.id}>
                      <TableCell className="font-medium">{vendor.email}</TableCell>
                      <TableCell>{vendor.vendorProfile?.business_name}</TableCell>
                      <TableCell>
                        {vendor.vendorProfile?.is_blocked ? (
                          <span className="inline-flex items-center rounded-md bg-destructive/10 px-2 py-1 text-xs font-medium text-destructive ring-1 ring-inset ring-destructive/20">Blocked</span>
                        ) : vendor.vendorProfile?.is_approved ? (
                          <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-600 dark:text-green-400 ring-1 ring-inset ring-green-500/20">Approved</span>
                        ) : (
                          <span className="inline-flex items-center rounded-md bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-600 dark:text-yellow-400 ring-1 ring-inset ring-yellow-500/20">Pending</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          {!vendor.vendorProfile?.is_approved && !vendor.vendorProfile?.is_blocked && (
                            <Button 
                              size="sm"
                              variant="outline"
                              onClick={() => approveMutation.mutate(vendor.vendorProfile.user_id)}
                              className="h-8 text-green-600 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-950/50"
                            >
                              <CheckCircle size={14} className="mr-1" /> Approve
                            </Button>
                          )}
                          {!vendor.vendorProfile?.is_blocked && (
                            <Button 
                              size="sm"
                              variant="outline"
                              onClick={() => blockMutation.mutate(vendor.vendorProfile.user_id)}
                              className="h-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                            >
                              <XCircle size={14} className="mr-1" /> Block
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
