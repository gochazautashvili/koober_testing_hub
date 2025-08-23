import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { LoginForm } from './components/login-form';
import { Bug } from 'lucide-react';
import Link from 'next/link';

export const AuthView = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 dark:from-gray-900 dark:to-gray-950">
      <div className="w-full max-w-md space-y-6">
        {/* Logo and Title */}
        <div className="space-y-2 text-center">
          <div className="bg-primary/10 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
            <Bug className="text-primary h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground">Sign in to your account to continue</p>
        </div>

        {/* Login Card */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-center text-2xl">Sign in</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Login Form */}
            <LoginForm />

            {/* Demo Accounts Info */}
            <div className="bg-muted/50 space-y-2 rounded-lg p-4">
              <p className="text-muted-foreground text-sm font-medium">Demo Accounts:</p>
              <div className="text-muted-foreground space-y-1 text-xs">
                <p>Admin: admin@example.com / password123</p>
                <p>Developer: dev@example.com / password123</p>
                <p>Tester: tester@example.com / password123</p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pt-4">
            <Separator />

            {/* Additional Links */}
            <div className="text-muted-foreground flex items-center justify-center space-x-4 text-xs">
              <Link href="/terms" className="hover:text-primary">
                Terms
              </Link>
              <span>•</span>
              <Link href="/privacy" className="hover:text-primary">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
