'use client';

import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { useAuthStore } from '@/lib/store/authStore';
import { Package, TrendingUp, Users, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function VendorDashboard() {
  const { user } = useAuthStore();

  return (
    <ProtectedRoute allowedRoles={['VENDOR']} requireApproval={true}>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
          <p className="text-muted-foreground">Here's what's happening with your store today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$0.00</div>
              <p className="text-xs text-muted-foreground">+0% from last month</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">0 awaiting approval</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">0 orders processing</p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-sm border-dashed border-2 bg-muted/10">
          <CardHeader className="text-center pb-4 pt-10">
            <CardTitle className="text-xl">No Products Yet</CardTitle>
            <CardDescription>Start selling by adding your first product to the marketplace.</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-10">
            <Button className="gap-2">
              <Plus size={16} /> Add New Product
            </Button>
          </CardContent>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
